import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReplyBoard from './ReplyBoard';
import './main.scss';

const MainEunkyeong = () => {
  const [replyValue, setReplyValue] = useState('');
  const [replyList, setReplyList] = useState([]);
  const addReply = () => {
    setReplyList([...replyList, replyValue]);
    setReplyValue('');
  };
  const doNotSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <nav className="MainEunkyeong">
        <div className="goHome">
          <Link to="/main" className="homeAnchor">
            <div className="logoBox">
              <img
                src="../images/eunkyeong/instagram.png"
                alt="instagram"
                className="instaLogoImage"
              />
              <div className="emptyBorder" />
              <span className="logoText">Westagram</span>
            </div>
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="검색" className="searchId" />
        </div>
        <div className="socialIcons">
          <div className="icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="나침반"
              className="compass"
            />
          </div>
          <div className="icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="좋아요"
              className="likes"
            />
          </div>
          <div className="icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="프로필"
              className="human"
            />
          </div>
        </div>
      </nav>
      <main className="mainPageMain">
        <div className="feeds">
          <article className="stories">
            {story.map(el => {
              return <div className={el.story} key={el.id} />;
            })}
            {/* <div className="story1 story" />
            <div className="story2 story" />
            <div className="story3 story" />
            <div className="story4 story" />
            <div className="story5 story" />
            <div className="story6 story" /> */}
          </article>
          <article className="article1">
            <div className="userProfile">
              <div className="userPhoto">
                <img
                  src="../images/eunkyeong/myprofile.jpg"
                  alt="user프로필"
                  className="userFace"
                />
                <div className="userId">vvjoahvv</div>
              </div>
              <div className="seeMoreBtn">
                <img
                  src="../images/eunkyeong/option.png"
                  alt=""
                  className="optionImage"
                />
              </div>
            </div>
            <div className="feedImage">
              <img
                src="../images/eunkyeong/pizza.jpg"
                alt="pizza"
                className="pizzaImage"
              />
            </div>
            <section className="feedContents">
              <div className="feedDescription">
                <div className="responseIcons">
                  <div className="iconsLeft">
                    <button className="feedButton heartBtn" />
                    <button className="feedButton commentBtn" />
                    <button className="feedButton directMessageBtn" />
                  </div>
                  <div className="iconsRight">
                    <i className="fa-regular fa-bookmark" />
                  </div>
                </div>
                <div id="likesFigure" />
                <div className="userComment">
                  <span className="myId">vvjoahvv</span>
                  <span className="myComment">
                    피자 너무 먹고싶다. 하와이안 피자, 포테이토 피자, 루꼴라
                    피자
                  </span>
                </div>
                <div className="registerdReply">
                  <span className="friendsId">pizzamania112</span>
                  <span className="friendsComment">나도 먹고싶다!</span>
                  <button className="replyLike">
                    <i className="fa-regular fa-heart" id="small" />
                  </button>
                </div>
                <div className="uploadDate">2일 전</div>
              </div>
            </section>
            <div className="reply">
              <ul id="replyList" />
              <ReplyBoard replyList={replyList} setReplyList={setReplyList} />
              <form action="" onSubmit={doNotSubmit}>
                <input
                  value={replyValue}
                  className="replyBox"
                  id="replySubmit"
                  type="text"
                  placeholder=" 댓글 달기..."
                  onChange={event => setReplyValue(event.target.value)}
                />
                <button onClick={addReply} className="submitBtn">
                  게시
                </button>
              </form>
            </div>
          </article>
          <article className="article2" />
        </div>
        <div className="mainRight">
          <div className="userSelf">
            <div className="userSelfPhoto">
              <img
                src="../images/eunkyeong/myprofile.jpg"
                alt=""
                className="UserPicture"
              />
            </div>
            <div className="userSelfInfo">
              <p className="userSelfId">vvjoahvv</p>
              <p className="userSelfDescription">오늘점심뭐먹지</p>
            </div>
          </div>
          <div className="storyCollection">
            <div className="storyInner">
              <span className="groupingStories">스토리</span>
              <button className="loadallBtn">모두 보기</button>
            </div>
            <div className="storyList">
              {storyList.map(story => {
                return (
                  <div className="storyBox" key={story.id}>
                    <div className="story11 story" />
                    <div className="storyId">
                      <p className="storyUploader">{story.user}</p>
                      <span className="whenUpload">{story.past}</span>
                    </div>
                  </div>
                );
              })}
              {/* <div className="storyBox">
                <div className="story11 story" />
                <div className="storyId">
                  <p className="storyUploader">사용자1</p>
                  <span className="whenUpload">1분전</span>
                </div>
              </div>
              <div className="storyBox">
                <div className="story12 story" />
                <div className="storyId">
                  <p className="storyUploader">사용자2</p>
                  <span className="whenUpload">2분전</span>
                </div>
              </div>
              <div className="storyBox">
                <div className="story13 story" />
                <div className="storyId">
                  <p className="storyUploader">사용자3</p>
                  <span className="whenUpload">4분전</span>
                </div>
              </div>
              <div className="storyBox">
                <div className="story14 story" />
                <div className="storyId">
                  <p className="storyUploader">사용자4</p>
                  <span className="whenUpload">7분전</span>
                </div>
              </div>
              <div className="storyBox">
                <div className="story15 story" />
                <div className="storyId">
                  <p className="storyUploader">사용자5</p>
                  <span className="whenUpload">17분전</span>
                </div>
              </div>
              <div className="storyBox">
                <div className="story16 story" />
                <div className="storyId">
                  <p className="storyUploader">사용자6</p>
                  <span className="whenUpload">2시간 전</span>
                </div>
              </div>
              <div className="storyBox">
                <div className="story17 story" />
                <div className="storyId">
                  <p className="storyUploader">사용자7</p>
                  <span className="whenUpload">5시간 전</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="recommendation">
            <div className="recommendationInner">
              <span className="recommendForYou">회원님을 위한 추천</span>
              <button className="loadallBtn">모두 보기</button>
            </div>
            <section className="recommendList">
              {recommendationList.map(friend => {
                return (
                  <div className="friendsList" key={friend.id}>
                    <div className="friend1 story" />
                    <p className="friendName">{friend.name}</p>
                    <button className="followBtn">팔로우</button>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

const storyList = [
  { id: 1, user: '사용자1', past: '1분 전' },
  { id: 2, user: '사용자2', past: '2분 전' },
  { id: 3, user: '사용자3', past: '3분 전' },
  { id: 4, user: '사용자4', past: '4분 전' },
  { id: 5, user: '사용자5', past: '5분 전' },
  { id: 6, user: '사용자6', past: '6분 전' },
  { id: 7, user: '사용자7', past: '7분 전' },
  { id: 8, user: '사용자8', past: '8분 전' },
];
const story = [
  { id: 1, story: 'story1 story' },
  { id: 2, story: 'story2 story' },
  { id: 3, story: 'story3 story' },
  { id: 4, story: 'story4 story' },
  { id: 5, story: 'story5 story' },
  { id: 6, story: 'story6 story' },
];
const recommendationList = [
  { id: 1, name: 'pizzamania123' },
  { id: 2, name: 'bibimbab77' },
  { id: 3, name: 'gucksumari42' },
];

export default MainEunkyeong;
