import styles from './TimerContainer.module.css';
import Timer from '../Timer/Timer';
import { useEffect, useReducer } from 'react';
import getDateInfo from '../../helpers/getDateInfo';

const CHANGE_DATE = 'change-date'
const DECREMENT = 'decrement'

const reducer = (state, action) => {
  if (action.type === CHANGE_DATE) {
    return getDateInfo(action.payload)
  }

  const newState = {
    ...state,
    seconds: state.seconds - action.payload
  }
  if (newState.seconds === -1) {
    newState.seconds = 59
    newState.minutes--
  }

  if (newState.minutes === -1) {
    newState.minutes = 59
    newState.hours--
  }

  if (newState.hours === -1) {
    newState.hours = 23
    newState.days--
  }

  return newState
}


function TimerContainer({date, ...rest}) {
  const [state, dispatch] = useReducer(reducer, {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    dispatch({type: CHANGE_DATE, payload: new Date(date)})

    const interval = setInterval(() => {
      dispatch({type: DECREMENT, payload: 1})
    }, 1000)

    return () => clearInterval(interval)
  }, [date])

	return (
		<div className={`${rest.className} ${styles.container}`}>
			<Timer type='days' value={state.days}/>
			<Timer type='hours' value={state.hours}/>
			<Timer type='minutes' value={state.minutes}/>
			<Timer type='seconds' value={state.seconds}/>
		</div>
	);
}

export default TimerContainer;
