//import { BrowserRouter } from 'react-router-dom';
//import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from './routes';

function App() {
  return (
    <div>
    <ToastContainer autoClose={2000} />
    <RoutesApp/>
    </div>
  );
}

export default App;
