import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const MockCommentList = () => {
  const [mockCommentList, setMockCommentList] = useState([]);

  useEffect(() => {
    fetch('data/bomi/commentMockData.json')
      .then(res => res.json())
      .then(data => {
        setMockCommentList(data);
      });
  }, []);

  return (
    <div>
      <Comment arr={mockCommentList} set={setMockCommentList} mine={false} />
    </div>
  );
};

export default MockCommentList;
