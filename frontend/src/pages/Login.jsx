import Header from "../components/Header";
import '../styles/pages/login.css'

export default function Login(){
    return(
        <>
        <Header />
        <h2>Login</h2>

        <div className="login-box">
            <form action="">
                <input type="text" placeholder="enter email" className="login-box-items"/>
                <input type="text" placeholder="enter password" className="login-box-items"  />
                <button className="login-box-items">LOGIN</button>
            </form>
        </div>
        </>
    )
}