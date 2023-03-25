import { useState } from "react"
import { Link } from "react-router-dom";
import ChipsSub from "./ChipsSub";
import './Chips.css'

const Chips = () => {
    const [chips,setChips] = useState([]);
    const clickHandler = (newItem) => {
        setChips(() => [...chips,newItem]);
    }
    return(
        <div className="Chips">
            <button onClick={clickHandler}>Add Chips</button>
            <Link to="/">Back</Link>
            {chips.map((item,id) => <ChipsSub key={id} />)}
        </div>

    )



}

export default Chips