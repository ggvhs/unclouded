import Header from "../components/Header";

export default function Login(){
    return(
        <>
        <Header />
        <h2>Login</h2>

        <div>
            <form action="">
                <input type="text" placeholder="enter email"/>
                <input type="text" placeholder="enter password" />
            </form>
        </div>
        </>
    )
}