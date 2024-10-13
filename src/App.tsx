import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Page/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </>
    );
}

export default App;
