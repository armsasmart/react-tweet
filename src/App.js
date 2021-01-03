import React, { useState, useEffect } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  useEffect(() => {
    console.log("we run the function yeyyy");
  }, []);

  const [name, setName] = useState("Dragodzs");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
