import styles from "./login.module.scss";
import login from "../../../assets/login.png";
import LineInput from "../../ui/input1";
import { useEffect, useState } from "react";
import ButtonFill from "../../ui/buttonfill";
import Buttonempty from "../../ui/buttonempty";
import left from '../../../assets/left.png'
import right from '../../../assets/right.png'


export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <section>
        <div>
          <div className="flex justify-center items-center mt-32">
            <div className="flex justify-center items-center shadow-2xl flex-wrap ">
              <div className="border p-5">
                <h3 className={styles.welcome}>Welcome Admin</h3>
                <img src={login} alt="" width={420} />
              </div>
              <div className="p-8">
                <p className="text-xl">
                  <span className="font-semibold">Welcome admin!</span> Please
                  Login to your Account{" "}
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
                  <a href="/">
                    Or <span className="text-blue-600">Login</span> With OTP
                  </a>
                </div>
                <LineInput
                  placeholder="Mobile"
                  lable="Mobile"
                  type="number"
                  setUserinput={setPassword}
                />
                <div className="flex justify-around mt-4">
                  <ButtonFill text="LOGIN" type="submit" />
                  <Buttonempty text="SIGNUP" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
