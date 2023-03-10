import { CircularProgressbar } from 'react-circular-progressbar';
import styles from '../styles/ProgressBar.module.css';

const ProgressBar = ({ percentage }) => (
  <div className={styles.progress}>
    <div className={styles.chart}>
      <CircularProgressbar value={percentage} />
  </div>
  <div className={styles.progressValue}>
    <h3>
      {percentage}
      %
    </h3>
    <p>Completed</p>
  </div>
</div>
);

export default ProgressBar;
