import styles from "./keycap.module.css";

const Keycap = () => {
  return (
    <div className={styles.keycapContainer}>
      <div className={styles.wrapperUp}>
        <div className={styles.keycap + " " + styles.up}>
          <div>W</div>
        </div>
      </div>
      <div className={styles.wrapperLeft}>
        <div className={styles.keycap + " " + styles.left}>
          <div>A</div>
        </div>
      </div>
      <div className={styles.wrapperRigth}>
        <div className={styles.keycap + " " + styles.rigth}>
          <div>D</div>
        </div>
      </div>
      <div className={styles.wrapperBottom}>
        <div className={styles.keycap + " " + styles.bottom}>
          <div>S</div>
        </div>
      </div>
    </div>
  );
};

export default Keycap;
