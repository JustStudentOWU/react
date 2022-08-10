import './App.css';
import People from "./components/people/People";
import {Route, Routes} from "react-router-dom";
import MainCounter from "./pages/MainCounter";
import Planets from "./components/planets/Planets";
import Films from "./components/films/Films";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainCounter/>}>
                    <Route path={'/people'} element={<People />}/>
                    <Route path={'/planets'} element={<Planets />}/>
                    <Route path={'/films'} element={<Films />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
