import GoToMenu from "./Components/goToMenu/goTo.jsx";
import "./App.css";
import ChatList from "./Components/chatList/chatList.jsx";
import Conv from "./Components/Conversation/conv.jsx";

function App() {
  return (
    <>
      <div className="dashboard">
        <GoToMenu />
        <ChatList />
        <Conv/>
      </div>
    </>
  );
}

export default App;
