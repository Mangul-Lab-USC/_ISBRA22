import styles from "../styles/committees.module.css";
import committees from "../lib/committees";
import SEO from "../components/Layout/SEO";

function Committees() {
  return (
    <>
      <SEO title="Committees" desc="Working committees for ISBRA 2022" />
      <h1>Committees</h1>
      {Object.keys(committees).map((key) => {
        const committee = committees[key];

        return (
          <div key={key} className={styles.committee}>
            <h2>{key}</h2>
            <div>
              {committee.members.map((member) => (
                <div key={member.name} className={styles.member}>
                  <h3>
                    {member.href ? (
                      <a rel="noreferrer" target="_blank" href={member.href}>
                        {member.name ||
                          member["first name"] + " " + member["last name"]}
                      </a>
                    ) : (
                      member.name ||
                      member["first name"] + " " + member["last name"]
                    )}
                  </h3>
                  <span>{member.organization}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Committees;
