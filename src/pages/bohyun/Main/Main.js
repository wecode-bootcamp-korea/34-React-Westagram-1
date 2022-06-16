import React, { useState } from 'react';
import Feeds from '../../../components/Feeds';
import './main.scss';

const MainBohyun = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  const addComment = e => {
    e.preventDefault();
    setCommentList([...commentList, inputValue]);
    setInputValue('');
  };

  const [heart, setHeart] = useState(
    require('../../../assets/bohyun/icons/heart.png')
  );

  const changeHeart = () => {
    if (heart === require('../../../assets/bohyun/icons/heart.png')) {
      setHeart(require('../../../assets/bohyun/icons/redHeart.jpeg'));
    } else {
      setHeart(require('../../../assets/bohyun/icons/heart.png'));
    }
  };

  return (
    <div className="main">
      <nav className="menu">
        <div className="logo-box">
          <i className="fa-brands fa-instagram" />
          <span className="westagram">Westagram</span>
        </div>

        <div className="vertical" />

        <div className="search">
          <input type="search" placeholder="search" />
        </div>

        <div className="navigate">
          <a>
            <img
              src={require('../../../assets/bohyun/icons/explore.png')}
              className="icons"
              alt="exloreIcon"
            />
          </a>
          <a>
            <img
              src={require('../../../assets/bohyun/icons/heart.png')}
              className="icons"
              alt="heartIcon"
            />
          </a>
          <a>
            <img
              src={require('../../../assets/bohyun/icons/profile.png')}
              className="icons"
              alt="profileIcon"
            />
          </a>
        </div>
      </nav>

      <main className="mainbody">
        <div className="feeds">
          <Feeds
            commentList={commentList}
            changeHeart={changeHeart}
            heart={heart}
            setCommentList={setCommentList}
            addComment={addComment}
            inputValue={inputValue}
          />
        </div>

        <div className="main_right">
          <div className="right_profile">
            <img
              src={require('../../../assets/bohyun/img_profile/beenzino.JPG')}
              className="right_profile_pic"
              alt="Profile shown on the top right"
            />

            <div className="right_profile_text">
              <p>realisshoman</p>
              <p id="greyText">Been</p>
            </div>
          </div>

          <div className="right_stories">
            <div className="right_stories_head">
              <span>Stories</span>
              <span>
                <strong>View all</strong>
              </span>
            </div>

            <div className="right_stories_usersbox">
              <div className="right_stories_entry">
                <div className="right_stories_img type1">
                  <img
                    src={require('../../../assets/bohyun/img_stories/story1.jpeg')}
                    className="round_img"
                    alt="1st friend's story"
                  />
                </div>
                <div className="right_stories_text">
                  <p>
                    <strong>gigi</strong>
                  </p>
                  <p id="greyText">1 hour ago</p>
                </div>
              </div>
              <div className="right_stories_entry">
                <div className="right_stories_img type2">
                  <img
                    src={require('../../../assets/bohyun/img_stories/story2.jpeg')}
                    className="round_img"
                    alt="2nd friend's story"
                  />
                </div>
                <div className="right_stories_text">
                  <p>
                    <strong>theweeknd</strong>
                  </p>
                  <p id="greyText">2 hours ago</p>
                </div>
              </div>
              <div className="right_stories_entry">
                <div className="right_stories_img type3">
                  <img
                    src={require('../../../assets/bohyun/img_stories/story3.JPG')}
                    className="round_img"
                    alt="3th friend's story"
                  />
                </div>
                <div className="right_stories_text">
                  <p>
                    <strong>mimiarr</strong>
                  </p>
                  <p id="greyText">5 hours ago</p>
                </div>
              </div>
              <div className="right_stories_entry">
                <div className="right_stories_img type4">
                  <img
                    src={require('../../../assets/bohyun/img_stories/story4.jpeg')}
                    className="round_img"
                    alt="4th friend's story"
                  />
                </div>
                <div className="right_stories_text">
                  <p>
                    <strong>thv</strong>
                  </p>
                  <p id="greyText">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right_recommendations">
            <div className="right_recommendations_head">
              <span>Recommended for you</span>
              <span>
                <strong>View all</strong>
              </span>
            </div>

            <div className="right_recommendations_single">
              <div className="right_recommendations_left">
                <img
                  src={require('../../../assets/bohyun/img_recommendations/rec1.JPG')}
                  className="round_img"
                  alt="recommended user1"
                />
                <div className="right_recommendations_text">
                  <p>nasa</p>
                  <p id="greyText">voguemagazine is following</p>
                </div>
              </div>
              <button>Follow</button>
            </div>

            <div className="right_recommendations_single">
              <div className="right_recommendations_left">
                <img
                  src={require('../../../assets/bohyun/img_recommendations/rec2.JPG')}
                  className="round_img"
                  alt="recommended user2"
                />
                <div className="right_recommendations_text">
                  <p>gigihadid</p>
                  <p id="greyText">theweeknd is following</p>
                </div>
              </div>
              <button>Follow</button>
            </div>

            <div className="right_recommendations_single">
              <div className="right_recommendations_left">
                <img
                  src={require('../../../assets/bohyun/img_recommendations/rec3.jpeg')}
                  className="round_img"
                  alt="recommended user3"
                />
                <div className="right_recommendations_text">
                  <p>tatemodern</p>
                  <p id="greyText">gentlewomen is following</p>
                </div>
              </div>
              <button>Follow</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainBohyun;
