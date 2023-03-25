import './App.css';
import TopoPage from './components/TopoPage';
import LoginForm from './components/LoginForm';
// import { useEffect, useState } from 'react';

function App() {
  // const getAuthorizationHeader = () => `Bearer ${getToken()}`
  // const [cars, setCars] = useState([])
  // const getListCars = async () =>{
  //   try {
  //     const response = await api.get("/cars", { 
  //       headers: { Authorization: getAuthorizationHeader() }
  //     });
  //     const data = response.data;
  //     setCars(data)
  //     console.log(data.collection)
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // useEffect(() => {
  //   getListCars();
  // })


  const usuario = 'Login'
  const descricao = 'Digite seu e-mail e senha para entrar'
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {usuario}
        </h1>
        <TopoPage descricao={descricao} />
      </header>
      <LoginForm/>
      {/* <pre>{cars}</pre> */}
    </div>
  );
}

export default App;
