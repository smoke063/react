import {
    useEffect,
    useState,
    useCallback
} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Profile from "./pages/Profile";
import Chats from "./pages/Chats";
import NoChat from "./components/NoChat";

const AUTHORS = {
    BOT: 'BOT',
    ME: 'ME'
};


const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{ text: "FirstMessage", author: AUTHORS.BOT }],
    },
    id2: {
        name: "Chat2",
        messages: [{ text: "FirstMessageHereToo!", author: AUTHORS.ME }],
    },
};

function App() {

    const [chats, setChats] = useState(initialChats);

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/chats">chats</Link>
                </li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/chats/:chatId?" element={<Chats chats={chats} setChats={setChats}/>}/>
                <Route exact path="/nochat" element={<NoChat chats={chats}/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
