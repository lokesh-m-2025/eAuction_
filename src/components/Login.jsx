import {Link} from "react-router-dom"

function Login(){
    return(
        <>
        <form>
        <div className="login">
        <h1>Login</h1>
        <input className="login-email" type="email" placeholder="Email Address" required/>
        <input className="login-pass" type="password" placeholder="Password" required/>
        <Link to="/Home"><button className="login-btn" type="submit">Login</button></Link>
        </div>
        </form>
        </>
    )
}

export default Login