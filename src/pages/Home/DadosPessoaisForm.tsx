import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Button,
    Box,
    FormControl,
    styled
} from "@material-ui/core";
import * as React from "react";
import BasicCard from '../../components/basicCard';
import { FormInput, Fundo } from './Home.style';



const DadosPessoais: React.FC = () => {
    return (
        <div>
            <Typography variant="h5">Dados pessoais</Typography>
            <BasicCard>
                <FormControl >
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
                    <Button variant="contained" color="primary">
                        save
                    </Button>

                </FormControl >
            </BasicCard>

        </div>
    )
}
export default DadosPessoais