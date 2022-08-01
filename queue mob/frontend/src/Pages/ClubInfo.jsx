import { useLocation } from "react-router-dom";


function ClubInfo() {

    const location = useLocation()
    const clubInfo = location.state
    return (
        <section>
            <h1>{clubInfo.name}</h1>

        </section>
    );
}

export default ClubInfo;