import Header from '../Header/Header.jsx'
import Home from '../Home/Home.jsx'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.containerApp}>
      <Header/>
      <div className={styles.scroll}></div>
    </div>
  )
}

export default App
