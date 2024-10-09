import styles from "./page.module.css"
import Link from "next/link"

const Home = () => {  return (<div>
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}><Link href="/" target="_blank" className={styles.link}>Home</Link></li>
        <li className={styles.li}><Link href="/about" target="_blank" className={styles.link}>About</Link></li>
        <li className={styles.li}><Link href="/contact" target="_blank" className={styles.link}>Contact</Link></li>
        <li className={styles.li}><Link href="/services" target="_blank" className={styles.link}>Services</Link></li>
      </ul>
    </nav>
    <h1 className={styles.h1}>Welcome to Home Page</h1>
  </div>)
}

export default Home