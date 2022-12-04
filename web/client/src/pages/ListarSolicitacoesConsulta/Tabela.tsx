import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { BiSearchAlt } from "react-icons/bi";
import { useConsultaUpdate, UseGetSolicitacoes } from "../../api/controllers/consulta";
import { theme } from "../../styles/theme";
import * as Styled from './ListarSolicitacoesConsulta.styled';
import { Consulta } from "../../api/models/consulta";
import { useSelector } from "react-redux";
import { getUser } from "../../reducers/authentication";

export const Tabela: React.FC = () => {
    const { data, refetch } = UseGetSolicitacoes();
    const { mutateAsync } = useConsultaUpdate();
    const user = useSelector(getUser);

    async function aceitarCall (consulta: Consulta) {
        consulta.idPsicologo = user.id;
        consulta.Aceita = true;
        await mutateAsync({
            ...consulta
        });
        refetch();
    }

    const columns: GridColDef[] = [
        {
            field: 'nome',
            headerClassName: 'super-app-theme--header',
            headerName: 'Nome Completo',
            editable: false,
            flex: 1
        },
        {
            field: 'dataCadastro',
            headerClassName: 'super-app-theme--header',
            headerName: 'Data Solicitação',
            type: 'date',
            editable: false,
            flex: 1
        },
        {
            field: 'dataConsulta',
            headerClassName: 'super-app-theme--header',
            headerName: 'Data Consulta',
            type: 'date',
            editable: false,
            flex: 1
        },
        {
            field: 'aceita',
            headerClassName: 'super-app-theme--header',
            headerName: '',
            type: 'boolean',
            flex: 1,
            renderCell: (params: GridRenderCellParams<number | null, Consulta>) => (
                <Styled.BtnSala status="entrar" onClick={() => aceitarCall(params.row)}><Styled.Aceitar/>Aceitar</Styled.BtnSala>
            ),
        },
    
    
    ];
    return (
        <div>

                <Box sx={{
                    height: '75vh',
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
        </div>
)}