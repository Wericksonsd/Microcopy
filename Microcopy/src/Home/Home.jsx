import styles from './Home.module.css'
import computo from'../assets/computinhos.svg'

function Home (){

    return (
        <div className={styles.containerHome}>
            <img src={computo} alt="" className={styles.imageComputo}/>
            <div>
                <h1></h1>
                <h3></h3>
            </div>
        </div>
    )
}

export default Home