import { PoliciesPopup } from "../components/Policies";
import { Header, Footer } from "../components/Shared";
import { createContext, useState } from "react";

export const PopupContext = createContext(null);

export function MainLayout({ children }) {
  const [isPopupOpen, openClosePopup] = useState(false);
  return (
    <PopupContext.Provider value={{ isPopupOpen, openClosePopup }}>
      <div className="min-h-screen flex flex-col">
        <Header />
        {isPopupOpen && <PoliciesPopup />}
        {children}
        <Footer />
      </div>
    </PopupContext.Provider>
  );
}
