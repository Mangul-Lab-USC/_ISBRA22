import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Important Dates",
    href: "/dates",
  },
  {
    name: "Registration and Venue",
    href: "/registration",
  },
  {
    name: "Program Agenda",
    href: "/agenda",
  },
  {
    name: "Submission Guidelines",
    href: "/submission",
  },
  {
    name: "Keynote Speakers",
    href: "/keynotes",
  },
  {
    name: "Call for Papers / Abstracts",
    href: "/calls",
  },
  {
    name: "Committees",
    href: "/committees",
  },
  {
    name: "Previous Meetings",
    href: "/previous-meetings",
  },
];

const sponsors = [
  {
    name: "Georgia State University, Department of Computer Science",
    url: "https://csds.gsu.edu/",
  },
  {
    name: "National Science Foundation, USA",
    url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1923679&HistoricalAwards=false",
  },
  {
    name: "International Society for Computational Biology",
    url: "https://www.iscb.org/",
  },
];

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <h2>ISBRA 2022</h2>
          </Link>
        </div>
      </header>
      <section className={styles.hero}>
        <div>
          <h2>
            18th International Symposium on Bioinformatics Research and
            Applications (ISBRA 2022) November 14 - 17, 2022
            <div>University of Haifa</div>
          </h2>
        </div>
      </section>
      <div className={styles.root}>
        <nav className={styles.menu}>
          <h2>Menu</h2>
          <ul>
            {menu.map((item) => (
              <Link key={item.name} href={item.href}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className={styles.stripe} />
        <main className={styles.main}>{children}</main>
        <section className={styles.sponsors}>
          <h2>Sponsors & Affiliates</h2>
          <ul>
            {sponsors.map((sponsor) => (
              <li className={styles.sponsor} key={sponsor.name}>
                <a rel="noreferrer" target="_blank" href={sponsor.url}>
                  {sponsor.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Layout;
