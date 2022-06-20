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
      {/* <h3>Key Dates</h3> */}
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>July 25, 2022</span>
        </div>
        <div className={styles.entry}>
          <div>Notification of acceptance</div>
          <span>August 25, 2022</span>
        </div>
        <div className={styles.entry}>
          <div>Final version due</div>
          <span>September 7, 2022</span>
        </div>
      </div>
      {/* <h3>Short Abstracts Key Dates</h3>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Submission deadline</div>
          <span>August 27, 2022</span>
        </div>
        <div className={styles.entry}>
          <div>Notification of acceptance</div>
          <span>September 2, 2022</span>
        </div>
        <div className={styles.entry}>
          <div>Final version due</div>
          <span>September 7, 2022</span>
        </div>
      </div> */}
    </>
  );
}

export default Dates;
