import styles from "../../styles/Card.module.css"

export default function Card(){
  return(
    <div className={styles.container}>
      <img src="images/img_2.png" alt="" />
      <p>Camiseta Mescla</p>
   <footer >
      <p>R$28,00</p>
      <button type="submit" className={styles.buttonBuy}> COMPRAR</button>
      </footer>
    </div>
  )
}