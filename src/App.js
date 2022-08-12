import {useEffect, useState} from "react";

import styles from './App.module.css';

import MessageList from "./components/MessageList";


function App() {

    const [messages, setMessages] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [lastAuthor, setLastAuthor] = useState('');

    const onChangeAuthor = (e) => {
        setAuthor(e.target.value);
    };

    const onChangeText = (e) => {
        setText(e.target.value);
    };

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

        if(messages[messages.length - 1]?.author) {
            clearTimeout(delay);
            delay = setTimeout(() => {
                setLastAuthor(messages[messages.length - 1]?.author);
            } , 1500);
        }

    }, [messages])

  return (
    <div className={styles.app}>
        <form className={styles.form}>
           <div className={styles.field}>
               <label >Author:</label>
               <input  value={author} onChange={onChangeAuthor} />
           </div>
            <div className={styles.field}>
                <label >Text:</label>
                <textarea  value={text} onChange={onChangeText} />
            </div>
            <button className={styles.saveBtn} onClick={onClick}>Save</button>

        </form>

        <div className={styles.messageListContainer}>
            <MessageList  messages={messages}></MessageList>
        </div>
        { lastAuthor && <div>Message Author {lastAuthor} was sent!</div>}
    </div>
  );
}

export default App;
