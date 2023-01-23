import styles from './Header.module.css'

function Header(props) {
  return <h1 className={`${props.className} ${styles.h1}`}>See how far away it is</h1>
}

export default Header