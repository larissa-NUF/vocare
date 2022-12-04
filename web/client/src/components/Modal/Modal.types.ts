import { FormValues } from "../ListarUsuarios";

export interface ModalProps {
    id?:number;
    onSubmit: (valuesSubmit: FormValues) => Promise<void>;
    handleClose: () => void;
    open: boolean;
}