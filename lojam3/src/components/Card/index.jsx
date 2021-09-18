import styles from "../../styles/Card.module.css"

export default function Card(props){
  return(
    <div className={styles.card}>
    
      <img src={props.image} alt="" />
      
      <h1 className={styles.title}>{props.title}</h1>
      <p><strong>{`R$ ${props.price},00`}</strong></p>
       <span>{`até ${props.time}X de R$${props.portion}`}</span>
      <button type="submit" className={styles.buttonBuy}> COMPRAR</button>
    </div>
  )
}