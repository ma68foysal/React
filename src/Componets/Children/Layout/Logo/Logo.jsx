import React from 'react'
import logo from './logo.svg'
import styles from "./logo.module.css"

function Logo() {
  return (
    <div className={StyleSheet.logoBox}>
        <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default Logo