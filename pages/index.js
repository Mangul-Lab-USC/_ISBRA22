import styles from "../styles/index.module.css";
import SEO from "../components/Layout/SEO";
import NSF from "../public/images/NSF.png";
import ISCB from "../public/images/iscb-logo.jpg";
import GSU from "../public/images/GSU.jpg";
function Home() {
  return (
    <>
      <SEO
        title="ISBRA 2022"
        desc="The International Symposium on Bioinformatics Research and Applications (ISBRA) provides a forum for the exchange of ideas and results among researchers, developers, and practitioners working on all aspects of bioinformatics and computational biology and their applications."
      />
      <h1>Welcome</h1>
      <p>
        The International Symposium on Bioinformatics Research and Applications
        (ISBRA) provides a forum for the exchange of ideas and results among
        researchers, developers, and practitioners working on all aspects of
        bioinformatics and computational biology and their applications.
        Submissions presenting original research are solicited in all areas of
        bioinformatics and computational biology, including the development of
        experimental or commercial systems. Topics of interest include but are
        not limited to:
      </p>
      <div className={styles.topics}>
        <ul>
          <li>Biomarker discovery</li>
          <li>Biomedical databases and data integration</li>
          <li>Biomedical text mining and ortologies</li>
          <li>Biomolecular imaging</li>
          <li>Comparative genomics</li>
          <li>Computational genetic epidemiology</li>
          <li>Computational proteomics</li>
          <li>Data mining and visualization</li>
          <li>Gene expression analysis</li> <li>Structural biology</li>
          <li>Genome analysis</li>
          <li>Systems biology</li>
        </ul>
        <ul>
          <li>High-performance bio-computing</li>
          <li>Metagenomics</li>
          <li>Molecular evolution</li>
          <li>Molecular modelling and simulation</li>
          <li>Next-generation sequencing data analysis</li>
          <li>Pattern discovery and classification</li>
          <li>Population genetics</li>
          <li>Software tools and applications</li>
          <li>
            AI and machine learning methods in Bioinformatics and Medical
            Information
          </li>
          <li>Big Data Analytics in Biology and Medicine</li>
        </ul>
      </div>
      <h3>
        ISBRA2022 proceedings will be published in the Springer Lecture Notes in
        ISBRA2023 proceedings will be published in the Springer Lecture Notes in
        Computer Science Volume (EI index).
      </h3>
      <p>
        Extended versions of selected papers from the conference will be
        published in the special issues of:
      </p>
      <p>
        <b>
          Notice: All listed journals are unconfirmed and pending approval for
          2022.
          2023.
        </b>
      </p>
      <ul>
        <li>
          IEEE/ACM Transactions on Computational Biology and Bioinformatics
        </li>
        <li>Future Generation Computer Systems</li>
        <li>Journal of Computational Biology</li>
        <li>BMC Bioinformatics</li>
        <li>BMC Genomics</li>
        <li>Tsinghua Science and Technology (SCI indexed)</li>
      </ul>
      <div className={styles.logos}>
        <img src={GSU.src} />
        <img src={NSF.src} />
        <img src={ISCB.src} />
      </div>
    </>
  );
}
export default Home;
