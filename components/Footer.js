import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.privacidad}>Cómo cuidamos tu Pivacidad</h2>
      <p className={styles.parrafo}>Copyright © 1999-2022 Axel David Téllez Álvarez, Mercado Clon 2.0</p>
    </div>
  )
}

export default Footer