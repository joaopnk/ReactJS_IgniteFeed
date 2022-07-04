import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/71463038?v=4" 
             />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro</strong>
                            <time title="08 de junho as 21:08" dateTime="2022-06-08 21:08">Cerca de 1hr atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash 
                                size={24}
                            />
                        </button>
                    </header>

                    <p>Muito bom JP, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}