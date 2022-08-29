import classes from "./Home.module.css";
import Product from "./Product";

function Home() {
  return (
    <div className={classes.home}>
      <div className="home__container">
        <img
          className={classes.home__banner}
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB408004052_.jpg"
          alt="Website Banner"
        />
        <div className={classes.home__row}>
          <Product
          //use id not key, key will throw undefined
          id={Math.random()}
            title="Harry Potter Box Set: The Complete Collection (Set of 7 Volumes).Harry Potter Box Set: The Complete Collection (Set of 7 Volumes).Harry Potter Box Set: The Complete Collection (Set of 7 Volumes)"
            price={2943}
            rating={5}
            image="https://m.media-amazon.com/images/I/71rOzy4cyAL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id={Math.random()}
            title="Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, Launched in April 2022 (Magico Black)"
            price={1999}
            rating={4}
            image="https://m.media-amazon.com/images/I/51UhwaQXCpL._SX679_.jpg"
          />
        </div>
        <div className={classes.home__row}>
          <Product
            id={Math.random()}
            title='Noise ColorFit Pulse Spo2 Smart Watch with 10 days battery life, 60+ Watch Faces, 1.4" Full Touch HD Display Smartwatch, 24*7 Heart Rate Monitor Smart Band, Sleep Monitoring Smart Watches for Men and Women & IP68 Waterproof (Jet Black)'
            price={1499.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61epn29QG0L._SX522_.jpg"
          />
          <Product
            id={Math.random()}
            title="Xiaomi 12 Pro | 5G (Couture Blue, 8GB RAM, 256GB Storage) | Snapdragon 8 Gen 1 | 50MP+50MP+50MP Flagship Cameras(OIS)"
            price={62999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71xMba-NW-L._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id={Math.random()}
            title="Xiaomi 11T Pro 5G Hyperphone(Meteorite Black,12GB RAM,256GB Storage)|SD 888 5G|120W HyperCharge|Additional Exchange Offer|Get 3 Months YouTube Premium Free!"
            price={41999}
            rating={5}
            image="https://m.media-amazon.com/images/I/71qe5DogAtL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className={classes.home__row}>
          <Product
            id={Math.random()}
            title="Xiaomi 138.8 cm (55 inches) 4K Ultra HD Smart Android OLED Vision TV O55M7-Z2IN (Black) (2022 Model)"
            price={94999}
            rating={5}
            image="https://m.media-amazon.com/images/I/81onGhenkUL._SX522_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
