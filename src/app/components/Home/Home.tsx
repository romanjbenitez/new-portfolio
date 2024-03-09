import Keycap from "@components/keycap/keycap";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Keycap letter="A" ubication="left"/>
    </div>
  );
}

export default Home;
