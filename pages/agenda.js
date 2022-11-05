import styles from "../styles/general.module.css";
function Agenda() {
  return (
    <>
    <h1>Program agenda</h1>
    <div className={styles.notice}>
        <a className={styles.link} rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1I-NeYU5DtGtlze-L6cxhiYNzCblvrO7A/view?usp=sharing">
          ISBRA 2022 Program
        </a>
    </div>
    <img src="isbra_program_p1.png" />
    <img src="isbra_program_p2.png" />
    <img src="isbra_program_p3.png" />
    <img src="isbra_program_p4.png" />
    <img src="isbra_program_p5.png" />
    <img src="isbra_program_p6.png" />
    <img src="isbra_program_p7.png" />
    </>
  );
}
export default Agenda;
