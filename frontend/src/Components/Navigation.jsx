import React, { useState } from 'react';
import Login from './Login'; // Assuming Login component is in a separate file

const Navigation = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true); // Set state to true to show the login modal
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={handleLoginClick}>Login</button> {/* Button to open login modal */}
          </li>
          {/* Add other navigation items */}
        </ul>
      </nav>

      {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />} {/* Render Login component if showLoginModal is true */}
    </div>
  );
};

export default Navigation;
