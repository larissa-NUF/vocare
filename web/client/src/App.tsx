import { ToastContainer } from 'react-toastify';
import { Layout } from './components/Layout';
import { Routes } from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { getToken, setUser } from './reducers/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useValidacao } from './api/controllers/autenticacao';

function App() {

  const dispatch = useDispatch();

  const { accessToken, refreshToken } = useSelector(getToken);

  const { mutateAsync, data } = useValidacao();

  useEffect(() => {
    if (data){
      dispatch(setUser(data));
    }
  }, [data]);

  useEffect(() => {
    if (accessToken || refreshToken) {
      mutateAsync({
        accessToken: accessToken,
        refreshToken: refreshToken
      }).catch();
    }
  }, [accessToken, refreshToken, dispatch]);

  return (
    <Layout>
      <Routes />
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}

export default App;
