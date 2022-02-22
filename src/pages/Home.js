import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ pseudo, onChange }) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/chat");
    }

  return (
    <>
      <h2>Home...!</h2>
      <form onSubmit={handleSubmit}>
          <input 
          type="text"
          placeholder="Choisissez un pseudo"
          value={pseudo}
          onChange={(e) => onChange(e.target.value)}
          />
      </form>
    </>
  );
};

export default Home;
