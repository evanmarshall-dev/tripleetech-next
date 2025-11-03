import styles from "./WaveDivider.module.scss";

const WaveDivider = () => {
  return (
    <div className={styles.waveDivider}>
      <svg
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
        className={styles.wave}
        xmlns='http://www.w3.org/2000/svg'>
        {/* Light blue accent wave border */}
        <path
          d='M0,0 C300,80 600,80 900,40 C1050,20 1150,40 1200,60 L1200,120 L0,120 Z'
          className={styles.waveBorder}
        />
        {/* White fill wave */}
        <path
          d='M0,10 C300,90 600,90 900,50 C1050,30 1150,50 1200,70 L1200,120 L0,120 Z'
          className={styles.waveFill}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
