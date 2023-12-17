import styles from './navbar.module.scss'
import profile from '../../assets/icons/profile.png'

export default function HomeNavbar(){
    return <>
    <nav className={`${styles.nav} bg-orange` }>
        <ul className='flex justify-end items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Admin</li>
            <li><img src={profile} alt="" className='bg-black p-1' /></li>
        </ul>
    </nav>
    </>
}
