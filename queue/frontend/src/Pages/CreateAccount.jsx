import { useState } from "react";
import { useSelector } from "react-redux";
import NewPageWelcome from "../Components/NewPageWelcome";

function CreateAccount() {

    const userAccounts = useSelector(state => state.allUsers.users)


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPsw, setConfirmPsw] = useState("")
    const [dob, setDob] = useState("")

    const [pswMatch, setPswMatch] = useState(false)
    const [fields, setFields] = useState(false)
    const [sameAcc, setSameAcc] = useState(false)
    const [newAccountConfirmed, setConfirmed] = useState(false)
    const [pswHidden, setPswHidden] = useState(false)


    let newAccount = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        dob: dob,
        email: email
    }

    function confirm() {
        if (firstName === "" || lastName === "" || userName === "" || password === "" || confirmPsw === "" || email === "" || dob === "") {
            setFields(true)
        } else {
            setFields(false)
        }
        if (password != confirmPsw && confirmPsw.length > 1) {
            setPswMatch(true)
        } else {
            setPswMatch(false)
            userAccounts.find((accounts, id) => (
                <section>
                    {accounts.userName === userName ? setSameAcc(true) :
                        usernameCheck() &&
                        setSameAcc(false)
                    }
                </section>
            ))
        }
    }




    function usernameCheck() {
        setConfirmed(true)
        addAccount(newAccount)
    }






    function addAccount(newAccount) {
        password === confirmPsw && confirmPsw.length > 1 ?
            fetch("http://localhost:4000/api2_post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAccount)
            }) : setPswMatch(true)
    }



    return (
        <section>

            <h1>Skapa konto</h1>

            <input className={firstName == "" && fields ? "inputEmpty" : null} onChange={(e) => setFirstName(e.target.value)} placeholder="Förnamn" type="text" />
            <input className={lastName == "" && fields ? "inputEmpty" : null} onChange={(e) => setLastName(e.target.value)} placeholder="Efternamn" type="text" />
            <input className={userName == "" && fields ? "inputEmpty" : null} onChange={(e) => setUsername(e.target.value)} placeholder="Användarnamn" type="text" />
            <input className={email == "" && fields ? "inputEmpty" : null} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" type="text" />
            <input className={password == "" && fields ? "inputEmpty" : null} onChange={(e) => setPassword(e.target.value)} placeholder="Skapa lösenord" type={!pswHidden ? "password" : "text"} />
            <input className={confirmPsw == "" && fields ? "inputEmpty" : null} onChange={(e) => setConfirmPsw(e.target.value)} placeholder="Upprepa lösenord" type={!pswHidden ? "password" : "text"} />
            <input type="checkbox" onChange={() => setPswHidden(!pswHidden)} />
            <input className={dob == "" && fields ? "inputEmpty" : null} onChange={(e) => setDob(e.target.value)} type="date" />

            {pswMatch ? <h5>De upprepade lösenordet stämmer inte</h5> : null}
            {sameAcc ? <h5>Detta användarnamn finns redan</h5> : null}
            <button onClick={() => confirm()}>Skapa konto</button>

            {newAccountConfirmed && <NewPageWelcome user={firstName} />}

        </section>
    );
}

export default CreateAccount;
