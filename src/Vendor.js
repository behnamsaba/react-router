import { BrowserRouter, Route , Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Soda from "./Soda"
import Chips from "./Chips"
import Fish from "./Fish"

const Vendor = () => {
    return(
        <div className="Vendor">
            <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="soda" element={<Soda />}/>
                <Route exact path="chips" element={<Chips />}/>
                <Route exact path="fish" element={<Fish />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
    
}

export default Vendor