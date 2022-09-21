import { Button } from "../Shared";
import styles from "./index.module.css";
import Image from 'next/image'

export const Policies = () => {
  return (
    <div className="min-h-fit  bg-lightGray pt-20 flex flex-col sm:flex-row items-center">
      <div className="sm:w-5/12 w-full ">
        <Image src="/images/lmw_contact_IMG_3791.jpeg" alt="lisa" />
      </div>
      <div className="w-full px-10 sm:w-7/12 flex flex-col sm:items-start sm:justify-evenly h-full">
        <div className="w-full">
          {" "}
          <p className={`${styles.title} px-10 text-contact font-playfair`}>
            Medical Disclaimer <br />
            <em className="text-contact">
              Any information or guidance we provide is not a substitute for the
              consultation, diagnosis, and/or medical treatment of your doctor
              or healthcare provider. You must not rely on any information or
              guidance we provide you with as an alternative to medical advice
              from your doctor or healthcare provide and we expressly disclaim
              all responsibility, and shall have no liability, for any damages,
              loss, injury, or liability whatsoever suffered by you or any third
              party as a result of your reliance on any information or guidance
              we provide you with. If you have any specific questions or
              concerns about any medical matter, you should consult your doctor
              or healthcare provider as soon as possible. If you think you may
              be suffering from any medical condition, you should seek immediate
              medical attention from your healthcare provider. Do not delay
              seeking medical advice, disregard medical advice or discontinue
              medical treatment because of information or guidance we provide
              you with. Nothing in this disclaimer will limit or exclude any
              liability that may not be limited or excluded by applicable law.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};
