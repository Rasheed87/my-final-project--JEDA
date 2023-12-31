
import './user-pro.css'




const UserPro = ({name, pix, online}) => {
    return (
        <>
         <div className='pro-user'>
            <div className="img">
             <img src={pix} alt={pix} />
            </div>

            <div className="name-active">
                <h3 className="name">{name}</h3>
                <p className="online">{online}</p>
            </div>
            
         </div>
        </>
    )
}

export default UserPro