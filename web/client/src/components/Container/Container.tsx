import { ContainerProps } from "./Container.types";
import * as Styled from "./Container.styled";

export const Container = ({ children, ...rest }: ContainerProps) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}