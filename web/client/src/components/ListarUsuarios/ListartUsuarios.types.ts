import { Usuario } from "../../api/models/usuario";

export interface ListarUsuariosProps {
    usuario: Usuario;

};

export interface ModalEditarProps {
    data?: Usuario[] | undefined;
    refetch: () => void;
    perfil: string;
}