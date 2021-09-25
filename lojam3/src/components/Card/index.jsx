import { useContext } from "react";
import { CartContext } from ".../../../contexts/CartContext";

import styles from "../../styles/Card.module.css"

export default function Card(props){
  const {handleAddItemtoCart} = useContext(CartContext)

  return(
    <div className={styles.card}>
      <img src={props.image} alt="" /> 
      <h1 className={styles.title}>{props.title}</h1>
      <p>
        <strong>{`R$ ${props.price},00`}</strong>
        </p>

       <span>{`até ${props.time}X de R$${props.portion}`}</span>

      <button onClick={()=>handleAddItemtoCart(props.id)} type="submit" 
      className={styles.buttonBuy}> COMPRAR</button>
    </div>
  )
}