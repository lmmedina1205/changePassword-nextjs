import Image from "next/image";
import styles from "./page.module.css";
import ChangePassword from "@/components/changepassword";

export default function Home() {
  return (
    <main className={styles.main}>
      <ChangePassword></ChangePassword>
    </main>
  );
}
