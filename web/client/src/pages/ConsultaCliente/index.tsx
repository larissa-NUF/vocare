import { Box, Button, Typography } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useInsertConsulta, useMinhasConsultas } from "../../api/controllers/consulta"
import { getPerfil, getUser } from "../../reducers/authentication";
import { theme } from "../../styles/theme";
import { FormValues, ModalAddConsulta } from "./Modal/ModalAddConsulta";
import * as Styled from "./ConsultaCliente.styled";
import { Consulta } from "../../api/models/consulta";
import { useNavigate } from "react-router-dom";

export const ConsultaCliente = () => {

    const { mutateAsync } = useInsertConsulta();

    const { id } = useSelector(getUser);
    const perfil = useSelector(getPerfil);

    const [modalAdd, setModalAdd] = useState(false);
    const handleClose = () => setModalAdd(false);

    const onSubmit = (values: FormValues) => {
        let separado = values.dataConsulta.split("/")
        mutateAsync({
            dataConsulta: new Date(`${separado[1]}/${separado[0]}/2022`),
            idCliente: id || 0
        });
        handleClose();
    }

    const navigate = useNavigate();

    const handleOpen = (params?: Consulta) => {
        if (params != null)
            navigate('/consulta', { state: { consulta: params, tipo: perfil} });
      };

    const { data, refetch } = useMinhasConsultas(id || 0);

    const dateFormat = (data: Date) => data.toLocaleDateString("pt-BR");

    useEffect(() => {
        refetch();
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'dataConsulta',
            headerClassName: 'super-app-theme--header',
            headerName: 'Data Consulta',
            flex: 0.1,
            renderCell: (params) => dateFormat(new Date(params.row.dataConsulta))
        },
        {
            field: 'aceita',
            headerClassName: 'super-app-theme--header',
            headerName: 'Aceita',
            flex: 0.1,
            renderCell: (params) => {
                if (params.row.aceita) {
                    return <>SIM</>
                } else {
                    return <>NÃO</>
                }
            }
        },
        {
            field: 'id',
            headerClassName: 'super-app-theme--header',
            headerName: 'Ações',
            flex: 0.1,
            renderCell: (params) => {
                if (params.row.aceita) {
                    return <Styled.BtnSala status="entrar" onClick={() => handleOpen(params.row)}>Entrar</Styled.BtnSala>
                } else {
                    return <>Aguardando aceite</>
                }
            }
        }
    ]

    return (
        <Styled.Container>
            <Styled.Fundo></Styled.Fundo>
            <Styled.TabelaContainer>
                <Styled.Titulo><Styled.Icon />Minhas Consultas</Styled.Titulo>

                <Styled.Btn>
                    <Styled.btnAdicionar onClick={() => { setModalAdd(true) }}><Styled.iconAdd />Adicionar</Styled.btnAdicionar>
                </Styled.Btn>

                <Box sx={{
                    height: 440,
                    width: '100%',
                    '& .super-app-theme--header': {
                        backgroundColor: theme.palette.primary.main,
                        color: "#FFF",
                        fontWeight: "bold",
                    },
                }}>
                    {data &&
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />}

                </Box>
            </Styled.TabelaContainer>
            <ModalAddConsulta open={modalAdd} handleClose={handleClose} onSubmit={onSubmit} />
        </Styled.Container>
    )
}