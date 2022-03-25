import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import moment from "moment";
import styles from "./post.module.scss";
import ConnectionDisplay from "../../Wallet/ConnectionDisplay";
import Video from "../../Video/Video";
const Posts = () => {
  const [post, setPosts] = useState([]);
  const postImages = (post) => {
    const post_images = post.images?.map((file) => <Video file={file} />);
    return post_images;
  };
  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  return (
    <div className={styles.div}>
      <div>
        {post.map((post) => (
          <div className={styles.post}>
            <div key={post.id}>
              <h5
                className={styles.challenge}
              >{`${post.challenge} Challenge!`}</h5>
              <div className={styles.postContainer}>
                <div className={styles.align}>
                  <ConnectionDisplay className={styles.address} />
                  <div className={styles.caption}>{post.caption}</div>
                  {postImages(post)}
                </div>
              </div>
            </div>
            <p className={styles.timestamp}>
              {moment(post.timestamp).fromNow()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Posts;
