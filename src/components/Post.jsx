import styles from './Post.module.css';

export function  Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/71463038?v=4" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>João Pedro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="08 de junho as 21:08" dateTime="2022-06-08 21:08">Publicado há 1hr</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀</p>
                <p>👉{' '}<a href="">github.com/joaopnk</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                    <a href="">#ignite</a>
                </p>
            </div>
        </article>
    )
}