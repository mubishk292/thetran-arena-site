import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default () => {
    const [visible, setVisible] = useState(false);
    
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      style={{
        position: "fixed",
        bottom: "30px",
        right: "5%",
        height: "20px",
        fontSize: "2.5rem",
        zIndex: 10,
        cursor: "pointer",
        color: '#2BFF00'
      }}
    >
      <FaArrowCircleUp
        onClick={goToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};