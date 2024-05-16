import './App.css';
import Card from './components/card/Temp';
import './components/card/card.css'



function App() {
  const diasSemana =  ['domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta','Sexta','Sabádo'];
  let contador=0;

  const contaClique = ()=>{
    console.log(contador = contador +1);
  }

  return (
    <div className="App">

    {/* <button onClick= {() => console.log(contador = contador+1)}>Clique aqui</button>*/ }
    <button onClick = {contaClique}>Clique aqui</button>
      <Card/>
      {
        diasSemana.map((dia)=>{
            return (<Card diaDaSemana ={dia}/>)
            }) 
      }
    </div>
  );
}

export default App;

