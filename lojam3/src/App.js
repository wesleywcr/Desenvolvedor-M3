
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [checked, setChecked] = useState(false)
  const handleChange = () =>{
    setChecked(!checked)
  }

  return (
  <div>
     <Header/>
     <div>
       <h1>Blusas</h1>
       <h3>Cores</h3>
      <div>
       <Checkbox
    label="Amarelo"
    value={checked}
    onchange={handleChange}
   />
   <Checkbox
    label="Azul"
    value={checked}
    onchange={handleChange}
   />
   <Checkbox
    label="Branco"
    value={checked}
    onchange={handleChange}
   />
   <Checkbox
    label="Cinza"
    value={checked}
    onchange={handleChange}
   />
     <Checkbox
    label="Laranja"
    value={checked}
    onchange={handleChange}
   />
   <h3>Tamanhos</h3>
   <h3>Faixa de Preços</h3>
   <Checkbox
    label="de R$0 até R$50"
    value={checked}
    onchange={handleChange}
   />
   <Checkbox
    label="de R$51 até R$150"
    value={checked}
    onchange={handleChange}
   />
   <Checkbox
    label="de R$151 até R$300"
    value={checked}
    onchange={handleChange}
   />
    <Checkbox
    label="de R$301 até R$500"
    value={checked}
    onchange={handleChange}
   />
    <Checkbox
    label="a partir de R$01"
    value={checked}
    onchange={handleChange}
   />
   </div>
   <div>
     <Card/>
   </div>
   <button type="button">Carregar Mais</button>
     </div>
  
     <Footer/>
  </div>
  );
}

export default App;
