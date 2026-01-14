import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserRole = "researcher" | "mentor" | "sponsor" | null;

interface UserRoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  clearRole: () => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export const UserRoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRoleState] = useState<UserRole>(() => {
    const saved = localStorage.getItem("ureka-user-role");
    return (saved as UserRole) || null;
  });

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
    if (newRole) {
      localStorage.setItem("ureka-user-role", newRole);
    }
  };

  const clearRole = () => {
    setRoleState(null);
    localStorage.removeItem("ureka-user-role");
  };

  return (
    <UserRoleContext.Provider value={{ role, setRole, clearRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error("useUserRole must be used within a UserRoleProvider");
  }
  return context;
};
