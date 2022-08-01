import { useState } from "react";


function Images(props) {

    const [newImg, setNewImg] = useState(props.img.img)

    let img = newImg


    function changeImg() {
        console.log(img)
    }

    return (
        <section>

            <img className="imgPageImg" src={newImg} alt="" />

            <input onChange={(e) => setNewImg(e.target.value)} type="text" />

            <button onClick={() => changeImg()}>Lägg till bild</button>

        </section>
    );
}

export default Images;