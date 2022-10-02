import { Button } from "../Shared";
import { useContext } from "react";
import { PopupContext } from "../../layouts/MainLayout";
export const Footer = () => {
  const { openClosePopup } = useContext(PopupContext);
  return (
    <footer className="shadow-lg w-full sm:h-20 h-24 bg-white flex  flex-col justify-center items-center ">
      <Button
        text="MEDICAL DISCLAIMER"
        onClick={() => {
          openClosePopup(true);
        }}
      />
      <span>© 2022 Lisa Marie Whitney | All rights reserved</span>
    </footer>
  );
};
