import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function LandingPage() {

    const clubs = useSelector(state => state.allClubs.clubs)

    const [searchValue, setSearchValue] = useState("")

    return (
        <section>

            <section>
                <h1>queue</h1>
                <Link to={"/LogIn"}><h1>Log in</h1></Link>
            </section>

            <input type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="sök klubb" />

            {
                searchValue.length >= 2 ?
                    clubs.filter((result) => {
                        if (result.name.toLowerCase().includes(searchValue.toLowerCase())) {
                            return result
                        }
                    })
                        .map((result, id) => (
                            <Link key={id} state={result} to={"/ClubInfo"}><p>{result.name}</p></Link>
                        )) : null
            }

        </section>

    );
}

export default LandingPage;