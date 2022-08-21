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

function App() {

    const [messages, setMessages] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [lastAuthor, setLastAuthor] = useState('');


    const onChangeAuthor = useCallback((e) => {
        setAuthor(e.target.value);
    }, []);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);


    const onClick = (e) => {

        e.preventDefault();

        setMessages([
            ...messages,
            {
                author,
                text
            }
        ]);
        setAuthor('');
        setText('');
    }

    let delay = null;
    useEffect(() => {

        if (messages[messages.length - 1]?.author) {
            clearTimeout(delay);
            delay = setTimeout(() => {
                setLastAuthor(messages[messages.length - 1]?.author);
            }, 1500);
        }

    }, [messages])

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
                <Route exact path="/chats/:chatId" element={<Chats/>}/>
                <Route exact path="/nochat" element={<NoChat/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
