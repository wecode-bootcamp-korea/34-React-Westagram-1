import React, { useState, useEffect } from 'react';
import Article from './Article';
import './main.scss';
function MainIntae(props) {
  const [articleValue, setArticleValue] = useState([]);
  useEffect(() => {
    console.log('ddd');
    fetch('/data/articleData.json')
      .then(res => res.json()) // (2)
      .then(data => {
        setArticleValue(data);
        console.log(data);
      });
  }, []);

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

          {articleValue.map((ele, idx) => {
            return (
              <Article
                key={idx}
                userId={ele.user_id}
                articleText={ele.article_text}
                articleImg={ele.article_img}
              />
            );
          })}

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
