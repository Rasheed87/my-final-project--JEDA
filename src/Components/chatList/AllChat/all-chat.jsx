import "./all-chat.css";
import User from "../Pinned-chat/userChat/user";
import pix from "./images/photo.png";

const AllChat = () => {


  let users = [
    {
      index: 0,
      photo: { pix },
      name: " Luqman Ajiboye",
      text: "I texted you last nigh",
      time: "8:14",
      isActive: true,
    },
    {
      index: 2,
      photo: { pix },
      name: " Titi Ayo",
      text: "you are welcome",
      time: "1:22",
      isActive: true,
    },
    {
      index: 3,
      photo: { pix },
      name: " Faith Bamilola",
      text: "good afternoon",
      time: "6:42",
      isActive: false,
    },
    {
      index: 4,
      photo: { pix },
      name: " Aishat Ahmed",
      text: " call me",
      time: "9:26",
      isActive: true,
    },
    {
      index: 5,
      photo: { pix },
      name: " Olaolu Kolawole",
      text: "we are breaking up",
      time: "11:18",
      isActive: true,
    },
    {
      index: 6,
      photo: { pix },
      name: "Ekpu Karo",
      text: "i love you",
      time: "11:18",
      isActive: false,
    },
    {
      index: 7,
      photo: { pix },
      name: " Sikiru Alo",
      text: "i dont care",
      time: "11:18",
      isActive: false,
    },
  ];
  return (
    <>
      <div className="allchat">
        <h1 className="allchat1">All Chats</h1>
      </div>

       {/* mapping through the users list */}
        {users.map((user, index) => (
          <User key={index} {...user} />
        ))}
      
    </>
  );
};

export default AllChat;
