import Image from "next/image";
import styles from "./page.module.css";
import ChangePassword from "@/components/changepassword";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Bienvenido a la app de cambio de contraseña</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }} className="text-muted">
        Usa el siguiente formulario para actualizar tu contraseña de forma segura.
      </p> */}
      <ChangePassword />
    </main>
  );
}
