import {useEffect, useState, useCallback} from "react";
import { v4 as uuid } from 'uuid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './App.module.css';

import MessageList from "./components/MessageList";
import Chat from "./components/Chat";


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
        <div className={styles.app}>
            {
                lastAuthor &&
                <div style={{padding: "10px", marginTop: '10px', textAlign: 'center'}}>
                    Message Author <span style={{color: "red"}}>{lastAuthor}</span> was sent!
                </div>
            }
          <div className={styles.main}>
              <div className={styles.chat}>
                  <Chat array={[
                      {id: uuid(), name: 'name 1'}
                  ]}></Chat>
              </div>
              <Box
                  component="form"
                  sx={{
                      '& > :not(style)': {m: 1, width: '25ch'},
                  }}
                  noValidate
                  autoComplete="off"
                  className={styles.form}
              >
                  <TextField
                      autoFocus
                      value={author}
                      onChange={onChangeAuthor}
                      id="outlined-basic"
                      label="Author"
                      variant="outlined"
                  />
                  <TextField
                      value={text}
                      onChange={onChangeText}
                      id="standard-basic"
                      label="Text"
                      variant="standard"/>
                  <Button variant="contained" onClick={onClick}>Save</Button>
              </Box>
              <div className={styles.messageListContainer}>
                  <MessageList messages={messages}></MessageList>
              </div>
          </div>
        </div>
    );
}

export default App;
