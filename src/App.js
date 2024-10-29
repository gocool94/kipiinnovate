import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MainHomepage from "./components/MainHomepage";
import MyIdeas from "./components/MyIdeas";
import ReviewIdeas from "./components/ReviewIdeas";
import ContactUs from "./components/ContactUs";
import BrowseIdeas from "./components/BrowseIdeas";
import Header from "./components/Header"; // Import the Header component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  // Handle successful login
  const handleLoginSuccess = (profile) => {
    setUserProfile(profile);
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setUserProfile(null);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Header /> {/* Persistent Header component */}
        
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <MainHomepage
                  setIsLoggedIn={setIsLoggedIn}
                  onLogout={handleLogout}
                  userProfile={userProfile}
                />
              ) : (
                <Homepage onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
          <Route path="/browse-ideas" element={<BrowseIdeas />} />
          <Route path="/my-ideas" element={<MyIdeas />} />
          <Route path="/review-ideas" element={<ReviewIdeas />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
