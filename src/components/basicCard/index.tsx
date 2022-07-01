import { BsCard } from "./BasicCard.style";



const BasicCard = ({ children }: {children: React.ReactNode }) => {

  return (<div>
    <BsCard>
      {children}
    </BsCard>
  </div>);
}
export default BasicCard;