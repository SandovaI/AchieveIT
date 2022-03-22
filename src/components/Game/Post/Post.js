import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase";
import moment from "moment";
const Posts = () => {
  const [post, setPosts] = useState([]);
  const postImages = (post) => {
    const post_images = post.images?.map((file) => (
      <div className="">
        <img src={file} alt="" />
      </div>
    ));
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
    <div>
      {" "}
      {post.map((post) => (
        <div>
          <div key={post.id}>
            <div className=""> {post.caption}</div>
            <div className="">{postImages(post)}</div>
          </div>
          <p> {moment(post.timestamp).fromNow()}</p>
        </div>
      ))}
    </div>
  );
};
export default Posts;
