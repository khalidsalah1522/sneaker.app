import { useNavigate } from "react-router-dom";

function SneakerCard({ title, src, price, desc }) {
  const navigate = useNavigate();

  const selectSneaker = () => {
    let clientCurrentSneaker = {
      img: src,
      sTitle: title,
      sPrice: price,
      sDesc: desc,
    };
    localStorage.setItem(
      "currentSneaker",
      JSON.stringify(clientCurrentSneaker)
    );
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
      navigate("/sneaker");
    }, 200);
  };

  return (
    <div className="sneaker-card-container" onClick={selectSneaker}>
      <div className="sneaker-card">
        <div className="sneaker-img">
          <img src={src} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default SneakerCard;
