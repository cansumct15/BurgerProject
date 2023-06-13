import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import '../styles/About.css';

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est
          laboriosam amet at perspiciatis, nobis, facilis eos eligendi velit
          consectetur iusto illum cum fugit ea. Autem praesentium quod
          reprehenderit cumque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente tempore consequatur alias, atque tenetur
          minus facere dolore in molestiae consectetur distinctio a doloremque
          debitis ab magnam, nesciunt qui veniam doloribus! Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Similique temporibus sunt
          consectetur sit ipsa ex? Officiis repudiandae quis voluptate
          voluptatem cum, eius at doloribus nulla reiciendis harum, repellat
          perferendis unde! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Quo inventore dolor nisi velit corrupti cum, placeat blanditiis
          asperiores. Rem consectetur quisquam minima voluptas placeat numquam
          alias, quae illum officiis amet!
        </p>
      </div>
    </div>
  );
};
