import { useState, createContext, useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

// Compontent
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./pages/About";
import Sneaker from "./pages/Sneaker";
import Contact from "./pages/Contact";

// Style
import "./assets/css/app.css";

const Collection = lazy(() => import("./pages/Collection"));

// Context
export const counter = createContext(null);
export const addToCart = createContext(null);
export const checkAdd = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  const [addToCarts, setAddToCarts] = useState(0);
  const [checkAdds, setCheckAdds] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  let currentSneaker = localStorage.getItem("currentSneaker");
  let clientCurrentSneaker = JSON.parse(currentSneaker);

  useEffect(() => {
    if (checkAdds && count > 0) {
      let addNewOne = Cookies.get("clientCart")
        ? { ...JSON.parse(Cookies.get("clientCart")) }
        : {};
      addNewOne[`${clientCurrentSneaker.sTitle}`] = [
        clientCurrentSneaker,
        addNewOne[`${clientCurrentSneaker.sTitle}`]
          ? addNewOne[`${clientCurrentSneaker.sTitle}`][1] + count
          : count,
      ];
      Cookies.set("clientCart", JSON.stringify(addNewOne), { expires: 7 });
    }
  }, [checkAdds, addToCarts, count, clientCurrentSneaker]);

  return (
    <counter.Provider value={{ count, setCount }}>
      <addToCart.Provider value={{ addToCarts, setAddToCarts }}>
        <checkAdd.Provider value={{ checkAdds, setCheckAdds }}>
          <div className="container">
            <Header handleShowMenu={setShowMenu} />
            {showMenu ? <Menu handleShowMenu={setShowMenu} /> : ""}
            <Suspense fallback={<div>Loading ...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="men" element={<Collection gender="men" />} />
                <Route path="women" element={<Collection gender="women" />} />
                <Route path="about" element={<About />} />
                <Route path="sneaker" element={<Sneaker />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </checkAdd.Provider>
      </addToCart.Provider>
    </counter.Provider>
  );
}

export default App;
