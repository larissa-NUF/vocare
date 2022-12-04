import { Modal, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controles } from '../Controles';
import { MainButton } from '../MainButton';
import * as Styled from './ModalEntrarSala.styled';
import { ModalEntrarSalaProps } from './ModalEntrarSala.types';

export function ModalEntrarSala({ open, handleClose, id, tipo }: ModalEntrarSalaProps) {
    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const webcamVideo = useRef<HTMLVideoElement | null>(null);
    const [camera, setCamera] = useState(true);
    const [microfone, setMicrofone] = useState(true);

    const navigate = useNavigate();

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

    const entrarSala = (id: number, tipo: string) => {
        navigate('/consulta', { state: { id: id, tipo: tipo, mic: microfone, cam: camera } });
    };

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
                    <Styled.btnEntrar onClick={() => entrarSala(id, tipo)}>Entrar na chamada</Styled.btnEntrar>
                </Styled.ModalSala>
            </Modal>
        </div>

    )
}
