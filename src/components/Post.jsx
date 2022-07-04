import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';




export function  Post(props){
    console.log(props);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        
                        src="https://github.com/joaopnk.png" 
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

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}