import React, { useState } from "react";
import addperson from "@/styles/Addperson.module.css";
const Index = () => {
  const [relation, setRelation] = useState("debit");
  console.log(relation);

  return (
    <div className={`${addperson.main_body}`}>
      <div className={`container ${addperson.container_body} `}>
        <h2>പുതിയ ആളെ ചേർക്കുക</h2>

        <ul className={`${addperson.form_body}`}>
          <li>
            <input
              type="text"
              className={addperson.form_body_input}
              placeholder="Name"
              name="name"
            />
          </li>
          <li>
            <input
              type="radio"
              name="relation"
              className={addperson.form_body_radio_input}
              value={"debit"}
              defaultChecked
              onClick={() => setRelation("debit")}
            />{" "}
            <label htmlFor="debit">പണം കൊടുത്തത്</label>
            <input
              type="radio"
              name="relation"
              className={addperson.form_body_radio_input}
              value={"credit"}
              id="credit"
              onClick={() => setRelation("credit")}
            />{" "}
            <label htmlFor="credit">പണം തന്നത്</label>
          </li>
          <li>
            {relation === "debit" ? (
              <input
                type="text"
                className={addperson.form_body_input}
                placeholder=" കൊടുത്ത പണം"
              />
            ) : (
              <input
                type="text"
                className={addperson.form_body_input}
                placeholder="  ലഭിച്ച പണം "
              />
            )}
          </li>
        </ul>

        <button className={`${addperson.form_btn}`}>ചേർക്കുക</button>
      </div>
    </div>
  );
};

export default Index;
