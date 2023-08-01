// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Comment, Loader } from '../components';
// import { getPosts } from '../api';
// import styles from '../styles/home.module.css';

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await getPosts();

//       if (response.success) {
//         setPosts(response.data.posts);
//       }

//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className={styles.postsList}>
//       {posts.map((post) => (
//         <div className={styles.postWrapper} key={`post-${post._id}`}>
//           <div className={styles.postHeader}>
//             <div className={styles.postAvatar}>
//               <img
//                 src="https://img.icons8.com/?size=2x&id=13042&format=png"
//                 alt="user-pic"
//               />
//               <div>
//                 <Link
//                   to={{
//                     pathname: `/user/${post.user._id}`,
//                     state: {
//                       user: post.user,
//                     },
//                   }}
//                   className={styles.postAuthor}
//                 >
//                   {post.user.name}
//                 </Link>
//                 <span className={styles.postTime}>a minute ago</span>
//               </div>
//             </div>
//             <div className={styles.postContent}>{post.conent}</div>

//             <div className={styles.postActions}>
//               <div className={styles.postLike}>
//                 <img
//                   src="https://img.icons8.com/?size=2x&id=33479&format=png"
//                   alt="likes-icon"
//                 />
//                 <span>5</span>
//               </div>

//               <div className={styles.postCommentsIcon}>
//                 <img
//                   src="https://img.icons8.com/?size=2x&id=37966&format=png"
//                   alt="comments-icon"
//                 />
//                 <span>{post.comments.length}</span>
//               </div>
//             </div>
//             <div className={styles.postCommentBox}>
//               <input placeholder="Start typing a comment" />
//             </div>

//             <div className={styles.postCommentsList}>
//               {post.comments.map((comment) => (
//                 <Comment comment={comment} key={`comment-${comment._id}`} />
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;
import PropTypes from 'prop-types';
import styles from '../styles/home.module.css';

import { Post, CreatePost, FriendsList, Loader } from '../components';

import { useAuth, usePosts } from '../hooks';

const Home = () => {
  const auth = useAuth();
  const posts = usePosts();

  if (posts.loading) {
    return <Loader />;
  }
  return (
    <div className={styles.home}>
      <div className={styles.postsList}>
        <CreatePost />
        {posts.data.map((post) => (
          <Post post={post} key={`post-${post._id}`} />
        ))}
      </div>
      {auth.user && <FriendsList />}
    </div>
  );
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default Home;
