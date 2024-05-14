import Link from "next/link";
import styles from "./style.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>U5 Page</h1>
      <p className={styles.text}>This is U5 page</p>

      <Link href="/">top</Link>
    </>
  );
}
