import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layouts/Page/Navbar";
import Footer from "./components/layouts/Page/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
