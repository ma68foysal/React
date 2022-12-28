import React from 'react'
import styles from '../Layout/layout.module.css'

function Layout(props) {
  return (
    <div className={styles.NavBar}>
        {props.children}
    </div>
  )
}

export default Layout