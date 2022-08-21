import {
    useParams,
    Navigate,
    Routes,
    Route,
    useMatch,
} from "react-router-dom";
import {
    useState
} from "react";
import MessagesList from "../components/MessageList";
import ChatList from "../components/ChatList";

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


const Chats = () => {

    const { chatId } = useParams();

    const [chats, setChats] = useState(initialChats);

    const { path, url } = useMatch('end');

    if (!chats[chatId]) {
        return <Navigate  to="/nochat" />;
    }

    return (

            <div>W
                <h2>Chats</h2>
                <ChatList chats={chats} />
                <Routes>
                    <Route exact path={path}>
                        <h3>Please select a chat.</h3>
                    </Route>
                    <Route path={`${path}/:chatId`} element={<MessagesList chats={chats} />} />
                </Routes>
            </div>
    )
};

export default Chats;
