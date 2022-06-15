import React, { useState, useEffect } from 'react';
import CommentBoard from '../../../components/CommentBoard';
import CommentBox from '../../../components/CommentBox';
import './main.scss';

const MainBohyun = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);
  const addComment = e => {
    e.preventDefault();
    setCommentList([...commentList, inputValue]);
    setInputValue('');
  };
  // useEffect(() => {
  //   commentList;
  // }, [commentList]);
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
          <a href="">
            {' '}
            <img
              src={require('../../../assets/bohyun/icons/explore.png')}
              className="icons"
            />
          </a>
          <a href="">
            <img
              src={require('../../../assets/bohyun/icons/heart.png')}
              className="icons"
            />
          </a>
          <a href="">
            <img
              src={require('../../../assets/bohyun/icons/profile.png')}
              className="icons"
            />
          </a>
        </div>
      </nav>

      <main className="mainbody">
        <div className="feeds">
          <div className="article">
            <div className="user_whole">
              <img
                src={require('../../../assets/bohyun/img_profile/profile_left_top.JPG')}
                width="20px"
                className="circle_maintop"
              />
              <div className="user_info">
                <p>arielle</p>
              </div>
              <div className="dropdown">
                <i className="fa-solid fa-ellipsis" />
              </div>
            </div>
            <img
              src={require('../../../assets/bohyun/img_profile/main.JPG')}
              className="main_img"
            />
            <div className="buttons_whole">
              <div className="buttons_left">
                <i className="fa-solid fa-heart" />
                <i className="fa-solid fa-comment" />
                <i className="fa-solid fa-paper-plane" />
              </div>
              <div className="buttons_right">
                <i className="fa-solid fa-bookmark" />
              </div>
            </div>
            <div className="likes">
              <img
                src={require('../../../assets/bohyun/img_profile/profile_left_bottom.jpeg')}
                className="circle_mainbottom"
              />
              <div className="like_counts">
                <p>
                  Liked by <span className="boldID">realisshoman</span> and
                  others
                </p>
              </div>
            </div>
            <div className="descriptions">
              <span className="boldID">arielle</span>

              <div className="caption">
                <p>
                  So this is it ! 🙌🏽 I’ve just landed from Milan and that wraps
                  up my flying life as Emirates cabin crew 👠 I have been super
                  blessed and lucky enough to travel to 41 countries and 71
                  cities around the world meeting amazing people along the way
                  🌏
                </p>
              </div>
            </div>
            <div className="friendComment_whole">
              <div className="friendComment_user">
                <span className="boldID">realisshoman</span>
                <div className="friendComment_redHeart">
                  <p>❤️❤️</p>
                </div>
              </div>
              <div className="friendComment_heart">
                <img
                  src={require('../../../assets/bohyun/icons/heart.png')}
                  width="13px"
                />
              </div>
            </div>
            <CommentBox />
            <div className="newCommentBox">
              {commentList.map((event, index) => {
                // setCommentList(event.target.value);
                return (
                  <div className="newCommentEntry" key={index}>
                    <div className="entry">
                      <span className="boldID"> arielle</span>
                      <span>{event}</span>
                    </div>
                    <div className="newCommentButtons">
                      <img
                        onClick={changeHeart}
                        src={heart}
                        className="entryHeart"
                      />
                      <button
                        className="deleteButton"
                        onClick={() => {
                          let copy = [...commentList];
                          copy.splice(index, 1);
                          setCommentList(copy);
                        }}
                      >
                        x
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <form onSubmit={addComment} className="commentsWrapper">
              <div className="comments_box">
                <input
                  value={inputValue}
                  type="text"
                  placeholder="comment"
                  className="comments-box"
                  onChange={event => setInputValue(event.target.value)}
                />
              </div>
              <div className="comments_button">
                <button id="postButton">post</button>
              </div>
            </form>
          </div>
        </div>

        <div className="main_right">
          <div className="right_profile">
            <img
              src={require('../../../assets/bohyun/img_profile/beenzino.JPG')}
              className="right_profile_pic"
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
