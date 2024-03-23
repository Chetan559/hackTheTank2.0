import React from "react";
import InformationCard from "./InformationCard";
import { faShirt, faScissors, faTape } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          we are dedicated to empowering individuals to express themselves
          through the art of sewing. Through our comprehensive programs and
          workshops, we provide the tools, techniques, and support needed for
          enthusiasts of all levels to hone their craft and create something
          truly extraordinary. Whether you're a beginner seeking to master the
          basics or an experienced stitcher aiming to push the boundaries of
          creativity, we invite you to join our community and embark on a
          journey of skill development, sustainability, precision, and
          trendsetting innovation.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Skill Advancement Programs"
          description="Elevate your sewing skills with our structured programs designed to take you from novice to expert. Master the basics, explore advanced techniques, and unleash your creativity through innovative design."
          icon={faTape}
        />

        <InformationCard
          title="Sustainable Sewing Initiatives"
          description=" Embrace eco-conscious practices in your sewing journey. Discover sustainable materials and methods to reduce environmental impact while still creating stylish and functional pieces."
          icon={faScissors}
        />

        <InformationCard
          title="Precision Training"
          description="Hone your precision for impeccable stitches and flawless finishes. Our techniques focus on achieving professional-grade results, ensuring your sewing projects are of the highest quality."
          icon={faScissors}
        />

        <InformationCard
          title="Trendsetting Workshops"
          description="Stay ahead of the fashion curve with our trend adaptation workshops. Learn how to incorporate current styles and designs into your creations, making them modern, relevant, and uniquely yours."
          icon={faShirt}
        />
      </div>
    </div>
  );
}

export default Info;
