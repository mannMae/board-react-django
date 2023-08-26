import { useEffect, useState } from 'react';
import { getPosts } from '../api/getPosts';
import { Button, Buttons, Form, Posts, Wrapper } from './Board.style';
import { Post } from '../components/Post';
import { InputField } from '../components/InputField';
import { createPost } from '../api/createPost';

export const Board = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => setPostList(res.data))
      .catch((error) => console.error(error));
  }, []);

  const handleClickClear = () => {
    setTitle('');
    setContent('');
  };

  const handleClickSubmit = () => {
    createPost({ title, content })
      .then((res) => {
        setPostList((prev) => [...prev, res.data]);
      })
      .catch((error) => console.error(error));
    handleClickClear();
  };

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputField label="타이틀" value={title} setValue={setTitle} />
        <InputField label="컨텐츠" value={content} setValue={setContent} />
        <Buttons>
          <Button onClick={handleClickClear}>취소하기</Button>
          <Button onClick={handleClickSubmit}>등록하기</Button>
        </Buttons>
      </Form>
      <Posts>
        {postList.map((p, i) => (
          <Post
            key={i}
            id={p.id}
            title={p.title}
            content={p.content}
            setPostList={setPostList}
          />
        ))}
      </Posts>
    </Wrapper>
  );
};
