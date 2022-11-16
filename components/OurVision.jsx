import styles from "./OurVision.module.css";

const OurVision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h2>Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
          ornare augue, sed fermentum libero. In finibus felis non quam
          vulputate porta.
        </p>
      </div>
      <div className={styles.image}>
        <img src="/images/vision-placeholder.png" />
      </div>
    </div>
  );
};
export default OurVision;
