import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../components/utils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [events, setEvents] = useState();
  const [profile, setProfile] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // token should be let type variable because its value will change in every login. (in backend also)
        let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
        console.log(token);
        if (token) {
          const { data } = await axios.get(
            `${BACKEND_URL}/api/users/get-my-profile`,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(data.user);
          setProfile(data);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/event/allevents`,
          { withCredentials: true }
        );
        console.log(data);
        setEvents(data.events);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        events,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);