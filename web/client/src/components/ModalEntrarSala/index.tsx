import { Modal, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Consulta } from '../../api/models/consulta';
import { Controles } from '../Controles';
import { MainButton } from '../MainButton';
import * as Styled from './ModalEntrarSala.styled';
import { ModalEntrarSalaProps } from './ModalEntrarSala.types';

export function ModalEntrarSala({ open, handleClose, entrarSala }: ModalEntrarSalaProps) {
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const webcamVideo = useRef<HTMLVideoElement | null>(null);
    const [camera, setCamera] = useState(true);
    const [microfone, setMicrofone] = useState(true);

    

    useEffect(() => {
        if (!open) {
            let stream = localStream;
            stream?.getTracks().forEach(function (track) {
                track.stop();
            });
            setLocalStream(stream);
        }

        if (open && !webcamVideo.current) {
            const enableStream = async () => {
                var local = await navigator.mediaDevices.getUserMedia({ video: camera, audio: microfone });
                setLocalStream(local);
            }
            enableStream();
        }

        if (!webcamVideo.current) return
        webcamVideo.current.srcObject = localStream;


    }, [open, handleClose, localStream]);

    function btnCamera() {
        if (localStream) {
            var local = localStream;
            local.getVideoTracks()[0].enabled = !camera;
            setLocalStream(local);
        }
        setCamera(!camera);
    }

    function btnMicrofone() {
        if (localStream) {
            var local = localStream;
            local.getAudioTracks()[0].enabled = !microfone;
            setLocalStream(local);
        }
        setMicrofone(!microfone);
    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Styled.ModalSala>
                    <Styled.WebCam id="webcamVideo" autoPlay playsInline ref={webcamVideo}></Styled.WebCam>

                    <Controles Cam={camera} Mic={microfone} OnclickCam={btnCamera} OnclickMic={btnMicrofone} />
                    <Styled.btnEntrar onClick={entrarSala}>Entrar na chamada</Styled.btnEntrar>
                </Styled.ModalSala>
            </Modal>
        </div>

    )
}
