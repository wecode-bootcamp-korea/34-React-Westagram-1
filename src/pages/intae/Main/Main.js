import React from 'react';
import './main.scss';
import { useState } from 'react';
import Comment from './Comment';

function MainIntae(props) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(current => current + 1);
  };
  const onSubmit = e => {
    e.preventDefault();
    setCommentList(commnetValue => [comment, ...commnetValue]);
    setComment('');
  };
  const onChange = e => {
    setComment(e.target.value);
  };

  return (
    <>
      <nav>
        <div className="gohome">
          <a href="/main/main.html">
            <div className="logo_box">
              <img src="images/instagram.png" alt="instagram" />
              <div className="border" />
              <span className="logotext">Westagram</span>
            </div>
          </a>
        </div>
        <div className="search">
          <input type="text" placeholder="검색" />
        </div>
        <div className="social_icons">
          <div className="compass icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="나침반"
            />
          </div>
          <div className="like icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="좋아요"
            />
          </div>
          <div className="profile icons">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="프로필"
            />
          </div>
        </div>
      </nav>

      <main>
        <div className="feeds">
          <article className="stories">
            <div className="story1 story" />
            <div className="story2 story" />
            <div className="story3 story" />
            <div className="story4 story" />
            <div className="story5 story" />
            <div className="story6 story" />
          </article>

          <article className="article1">
            <div className="user_profile">
              <div className="user_photo">
                <img src="../images/profile1.jpg" alt="" />
                <div className="user_id">intarrr</div>
              </div>
              <div className="seemore_btn">
                <img src="../images/option.png" alt="" />
              </div>
            </div>
            <div className="feed_image">
              <img src="images/profile1.jpg" alt="pizza" />
            </div>
            <section className="feed_contents">
              <div className="feed_description">
                <div className="response_icons">
                  <div className="icons_left">
                    <button className="heartbtn" />
                    <button className="commentbtn" />
                    <button className="directmessagebtn" />
                  </div>
                  <div className="icons_right">
                    <i className="fa-regular fa-bookmark" />
                  </div>
                </div>
                <div id="likes_figure" />
                <div className="user_comment">
                  <span className="my_id">intarrr</span>
                  <span className="my_comment">
                    집에 늦게 가는 것만이 능사가 아닙니다.
                  </span>
                </div>
                <div className="registerd_reply">
                  <span className="friends_id">seulgi</span>
                  <span className="friends_comment">나도 먹고싶다!</span>
                  <button className="reply_like">
                    <i className="fa-regular fa-heart" id="small" />
                  </button>
                </div>
                <div className="upload_date">2일 전</div>
              </div>
            </section>

            <div className="reply">
              <ul id="replylist">
                {/* {commentList.map((value, index) => (
                  <div key={index}>
                    <li style={{ fontWeight: 600 }}>
                      wendy{' '}
                      <span style={{ fontWeight: 'normal' }}>{value}</span>
                    </li>
                  </div>
                ))} */}
                {commentList.map((comment, index) => (
                  <Comment
                    id={index}
                    key={index}
                    value={comment}
                    commentList={commentList}
                    setCommentList={setCommentList}
                  />
                ))}
              </ul>

              <form action="" onSubmit={onSubmit}>
                <input
                  value={comment}
                  onChange={onChange}
                  className="replybox"
                  id="replysubmit"
                  type="text"
                  placeholder=" 댓글 달기..."
                />
                <button className="submitbtn">게시</button>
              </form>
            </div>
          </article>

          <article className="article2" />
        </div>

        <div className="main-right">
          <div className="user_self">
            <div className="user_self_photo">
              <img src="images/wedding.jpg" alt="" />
            </div>
            <div className="user_self_info">
              <p className="user_self_id">intarrr</p>
              <p className="user_self_description">축구도사</p>
            </div>
          </div>

          <div className="story_collection">
            <div className="story_inner">
              <span>스토리</span>
              <button className="loadallbtn">모두 보기</button>
            </div>
            <div className="story_list">
              <div className="storybox">
                <div className="story11 story" />
                <div className="story_id">
                  <p>사용자1</p>
                  <span>1분전</span>
                </div>
              </div>
              <div className="storybox">
                <div className="story12 story" />
                <div className="story_id">
                  <p>사용자2</p>
                  <span>2분전</span>
                </div>
              </div>
              <div className="storybox">
                <div className="story13 story" />
                <div className="story_id">
                  <p>사용자3</p>
                  <span>4분전</span>
                </div>
              </div>
              <div className="storybox">
                <div className="story14 story" />
                <div className="story_id">
                  <p>사용자4</p>
                  <span>7분전</span>
                </div>
              </div>
              <div className="storybox">
                <div className="story15 story" />
                <div className="story_id">
                  <p>사용자5</p>
                  <span>17분전</span>
                </div>
              </div>
              <div className="storybox">
                <div className="story16 story" />
                <div className="story_id">
                  <p>사용자6</p>
                  <span>2시간 전</span>
                </div>
              </div>
              <div className="storybox">
                <div className="story17 story" />
                <div className="story_id">
                  <p>사용자7</p>
                  <span>5시간 전</span>
                </div>
              </div>
            </div>
          </div>

          <div className="recommendation">
            <div className="recommendation_inner">
              <span>회원님을 위한 추천</span>
              <button className="loadallbtn">모두 보기</button>
            </div>
            <section className="recommend_list">
              <div className="friends_list">
                <div className="friend1 story" />
                <p>pizzamania123</p>
                <button>팔로우</button>
              </div>
              <div className="friends_list">
                <div className="friend2 story" />
                <p>bibimbab77</p>
                <button>팔로우</button>
              </div>
              <div className="friends_list">
                <div className="friend2 story" />
                <p>gucksumari42</p>
                <button>팔로우</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainIntae;
