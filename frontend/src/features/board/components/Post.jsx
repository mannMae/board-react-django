import { useState } from 'react';
import { deletePost } from '../api/deletePost';
import { Button, Content, Title, Wrapper } from './Post.style';

export const Post = ({ id, title, content, setPostList }) => {
  const handleClickDelete = () => {
    deletePost({ id })
      .then((res) => {
        setPostList((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Button onClick={handleClickDelete}>삭제하기</Button>
    </Wrapper>
  );
};
