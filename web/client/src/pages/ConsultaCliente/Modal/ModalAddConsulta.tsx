import { FormControl, Modal } from "@mui/material"
import * as Yup from "yup";
import { useFormik } from "formik";
import * as Styled from "./ModalAddConsulta.styled";
import { MainButton } from "../../../components/MainButton";

const validationSchema = Yup.object().shape({
    dataConsulta: Yup.string().required("Campo obrigatório")
});

export type FormValues = {
    dataConsulta: string
}

type ModalProps = {
    onSubmit: (formValues: FormValues) => void,
    open: boolean,
    handleClose: () => void
}

export const ModalAddConsulta = ({ onSubmit, open, handleClose }: ModalProps) => {

    const { handleSubmit, handleChange, handleBlur, values, errors, resetForm, touched } = useFormik({
        initialValues: {
            dataConsulta: ""
        },
        onSubmit,
        validationSchema,
        enableReinitialize: true
    });
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Styled.ModalSala>
                <form onSubmit={handleSubmit} id="adicionar">
                    <FormControl fullWidth>
                        <>
                            <Styled.Label variant="body1">Data Consulta:</Styled.Label>
                            <Styled.FormInput
                                variant="outlined"
                                size="small"
                                id="dataConsulta"
                                value={values.dataConsulta}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.dataConsulta && errors.dataConsulta}
                            <br />
                        </>
                    </FormControl>
                    <MainButton type="submit">
                        Salvar
                    </MainButton>
                </form>
            </Styled.ModalSala>
        </Modal>
    )
}