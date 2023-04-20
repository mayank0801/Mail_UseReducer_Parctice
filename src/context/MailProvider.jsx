import { createContext, useEffect } from "react";
import { mails } from "../Data/data";
export const MailContext = createContext();

export default function MailProvider({ children }) {
  return (
    <div>
      <MailContext.Provider value={{ mails }}>{children}</MailContext.Provider>
    </div>
  );
}
