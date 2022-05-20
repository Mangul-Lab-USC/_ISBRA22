import styles from "../styles/committees.module.css";
import meetings from "../lib/meetings";
import SEO from "../components/Layout/SEO";

function PreviousMeetings() {
  return (
    <>
      <SEO
        title="Previous Meetings"
        desc="A list of previous ISBRA meetings."
      />
      <h1>Previous Meetings</h1>
      <ul className={styles.committee}>
        {meetings.map((meeting) => (
          <div key={meeting.name} className={styles.member}>
            <h3>
              <a rel="noreferrer" target="_blank" href={meeting.href}>
                {meeting.name}
              </a>
            </h3>
          </div>
        ))}
      </ul>
    </>
  );
}

export default PreviousMeetings;
