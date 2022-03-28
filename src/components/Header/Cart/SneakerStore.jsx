import Cookies from "js-cookie";

function SneakerStore() {
  let clientCart = Cookies.get("clientCart");
  let clientData = Object.values(JSON.parse(clientCart));
  let filterData = clientData.filter((a) => a[1] > 0);

  return (
    <>
      {filterData.map((sneaker) => {
        const { img, sTitle, sPrice } = sneaker[0];
        return (
          <div key={sTitle} className="sneaker-cart">
            <div className="sneaker-img">
              <img src={img} alt="" />
            </div>
            <div className="info">
              <h4 className="sneaker-name">{sTitle}</h4>
              <h4 className="sneaker-price">
                {`${sneaker[1]}`} x <span>{sPrice}$</span>
              </h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SneakerStore;
