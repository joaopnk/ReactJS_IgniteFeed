import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;

}

// Objeto para definir as propriedades do meu post (tipando os objetos)
interface postProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}



export function  Post({ author, publishedAt, content}: postProps){

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])

    // # Para armazear o texto digitado no input
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'De' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {

        // # Deixando o usuario na mesma pagina quando acontecer o submit
        event.preventDefault();

        // # Adicionando o comentario digitando no submit do botão (handleNewCommentChange atualizando o estado)
        setComments([...comments, newCommentText]);
        
        // # Atualizando para vazio após enviar
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity(``);
        // # Recuperando o valor digitado na text area quando haver mudança (onChange)
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        // # Mostrando pro usuario que precisa preencher ("required")
        event.target.setCustomValidity(`Este campo é obrigatório!`);
    }

    function deleteComment(commentToDelete: string){
        console.log(`Deletar comentário ${commentToDelete}`);

        // # Criando uma lista de comentarios sem o que estou deletando
        const commentsWithoutDeletedOne = comments.filter(comment => {
            // # Deletando os comentarios que forem diferente do que esta recebendo do commentToDelete (texto)
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    // # Para retornar TRUE ou FALSE.. complementar para validação do disabled do button em caso de nenhum texto digitado
    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl}
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if(line.type === 'link'){
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        /> 
                    )
                })}
            </div>
        </article>
    )
}