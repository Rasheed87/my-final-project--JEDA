import "./conv-footer.css";
import link from "./images/Link.svg";
import smiley from "./images/Smiley.svg";
import tele from "./images/tele.svg";

const ConvFooter = () => {
  return (
    <>
      <div className="conv-footer">
        <div className="write">
          <div className="link-write">
            <img src={link} alt={link} />
            <p className="msg"> Write a message ...</p>
          </div>
          <div className="smile">
            <img src={smiley} alt={smiley} />
          </div>
        </div>

        <div className="sd">
          <img className="send" src={tele} alt={tele} />
        </div>
      </div>
    </>
  );
};

export default ConvFooter;
