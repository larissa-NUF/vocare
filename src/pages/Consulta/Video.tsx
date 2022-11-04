import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import * as Styled from "./Consulta.styled";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";

export default function Video(props: any) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);
  const [alturaSpacing, setAlturaSpacing] = useState(60);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / Math.round(Math.sqrt(users.length-1)))));
    
    if ((Math.sqrt(users.length-1) / 2) % 2 == 0 )
        setAlturaSpacing(100*Math.sqrt(users.length))
    else
        setAlturaSpacing(12*Math.sqrt(users.length-1))

    console.log(Math.floor(Math.sqrt(users.length)), 12 / (users.length - 1))
  }, [users, tracks]);

  return (
    <Styled.GridUsers container style={{ paddingRight: alturaSpacing + 'em', paddingLeft: alturaSpacing + 'em'}}>
      <Grid item xs={4}>
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "90%" }}
        />
      </Grid> 
      {users.length > 0 &&
        users.map((user: any) => {
          if (user.videoTrack) {
            return (
              <Grid item xs={6} >
                <Styled.CameraDemais
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: '100%'}}
                />
              </Grid>
            );
          } else return null;
        })}
    </Styled.GridUsers>
  );
}