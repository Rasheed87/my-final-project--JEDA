import "./user.css";

const User = ({ name, text, time, photo, isActive }) => {
 
  const activeUser = isActive ? 'active' : 'in-active'

  return (
    <>
      <div className="user">
        <div className="photo">
          <img className="photo1" src={photo} alt="" />
          <div className={activeUser}></div>
        </div>
        <div className="name-text">
          <div className="name-time">
            <h3 className="name"> {name}</h3>
            <div className="time">{time}</div>
          </div>

          <div className="text">
            <p className="text">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
