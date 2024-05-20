import { createContext, useState, useMemo } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const handleNameChange = (name) => {
    setUserName(name);
  };

  const userContextValue = useMemo(
    () => ({
      userName: userName,
      onChange: (e) => handleNameChange(e.target.value),
      placeholder: "Your full name",
    }),
    [userName]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
