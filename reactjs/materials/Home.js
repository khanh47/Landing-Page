import styles from "./styles.css";

const firstLetter = () => <h1 className={styles.bigwhite}>CUỘC CHIẾN</h1>;

const secondLetter = () => <h1 className={styles.bigwhite}>VƯƠNG QUYỀN</h1>;

export default Home = () => {
  return (
    <>
      <firstLetter />;
      <>
        <secondLetter />;
      </>
    </>
  );
};
