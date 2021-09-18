import {  useState } from "react";
import Checkbox from "./components/Checkbox";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardSection from "./components/CardSection";
import styles from '../src/styles/Home.module.css'

function App() {
  const [checked, setChecked] = useState(false)
  
  const handleChange = () =>{
    setChecked(!checked)
  }

 
  return (
    <>
      <Header/>
  <div className={styles.home}>

 
    
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
   <div className={styles.radios}>

   <input type="radio"  />
   <label><span >M</span></label>
   <input type="radio"  />
   <label><span >P</span></label>
     </div>
     
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
   <p>Ver todas as cores</p>
   </div>
  

     </div>
     <div> 
       <label htmlFor="">Ordenar por:
     <select name="product" id="product">
       <option value="">Mais recentes</option>
       <option value="">Menor preço</option>
       <option value="">Maior preço</option>
     </select>
     </label>
    
       <CardSection />
      
      </div>
     
  </div>
  <Footer/>
  </>
  );
}

export default App;
