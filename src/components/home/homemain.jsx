import styles from "./homemain.module.scss";
import logo from "../../assets/Logo_Med+.png";
import banner from "../../assets/Homepagbanner1.png";
import mainimge from "../../assets/Group 4.png";
import uptodate from "../../assets/Rectangle 58.png";

export default function HomeMain() {
  return (
    <>
      <section className="p-5">
        <div className="flex flex-wrap">
          <div className={styles.col1}>
            <div className="lg:flex">
              <h2 className="text-5xl lg:text-4xl font-bold">Health Powered by</h2>
              <img src={logo} alt="logo" />
            </div>
            <div className="lg:mt-16">
              <p className="text-2xl">
                Supporting better health outcomes and clinical excellence with
                intelligent technology.
              </p>
            </div>
          </div>
          <div className={styles.col2}>
            <img src={banner} alt="Homepagbanner1" className="lg:ml-80" />
          </div>
        </div>
        <div className="font-semibold text-gray-700 ">
          <div className="bg-gray w-72 rounded-md p-3 m-2 shadow-sm">
            <p>Get Your Med+ Card Now</p>
          </div>
          <div className="flex">
            <div className="bg-gray w-36 rounded-md p-3 m-2 shadow-sm">
              <p>Book an Appintment </p>
            </div>
            <div className="bg-gray w-36 rounded-md p-3 m-2 shadow-sm">
              <p>Check Your Results </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center m-5">
          <img src={mainimge} alt="" width={1116} />
        </div>
        <div className="flex justify-center flex-wrap">
          <div className={styles.colreactngle1}>
           <div > 
           <h3 className="lg:text-2xl font-semibold m-3">NATIONAL IMMUNIZATION AWARENESS MONTH</h3>
            <p className="text-xl m-3">
              Staying up to date on your vaccines can protect you and your loved
              ones from preventable diseases.
            </p>
            <p className="text-xl m-3">
              Check the immunization schedule for guidance on recommended
              routine vaccinations.
            </p>
           </div>
          </div>
          <div className={styles.colreactngle2}>
            <img src={uptodate} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
