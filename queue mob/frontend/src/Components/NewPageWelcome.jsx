
import { Link } from "react-router-dom";

function NewPageWelcome(props) {
    return (
        <section className="newAccModal">
            <article>
                <h1>Välkommen {props.user}</h1>
                <h5>Nu kan du</h5>
                <p>Lägga till egna klubbar</p>
                <p>Uppdatera information</p>
                <p>bla bla bla</p>
                <h3>Gå tillbaka till startsidan och logga in</h3>
                <Link to={"/"}><button>STARTSIDAN</button></Link>
            </article>
        </section>
    );
}

export default NewPageWelcome;