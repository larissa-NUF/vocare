import { ButtonProps } from "@material-ui/core";
import * as Styled from "./MainButton.styled";


export function MainButton({ children }: ButtonProps) {
    return (
        <>
        <Styled.MainButton>
            {children}
        </Styled.MainButton>
        </>
        
    )
}

