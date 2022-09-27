import { Button } from "../Shared";
import { useContext } from "react";
import { PopupContext } from "../../layouts/MainLayout";
export const Footer = () => {
  const { openClosePopup} = useContext(PopupContext)
  return (
    <footer className="shadow-lg w-full h-20 bg-white flex justify-center items-center ">
      <span>
        <Button text="MEDICAL DISCLAIMER" onClick={()=> { openClosePopup(true) }} />
        © 2022 Lisa Marie Whitney | All
        rights reserved
      </span>
    </footer>
  );
};
