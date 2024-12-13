import React, { useState } from "react";
import "./main.css";

import { BiArrowBack } from "react-icons/bi";
import { CgMoreAlt, CgCalendarDates } from "react-icons/cg";

import Tweet from "../tweet/tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  const followHandler = () => {
    setFollow(!follow);
  };

  return (
    <div id="container-main">
      <div id="box-top">
        <span id="back-icon-box">
          <BiArrowBack id="back-icon" />
        </span>

        <div id="box-top-right">
          <p id="name-header">Paresh Kondeti</p>
          <span id="tweets-number">22 Tweets</span>
        </div>
      </div>

      <div id="header-box">
        <div id="profile-image"></div>
      </div>

      <div id="edit-box">
        <span id="more-box">
          <CgMoreAlt id="more-header" />
        </span>
        <button
          className={follow ? "Follow" : "following"}
          onClick={followHandler}
        >
          {follow ? "Follow" : "Following"}
        </button>
      </div>

      <div id="name-id-box">
        <p id="name-user">Paresh Kondeti</p>
        <p id="id-user">@PareshKondeti</p>
      </div>

      <div id="job-box">
        <p id="job">Frontend Developer</p>
      </div>

      <div id="date-box">
        <CgCalendarDates id="date-icon" />
        <p id="date">Joined January 2021</p>
      </div>

      <div id="following-follow-box">
        <span id="number-follow">35</span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Following
        </a>

        <span id="number-follow" className="margin-left">
          {follow ? 5 : 6}
        </span>
        <a href="" id="follow-text" onClick={(e) => e.preventDefault()}>
          Followers
        </a>
      </div>

      <div id="nav-header">
        <div id="box-nav" className="box-Tweets">
          <p id="nav">Tweets</p>
        </div>

        <div id="box-nav" className="box-replies">
          <p id="nav">Tweets & Replies</p>
        </div>

        <div id="box-nav" className="box-Media">
          <p id="nav">Media</p>
        </div>

        <div id="box-nav" className="box-Likes">
          <p id="nav">Likes</p>
        </div>
      </div>

      <div id="line"></div>

      <Tweet
        tweet="😎This is a sample text for this project."
        likeNumber="25"
        comment="1"
      />
      <Tweet
        tweet="I think Chakra UI is cooler than Material UI!"
        likeNumber="96"
        comment="5"
      />
      <Tweet
        tweet="I don't understand why people work with C#. What's even stranger is some programming institutes require you to learn C# first or you can't learn programming!"
        likeNumber="60"
      />
      <Tweet
        tweet="☃ Why do people catch colds in winter, and I get one in summer? So weird!"
        likeNumber="60"
      />
      <Tweet tweet="If you put in the effort, you can do it! ☄" likeNumber="60" />
      <Tweet
        tweet="I never thought I could complete a course in two days!"
        likeNumber="60"
      />
    </div>
  );
};

export default Main;
