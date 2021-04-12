
//importa as propriedades do React para minha tela App.
import React,{ useState}  from 'react';

//Quando começarmos trabalhar a configuração de rotas, devemos importar para cá.
import { BrowserRouter } from 'react-router-dom';


//Da pasta components que criei, vou importar o arquivo index. e reconfigurar o app.
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';

//Importando as rotas. e chamo ele embaixo.
import Routes from './Routes'


import './app.css';

//Próximo passo: criar um componente que vai criar uma função para retornar minha aplicaçao.
function App() {
  const[user, setUser] = useState(null);
  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.desplayName,
      avatar: u.photoURL

    }
    setUser(newUser);
  }

  if(user === null){
    return(
      <Login onReceiverGoogle={actionLoginDataGoogle}/>
    );
  }

    
  return (
    //<h1> Olá Mundo! </h1> 
    //Faço uma tag unica.
    //Caso eu queira mais de uma tag juntas eu devo criar uma div ou nav, para alocar tudo junto.
    // <div>
    //   <h1>Hello World!</h1>
    //   <h2>Aprendendo do absoluto zero.</h2>
    //   <ul>
    //     <li>Post</li>
    //     <li>Post</li>
    //     <li>Post</li>
    //     <li>Post</li>
    //   </ul>
    // </div>
    <BrowserRouter>
      <Header user={user}/>

      <Routes />

      <Footer />
    </BrowserRouter> //Estamos importando as informações do nosso index de dentro de componente.
   
  );
}

//Preciso exportar o componente: para isso criamos o comando:
export default App;
