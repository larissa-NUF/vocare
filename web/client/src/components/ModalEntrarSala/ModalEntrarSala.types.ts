import { Consulta } from "../../api/models/consulta";

export interface ModalEntrarSalaProps {
    open: boolean;
    handleClose: ()=> void;
    entrarSala: () => void;
};