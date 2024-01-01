import './pinned.css'
import User from '../userChat/user';
import pix from './images/photo.png'

const Pinned = () => {
  return (
    <>
      <div className="pd">
        <h1 className="pinned">Pinned</h1>
      </div>
      <div>
        <User
          photo={pix}
          name={"Ahmed Rasheed"}
          text={"how are yo doing today"}
          time={"9:47"}
          isActive={true}
        />
        <User
          photo={pix}
          name={" Aishat Ahmed"}
          text={"I texted you last nigh"}
          time={"3:14"}
          isActive={true}
        />
      </div>
    </>
  );
};

export default Pinned