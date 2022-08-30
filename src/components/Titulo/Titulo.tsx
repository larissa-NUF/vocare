import { TituloProps } from "./Titulo.types";
import * as Styled from "./Titulo.styled";

export const Titulo = ({ children, ...rest }: TituloProps) => {
    return (
        <Styled.Titulo>
            {children}
        </Styled.Titulo>
    )
}