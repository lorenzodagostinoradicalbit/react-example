import React from "react";
  
export default function Block({version}) {
  console.log(version);
  return (
      <div className="p-4 bg-gray-100 rounded shadow text-purple-600">
        {version ? (
          <p>Version: {version}</p>
        ) : (
          <p>Fetching version...</p>
        )}
      </div>
  );
};