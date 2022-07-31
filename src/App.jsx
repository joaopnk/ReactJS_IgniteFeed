import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';

import styles from './App.module.css';

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

// # Simulando dados vindo de uma API
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaopnk.png',
      name: 'João Pedro',
      role: 'Web developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀'},
      {type: 'link', content: 'github.com/joaopnk'},
    ],
    publishedAt: new Date('2022-07-04 20:10:10')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/joao.png',
      name: 'João',
      role: 'Web developer back-end'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é IgniteFeed 🚀'},
      {type: 'link', content: 'github.com/joaopnk'},
    ],
    publishedAt: new Date('2022-07-01 20:05:10')
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

