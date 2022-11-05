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
    <div className={styles.notice}>
        <a className={styles.link} rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1I-NeYU5DtGtlze-L6cxhiYNzCblvrO7A/view?usp=sharing">
          ISBRA 2022 Program
        </a>
    </div>
    <img src={isbra_program_p1.src} />
    <img src={isbra_program_p2.src} />
    <img src={isbra_program_p3.src}/>
    <img src={isbra_program_p4.src} />
    <img src={isbra_program_p5.src}/>
    <img src={isbra_program_p6.src} />
    <img src={isbra_program_p7.src} />
    </>
  );
}
export default Agenda;
