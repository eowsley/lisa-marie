import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: 1,
    title: "Audacious",
    description:
      "I can describe Lisa with a single word... The word is Audacious.... ...bold, daring, fearless, intrepid, brave, unafraid, unflinching, courageous, valiant! I am a better person because of Lisa’s energy, unwavering faith, and friendship.", //   avatar: Avatar1,
    name: "- Kathleen M",
  },
  {
    id: 2,
    title: "Powerhouse",
    description:
      "Lisa is a powerhouse. Through awareness of where you are hurting, Lisa uses her gifts (compassion, strength and courage) to help walk you through your wounds, and to take you deep into a journey of healing. It's more than talking; it is discovery and reimagining.", //   avatar: Avatar2,
    name: "- Rechelle R",
  },
  {
    id: 3,
    title: "Deep Faith",
    description:
      "I have known Lisa for over 20 years. With her deep faith, she helps people deal with issues that otherwise hinder their growth and development. That is one of her many gifts!",
    name: "- Julieta T",
  },
  {
    id: 4,
    title: "Experienced Coach",
    description:
      "Navigating this turbulent world today takes more than what I am capable of on my own...patience, empathy and the loving support from an expert. ...experienced coach, guiding me and helping me through one of the toughest transitions in my professional career.", //   avatar: Avatar4,
    name: "- Tommy L",
  },
  {
    id: 5,
    title: "Family Trauma",
    description:
      "...a toxic family trauma bond that I needed to discover, break, and be liberated from. Lisa gave me the tools and the powerful prayer to help me release this from my life. The enemy tries to pull me back in from time to time but I now have the tools to recognize it. The bond is broken and it has no power. I am FREE!",
    name: "- April S",
  },
  {
    id: 6,
    title: "Career Guidance",
    description:
      "Lisa asked the right questions that lead me to a solid understanding that I genuinely love helping people and strive to make the people around me happy. She helped me focus on the “Why”... I tell myself “I am here to help!” which makes me feel confident and focused.",
    name: "- Kalinka R",
  },
  {
    id: 7,
    title: "Faith Based Coaching",
    description:
      "Lisa worked personally with each participant to release an area of fear or emotional pain... She has a gift of discernment where people are broken. Lisa doesn’t pick the low hanging fruit, she digs at the roots and origin, then processes the participant to a path of personal healing.",
    name: "- Tammy W",
  },
  {
    id: 8,
    title: "Power of Prayer",
    description:
      "Lisa is a very self assured and confident person. She shared with me her own experiences with the power of prayer. While I was raised with faith - I was not living with faith. Lisa works on her grace and mercy and takes pride in her ability to share with others.",
    name: "- Christine G",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};

function ButtonGroup({ next, previous }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <button
          onClick={previous}
          aria-label="Previous"
          className="text-5xl mb-12 mr-4"
        >
          {"<"}
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="text-5xl mb-12 ml-4"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export function Testimonial() {
  return (
    <div style={{ minHeight: "65vh" }}>
      <h2
        style={{
          fontSize: "2.2rem",
          textAlign: "center",
          color: "#FFC1B8",
          fontWeight: "700",
          marginBottom: "1.5rem",
          marginTop: "1.5rem",
        }}
      >
        What They&apos;re Saying...
      </h2>
      <div>
        <Carousel {...carouselParams}>
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                width: "90%",
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "30px",
                marginLeft: "30px",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  margin: "0.6rem",
                  marginLeft: 0,
                }}
              >
                {item.title}
              </h2>
              <div className="text-justify font-playfair">
                {item.description}
              </div>
              <div style={{ textAlign: "right", marginTop: "0.4rem" }}>
                {item.name}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
