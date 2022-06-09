import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';

import styles from './App.module.css';



export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
              author="João Pedro"
              content="lorem ipsum dolor sit amet, consectetur adipiscing"
            />
          <Post 
              author="Pedro João"
              content="lorem ipsum dolor sit amet, consectetur adipiscing"
          />
        </main>
      </div>
    </div>
  )
}

