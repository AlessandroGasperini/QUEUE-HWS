import { useState } from "react";


function OpenHours(props) {

    let openHours = props.open.open

    const [mondayFrom, setMondayFrom] = useState("")
    const [tuesdayFrom, setTuesdayFrom] = useState("")
    const [wednsdayFrom, setWednsdayFrom] = useState("")
    const [thursdayFrom, setThursdayFrom] = useState("")
    const [fridayFrom, setFridayFrom] = useState("")
    const [saturdayFrom, setSaturdayFrom] = useState("")
    const [sundayFrom, setSundayFrom] = useState("")

    const [mondayTo, setMondayTo] = useState("")
    const [tuesdayTo, setTuesdayTo] = useState("")
    const [wednsdayTo, setWednsdayTo] = useState("")
    const [thursdayTo, setThursdayTo] = useState("")
    const [fridayTo, setFridayTo] = useState("")
    const [saturdayTo, setSaturdayTo] = useState("")
    const [sundayTo, setSundayTo] = useState("")

    const [mondayBool, setMondayBool] = useState(false)
    const [tuesdayBool, setTuesdayBool] = useState(false)
    const [wednsdayBool, setWednsdayBool] = useState(false)
    const [thursdayBool, setThursdayBool] = useState(false)
    const [fridayBool, setFridayBool] = useState(false)
    const [saturdayBool, setSaturdayBool] = useState(false)
    const [sundayBool, setSundayBool] = useState(false)

    let openHoursObj = {
        monday: openHours.monday,
        tuesday: openHours.tuesday,
        wednsday: openHours.wednsday,
        thursday: openHours.thursday,
        friday: openHours.friday,
        saturday: openHours.saturday,
        sunday: openHours.sunday
    }

    let newOpenHours = {
        monday: mondayFrom == "Stängt" ? mondayFrom : mondayFrom + "-" + mondayTo,
        tuesday: tuesdayFrom == "Stängt" ? tuesdayFrom : tuesdayFrom + "-" + tuesdayTo,
        wednsday: wednsdayFrom == "Stängt" ? wednsdayFrom : wednsdayFrom + "-" + wednsdayTo,
        thursday: thursdayFrom == "Stängt" ? thursdayFrom : thursdayFrom + "-" + thursdayTo,
        friday: fridayFrom == "Stängt" ? fridayFrom : fridayFrom + "-" + fridayTo,
        saturday: saturdayFrom == "Stängt" ? saturdayFrom : saturdayFrom + "-" + saturdayTo,
        sunday: sundayFrom == "Stängt" ? sundayFrom : sundayFrom + "-" + sundayTo
    }




    function changeOpenHours() {
        console.log(newOpenHours);
    }

    function monFunc() {
        setMondayFrom("Stängt")
    }
    function tueFunc() {
        setTuesdayFrom("Stängt")
    }
    function wedFunc() {
        setWednsdayFrom("Stängt")
    }
    function thurFunc() {
        setThursdayFrom("Stängt")
    }
    function friFunc() {
        setFridayFrom("Stängt")
    }
    function satFunc() {
        setSaturdayFrom("Stängt")
    }
    function sunFunc() {
        setSundayFrom("Stängt")
    }

    return (
        <section>
            {
                <section className="openHours">
                    <article><h3>Måndag: </h3>{mondayFrom == "Stängt" ? <p>Stängt</p> : <article> {mondayBool ? <section><input type="time" onChange={(e) => setMondayFrom(e.target.value)} /><input type="time" onChange={(e) => setMondayTo(e.target.value)} /><button onClick={() => monFunc()}>Stängt</button></section> : <section><h3>{openHours.monday}</h3></section>} {!mondayBool ? <button onClick={() => setMondayBool(!mondayBool)}>Ändra</button> : null}</article>}</article>
                    <article> <h3>Tisdag: </h3>{tuesdayFrom == "Stängt" ? <p>Stängt</p> : <article> {tuesdayBool ? <section><input type="time" onChange={(e) => setTuesdayFrom(e.target.value)} /><input type="time" onChange={(e) => setTuesdayTo(e.target.value)} /><button onClick={() => tueFunc()}>Stängt</button></section> : <section><h3>{openHours.tuesday}</h3></section>}  {!tuesdayBool ? <button onClick={() => setTuesdayBool(!tuesdayBool)}>Ändra</button> : null} </article>}</article>
                    <article><h3>Onsdag: </h3>{wednsdayFrom == "Stängt" ? <p>Stängt</p> : <article> {wednsdayBool ? <section><input type="time" onChange={(e) => setWednsdayFrom(e.target.value)} /><input type="time" onChange={(e) => setWednsdayTo(e.target.value)} /><button onClick={() => wedFunc()}>Stängt</button></section> : <section><h3>{openHours.wednsday}</h3></section>}  {!wednsdayBool ? <button onClick={() => setWednsdayBool(!wednsdayBool)}>Ändra</button> : null}</article>}</article>
                    <article><h3>Torsdag: </h3>{thursdayFrom == "Stängt" ? <p>Stängt</p> : <article> {thursdayBool ? <section><input type="time" onChange={(e) => setThursdayFrom(e.target.value)} /><input type="time" onChange={(e) => setThursdayTo(e.target.value)} /><button onClick={() => thurFunc()}>Stängt</button></section> : <section><h3>{openHours.thursday}</h3></section>}  {!thursdayBool ? <button onClick={() => setThursdayBool(!thursdayBool)}>Ändra</button> : null}</article>}</article>
                    <article><h3>Fredag: </h3>{fridayFrom == "Stängt" ? <p>Stängt</p> : <article> {fridayBool ? <section><input type="time" onChange={(e) => setFridayFrom(e.target.value)} /><input type="time" onChange={(e) => setFridayTo(e.target.value)} /><button onClick={() => friFunc()}>Stängt</button></section> : <section><h3>{openHours.friday}</h3></section>}  {!fridayBool ? <button onClick={() => setFridayBool(!fridayBool)}>Ändra</button> : null} </article>}</article>
                    <article><h3>Lördag: </h3>{saturdayFrom == "Stängt" ? <p>Stängt</p> : <article> {saturdayBool ? <section><input type="time" onChange={(e) => setSaturdayFrom(e.target.value)} /><input type="time" onChange={(e) => setSaturdayTo(e.target.value)} /><button onClick={() => satFunc()}>Stängt</button></section> : <section><h3>{openHours.saturday}</h3></section>}  {!saturdayBool ? <button onClick={() => setSaturdayBool(!saturdayBool)}>Ändra</button> : null} </article>}</article>
                    <article><h3>Söndag: </h3>{sundayFrom == "Stängt" ? <p>Stängt</p> : <article> {sundayBool ? <section><input type="time" onChange={(e) => setSundayFrom(e.target.value)} /><input type="time" onChange={(e) => setSundayTo(e.target.value)} /><button onClick={() => sunFunc()}>Stängt</button></section> : <section><h3>{openHours.sunday}</h3></section>}  {!sundayBool ? <button onClick={() => setSundayBool(!sundayBool)}>Ändra</button> : null} </article>}</article>
                </section>
            }
            <button onClick={() => changeOpenHours()}>Ändra tider</button>

        </section>
    );
}

export default OpenHours;