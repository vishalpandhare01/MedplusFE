import styles from "./buttonempty.module.scss";

export default function Buttonempty({ text, type, onclick }) {
  return (
    <button className={styles.buttonemty} type={type}>
      {text}
    </button>
  );
}
