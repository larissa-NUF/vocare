import { ButtonProps } from "@mui/material";
import * as Styled from "./MainButton.styled";


export function MainButton({ children, type, ...rest }: ButtonProps) {
    return (
        <>
            <Styled.MainButton type={type} {...rest}>
                {children}
            </Styled.MainButton>
        </>
        
    )
}

