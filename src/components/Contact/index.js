import { Button } from "../Shared";
import styles from "./index.module.css";

export const Contact = () => {
  return (
    <div className="min-h-fit  bg-lightGray pt-20 flex flex-col sm:flex-row items-center">
      <div className="sm:w-5/12 w-full ">
        <img src="/images/lmw_contact_IMG_3791.jpeg" alt="lisa" />
      </div>
      <div className="w-full px-10 sm:w-7/12 flex flex-col sm:items-start sm:justify-evenly h-full">
        <div className="w-full">
          {" "}
          <p className={`${styles.title} px-10 text-contact font-playfair`}>
            Questions or comments? <br />
            <em className="text-contact">Send me a message…</em>
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
            <div className="w-full flex justify-between pt-6">
              <p className="text-contact">
                Email: <br />
                <a href="mailto: email@here.com">lisamariewhitney@yahoo.com</a>
              </p>
              <Button
                text="Submit"
                extraClasses="border-contact text-contact h-12"
                extraArrowClasses="border-contact  border-r border-t"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
