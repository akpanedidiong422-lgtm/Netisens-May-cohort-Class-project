import { createContext, useContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const UseName = "Sunday";
  const Email = "sunday@example.com";

  return (
    <UserContext.Provider value={{ UseName, Email }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Component must be inside UserProvider");
  }

  return context;
}