import { useRef } from "react"
function Slide(props) {
    return (

        <div key={props.alt} className="slide">
            <img className="cards-img" src={props.image_path}></img>
        </div>
    )
}

export default Slide