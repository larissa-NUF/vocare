import { ToastContainer } from 'react-toastify';
import { Layout } from './components/Layout';
import { Routes } from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
