import { Btn } from "./Button.style";




const Button = ({ children }: {children: React.ReactNode }) => {

  return (<div>
    <Btn variant="contained" color="primary">
        { children }
    </Btn>
  </div>);
}
export default Button;