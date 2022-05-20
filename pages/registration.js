import styles from "../styles/general.module.css";
import image from "../public/images/isbra2022.jpg";
import SEO from "../components/Layout/SEO";

function Registration() {
  return (
    <>
      <SEO
        title="Registration and Venue"
        desc="Information on registering and participating in ISBRA 2022 in Haifa, Israel."
      />
      <h1>Registration and Venue</h1>
      <p>
        Each accepted paper should have at least one registered participant. The
        registration fee should be paid by <b>October 1, 2022</b>. Without a
        dedicated registration, the paper cannot be included in the Journals and
        Springer Proceedings.
      </p>
      <h2>ISBRA 2022 Registration Instructions</h2>
      <ul>
        <li>ISBRA2022 offers only Online Payment (TBA)</li>
        <li>
          Registration fees are set differently for onsite participation and
          remote participation.
        </li>
        <li>NO refund is available.</li>
      </ul>
      <h2>Onsite Participation</h2>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Author Registration ( Before October 1, 2022 )</div>
          <span>600,00 USD</span>
        </div>
        <div className={styles.entry}>
          <div>Attendee Registration ( Before October 1, 2022 )</div>
          <span>600,00 USD</span>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Author Registration ( After October 1, 2022 )</div>
          <span>700,00 USD</span>
        </div>
        <div className={styles.entry}>
          <div>Attendee Registration ( After October 1, 2022 )</div>
          <span>700,00 USD</span>
        </div>
      </div>
      <h2>Remote Participation</h2>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Remote Author Registration ( Before October 1, 2022 )</div>
          <span>400,00 USD</span>
        </div>
        <div className={styles.entry}>
          <div>Remote Attendee Registration ( Before October 1, 2022 )</div>
          <span>300,00 USD</span>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Remote Author Registration ( After October 1, 2022 )</div>
          <span>500,00 USD</span>
        </div>
        <div className={styles.entry}>
          <div>Remote Attendee Registration ( After October 1, 2022 )</div>
          <span>400,00 USD</span>
        </div>
      </div>
      <h2>ISBRA 2022 Venue</h2>
      <p>ISBRA 2022 will take place at University of Haifa, Haifa, Israel.</p>
      <img className={styles.image} src={image.src} />
    </>
  );
}

export default Registration;
