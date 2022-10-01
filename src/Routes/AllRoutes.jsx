import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

import News from "../Pages/News";
import SinglePage from "../Pages/SinglePage";




function AllRoutes(){ 
    return(
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:name" element={<News/>}/>
            <Route path="/:name/:singlepage" element={<SinglePage/>}/>
        
        </Routes>
    )
}
export default AllRoutes