import './conv-header.css'
import UserPro from './user-pro/user-pro'
import pix from './images/12.svg'
import Nav from './nav/nav'


const ConvHeader = () => {
    
  
    const userProps = {
        pix: pix,
        name: 'Rasheed Ahmed',
        online: "online"
    }

    return (
        <>
        <div className="conv-header">
            <UserPro {...userProps}/>
            <Nav/>
        </div>
        </>
    )
}

export default ConvHeader