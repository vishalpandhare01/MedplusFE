import styles from "./login.module.scss";
import login from "../../../assets/login.png";
import LineInput from "../../ui/input1";
import { useEffect, useState } from "react";
import ButtonFill from "../../ui/buttonfill";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <section>
        <div className="flex justify-center items-center mt-32 ">
        <div className="flex justify-center items-center shadow-2xl flex-wrap">
          <div className="border p-3">
            <h3 className={styles.welcome}>Welcome Admin</h3>
            <img src={login} alt="" width={420}/>
          </div>
          <div className="p-5">
            <p>
              <span className="font-semibold">Welcome admin!</span> Please Login
              to your Account{" "}
            </p>
            <LineInput
              placeholder="Email"
              lable="email"
              setUserinput={setEmail}
            />
            <LineInput
              placeholder="*****"
              lable="Password"
              setUserinput={setPassword}
            />
            <div className="text-center mt-3">
              <a href="/">Or <span className="text-blue-600">Login</span> With OTP</a>
            </div>
            <LineInput
              placeholder="Mobile"
              lable="Mobile"
              type="number"
              setUserinput={setPassword}
            />
            <div className="flex justify-around w-52 m-3">
              <ButtonFill text="LOGIN" type="submit"/>
              <button>SIGNUP</button>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
