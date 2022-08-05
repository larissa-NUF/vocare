import logoBranco from "./../../assets/img/logo-branco.png";
import * as Styled from "./Dashboard.styled";

export const Dashboard: React.FC = () => {
    return (
        <>
            <Styled.HeaderContainer>
                <img width="30%" src={logoBranco} alt="" />
            </Styled.HeaderContainer>
        </>
    )
}