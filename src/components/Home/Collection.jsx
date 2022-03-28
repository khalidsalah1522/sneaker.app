import men from "../../assets/images/Poster/brooke-cagle-wKOKidNT14w-unsplash.jpg";
import women from "../../assets/images/Poster/kelsey-k-zIi6-j037w8-unsplash.jpg";
import { useNavigate } from "react-router-dom";

function Collection() {
  const navigate = useNavigate();
  const TopscrollTo = (g) => {
    window.scrollTo({
      top: 0,
    });
    navigate(g);
  };
  return (
    <section className="collections-container">
      <h1 className="collections">Collections</h1>
      <div className="men-collection">
        <div className="collection-type">
          <div>
            <h1>Men</h1>
            <h2>Collections</h2>
          </div>
          <div className="arrow"></div>
          <div className="explore">
            <button onClick={() => TopscrollTo("men")}>Explore</button>
          </div>
        </div>
        <div className="collection-poster">
          <img src={men} alt="" />
        </div>
      </div>
      <div className="women-collection">
        <div className="collection-type">
          <div className="women-colection">
            <h1>Women</h1>
            <h2>Collections</h2>
          </div>
          <div className="arrow"></div>
          <div className="explore">
            <button onClick={() => TopscrollTo("women")}>Explore</button>
          </div>
        </div>
        <div className="collection-poster">
          <img src={women} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Collection;
