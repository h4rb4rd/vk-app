import React from 'react';
import './post.css';

const Post = (props) => {
  return (
    <p className="profile__post profile-post">
      {props.postText}
      <span>
        {props.likes} <a href="#" className="profile-post__like"></a>
      </span>
    </p>
  );
};
export default Post;
