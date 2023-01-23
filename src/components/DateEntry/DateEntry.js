import { useState } from 'react';
import styles from './DateEntry.module.css';
import validateDate from '../../helpers/validateDate';

function DataEntry({onSubmit, className}) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateDate(inputValue)) {
    onSubmit(inputValue)
    setInputValue('')
    } else {
      alert('Please enter a valid date.\nExample formats: January 1 2023 or Jan 1 2023')
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleFocus = (e) => {
    e.target.placeholder = ''
  }

  const handleBlur = (e) => {
    if (!e.target.value) e.target.placeholder = 'Enter a date'
  }

	return (
		<form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
			<input onBlur={handleBlur} onFocus={handleFocus} placeholder='Enter a date' value={inputValue} onChange={handleChange}/>
			<button>Submit</button>
		</form>
	);
}

export default DataEntry
