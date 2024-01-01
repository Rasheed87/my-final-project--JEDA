import ConvHeader from "./conv-header/conv-header";
import ConvMsg from "./conv-msg/conv-msg";
import "./conv.css";
import ConvFooter from "./conv-footer/conv-footer";

const Conv = () => {
  return (
    <>
      <div className="conv">
        <ConvHeader/>
        <ConvMsg/>
        <ConvFooter/>
      </div>
    </>
  );
};

export default Conv;
