import styles from "./navbar.module.scss";
import profile from "../../assets/icons/profile.png";
import { useState } from "react";

export default function HomeNavbar() {
const [menu ,setMenu] = useState(false)
console.log(menu)

  return (
    <>
      <nav className={`${styles.nav} bg-orange`}>
        <ul className="flex justify-end items-center">
          <li>Home</li>
          <li>About</li>
          <li>Admin</li>
          <li>
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1" onClick={()=>menu?setMenu(false):setMenu(true)}>
                <img src={profile} alt="" className="bg-black p-1" />
              </div>
              <ul
                tabIndex={0}
                id="menu"
                className={`${`dropdown-content z-[1] menu p-2 m-2 bg-base-100 rounded-box w-20 shadow-lg ${menu ?'visible':'hidden' } ` }`}
              >
                <li>
                  <a className="text-gray-600 hover:text-blue-400">Doctor </a>
                </li>
                <li>
                  <a className="text-gray-600  hover:text-blue-400">User </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
