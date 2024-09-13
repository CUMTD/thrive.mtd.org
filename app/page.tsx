import styles from "./page.module.css";
import Redirects from "./redirects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Redirects />
      </main>
    </div>
  );
}
