import SEO from "../components/Layout/SEO";
import styles from "../styles/keynotes.module.css";
import mona from "../public/images/mona-singh.jpg";

const speakers = [
  {
    name: "Mona Singh",
    href: "https://www.cs.princeton.edu/people/profile/mona",
    img: mona.src,
    title: "Ph.D., Massachusetts Institute of Technology, 1995",
    description:
      "Mona Singh is a professor of computer science and the Lewis Sigler Institute for Integrative Genomics. She has been on the faculty at Princeton University since 1999.   She received her A.B. and S.M degrees from Harvard University, and her Ph.D.  from MIT, all three in computer science.  She works broadly in computational molecular biology, as well as its interface with machine learning and algorithms.  Much of her work is on developing algorithms to decode genomes at the level of proteins and she is especially interested in developing data-driven methods for predicting and characterizing protein sequences, functions, interactions and networks, both in healthy and disease contexts.",
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
              {/* <a rel="noreferrer" target="_blank" href={speaker.href}> */}
                <h3>{speaker.name}</h3>
              {/* </a> */}
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
