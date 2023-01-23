import ReactDOM from 'react-dom';
import { ReactComponent as HillsImage } from '../../images/pattern-hills.svg';
import styles from './Hills.module.css';


function Hills() {
	return ReactDOM.createPortal(
		<HillsImage className={styles.svg}/>,
		document.getElementById('overlays')
	);
}

export default Hills;
