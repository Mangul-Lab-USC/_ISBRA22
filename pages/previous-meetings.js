import styles from "../styles/committees.module.css";
import meetings from "../lib/meetings";

function PreviousMeetings() {
  return (
    <div className={styles.root}>
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
    </div>
  );
}

export default PreviousMeetings;
