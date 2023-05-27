import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/mdmasudranainfo" },
  { Social: <FaTwitter />, link: "https://www.twitter.com/mdmasudranainfo" },
  {
    Social: <FaInstagram />,
    link: "https://www.instagram.com/mdmasudranainfo",
  },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/mdmasudranainfo/",
  },
  // { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
