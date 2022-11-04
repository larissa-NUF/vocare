import { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import {BsMic} from "react-icons/bs";
import {BsMicMute} from "react-icons/bs";
import {MdOutlineVideocam} from "react-icons/md";
import {MdOutlineVideocamOff} from "react-icons/md";
import {BiExit} from "react-icons/bi";
import { useClient } from "../../api/services/agora";

export default function Controls(props: any) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type: any) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button
          variant="contained"
          color={trackState.audio ? "primary" : "secondary"}
          onClick={() => mute("audio")}
        >
          {trackState.audio ? <BsMic /> : <BsMicMute />}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color={trackState.video ? "primary" : "secondary"}
          onClick={() => mute("video")}
        >
          {trackState.video ? <MdOutlineVideocam /> : <MdOutlineVideocamOff />}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="default"
          onClick={() => leaveChannel()}
        >
          Leave
          <BiExit />
        </Button>
      </Grid>
    </Grid>
  );
}