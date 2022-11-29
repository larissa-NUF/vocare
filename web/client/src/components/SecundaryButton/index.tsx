import { ButtonProps } from "@mui/material";
import * as Styled from "./SecundaryButton.styled";


export function SecundaryButton({ children }: ButtonProps) {
    return (
        <>
        <Styled.SecundaryButton>
            {children}
        </Styled.SecundaryButton>
        </>
        
    )
}

