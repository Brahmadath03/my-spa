import React, { useEffect, useState } from "react";
import API from "../api/api";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/dashboard")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">Dashboard</h2>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
