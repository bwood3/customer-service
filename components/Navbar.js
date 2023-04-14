import Link from "next/link";
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <>
            <header>
                <Link href="/" className={styles.logo}>logo</Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">home</Link>
                        </li>
                        <li>
                            <Link href="/customers">customers</Link>
                        </li>
                        <li>
                            <Link href="/">login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar;