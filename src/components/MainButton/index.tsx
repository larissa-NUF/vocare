import { ButtonProps } from "@material-ui/core";
import * as Styled from "./MainButton.styled";


export function MainButton({ children, type }: ButtonProps) {
    return (
        <>
            <Styled.MainButton type={type}>
                {children}
            </Styled.MainButton>
        </>
        
    )
}

