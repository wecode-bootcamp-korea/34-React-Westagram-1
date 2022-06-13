import React, { useState, useEffect } from 'react';
import './main.scss';
import CommentBoard from '../../../components/CommentBoard';

const MainBohyun = () => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  const addComment = e => {
    e.preventDefault();
    setCommentList([...commentList, inputValue]);
  };
  // useEffect(() => {
  //   commentList;
  // }, [commentList]);

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
            <img src="./images/icons/explore.png" className="icons" />
          </a>
          <a href="">
            <img src="./images/icons/heart.png" className="icons" />
          </a>
          <a href="">
            <img src="./images/icons/profile.png" className="icons" />
          </a>
        </div>
      </nav>

      <main className="mainbody">
        <div className="feeds">
          <div className="article">
            <div className="user_whole">
              <img
                src="./images/img_profile/profile_left_top.JPG"
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
              src="./images/img_profile/main.jpg"
              width="450px"
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
                src="./images/img_profile/profile_left_bottom.jpeg"
                className="circle_mainbottom"
              />
              <div className="like_counts">
                <p>
                  Liked by <strong>realisshoman</strong> and others
                </p>
              </div>
            </div>
            <div className="descriptions">
              <p>
                <strong>arielle</strong>
              </p>

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
                <p>
                  <strong>realisshoman</strong>
                </p>
                <div className="friendComment_redHeart">
                  <p>❤️❤️</p>
                </div>
              </div>
              <div className="friendComment_heart">
                <img src="./images/icons/heart.png" width="13px" />
              </div>
            </div>
            <div className="newCommentBox" />
            {commentList.map(event => {
              // setCommentList(event.target.value);
              return <div> {event}</div>;
            })}
            ;{/* <CommentBoard commentList={commentList} /> */}
            <div className="commentsWrapper">
              <form onSubmit={addComment}>
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
                  <button id="postButton" onClick={addComment}>
                    post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="main_right">
          <div className="right_profile">
            <img
              src="./images/img_profile/beenzino.png"
              className="right_profile_pic"
            />

            <div className="right_profile_text">
              <p>
                <strong>realisshoman</strong>
              </p>
              <p id="greyText">임성빈</p>
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
                    src="./images/img_stories/story1.JPG"
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
                    src="./images/img_stories/story2.jpeg"
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
                    src="./images/img_stories/story3.jpeg"
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
                    src="./images/img_stories/story4.JPG"
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
                  src="./images/img_recommendations/rec1.JPG"
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
                  src="./images/img_recommendations/rec2.JPG"
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
                  src="./images/img_recommendations/rec3.jpeg"
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
