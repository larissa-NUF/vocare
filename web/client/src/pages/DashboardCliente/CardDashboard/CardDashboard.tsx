import * as Styled from "./CardDashboard.styled";
import { CardDashboardProps } from "./CardDashboard.types";

export const CardDashboard = ({ children, titulo, ...rest }: CardDashboardProps) => {

  return (<div>
    <Styled.BsCard {...rest}>
      <Styled.Titulo variant="h3">{titulo}</Styled.Titulo>
      {children}
    </Styled.BsCard>
  </div>);
}
