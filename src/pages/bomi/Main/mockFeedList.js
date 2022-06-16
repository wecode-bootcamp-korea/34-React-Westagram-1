import React, { useState, useEffect } from 'react';
import Feed from './Feed';

const MockFeedList = () => {
  const [mockFeedList, setMockFeedList] = useState([]);

  useEffect(() => {
    fetch('data/bomi/feedMockData.json')
      .then(res => res.json())
      .then(data => {
        setMockFeedList(data);
      });
  }, []);

  return (
    <div>
      {mockFeedList.map((feed, index) => {
        return (
          <li key={index}>
            <Feed img={feed.img} name={feed.name} text={feed.text} />
          </li>
        );
      })}
    </div>
  );
};

export default MockFeedList;
