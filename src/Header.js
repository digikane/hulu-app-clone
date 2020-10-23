import React from "react";
import "./header.css";

// import icons from Material-UI
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <div className="header">
      <div className="header_icons">
        <div className="header_icon  header_icon--active">
          <HomeIcon />
          <p>HOME</p>
        </div>
        <div className="header_icon">
          <FlashOnIcon />
          <p>TRENDING</p>
        </div>
        <div className="header_icon">
          <LiveTvIcon />
          <p>TOP RATED</p>
        </div>
        <div className="header_icon">
          <VideoLibraryIcon />
          <p>COLLECTION</p>
        </div>
        <div className="header_icon">
          <SearchIcon />
          <p>SEARCH</p>
        </div>
        <div className="header_icon">
          <PersonOutlineIcon />
          <p>ACCOUNT</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
      />
    </div>
  );
}

export default Header;
