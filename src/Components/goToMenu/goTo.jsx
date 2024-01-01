import "./goTo.css";
import budgie from "./goTo-images/Budgie.png";
import chati from "./goTo-images/ChatCircleDots.svg";
import users from "./goTo-images/Users.svg";
import phone from "./goTo-images/Phone.svg";
import Gear from "./goTo-images/Gear.svg";

import pix from "./goTo-images/Ellipse1.svg";
import ToggleSwitch from "./ToggleSwitch/toggleSwitch";

const GoToMenu = () => {

  const change = true;
  return (
    <>
      <div>
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
              <ToggleSwitch toggleTheme = {change}/>

              <div className="profile-pix">
                <img src={pix} alt="pix" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoToMenu;
