import './nav.css'
import vc from "./images/vc.svg";
import gg from "./images/gg.svg";
import cdd from "./images/cdd.svg";
import p from "./images/p.svg";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <img src={vc} alt={vc} />
        <img src={p} alt={p} />
        <img src={gg} alt={gg} />
        <div className="line4"></div>
        <img src={cdd} alt={cdd} />
      </div>
    </>
  );
};

export default Nav;
