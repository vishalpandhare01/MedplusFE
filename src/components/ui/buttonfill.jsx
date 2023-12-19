import styles from './buttonfill.module.scss'

export default function ButtonFill({text,type,onclick}){
    return(
        <button className={styles.buttonfill} type={type}>
            {text}
        </button>
    )
}
