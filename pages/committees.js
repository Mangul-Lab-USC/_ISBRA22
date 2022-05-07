import styles from "../styles/committees.module.css";
import committees from "../lib/committees";

function Committees() {
  return (
    <div className={styles.root}>
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
                        {member.name}
                      </a>
                    ) : (
                      member.name
                    )}
                  </h3>
                  <span>{member.affiliation}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Committees;
