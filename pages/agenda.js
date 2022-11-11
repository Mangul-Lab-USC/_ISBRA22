import styles from "../styles/general.module.css";
import isbra_program_p1 from "../public/images/isbra_program_p1.png";
import isbra_program_p2 from "../public/images/isbra_program_p2.png";
import isbra_program_p3 from "../public/images/isbra_program_p3.png";
import isbra_program_p4 from "../public/images/isbra_program_p4.png";
import isbra_program_p5 from "../public/images/isbra_program_p5.png";
import isbra_program_p6 from "../public/images/isbra_program_p6.png";
import isbra_program_p7 from "../public/images/isbra_program_p7.png";
function Agenda() {
  return (
    <>
    <h1>Program agenda</h1>
     <div className={styles.notice}>Note:  The Zoom links available in the conference program are password protected. All registered remote attendees will be emailed the password before the conference.
    </div>
    <div className={styles.notice}>
        <a className={styles.link} rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1K6vg9D-uB3jIskn4MEE_2kR17TgeLefG/view?usp=sharing">
          ISBRA 2022 Program
        </a>
    </div>
    <img src=isbra_program_p1>
    <img src=isbra_program_p2>
    <img src=isbra_program_p3>
    <img src=isbra_program_p4>
    <img src=isbra_program_p5>
    <img src=isbra_program_p6>
    <img src=isbra_program_p7>
    </>
  );
}
export default Agenda;
