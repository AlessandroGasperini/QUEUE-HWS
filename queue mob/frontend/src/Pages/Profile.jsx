import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import OpenHours from "../Components/OpenHours";
import Images from "../Components/Images";
import DjOfTheDay from "../Components/DjOfTheDay";

function Profile() {

    const location = useLocation()
    const user = location.state.userInfo
    const clubs = useSelector(state => state.allClubs.clubs)
    let ownClubs = []

    clubs.map((club, id) => (
        user.userName === club.admin ? ownClubs.push(club) : null
    ))

    const [showClub, setShowClub] = useState("")
    const [openBool, setOpenBol] = useState(false)
    const [imgBool, setImgBools] = useState(false)
    const [djBool, setDjBool] = useState(false)
    const [day, setDay] = useState()




    return (
        <section>
            <section>
                {ownClubs.map((club, id) => (
                    <h3 onClick={() => setShowClub(club)}>{club.name}</h3>
                ))}
            </section>
            <h1>{user.firstName}</h1>

            {showClub ? <section className="dayBtns">
                {showClub.open.monday == "Stängt" ? null : <button onClick={() => setDay("monday")}>Måndag</button>}
                {showClub.open.tuesday == "Stängt" ? null : <button onClick={() => setDay("tuesday")}>Tisdag</button>}
                {showClub.open.wednsday == "Stängt" ? null : <button onClick={() => setDay("wednsday")}>Onsdag</button>}
                {showClub.open.thursday == "Stängt" ? null : <button onClick={() => setDay("thursday")}>Torsdag</button>}
                {showClub.open.friday == "Stängt" ? null : <button onClick={() => setDay("friday")}>Fredag</button>}
                {showClub.open.saturday == "Stängt" ? null : <button onClick={() => setDay("saturday")}>Lördag</button>}
                {showClub.open.sunday == "Stängt" ? null : <button onClick={() => setDay("sunday")}>Söndag</button>}
            </section> : null}

            <section>
                {showClub ? <h1>{showClub.name}</h1> : null}

                {!openBool && !imgBool ? <h3>{showClub ? day == "monday" ? showClub.open.monday : null || day == "tuesday" ? showClub.open.tuesday : null || day == "wednsday" ? showClub.open.wednsday : null || day == "thursday" ? showClub.open.thursday : null || day == "friday" ? showClub.open.friday : null || day == "saturday" ? showClub.open.saturday : null || day == "sunday" ? showClub.open.sunday : null : null}</h3> : null}

                {!imgBool ? <section>
                    {!openBool ? <section>
                        {!djBool ? <section>
                            {showClub ? clubs.map((club, id) => (
                                club.name === showClub.name ?
                                    club.floors.map((floor, id) => (
                                        floor.day === day ?
                                            <section>
                                                <h3>{floor.name}</h3>
                                                <h4>{floor.dj}</h4>
                                                <h4>{floor.time}</h4>
                                            </section>
                                            : null

                                    )) : null
                            )) : null
                            }
                        </section> : null}
                    </section> : null}
                </section> : null}


                {showClub ? <section className="djOpenImg">

                    {!imgBool ? <section>
                        {!openBool ? <section>
                            {djBool && <DjOfTheDay dj={showClub} day={day} />} <button onClick={() => setDjBool(!djBool)}>{!djBool ? "Kvällens DJ" : "dj X"}</button>
                        </section> : null}
                    </section> : null}

                    {!imgBool ? <section>
                        {!djBool ? <section>
                            {openBool && <OpenHours open={showClub} />} <button onClick={() => setOpenBol(!openBool)}>{!openBool ? "Ändra öppetider" : "öppetider X"}</button>
                        </section> : null}
                    </section> : null}

                    {!djBool ? <section>
                        {!openBool ? <section>
                            {imgBool && <Images img={showClub} />} <button onClick={() => setImgBools(!imgBool)}>{!imgBool ? "Ändra bilder" : "img X"}</button>
                        </section> : null}
                    </section> : null}

                </section> : null}

            </section>

        </section>
    );
}

export default Profile;