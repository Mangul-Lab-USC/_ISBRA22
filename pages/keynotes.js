import SEO from "../components/Layout/SEO";
import styles from "../styles/keynotes.module.css";
import mona from "../public/images/mona-singh.jpg";

const speakers = [
  {
    name: "Mona Singh",
    img: mona.src,
    title: "Ph.D., Massachusetts Institute of Technology, 1995",
    description:
      "Mona Singh is a professor of computer science and the Lewis Sigler Institute for Integrative Genomics. She has been on the faculty at Princeton University since 1999.   She received her A.B. and S.M degrees from Harvard University, and her Ph.D.  from MIT, all three in computer science.  She works broadly in computational molecular biology, as well as its interface with machine learning and algorithms.  Much of her work is on developing algorithms to decode genomes at the level of proteins and she is especially interested in developing data-driven methods for predicting and characterizing protein sequences, functions, interactions and networks, both in healthy and disease contexts.",
  },
  {
    name: "Tamar Friedlander",
    img: "https://plantscience.agri.huji.ac.il/sites/default/files/styles/profile_full/public/plantsciences/files/tamar_friedlander.png",
    title: "Faculty of Agriculture, Hebrew University of Jesusalem",
    description:
      "Computational - theoretical approaches to study self-incompatibility in plant fertilization; evolution and organization of gene regulatory networks.",
  },
  {
    name: "Abraham B Korol",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Abraham_Korol.jpg ",
    title:
      "Professor in the Institute of Evolution at the University of Haifa.",
    description:
      "Abraham B. Korol mostly deals with Genetics, Quantitative trait locus, Genome, Genetic variation and Gene. His research on Genetics frequently connects to adjacent areas such as Genetic diversity. His Quantitative trait locus research includes elements of Allele, Heritability, Bivariate analysis, Inclusive composite interval mapping and Inbred strain.",
  },
  {
    name: "Michal Linial",
    img: "https://www.cfhu.org/wp-content/uploads/2020/12/michal-linial-900x943-1.jpg",
    title:
      "Professor of Biochemistry and Bioinformatics at the Hebrew University of Jerusalem",
    description:
      "She received her PhD from the Hebrew University's Medical School (1986) in Biochemistry and Molecular Biology. During her post-doctoral training in Stanford University, she engaged in molecular neuroscience with the goal of deciphering the molecular makeup of the synapse. She joined the Hebrew University (1989) and was a driving force in merging computational and analytical tools with classical wet biology. She is a founder (1999) and the chair of the undergraduate and graduate joint program in Computer sciences and Life Sciences at the Hebrew University. She heads The Sudarsky Center for Computational Biology at the Hebrew University.",
  },
  {
    name: "Eugene Koonin",
    img: "https://i.irp.nih.gov/pi/0010199492.jpg",
    title:
      "National Center for Biotechnology Information, National Institutes of Health",
    description:
      "Dr. Koonin's group performs research in many areas of evolutionary genomics. The overall gist of Dr. Koonin's research is to take advantages of the advances of comparative genomics and systems biology to address fundamental problems in evolutionary biology.",
  },
];

function Dates() {
  return (
    <>
      <SEO title="Keynote Speakers" desc="" />
      <h1>Keynote Speakers</h1>
      {speakers.map((speaker) => (
        <div className={styles.keynote} key={speaker.name}>
          <div className={styles.keynoteContainer}>
            <img src={speaker.img}></img>
            <div className={styles.keynoteWrapper}>
              <h3>{speaker.name}</h3>
              <span>{speaker.title}</span>
            </div>
          </div>
          <p>{speaker.description}</p>
        </div>
      ))}
    </>
  );
}

export default Dates;
