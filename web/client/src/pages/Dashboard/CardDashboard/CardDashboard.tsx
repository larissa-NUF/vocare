import { Typography } from "@material-ui/core";
import * as Styled from "./CardDashboard.styled";
import { CardDashboardProps } from "./CardDashboard.types";

export const CardDashboard = ({ children, ...rest }: CardDashboardProps) => {

  return (<div>
    <Styled.BsCard {...rest}>
      <Styled.Titulo variant="h3">teste</Styled.Titulo>
      {children}
    </Styled.BsCard>
  </div>);
}
