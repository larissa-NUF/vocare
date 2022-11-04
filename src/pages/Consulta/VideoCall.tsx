import { useState, useEffect } from "react";
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  channelName,
} from "../../api/services/agora";
import { Grid } from "@material-ui/core";
import Video from "./Video";
import Controls from "./Controls";

export default function VideoCall(props: any) {
  const { setInCall } = props;
  const [users, setUsers] = useState([""]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(() => {
    let init = async (name: any) => {
      client.on("user-published", async (user: any, mediaType: any) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });

      client.on("user-unpublished", (user: any, mediaType: any) => {
        if (mediaType === "audio") {
          if (user.audioTrack) user.audioTrack.stop();
        }
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User: any) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user: any) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User: any) => User.uid !== user.uid);
        });
      });

      try {
        await client.join(config.appId, name, config.token, null);
      } catch (error) {
        console.log("error");
      }

      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
  }, [channelName, client, ready, tracks]);

  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      
      <Grid item style={{ height: "90%", width: '100%'}}>
        {start && tracks && <Video tracks={tracks} users={users} />}
      </Grid>
      <Grid item alignItems="center">
        {ready && tracks && (
          <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
        )}
      </Grid>
    </Grid>
  );
}