import React from 'react'
import styles from './nabMenu.module.css'

function NavMenu() {
  return (
    <div className={styles.navBarBox}>
        <ul>
            <li className={styles.navLink}>Home</li>
            <li className={styles.navLink}>About</li>
            <li className={styles.navLink}>Services</li>
            <li className={styles.navLink}>Contact</li>
            <li className={styles.navLink}>Blog</li>
        </ul>
    </div>
  )
}

export default NavMenu