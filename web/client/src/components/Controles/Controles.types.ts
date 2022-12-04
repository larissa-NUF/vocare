import { ReactNode } from "react";

export interface ControlesProps {
    Cam?: boolean;
    Mic?: boolean;
    OnclickCam?: ()=> void;
    OnclickMic?: ()=> void;
    btnDesligar?: boolean;
    onClickOff?: () => void;
}