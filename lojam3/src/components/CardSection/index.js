import { useState,useEffect } from "react";
import Card from "../Card"
import styles from "../../styles/CardSection.module.css"


export default function CardSection(){

  

  const [data, setData] = useState([])
  const [visible,setVisible] = useState(3)

  const showMoreItems = () =>{
    setVisible((prevValue) => prevValue+3)
   }
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/products');
      const data  = await response.json();
      setData(data);
    })();
  }, []);


  return(
    <>
     <main>
       <div className={styles.container}>
     {data.slice(0,visible).map((products)=>( 
       <Card 
        key={products.id}
        image={products.image}
        title={products.title}
        price={products.price}
        time={products.installments.times}
        portion={products.installments.price}
      
       />
       ))}
        </div>
       
   </main>
   <div className={styles.containerButton}>
        <button
        className={styles.buttonLoading}
        onClick={showMoreItems}
        type="button"
        >Carregar Mais</button>
        </div>
   </>
  )
}