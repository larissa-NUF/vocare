import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { BiSearchAlt } from "react-icons/bi";
import { useConsultaUpdate, UseGetSolicitacoes } from "../../api/controllers/consulta";
import { useGetAll } from "../../api/controllers/usuario";
import { Usuario } from "../../api/models/usuario";
import { theme } from "../../styles/theme";
import * as Styled from './ListarSolicitacoesConsulta.styled';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Consulta } from "../../api/models/consulta";
import { useSelector } from "react-redux";
import { getUser } from "../../reducers/authentication";

export const ListarSolicitacoesConsulta: React.FC = () => {
    const { data, refetch } = UseGetSolicitacoes();
    const { mutateAsync } = useConsultaUpdate();
    const user = useSelector(getUser);

    const firebaseConfig = {
        apiKey: "AIzaSyDxe35e5EOKk5vLAFVf9fg4yE2TcZZPmRg",
        authDomain: "vocare-366615.firebaseapp.com",
        projectId: "vocare-366615",
        storageBucket: "vocare-366615.appspot.com",
        messagingSenderId: "461111192210",
        appId: "1:461111192210:web:d73859e4faa75dc795d44b",
        measurementId: "G-B2WNY94KD9"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const firestore = firebase.firestore();

    async function aceitarCall (consulta: Consulta) {
        const callDoc = firestore.collection('calls').doc();
        const offerCandidates = callDoc.collection('offerCandidates');
        const answerCandidates = callDoc.collection('answerCandidates');

        consulta.idSala = callDoc.id;
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
            <Styled.Container>
            <Styled.Fundo></Styled.Fundo>
            <Styled.TabelaContainer>
                <Styled.Titulo><Styled.Icon />Solicitações de chamada</Styled.Titulo>
                <Styled.Pesquisa><BiSearchAlt />Pesquisar</Styled.Pesquisa>

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
        </Styled.Container>
        </div>
)}