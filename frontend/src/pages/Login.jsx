import Header from "../components/Header";
import '../styles/pages/login.css'

export default function Login(){
    return(
        <>
        <Header />
        <h2>Login</h2>

        <div className="login-box">
            <form action="">
                <div className="login-box-divs">
                    <input type="text" placeholder="email" className="login-box-items"/>
                </div>

                <div className="login-box-divs">
                    <input type="text" placeholder="password" className="login-box-items"  />
                </div>

                <div className="login-box-divs">
                    <button className="">LOGIN</button>
                </div>
            </form>
        </div>
        </>
    )
}