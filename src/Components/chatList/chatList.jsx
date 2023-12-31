import './chatList.css'
import ChatDash from './chat-dash/chat-dash'
import SearchBar from './search-bar/search-bar';
import Archived from './archived/archived';
import PinnedChat from './Pinned-chat/pinned-chat';
import AllChat from './AllChat/all-chat';



const ChatList = () => {
    return (
      <>
        <div className="chatList">
          <div className='dash'>
            <ChatDash />
            <SearchBar />
            <Archived />
          </div>
          <div className="scroll">
            <PinnedChat />
            <AllChat />
          </div>
        </div>
      </>
    );
}

export default ChatList