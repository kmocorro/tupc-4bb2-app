import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1>Technological University of the Philippines</h1>
      <h3>Manila Campus</h3>
      <p>CQT Avenue, Salawag, Dasmarinas, Cavite</p>
    </div>
  );
};

export default Hero;
