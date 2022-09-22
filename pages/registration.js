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
      <div className={styles.notice}>
        <span>
          Notice: All ISCB members recieve a 15% discount on registration
          pricing!
        </span>
        <p>
          We strongly encourage ISBRA participants to join the leading
          professional international society for computational biology and
          bioinformatics (ISCB) to enjoy its benefits and recieve a 15% discount
          on ISBRA registration.
        </p>
        <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.iscb.org/membership/newMembership">
          You can apply for ISCB membership here
        </a>
      </div>
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
      <h2>Payment details</h2>
      <div className={styles.notice}>
        <a className={styles.link} rel="noreferrer" target="_blank" href="https://fns.haifa.ac.il/shop/">
          ISBRA 2022 PAYMENT
        </a>
      </div>
      <h2>ISBRA 2022 Venue</h2>
      <p>ISBRA 2022 will take place at University of Haifa, Haifa, Israel.</p>
      <h2>Hotels</h2>
      <h3>Transportation from Ben-Gurion air port to Haifa (Hof haCarmel station):</h3>
      <p>The most convenient way to get to Haifa is by the <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.rail.co.il/en"> public train</a>. Train operates regularly with percise timetable during weekdays (Sun-Thu) until late night. Fair is pretty cheap - near $10. There is also the <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.egged.co.il/"> public busses</a> that go either directly to Haifa central station - Hof haCarmel station. Here are <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.rome2rio.com/map/Tel-Aviv/Haifa-Hof-HaCarmel-Station"> few options</a> with prices. There is also a 24/7 service taxi waiting right at the exit of the terminal with prices around $25. From Haifa Hof haKarmel station to U Haifa campus there is a regular <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.rome2rio.com/map/Tel-Aviv/Haifa-Hof-HaCarmel-Station"> public bus service</a> during the day hours.
      </p>
      <h3>Hotels in Haifa that are recommended (prices may not be accurate or updated and depand on season and room type)</h3>
      <p><a className={styles.link} rel="noreferrer" target="_blank" href="https://www.danhotels.com/HaifaHotels/DanCarmelHaifaHotel"> Dan Carmen Hotel</a> – 217$ per night<br></br>
         <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.danhotels.com/HaifaHotels/DanCarmelHaifaHotel"> Dan Panorama Haifa Hotel</a> – 150$ per night<br></br>
         <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.danhotels.com/HaifaHotels/MirabellePlazaHaifaHotel"> Mirabelle Plaza Haifa</a> – 160$ per night<br></br>
         <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.leonardo-hotels.com/haifa/leonardo-plaza-haifa"> Leonardo Plaza Haifa</a> – 195$ per night<br></br>
         <a className={styles.link} rel="noreferrer" target="_blank" href="http://carmella-boutique-hotel.haifa-hotels-il.com/en/"> Carmella Boutique Hotel</a> – 145$ per night<br></br>
         <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.goldencrown-hotels.com/templars-boutique-hotel-haifa"> Templars Boutique Hotel</a> - 250$ per night<br></br>
         <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.goldencrown-hotels.com/%D7%91%D7%99%D7%AA-%D7%9E%D7%9C%D7%95%D7%9F-%D7%91%D7%97%D7%99%D7%A4%D7%94"> Golden Crown Haifa</a> – 145$ per night<br></br>
         <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.colonyhaifa.com/"> The Colony Hotel</a> – 190$ per night<br></br>
         <a className={styles.link} rel="noreferrer" target="_blank" href="https://www.villacarmel.co.il/en/"> Villa Carmel Boutique Hotel</a> – 130$ per night
      </p>
      
      <img className={styles.image} src={image.src} />
    </>
  );
}

export default Registration;