import { useState } from "preact/hooks";

// Export default Greeting component. With props message
export default function Greeting({ messages }) {
  // randomMessage is an array of messages
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  // useState with default message[0]. greeting is the greeting, setGreeting sets it
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
