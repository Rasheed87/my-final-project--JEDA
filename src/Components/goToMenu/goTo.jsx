import "./goTo.css";
import budgie from "./goTo-images/Budgie.png";
import chati from './goTo-images/ChatCircleDots.svg'
import users from './goTo-images/Users.svg'
import phone from './goTo-images/Phone.svg'
import Gear from './goTo-images/Gear.svg'
import elipse from './goTo-images/Ellipse.png'
import pix from "./goTo-images/Ellipse1.svg";

const GoToMenu = () => {
  return (
    <>
      <div className="goTo">
        <div className="budgie">
          <img className="budgie-img" src={budgie} alt="budgie" />
        </div>

        <div className="profile">
          <div className="profile-chati">
            <img className="chati" src={chati} alt="chati" />
          </div>

          <div className="profile-users">
            <img src={users} alt="users" />
          </div>

          <div className="profile-phone">
            <img src={phone} alt="phone" />
          </div>

          <div className="line"></div>
        </div>

        <div className="profile-2">
          <div className="profile-gear">
            <img src={Gear} alt="settings" />
          </div>
          <div className="pro">
            <div className="profile-elipse">
              <img className="elipse" src={elipse} alt="elipse" />
            </div>

            <div className="profile-pix">
                <img src={pix} alt="pix" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoToMenu;
