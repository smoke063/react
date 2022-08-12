import styles from './MessageList.module.css';

const Message = ({author, text}) => <div className={styles.message}>
    <div className={styles.field}>
        <span className={styles.fontWeight}>author:</span> {author}
    </div>
    <div className={styles.field}>
        <span className={styles.fontWeight}>text:</span> {text}
    </div>
</div>

const MessageList = ({messages} ) => {
    return messages.map((message) =><Message key={message.author} author={message.author} text={message.text} />);
}

export default MessageList
