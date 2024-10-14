import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layouts/Page/Navbar";
import Welcome from "./components/layouts/Page/Welcome";
import Footer from "./components/layouts/Page/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Welcome />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
