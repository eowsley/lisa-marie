import { Button } from "../Shared";
import styles from "./index.module.css";
import Image from 'next/image'

export const Contact = () => {
  return (
    <div className="sm:h-screen h-auto  bg-lightGray pt-20 flex flex-col sm:flex-row items-center">
      <div className="sm:w-5/12 w-full flex justify-center items-center ">
      <Image  width={350} height={500} src="/images/lmw_bio_Pink_MG_3681.JPG" alt="lisa" />
      </div>
      <div className="w-full px-10 sm:w-7/12 flex flex-col sm:items-start sm:justify-evenly h-full">
        <div className="w-full">
          {" "}
          <p className={`${styles.title} px-10 text-contact font-playfair`}>
            Say Hello. <br />
            <em className="text-contact">Ready to move your life forward? Contact me here…</em>
          </p>
          <form className="w-full px-10">
            <div className={styles.firstRow}>
              <input className={styles.input} placeholder="First Name" />
              <input className={styles.input} placeholder="Last Name" />
            </div>
            <input className={styles.input} placeholder="Email Address" />

            <div className={styles.firstRow}>
              <textarea className={styles.textArea} placeholder="message..." />
            </div>
            <div className="w-full flex justify-center pt-6">
      
              <Button
                text="Submit"
                extraClasses="border-contact text-contact h-12 w-72"
                extraArrowClasses="border-contact  border-r border-t"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
