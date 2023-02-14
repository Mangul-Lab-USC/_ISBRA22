import styles from "../styles/general.module.css";
import SEO from "../components/Layout/SEO";

function Dates() {
  return (
    <>
      <SEO
        title="Important Dates"
        desc="Important deadlines and dates for ISBRA 2022"
      />
      <h1>Important Dates</h1>
      <div className={styles.notice}>
        <span>
          Notice: All deadlines are at 11:59PM, any time zone
        </span>
      </div>
      <h3>Paper Submisson</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>
            June 25, 2023
          </span>
        </div>
        <div className={styles.entry}>
          <div>Notification of acceptance</div>
          <span>
            August 06, 2023
          </span>
        </div>
        <div className={styles.entry}>
          <div>Final version due</div>
          <span>
            August 14, 2023
          </span>
        </div>
      </div>
      <h3>Short Abstract Submission</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>TBA</span>
        </div>
        <div className={styles.entry}>
          <div>Notification of acceptance</div>
          <span>TBA</span>
        </div>
      </div>
      <h3>Late-Breakthrough Submission</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>TBA</span>
        </div>
        <div className={styles.entry}>
          <div>Notification of acceptance</div>
          <span>TBA</span>
        </div>
      </div>
      <h3>Highlight Abstract Submission</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>TBA</span>
        </div>
        <div className={styles.entry}>
          <div>Notification of acceptance</div>
          <span>TBA</span>
        </div>
      </div>
      <h3>Poster Submission</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>TBA</span>
        </div>
        <div className={styles.entry}>
          <div>Notification of acceptance</div>
          <span>TBA</span>
        </div>
      </div>
    </>
  );
}

export default Dates;
