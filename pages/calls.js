import styles from "../styles/general.module.css";
import SEO from "../components/Layout/SEO";

function Calls() {
  return (
    <>
      <SEO
        title="Call for Papers"
        desc="ISBRA 2022 downloadable PDF Call for Papers and other important documents."
      />
      <h1>Calls for Papers / Abstracts / Workshops & Tutorials</h1>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>ISBRA 2022 Call for Papers:</div>
          <a href="ISBRA2022_CFP.pdf" attributes-list download>
            ISBRA 2022 CFP (PDF)
          </a>
        </div>
        <div className={styles.entry}>
          <div>ISBRA 2022 Call for short abstracts, posters, etc:</div>
          <a href="ISBRA2022_Abstracts_Posters.pdf" attributes-list download>
            ISBRA 2022 CFA (PDF)
          </a>
        </div>
      </div>
    </>
  );
}

export default Calls;
