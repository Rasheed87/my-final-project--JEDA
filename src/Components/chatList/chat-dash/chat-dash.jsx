import cD from './images/cD.svg'
import './chat-dash.css'


const ChatDash = () => {
    return (
        <> 
           <div className='dash1'>
            <h1 className='chat'>Chats</h1>
            <img className='cd' src={cD} alt="" />
           </div>
        </>
    )
}

export default ChatDash