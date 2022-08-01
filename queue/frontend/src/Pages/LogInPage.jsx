import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function LogInPage() {

    const userAccounts = useSelector(state => state.allUsers.users)
    const navigate = useNavigate();

    const [showPsw, setShowPsw] = useState(false)
    const [changePsw, setChangePsw] = useState(false)
    const [wrongPsw, setWrongPsw] = useState(false)
    const [noAccount, setNoAccount] = useState(false)
    const [noAccountTwo, setNoAccountTwo] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [userInfo, setUserInfo] = useState("")
    const [attempts, setAttempts] = useState(0)


    function login() {
        userAccounts.find((user, id) => (
            user.userName === username && user.password != password ? setWrongPsw(true) & setAttempts(attempts + 1) & wrongPassword() : null,
            username === user.userName && password === user.password ? setUserInfo(user) : null,
            user.userName != username ? setNoAccount(true) : setNoAccountTwo(true)
        ))
    }



    function wrongPassword() {
        if (attempts === 4) {
            alert("Du har ett försök till")
        }
    }





    useEffect(() => {
        if (userInfo != "") {
            goToUser()
        }
    }, [userInfo])


    function goToUser() {
        navigate("/Profile", { state: { userInfo } })
    }


    return (
        <section>
            <section>
                <h1>LogIn</h1>
            </section>

            <section>
                <input type="text" placeholder="usename" onChange={(e) => setUsername(e.target.value)} />
                <input className={wrongPsw ? "wrongPsw" : null} type={showPsw ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </section>

            {changePsw ? <input type={showPsw ? "text" : "password"} onChange={(e) => setNewPassword(e.target.value)} /> : null}

            <section>
                <input type="checkbox" onChange={() => setShowPsw(!showPsw)} />
                <button onClick={() => setChangePsw(!changePsw)}>{changePsw ? "Ångra" : "Glömt mitt lösenord"}</button>
            </section>

            {noAccount && !noAccountTwo ? <h5>Användarnamnet finns inte. Skapa ett konto</h5> : null}

            <button onClick={() => login()}>Logga in</button>
            <Link to={"/CreateAccount"}><button>Skapa konto</button></Link>

        </section>

    );
}

export default LogInPage;