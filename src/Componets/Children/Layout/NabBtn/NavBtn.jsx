import React from 'react'
import styles from './navBtn.module.css'

function NavBtn() {
  return (
    <div className={styles.btnBox}>
        <a className={styles.signInBtn} href="#">Sign In</a>
        <a className={styles.navBtn} href="#">Get Started</a>
    </div>
  )
}

export default NavBtn