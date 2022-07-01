import {
    Typography,
    FormControl,
 
} from "@material-ui/core";
import * as React from "react";
import BasicCard from '../../components/BasicCard';
import Button from "../../components/button";
import { Btn } from "../../components/button/Button.style";
import { FormInput } from './Home.style';



const DadosPessoais: React.FC = () => {
    return (
        <div>
            <Typography variant="h5">Dados pessoais</Typography>
            <BasicCard>
                
                <FormControl style={{width: '100%'}}>
                    <FormInput
                      label="Nome" 
                      id="custom-css-outlined-input" 
                      variant="outlined" 
                      size="small"
                      fullWidth 
                    />
                    <br />
                    <FormInput
                      label="Email" 
                      type="email"
                      id="custom-css-outlined-input" 
                      variant="outlined" 
                      size="small"
                    />
                    <br />
                    <FormInput
                      label="Nome" 
                      id="custom-css-outlined-input" 
                      variant="outlined" 
                      size="small"
                    />
                    <br />
                    <FormInput
                      label="Nome" 
                      id="custom-css-outlined-input" 
                      variant="outlined" 
                      size="small"
                    />
                    <br />
                    <Button>Voltar</Button>
                    <Button>Continuar</Button>

                </FormControl >
            </BasicCard>

        </div>
    )
}
export default DadosPessoais