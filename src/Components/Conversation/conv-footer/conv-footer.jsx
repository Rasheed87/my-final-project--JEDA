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
            <img className="cursor" src={link} alt={link} />

            <div className="msg-input">
              <input
                className="msg-input"
                type="text"
                placeholder="Write a message ..."
              />
              {/* <p className="msg"> Write a message ...</p> */}
            </div>
          </div>
          <div className="smile">
            <img className="cursor" src={smiley} alt={smiley} />
          </div>
        </div>

        <div className="sd">
          <img className="send cursor" src={tele} alt={tele} />
        </div>
      </div>
    </>
  );
};

export default ConvFooter;
