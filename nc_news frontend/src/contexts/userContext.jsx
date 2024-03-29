import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("tickle122");
  const [avatar, setAvatar] = useState("https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp");
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
