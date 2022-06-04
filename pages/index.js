import Layout from "../components/Layout";
import styles from"../styles/Login.module.css";

export default function Home() {
  return (
    <Layout paginas="Login">
      <form className={styles.form}>
        <h2 className={styles.title}>¡Hola! Ingresa tu teléfono, e‑mail o usuario</h2>
        <p type="Teléfono, e-mail o usuario:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <button className={styles.continuar}>Continuar</button>
        <button className={styles.crear}>Crear cuenta</button>
        <button className={styles.ayuda}>Necesito ayuda para ingesar</button>
      </form>
    </Layout>
  );
}
