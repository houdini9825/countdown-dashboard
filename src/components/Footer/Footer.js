import FacebookImg from '../../images/icon-facebook.svg';
import PinterestImg from '../../images/icon-pinterest.svg';
import InstagramImg from '../../images/icon-instagram.svg';
import styles from './Footer.module.css'

function Footer(props) {

	return (
		<div className={`${styles.container} ${props.className}`}>
			<a href='https://facebook.com'><img src={FacebookImg} /></a>
			<a href='https://pinterest.com'><img src={PinterestImg} /></a>
			<a href='https://instagram.com'><img src={InstagramImg} /></a>
		</div>
	);
}

export default Footer;
