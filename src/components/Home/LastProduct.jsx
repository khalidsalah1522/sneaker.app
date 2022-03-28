import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function LastProduct() {
  const lastProduct1 = [
    "https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603036050141-c61fde866f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNuZWFrZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1606890542241-b848582fe5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNuZWFrZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1621665421558-831f91fd0500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNuZWFrZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1614232296132-8e2b98031ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHNuZWFrZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];

  useEffect(() => {
    gsap.to(".last-grid .block", {
      y: "-100%",
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".last-grid",
        start: "30 center",
      },
    });
  }, []);

  return (
    <section className="last-product">
      <div className="last-product-container">
        <h2>Last Product</h2>
        <div className="last-grid">
          {lastProduct1.map((sneaker, index) => {
            return (
              <div key={index}>
                <div className="block"></div>
                <img src={sneaker} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LastProduct;
