import aboutImg from "../assets/images/Poster/daniel-storek-JM-qKEd1GMI-unsplash.jpg";
import "../assets/css/about.css";
import { useState } from "react";

function About() {
  const [readmore, setReadmore] = useState(false);

  return (
    <section className="about">
      <div className="about-container">
        <div className="col1">
          <img src={aboutImg} alt="" />
        </div>
        <div className="col2">
          <h1>Sneakers online shop</h1>
          {readmore ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae praesentium minima aliquam reiciendis tempore porro
              itaque vero, ad earum molestiae magni et modi iusto. Explicabo
              dolore natus provident vitae atque placeat eius accusamus
              architecto unde, ipsa vel eum dolorum nostrum sapiente
            </p>
          ) : (
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
            </p>
          )}
          <div className="readmore" onClick={() => setReadmore(!readmore)}>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
