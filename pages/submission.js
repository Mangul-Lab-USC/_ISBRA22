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
        ISBRA 2022 invites submissions to the following tracks via the online
        submission system (
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
        present at the symposium. Note that submission to Tracks 1 and 2 is now
        closed.
      </p>
      <a
        className={styles.button}
        rel="noreferrer"
        target="_blank"
        href="https://easychair.org/conferences/?conf=isbra2022"
      >
        submission website
      </a>
      <p>
        <b>
          Notice: All listed journals are unconfirmed and pending approval for
          2022.
        </b>
      </p>
      <h3>Track 1</h3>
      <p className={styles.notice}>
        Notice: Submission to this track is now closed.
      </p>
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
      <p className={styles.notice}>
        Notice: Submission to this track is now closed.
      </p>
      <p>
        Submit up to 12 pages in <b>LNCS format</b> for:
      </p>
      <ul className={styles.list}>
        <li>Presentation at the conference</li>
        <li>
          invitation to submit a full-length paper to one of the following
          journals:
          <ul>
            <li>BMC Bioinformatics</li>
            <li>BMC Genomics</li>
          </ul>
        </li>
      </ul>
      <h3>Short Abstracts (Track 3)</h3>
      <p>
        ISBRA 2022 invites submissions of short abstracts (between 8 and 10
        pages in LNCS format) describing original unpublished research. Short
        abstracts will be either accepted for oral presentation and published in
        the LNBI proceedings or accepted for poster presentation. Authors of
        selected short abstracts will be invited to submit full-length papers to
        journal special issues.
      </p>
      <h3>Late-Breakthrough abstracts (Track 4)</h3>
      <p>
        ISBRA 2022 invites submissions of abstracts of up to 300 words
        describing unpublished research currently under review (by a journal or
        conference) for oral presentation at the conference. It is recommended,
        though not required, to also submit a PDF of the manuscript. Selection
        will be based on quality and potential impact of the published work and
        on interest to the attendees of the conference.
      </p>
      <h3>Highlight abstracts (Track 5)</h3>
      <p>
        ISBRA 2022 invites submissions of abstracts of manuscripts that were
        published after September 1, 2021, or manuscripts that are “in press” at
        the time of submission and are already linked on the journal website,
        for oral presentation at the conference. Selection will be based on
        quality and potential impact of the published work and on interest to
        the attendees of the conference. Submissions should consist of a title,
        authors, abstract, affiliation of presenting author, email address, and
        a link to the published paper. The abstract should be up to 300 words.
      </p>
      <h3>Posters (Track 6)</h3>
      <p>
        ISBRA 2022 invites submissions of poster abstracts of up to 300 words
        describing new or recently published research for the poster session.
        The submission of a PDF file is not required. Selection will be based on
        the quality of the work and on potential interest of the work to
        attendees of the conference.
      </p>
    </>
  );
}

export default Submission;
