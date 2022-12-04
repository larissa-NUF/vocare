import {BsCameraVideoOff, BsCameraVideo, BsMicMute, BsMic} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';
import { ControlesProps } from "./Controles.types";
import * as styled from './Controle.styled';
import { useNavigate } from 'react-router-dom';



export function Controles({ Cam, Mic,OnclickCam, OnclickMic, btnDesligar, onClickOff, ...rest }: ControlesProps) {
    
    return (
        <div>
            <styled.controleCam onClick={OnclickCam} Cam={Cam}>{Cam ? <BsCameraVideo/>: <BsCameraVideoOff/> }</styled.controleCam>
            <styled.controleMic onClick={OnclickMic} Mic={Mic}>{Mic ? <BsMic/>: <BsMicMute/>}</styled.controleMic>
            {btnDesligar && <styled.desligar onClick={onClickOff}><AiFillPhone/></styled.desligar>}
            
        </div>
        
    )
}
