import { Card } from "@material-ui/core";
import styles from './styles.module.scss';


const BasicCard = ({ children }: {children: React.ReactNode }) => {

  return (<div>
    <Card className={styles.card}>
      {children}
    </Card>
  </div>);
}
export default BasicCard;