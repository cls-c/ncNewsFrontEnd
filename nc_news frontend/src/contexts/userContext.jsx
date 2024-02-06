import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("default");
  const [avatar, setAvatar] = useState("");
  const [selectedArticleId, setSelectedArticleId] = useState();
  const [isLoading, setIsLoading] = useState(false);



  return (
    <userContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        username,
        setUsername,
        avatar,
        setAvatar,
        selectedArticleId,
        setSelectedArticleId,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </userContext.Provider>
  );
};
