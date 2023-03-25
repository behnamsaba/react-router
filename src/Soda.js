import {Link} from "react-router-dom"
import './Soda.css'

const Soda = () => {
    return(
        <div className="Soda">
            <h1>OMG SUGAR</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg" alt="soda" height="400px" width="400px"/>
            <Link to="/">Back</Link>
            
        </div>
    )

}

export default Soda;