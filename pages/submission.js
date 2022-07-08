import styles from "../styles/general.module.css";
import SEO from "../components/Layout/SEO";

function Submission() {
  return (
    <>
      <SEO
        title="submissions"
        desc="Submission implies willingness of at least one author to register and present at the symposium."
      />
      <h1>Submission guidelines and publication information</h1>
      <p>
        Please submit extended abstracts (up to 12 pages in Springer LNCS
        format) via the online submission system (
        <b>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://easychair.org/conferences/?conf=isbra2022"
          >
            https://easychair.org/conferences/?conf=isbra2022
          </a>
        </b>
        ). Submission implies willingness of at least one author to register and
        present at the symposium. The authors should choose one of the following
        tracks:
      </p>
      <a
        className={styles.button}
        rel="noreferrer"
        target="_blank"
        href="https://easychair.org/conferences/?conf=isbra2022"
      >
        submit abstract here
      </a>
      <p>
        <b>
          Notice: All listed journals are unconfirmed and pending approval for
          2022.
        </b>
      </p>
      <h3>Track 1</h3>
      <p>
        Submit up to 12 pages in <b>LNCS format</b> for:
      </p>
      <ul className={styles.list}>
        <li>Presentation at the conference</li>
        <li>
          Publication of the extended abstract in the Springer LNBI proceedings
        </li>
        <li>
          Invitation to submit a 30-50%-extended version to ISBRA'22 special
          issues of:
          <ul>
            <li>
              IEEE/ACM Transactions on Computational Biology and Bioinformatics
            </li>
            <li>IEEE Transactions on NanoBioscience</li>
            <li>Journal of Computational Biology</li>
          </ul>
        </li>
      </ul>
      <h3>Track 2</h3>
      <p>
        Submit up to 12 pages in <b>LNCS format</b> for:
      </p>
      <ul className={styles.list}>
        <li>Presentation at the conference</li>
        <li>
          invitation to submit a full-length paper to one of the following journals:
          <ul>
            <li>BMC Bioinformatics</li>
            <li>BMC Genomics</li>
            {/* <li>BMC Medical Genomics</li> */}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Submission;
