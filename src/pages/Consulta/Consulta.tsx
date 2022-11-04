import { Container } from "../../components/Container";
import { Titulo } from "../../components/Titulo";
import { VscGraph } from "react-icons/vsc";
import { Button, Grid } from "@material-ui/core";
import BasicCard from "../../components/basicCard";
import React, { PureComponent, useState } from 'react';
import VideoCall from "./VideoCall";
import * as Styled from "./Consulta.styled";





export const Consulta: React.FC = () => {
    const [inCall, setInCall] = useState(false);

  return (
    <Styled.ContainerPrincipal>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Join Call
        </Button>
      )}
    </Styled.ContainerPrincipal>
  );
}