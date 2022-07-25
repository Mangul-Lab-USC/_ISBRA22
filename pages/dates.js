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
      <h3>Paper Submisson</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span><span>July 25, 2022</span> ➜ August 08, 2022</span>
        </div>
        <div className={styles.entry}>
          <div>Notification of acceptance</div>
          <span><span>August 25, 2022</span> ➜ September 06, 2022</span>
        </div>
        <div className={styles.entry}>
          <div>Final version due</div>
          <span><span>September 7, 2022</span> ➜ September 14, 2022</span>
        </div>
      </div>
      <h3>Short Abstract Submission</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>TBA</span>
        </div>
      </div>
      <h3>Poster Submission</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>TBA</span>
        </div>
      </div>
    </>
  );
}

export default Dates;
