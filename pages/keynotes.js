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
    title: "Faculty of Agriculture, Hebrew University of Jerusalem",
    description:
      "Tamar Friedlander has a diverse academic background. She obtained her BSc in Physics and Mathematics from the Hebrew University of Jerusalem and her M.Sc. in Electrical Engineering from Tel-Aviv University.  In her PhD she switched gears and turned her analytical skills to study theoretical problems in biology, gaining her PhD in Physics in the Technion’s Network Biology Research laboratory.  Later on, she continued to a first post-doc at the Weizmann Institute (Uri Alon’s lab), and then a second post-doc in IST Austria where she focused on theoretical evolutionary biology and population genetics. Since 2017 she is a faculty in the Plant sciences and Genetics Institute in the Faculty of Agriculture, Food and Environment in the Hebrew University of Jerusalem. There she is studying the evolution of self-incompatibility in plants, as well as general evolutionary questions.  ",
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
      "Prof Eugene Koonin is Senior Investigator at the National Center for Biotechnology Information (NCBI). He is a recognised expert in the field of evolutionary and computational biology. Koonin's principal research goals include the comparative analysis of sequenced genomes and automatic methods for genome-scale annotation of gene functions. He also researches in the application of comparative genomics for phylogenetic analysis, reconstruction of ancestral life forms and building large-scale evolutionary scenarios, as well as mathematical modeling of genome evolution. Koonin's research also involves computational study of the major transitions in the evolution of life (such as the origin of eukaryotes), the evolution of eukaryotic signaling and developmental pathways from the comparative-genomic perspective. Koonin has worked as Adjunct Professor at the Georgia Institute of Technology, Boston University and the University of Haifa. As of 2014, Koonin serves on the advisory editorial board of Trends in Genetics, and is co-Editor-in-Chief of the open access journal Biology Direct. He served on the editorial board of Bioinformatics  and is also an advisory board member in bioinformatics at Faculty of 1000. In 2016 he was elected to the National Academy of Sciences.",
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
