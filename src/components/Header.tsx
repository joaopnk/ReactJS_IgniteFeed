// Ambiente windows:
// import styles from './Header.module.css';
// import igniteLogo from '../assets/ignite-logo.svg';

// Por algum motivo que passar o diretorio completo após eu trocar para ambiente linux
import styles from '/home/jp/Área de trabalho/dev/ReactJS_IgniteFeed/src/components/Header.module.css';
import igniteLogo from '/home/jp/Área de trabalho/dev/ReactJS_IgniteFeed/src/assets/Ignite-logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}