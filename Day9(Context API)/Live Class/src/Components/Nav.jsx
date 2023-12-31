import { useContext } from "react";
import { AllContext } from "../Context/AllContext";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

export const Navbar = () => {
  //   const { CartData } = useContext(AllContext);
  const { cartCount } = useContext(AllContext);
  //   console.log(cartCount)

  const { lang } = useContext(LanguageContext);
  console.log(lang);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "15px",
          fondSize: "28px",
          border: "1px solid grey",
          fontWeight: "bold",
          boxShadow: "border-box",
        }}
      >
        {/* Cart :{CartData} */}
        {/* Cart :{cartCount} */}
        {lang === "en" ? "Cart" : "Byag "} : {cartCount} {theme}
      </nav>
    </>
  );
};
