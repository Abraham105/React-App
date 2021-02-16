import './App.css';
import  Mensaje from  './mensaje.js';


const Description = () => {

  return (

  <p>
    Esta es la descripcion del la <strong>Pagina</strong>
  </p>

  )
}



const App = ()=> {
  return (

    <div className="App">

    <Mensaje color="red" message="Estamos trabajando" />
    <Mensaje color="green" message="En un Curso" />
    <Mensaje color="yellow" message="React" />
    <Description />

    </div>
    

  );
}

export default App;
