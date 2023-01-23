import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TimerContainer from './components/TimerContainer/TimerContainer';
import styles from './App.module.css';
import Hills from './components/HillsOverlay/Hills';
import DataEntry from './components/DateEntry/DateEntry'
import { useState } from 'react';


function App() {
  const [enteredDate, setEnteredDate] = useState('January 1 2024')

  const handleSubmit = (val) => {
    setEnteredDate(val)
  }

	return (
		<div className={styles.container}>
			<Header className={styles.header} />
      <DataEntry className={styles.form} onSubmit={handleSubmit} />
			<TimerContainer date={enteredDate} className={styles.mainContent}/>
			<Footer className={styles.footer}/>
			<Hills />
		</div>
	);
}

export default App;
