import styles from './Timer.module.css'


function Timer({type, value}) {
	return (
		<div className={styles.container}>
			<div>{value.toString().padStart(2, '0')}</div>
      <p>{type}</p>
		</div>
	);
}

export default Timer;
