
import { CardProps } from "@mui/material";
import * as Styled from "./BasicCard.style";

const BasicCard = ({ children, ...rest }: CardProps) => {

  return (<div>
    <Styled.BsCard {...rest}>
      {children}
    </Styled.BsCard>
  </div>);
}
export default BasicCard;