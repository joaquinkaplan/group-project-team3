import "./register.css"
import RoomIcon from "@mui/icons-material/Room";

export default function Register(){
    return(
        <div className="registerContainer">
            <div className="logo">
                <RoomIcon/>
                LammaPin
            </div>
            <form>
                <input type="text" placeholder="username"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button className="registerBtn">Register</button>

            </form>
        </div>
    )
}