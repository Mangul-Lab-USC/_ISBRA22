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
        registration fee should be paid by <b>October 7, 2022</b>. Without a
        dedicated registration, the paper cannot be included in the Journals and
        Springer Proceedings.
      </p>
      <h2>ISBRA 2022 Registration Instructions</h2>
      <ul>
        <li>ISBRA2022 offers only <a  rel="noreferrer" target="_blank" href="https://fns.haifa.ac.il/shop/"> Online Payment</a></li>
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
          <div>Author Registration ( Before October 7, 2022 )</div>
          <span>600,00 USD</span>
        </div>
        <div className={styles.entry}>
          <div>Attendee Registration ( Before October 7, 2022 )</div>
          <span>600,00 USD</span>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Author Registration ( After October 7, 2022 )</div>
          <span>700,00 USD</span>
        </div>
        <div className={styles.entry}>
          <div>Attendee Registration ( After October 7, 2022 )</div>
          <span>700,00 USD</span>
        </div>
      </div>
      <h2>Remote Participation</h2>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Remote Author Registration ( Before October 7, 2022 )</div>
          <span>400,00 USD</span>
        </div>
        <div className={styles.entry}>
          <div>Remote Attendee Registration ( Before October 7, 2022 )</div>
          <span>300,00 USD</span>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.entry}>
          <div>Remote Author Registration ( After October 7, 2022 )</div>
          <span>500,00 USD</span>
        </div>
        <div className={styles.entry}>
          <div>Remote Attendee Registration ( After October 7, 2022 )</div>
          <span>400,00 USD</span>
        </div>
      </div>
      <h2>ISBRA 2022 Venue</h2>
      <p>ISBRA 2022 will take place at University of Haifa, Haifa, Israel.</p>
      <img className={styles.image} src={image.src} />
      <h2>Hotels</h2>
      <b>Transportation from Ben-Gurion air port to Haifa (Hof haCarmel station):</b>
      <p>The most convenient way to get to Haifa is by the <a rel="noreferrer" target="_blank" href="https://www.rail.co.il/en"> public train</a>. Train operates regularly with percise timetable during weekdays (Sun-Thu) until late night. Fair is pretty cheap - near $10. There is also the <a rel="noreferrer" target="_blank" href="https://www.egged.co.il/"> public busses</a> that go either directly to Haifa central station - Hof haCarmel station. Here are <a  rel="noreferrer" target="_blank" href="https://www.rome2rio.com/map/Tel-Aviv/Haifa-Hof-HaCarmel-Station"> few options</a> with prices. There is also a 24/7 service taxi waiting right at the exit of the terminal with prices around $25. From Haifa Hof haKarmel station to U Haifa campus there is a regular <a rel="noreferrer" target="_blank" href="https://www.rome2rio.com/map/Tel-Aviv/Haifa-Hof-HaCarmel-Station"> public bus service</a> during the day hours.
      </p>
      <b>Hotels in Haifa that are recommended (prices may not be accurate or updated and depand on season and room type)</b>
      <p><a  rel="noreferrer" target="_blank" href="https://www.danhotels.com/HaifaHotels/DanCarmelHaifaHotel"> Dan Carmen Hotel</a> – 217$ per night<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.danhotels.com/HaifaHotels/DanCarmelHaifaHotel"> Dan Panorama Haifa Hotel</a> – 150$ per night<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.danhotels.com/HaifaHotels/MirabellePlazaHaifaHotel"> Mirabelle Plaza Haifa</a> – 160$ per night<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.leonardo-hotels.com/haifa/leonardo-plaza-haifa"> Leonardo Plaza Haifa</a> – 195$ per night<br></br>
         <a  rel="noreferrer" target="_blank" href="http://carmella-boutique-hotel.haifa-hotels-il.com/en/"> Carmella Boutique Hotel</a> – 145$ per night<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.goldencrown-hotels.com/templars-boutique-hotel-haifa"> Templars Boutique Hotel</a> - 250$ per night<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.goldencrown-hotels.com/%D7%91%D7%99%D7%AA-%D7%9E%D7%9C%D7%95%D7%9F-%D7%91%D7%97%D7%99%D7%A4%D7%94"> Golden Crown Haifa</a> – 145$ per night<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.colonyhaifa.com/"> The Colony Hotel</a> – 190$ per night<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.villacarmel.co.il/en/"> Villa Carmel Boutique Hotel</a> – 130$ per night
      </p>
      <h2>Restaurants</h2>
      <p><a  rel="noreferrer" target="_blank" href="https://www.minna-tomei.co.il/"> https://www.minna-tomei.co.il </a> - Asian kitchen <br></br>
         <a  rel="noreferrer" target="_blank" href="http://www.bprest.co.il/"> http://www.bprest.co.il/</a> - Burger place<br></br>
         <a  rel="noreferrer" target="_blank" href="https://isabelabar.rest.co.il"> https://isabelabar.rest.co.il</a> - Italian, sea food<br></br>
         <a  rel="noreferrer" target="_blank" href="https://eataliano.rest.co.il"> https://eataliano.rest.co.il</a> - Italian restaurant<br></br>
         <a  rel="noreferrer" target="_blank" href="https://m.facebook.com/RolaLevantineKitchen"> https://m.facebook.com/RolaLevantineKitchen</a> - Levantine kitchen<br></br>
         <a  rel="noreferrer" target="_blank" href=" https://libira.co.il"> https://libira.co.il</a> – Brewery / Restaurant<br></br>
         <a  rel="noreferrer" target="_blank" href="https://changba.co.il"> https://changba.co.il</a> - Thai food<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.vivino.co.il/resturants/haifa1"> https://www.vivino.co.il/resturants/haifa1</a> - Italian food<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.raffaello.co.il"> https://www.raffaello.co.il</a> - Italian food<br></br>
         <a  rel="noreferrer" target="_blank" href="https://zafririm1.co.il"> https://zafririm1.co.il</a> - Versatile restaurant<br></br>
         <a  rel="noreferrer" target="_blank" href="https://habokrim.rest.co.il"> https://habokrim.rest.co.il</a>  - Steak house<br></br>
         <a  rel="noreferrer" target="_blank" href="https://www.sinta-bar.co.il"> https://www.sinta-bar.co.il</a> - Urban kitchen
      </p>
    </>
  );
}

export default Registration;