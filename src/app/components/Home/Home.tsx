import Keycaps from "@components/keycap/keycap";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.letterR}>R</div>
      <Keycaps/>
      <div className={styles.letterO}>O</div>
      <div className={styles.letterM}>M</div>
      <div className={styles.letterA}>A</div>
      <div className={styles.letterN}>N</div>
    </div>
  );
}

export default Home;
