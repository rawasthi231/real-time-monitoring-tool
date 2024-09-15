import { useState, useEffect } from "react";

import WebSocketService from "./WebSocketService";

function App() {
  const [scores, setScores] = useState<{
    "Team A": number;
    "Team B": number;
  }>({
    "Team A": 0,
    "Team B": 0,
  });

  useEffect(() => {
    WebSocketService.connect((event: MessageEvent) => {
      const data = JSON.parse(event.data);
      if (data.event_type === "score_update") {
        setScores(data.data);
      }
    });
  }, []);

  return (
    <div>
      <h1>Real-Time Sports Scores</h1>
      <div>
        <h2>Team A: {scores["Team A"]}</h2>
        <h2>Team B: {scores["Team B"]}</h2>
      </div>
    </div>
  );
}

export default App;
