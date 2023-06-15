//CSS
import styles from './About.module.css';

import { Link } from 'react-router-dom'

function About() {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no Front-end e Firebase no Back-end.</p>
      <Link to="/post/create" className="btn">Criar Post</Link>
    </div>
  );
}

export default About;
