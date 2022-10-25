import styles from "../styles/general.module.css";

function Agenda() {
  return (
    <>
    <h1>Program agenda</h1>
    <div className={styles.notice}>
        <a className={styles.link} rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1KhirD4vE5u7A2cJLCvn2ZFUQ-A0pF0WC/view?usp=sharing">
          ISBRA 2022 Program (preliminary draft)
    <table>
    <thead>
      <tr>
        <th>9:00am-<br>10:00am</th>
        <th>Plenary Session Room: TBA<br>Chair:TBA</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>Session 1:<br>Keynote Talk<br>Talk Title<br>Eugene Koonin, National Center for Biotechnology Information,<br>National Institutes of Health</td>
      </tr>
      <tr>
        <td>10:00am-<br>10:20am</td>
        <td>Coffee break<br></td>
      </tr>
    </tbody>
    </table>
    </>
  );
}

export default Agenda;