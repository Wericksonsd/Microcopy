import {useState, useEffect} from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.svg';

function Header (){

    const [widthSize, setWidthSize] = useState(window.innerWidth);
    const [heigthSize, setHeigthSize] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })

    function handleResize(){
        setWidthSize(window.innerWidth);
        setHeigthSize(window.innerHeight);
    }

    return (
        <div className={styles.containerHeader}>
            <div className={styles.logo}>
                <img src={logo} alt="LOGO" />
            </div>
            <div className={styles.itensMenu}>
                <a href="#">{(widthSize > 1000) ? 'MENU' : <span class="material-symbols-outlined">home</span>}</a>
                <a href="#">{(widthSize > 1000) ? 'IMPRESSOS' : <span class="material-symbols-outlined">photo_prints</span>}</a>
                <a href="#">{(widthSize > 1000) ? 'DIGITAIS' : <span class="material-symbols-outlined">web_stories</span>}</a>
                <a href="#">{(widthSize > 1000) ? 'CARIMBOS' : <span class="material-symbols-outlined">approval</span>}</a>
                <a href="#">{(widthSize > 1000) ? 'PAPELARIA' : <span class="material-symbols-outlined">description</span>}</a>
                <a href="#">{(widthSize > 1000) ? 'DIVERSOS' : <span class="material-symbols-outlined">note_stack</span>}</a>
            </div>
            <div className={styles.perfil}>
                <button><span class="material-symbols-outlined">account_circle</span></button>
                <button><span class="material-symbols-outlined">settings</span></button>
            </div>
        </div>
    )
}

export default Header