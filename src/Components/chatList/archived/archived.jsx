import "./archived.css";
import ab from "./images/aB.svg";

const Archived = () => {
  return (
    <>
      <div className="archived">
        <img className="ab" src={ab} alt="ab" />
        <h1 className="arc">Archived</h1>
      </div>
      <div className="line2"></div>
    </>
  );
};

export default Archived;
