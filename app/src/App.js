import React, { useEffect, useState } from "react";
import axios from "axios";

const Block = () => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await axios.get(`http://${window.env.VERSION_API_ENDPOINT}:${window.env.VERSION_API_PORT}/version`);
        setVersion(response.data.version);
      } catch (error) {
        console.error("Error fetching version:", error);
      }
    };
    fetchVersion()
    setInterval(fetchVersion, 5000)
  });

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      {version ? (
        <p>Version: {version}</p>
      ) : (
        <p>Fetching version...</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">React Block Versions</h1>
      <h2 className="text-2xl font-bold mb-4">{window.env.VERSION_API_ENDPOINT}:{window.env.VERSION_API_PORT}</h2>
      <div className="grid grid-cols-4 gap-4">
        <Block blockId={1} />
        <Block blockId={2} />
        <Block blockId={3} />
        <Block blockId={4} />
        <Block blockId={5} />
        <Block blockId={6} />
        <Block blockId={7} />
        <Block blockId={8} />
      </div>
    </div>
  );
};

export default App;
