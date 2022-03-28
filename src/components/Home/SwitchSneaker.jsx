import sneaker from "../../assets/images/usama-akram-s-gYAbQToXk-unsplash.png";
import sneaker1 from "../../assets/images/fachry-zella-devandra-bNSdIkCBJOs-unsplash.png";
import sneaker2 from "../../assets/images/joel-muniz-bS_1xFUPgWU-unsplash.png";

function SwitchSneaker() {
  return (
    <section className="switch-sneaker">
      <div className="img-container">
        <div className="img img-one">
          <img src={sneaker} alt="" />
        </div>
        <div className="img img-two">
          <img src={sneaker1} alt="" />
        </div>
        <div className="img img-three">
          <img src={sneaker2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SwitchSneaker;
