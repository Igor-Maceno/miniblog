import styles from './Post.module.css';

import { useParams } from 'react-router-dom';

const Post = () => {

    const { id } = useParams();
  return (
    <div className={styles.post}>
        <h1>{id}</h1>
    </div>
  )
}

export default Post