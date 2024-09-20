import { useState, useEffect } from "react";

import WebSocketService from "./WebSocketService";

import "./SensorDashboard.css";

const SensorDashboard = () => {
  const [sensorData, setSensorData] = useState<Record<string, number>>({});

  useEffect(() => {
    WebSocketService.connect((event: MessageEvent) => {
      const data = JSON.parse(event.data);

      setSensorData((pre) => ({
        ...pre,
        [data.sensor]: data.value,
      }));
    });
  }, []);

  return (
    <div className="sensor-dashboard">
      {Object.keys(sensorData).map((key) => (
        <div className="sensor-card" key={key}>
          <h3>{key.replace("_", " ").toUpperCase()}</h3>
          <p>{sensorData[key]}</p>
        </div>
      ))}
    </div>
  );
};

export default SensorDashboard;
