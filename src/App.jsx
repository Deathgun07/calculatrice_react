import { useState } from 'react';
import { Result } from './affichage.jsx'
import  {Btn, Point, Plus, Minus, Equal, Multi, Div, Clear}  from './bouton.jsx'



function App() {
  const [valeur, setValeur]=useState("")
  function recup(id){
     setValeur((ancien)=>ancien+=id)
  }
  function clear(){
    setValeur((ancien)=>ancien="")
 }
 function equal(){
  setValeur((ancien)=>ancien=eval(ancien))
}
 return <>
  <div className="min-h-screen">
    <div className="app my-20 grid grid-cols-4 w-11/12 border-2 border-green-200">
      <Result value={valeur}/>
      <Btn id={9} onClick={()=>recup(9)} />
      <Btn id={8} onClick={()=>recup(8)} />
      <Btn id={7} onClick={()=>recup(7)} />
      <Btn id={6} onClick={()=>recup(6)} />
      <Btn id={5} onClick={()=>recup(5)} />
      <Btn id={4} onClick={()=>recup(4)} />
      <Btn id={3} onClick={()=>recup(3)} />
      <Btn id={2} onClick={()=>recup(2)} />
      <Btn id={1} onClick={()=>recup(1)} />
      <Btn id={0} onClick={()=>recup(0)} />
      <Point onClick={()=>recup(".")} />
      <Plus onClick={()=>recup("+")} />
      <Minus onClick={()=>recup("-")} />
      <Equal onClick={equal}/>
      <Multi onClick={()=>recup("*")} />
      <Div onClick={()=>recup("/")} />
      <Clear onClick={clear}/>
    </div>
  </div>
  </>;
}



export default App
