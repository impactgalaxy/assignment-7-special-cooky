import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {


  return (
    <>
      <Header></Header>
      <Main toast={toast}></Main>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  )
}

export default App;
