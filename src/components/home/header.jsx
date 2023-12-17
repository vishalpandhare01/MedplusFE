import styles from './header.module.scss'
import logo from "../../assets/Logo_Med+.png";

export default function HomeHeader() {
  return (
    <>
      <header>
        <div className="p-5 text-sm">
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.logoText} >Where healing matters</p>
        </div>
      </header>
    </>
  );
}

