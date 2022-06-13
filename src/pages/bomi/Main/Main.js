import React, {useState, useEffect} from "react";
import './Main.scss';
import "../../styles/common.scss"
import {Link} from "react-router-dom";

const Main = () => {

    const [comment, setComment] = useState('');
    const [commentArray, setCommmentArray] = useState([]);

    

    const handleComment = (event) => {
        setComment(event.target.value);
    }

    const publishComment =  event => {
        event.preventDefault();
        if (comment === '') {
            return;
        }
        setCommmentArray(commentValueList => [comment, ...commentValueList]);
        setComment('');

    };

    const commentValid = comment.length >= 1;

    return (
        <>

            <section className="searchBox">
                <div className="searchList">

                </div>
            </section>

            <section className="div_upper">

                <div className="story">
                    <img className="circle" src = {require("../../assets/story1.jpeg")} />
                    <p className="storyId">storyID</p>
                </div>

                <div className="story">
                    <img className="circle" src = {require("../../assets/story2.JPG")} />
                    <p className="storyId">storyID</p>
                </div>

                <div className="story">
                    <img className="circle" src = {require("../../assets/story3.JPG")}/>
                    <p className="storyId">storyID</p>
                </div>

                <div className="story">
                    <img className="circle" src = {require("../../assets/story4.jpg")} />
                    <p className="storyId">storyID</p>
                </div>

                <div className="story">
                    <img className="circle" src = {require("../../assets/story5.JPG")} />
                    <p className="storyId">storyID</p>
                </div>

                <div className="story">
                    <img className="circle" src= {require("../../assets/feed-profile-1.jpeg")} />
                    <p className="storyId">storyID</p>
                </div>

                <div className="story">
                    <img className="circle" src = {require("../../assets/story1.jpeg")} />
                    <p className="storyId">storyID</p>
                </div>

                <div className="story">
                    <img className="circle" src = {require("../../assets/story2.JPG")}  />
                    <p className="storyId">storyID</p>
                </div>

                <div className="story">
                    <img className="circle" src = {require("../../assets/story3.JPG")}/>
                    <p className="storyId">storyID</p>
                </div>

            </section>


            <section className="div_feeds">

                <article className="article">
                    <div className="feedProfile">
                        <img className="profilePic" src= {require("../../assets/feed-profile-1.jpeg")} />
                        <span style={{ position: "absolute", left: 53, top: 20, fontWeight: 500 }}>do0_nct</span>
                    </div>
                    <div className="imageWrapper">
                        <img style={{ width: 470, height: 587.5 }} src= {require("../../assets/feed.png")} />
                    </div>

                    <div className="barWrapper">
                        <button style={{ left: 10 }} id="heart"> <img id="heartImg" className="buttonOpacity"
                            style={{ width: 25, marginTop: 1, marginLeft: -5 }} src= {require('../../assets/navHeart.jpeg')} /> </button>
                        <button style={{ left: 50 }} id="comment"> <img className="buttonOpacity"
                            style={{ width: 28, marginTop: -1, marginLeft: -6 }} src= {require("../../assets/comment.png")} /></button>
                        <button style={{ left: 90 }} id="share"> <img className="buttonOpacity"
                            style={{ width: 24, marginTop: 2, marginLeft: -5 }} src= {require("../../assets/navShare.webp")}/> </button>
                        <button style={{ right: 10 }} id="save"> <img className="buttonOpacity" style={{ width: 26 }}
                            src={require("../../assets/save.webp")} /> </button>
                    </div>

                    <div className="reaction">
                        <p> <span>abcd_123</span>님 <span>여러 명</span>이 좋아합니다</p>
                        <p> <span> do0_nct </span> This is feed </p>
                        <p style={{ cursor: "pointer", color: "#8E8E8E", height: 10 }}> 댓글 10,068개 모두 보기 </p>
                        
                        <ul className="commentSection" onSubmit = {publishComment}>
                            {commentArray.slice(0).reverse().map((value,index)=> (
                                <li key = {index}>
                                    <span>UserId</span>
                                    <span style = {{fontWeight: 400, paddingLeft: 8}}>{value}</span>
                                    <button>x</button>
                                </li>
                            ))}

                        </ul>

                        <p style={{ fontSize: 10, color: "#8E8E8E" }}>1일 전</p>
                    </div>

                    <div className="comment">
                        <img style={{ width: 28, height: 30 }} src= {require("../../assets/smiley.png")} />
                        <input 
                        Id="commentInput" 
                        onChange= {handleComment}  
                        type="text" 
                        value = {comment}
                        placeholder="댓글 달기..." />
                        <button Id="publish" onClick = {publishComment} className = {commentValid? "buttonEnabled": "buttonDisabled"} style={{ fontSize: 14, color: "#BFE0FD" }}>게시</button>
                    </div>

                </article>

            </section>


            <section className="div_main_right">

                <div className="sideProfile">
                    <img className="circle" style={{ position: "absolute", top: 1 }} src= {require("../../assets/IMG_8665.jpg")} />
                    <span Id="sideProfileId"> user_id</span>
                    <p Id="sideProfileName"> user_name </p>
                    <button className="blueButton"> 전환 </button>
                </div>

                <p Id="rec"> 회원님을 위한 추천</p>
                <button style={{ position: "absolute", top: 70, right: 10 }}>모두 보기</button>


                <div style={{ top: 10 }} className="recboxWrapper">

                    <img className="recboxImg" src= {require("../../assets/rec2.png")} />
                    <span className="recboxId"> user_id </span>
                    <p className="recboxName"> user_name </p>
                    <button className="follow"> 팔로우 </button>

                </div>

                <div style={{ top: 60 }} className="recboxWrapper">

                    <img className="recboxImg" src = {require("../../assets/rec3.png")} />
                    <span className="recboxId"> user_id </span>
                    <p className="recboxName"> user_name </p>
                    <button className="follow"> 팔로우 </button>

                </div>

                <div style={{ top: 110 }} className="recboxWrapper">

                    <img className="recboxImg" src= {require("../../assets/rec4.png")} />
                    <span className="recboxId"> user_id </span>
                    <p className="recboxName"> user_name </p>
                    <button className="follow"> 팔로우 </button>

                </div>


                <div style={{ top: 160 }} className="recboxWrapper">

                    <img className="recboxImg" src= {require("../../assets/rec5.png")} />
                    <span className="recboxId"> user_id </span>
                    <p className="recboxName"> user_name </p>
                    <button className="follow"> 팔로우 </button>

                </div>

                <div style={{ top: 210 }} className="recboxWrapper">

                    <img className="recboxImg" src= {require("../../assets/rec1.png")} />
                    <span className="recboxId"> user_id </span>
                    <p className="recboxName"> user_name </p>
                    <button className="follow"> 팔로우 </button>

                </div>


            </section>

            <div className="popup">
                <button className="popupElement" style={{ borderTop: "none", color: "red" }} > 신고 </button>
                <button Id="deleteComment" className="popupElement" style={{ color: "red" }}> 삭제 </button>
                <button Id="cancelPopup" className="popupElement" style={{ borderBottom: "none", color: "black" }}> 취소 </button>
            </div>
        </>
    );


};


export default Main;


