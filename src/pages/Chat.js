import { useEffect, useState } from "react";
import { getDatabase, ref, get, set, push, onValue } from "firebase/database";

const Chat = ({ pseudo }) => {

    const [messages, setMessages] = useState([]);

    const [text, setText] = useState("");

    useEffect(() => {
        const db = getDatabase();

        const messagesRef = ref(db, "messages");

        return onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const messages = Object.keys(data).map((key) => data[key]);
            setMessages(messages);
        });
        
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();

      const message = {
          pseudo,
          text,
          date: Date.now()
      }

      const db = getDatabase();

      const messRef = ref(db, "messages");

      const newMessageRef = push(messRef);

      set(newMessageRef, message);

      setText("");
    };



    return (
      <>
        <h2>Chat...!</h2>
        {messages.map((mess) => {
          return (
            <div key={mess.date}>
              <span>
                <strong>{mess.pseudo} : </strong>
                <span>{mess.text}</span>
              </span>
            </div>
          );
        })}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tapez votre message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </>
    );
}

export default Chat;