import React from "react";

function Footer() {
  return (
    <div
      className="flex px-10 py-20 w-screen capitalize justify-between"
      style={{ backgroundColor: "#000", color: "white" }}
    >
      <div className="flex w-6/12 justify-between">
        <div>
          <h1>comany</h1>
          <div>
            <p>investor relation</p>
            <p>privacy </p>
            <p>terms</p>
            <p>speed test </p>
          </div>
        </div>
        <div>
          <h1>comany</h1>
          <div>
            <p>investor relation</p>
            <p>privacy </p>
            <p>terms</p>
            <p>speed test </p>
          </div>
        </div>
        <div>
          <h1>comany</h1>
          <div>
            <p>investor relation</p>
            <p>privacy </p>
            <p>terms</p>
            <p>speed test </p>
          </div>
        </div>
      </div>
      <div className="socialLink mr-8 flex gap-5 text-xl">
        <div
          className="h-7 w-7 flex justify-center items-center "
          style={{ borderRadius: "50%", border: "solid 2px 	#df0707" }}
        >
          {" "}
          <a href="https://www.facebook.com/">
            <i className="ri-facebook-fill"></i>
          </a>
        </div>
        <div
          className="h-7 w-7 flex justify-center items-center"
          style={{ borderRadius: "50%", border: "solid 2px     #df0707" }}
        >
          {" "}
          <a href="https://www.instagram.com/">
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
        <div
          className="h-7 w-7 flex justify-center items-center"
          style={{ borderRadius: "50%", border: "solid 2px     #df0707" }}
        >
          {" "}
          <a href="https://www.youtube.com/">
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
        <div
          className="h-7 w-7 flex justify-center items-center"
          style={{ borderRadius: "50%", border: "solid 2px     #df0707" }}
        >
          {" "}
          <a href="https://www.linkedin.com/">
            <i className="ri-twitter-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
