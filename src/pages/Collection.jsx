import { useEffect, useState } from "react";
import { Data } from "../components/data/Data";
import { gsap } from "gsap";
import SneakerCard from "../components/SneakerCard";
import "../assets/css/collection.css";

const col1Image = [
  [
    require("../assets/images/Poster/rayul-_M6gy9oHgII-unsplash.jpg"),
    require("../assets/images/Poster/behrouz-sasani-6OGml3UomZw-unsplash.jpg"),
    require("../assets/images/Poster/fabio-scaletta-cYSRncVxE44-unsplash.jpg"),
  ],
  [
    require("../assets/images/Poster/axel-vazquez-A77FAov-OzI-unsplash.jpg"),
    require("../assets/images/Poster/dom-hill-nimElTcTNyY-unsplash.jpg"),
    require("../assets/images/Poster/kelsey-k-zIi6-j037w8-unsplash.jpg"),
  ],
];

function Collection({ gender }) {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".collection-images div div", {
        autoAlpha: 1,
        y: "-100%",
        duration: 0.8,
        stagger: 0.2,
      });
    }, 200);
    setSneakers(Data[`${gender}`]);
  }, [gender]);

  return (
    <section className="collection">
      <div className="collection-container">
        <div className="col1">
          <div className="collection-images">
            {col1Image[gender === "men" ? 0 : 1].map((img, index) => {
              return (
                <div key={index} className={`image${index + 1}`}>
                  <div></div>
                  <img src={img} alt="" />
                </div>
              );
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            amet quas minus in est obcaecati, architecto omnis sunt! Soluta,
            voluptates.
          </p>
        </div>
        <div className="col2">
          <h1>Think positively whatever you wear</h1>
          {sneakers.map((sneaker) => {
            const { title, image, price, description } = sneaker;
            return (
              <SneakerCard
                key={title}
                title={title}
                src={image}
                desc={description}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Collection;
