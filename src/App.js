import './App.css';

import Message from "./components/Message";

function App() {

  const customText = 'My Text';

  return (
    <div className="app">
      <Message message={customText} />
    </div>
  );
}

export default App;
