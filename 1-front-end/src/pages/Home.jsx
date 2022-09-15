import React from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate('/context');
  };

  const navigateToRedux = () => {
    navigate('/reduxsimple');
  };
  return (
    <div className="home-container">
      <h1>Home</h1>
      <button className="button-context"  onClick={navigateToContacts}>Context</button>
      <button className="button-redux"  onClick={navigateToRedux}>Redux</button>
    </div>
  )
}

export default Home;
