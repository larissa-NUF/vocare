import { FormControl, Typography } from "@material-ui/core";
import * as Styled from "./Cadastro.styled";
import BasicCard from "../../components/basicCard";
import { SecundaryButton } from "../../components/SecundaryButton";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";

const PlanosForm: React.FC = () => {
    return (
        <div>
            <Styled.CardPlanos>
                <FormControl fullWidth>
                    <Typography variant="h5"  >
                        TESTE
                    </Typography>
                    <Styled.FundoGratis>
                        <Typography component="h2">
                            GRÁTIS
                        </Typography>

                        </Styled.FundoGratis>
                    <div>
                        <Styled.DivBeneficio>
                            <IoMdCheckmark  color="green"/>
                            <Typography variant="body1">beneficio 1   </Typography>
                        </Styled.DivBeneficio>

                        <Styled.DivBeneficio>
                            <IoMdClose  color="red"  />
                            <Typography variant="body1">beneficio 1       </Typography>
                        </Styled.DivBeneficio>

                        <Styled.DivBeneficio>
                            <IoMdCheckmark color="green" />
                            <Typography variant="body1">beneficio 1       </Typography>
                        </Styled.DivBeneficio>

                        <Styled.DivBeneficio>
                            <IoMdClose color="red" />
                            <Typography variant="body1">beneficio 1       </Typography>
                        </Styled.DivBeneficio>

                        <Styled.DivBeneficio>
                            <IoMdClose  color="red"/>
                            <Typography variant="body1">beneficio 1       </Typography>
                        </Styled.DivBeneficio>






                    </div>
                    <SecundaryButton>
                        Selecionar
                    </SecundaryButton>
                </FormControl>


            </Styled.CardPlanos>


        </div>)
};

export default PlanosForm;