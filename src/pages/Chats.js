import {
    useParams,
    Navigate,
    Routes,
    Route,
    useMatch,
} from "react-router-dom";
import MessagesList from "../components/MessageList";
import {ChatList} from "../components/ChatList";


const Chats = ({chats, setChats}) => {

    const { chatId } = useParams();



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
