import React, { useEffect, useState } from "react";
import API from "../api/api";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get("/profile")
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="col-md-6 offset-md-3 mt-4">
      <div className="card p-3 shadow-sm">
        <h4>Profile Information</h4>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Role:</strong> {profile.role}</p>
      </div>
    </div>
  );
};

export default Profile;
