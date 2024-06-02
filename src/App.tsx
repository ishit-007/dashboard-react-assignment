import React, { useState } from "react";
import "./App.css";
import { Dashboard, LoginPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes";

function App() {
  const [profilePicture, setProfilePicture] = useState<string>("");

  return (
    <div className="h-[100%] 2xl:h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage setProfilePicture={setProfilePicture} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard profilePicture={profilePicture} />{" "}
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
