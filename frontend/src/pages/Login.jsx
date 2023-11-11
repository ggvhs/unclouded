import Header from "../components/Header";
import '../styles/pages/login.css'

export default function Login(){
    return(
        <>
        <Header />
        <h2>Login</h2>

        <div className="login-box">
            <form action="">
                <input type="text" placeholder="enter email"/>
                <input type="text" placeholder="enter password" />
            </form>
        </div>
        </>
    )
}