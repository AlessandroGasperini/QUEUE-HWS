import { useState } from "react";


function DjOfTheDay(props) {

    const info = props.dj
    const floorAmount = info.ownFloors.length


    const [djName, setDjName] = useState("")
    const [timeFrom, setTimeFrom] = useState("")
    const [timeTo, setTimeTo] = useState("")
    const [genre, setGenre] = useState("")
    const [floorIndex, setFloorIndex] = useState(0)

    const [floors, setFloors] = useState([])
    let floor = {
        day: props.day,
        name: info.ownFloors[floorIndex],
        dj: djName,
        time: timeFrom + "-" + timeTo,
        genre: genre

    }


    return (
        <section>

            <h1>{props.day}</h1>

            <h2>{info.ownFloors[floorIndex]}</h2>

            <input type="text" onChange={(e) => setDjName(e.target.value)} placeholder="namn" />

            <article>
                <input onChange={(e) => setTimeFrom(e.target.value)} type="time" />
                <input onChange={(e) => setTimeTo(e.target.value)} type="time" />
            </article>

            <select onChange={(e) => setGenre(e.target.value)} name="" id="">
                <option value="">Genre</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Rock">Rock</option>
                <option value="House">House</option>
                <option value="RnB">RnB</option>
                <option value="Schlager">Schlager</option>
            </select>

            <article>
                {floorIndex == 0 ? null : <button onClick={() => setFloorIndex(floorIndex - 1)}>x----</button>}
                <h5>Golv</h5>
                {floorIndex === floorAmount - 1 ? null : <button onClick={() => setFloorIndex(floorIndex + 1)}>-----x</button>}
            </article>
            <button onClick={() => floors.push(floor)}>Lägg till kvällens dj</button>
            <button onClick={() => console.log(floors)}>K L A R</button>

        </section>
    );
}

export default DjOfTheDay;