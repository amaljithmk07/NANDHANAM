import React, { useState } from "react";
import addperson from "@/styles/Addperson.module.css";
import axios from "axios";
const Index = () => {
  const [relation, setRelation] = useState("debit");


  const [formData, setFormdata] = useState({})


  const inputHandler = (e) => {
    const { name, value } = e.target
    setFormdata({ ...formData, [name]: value })

  }
  console.log(formData);


  const formSubmit = () => {
    axios.post(`http://localhost:2222/api/person/add`, formData)
      .then((data) => {
        console.log(data);

      })
      .catch((err) => {
        console.log(err);

      })
  }

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
              onChange={inputHandler}
            />
          </li>
          <li>
            <input
              type="radio"
              name="relation"
              className={addperson.form_body_radio_input}
              defaultChecked
              onClick={() => setRelation("debit")}

            />{" "}
            <label htmlFor="debit">പണം കൊടുത്തത്</label>
            <input
              type="radio"
              name="relation"
              className={addperson.form_body_radio_input}
              id="credit"
              onClick={() => setRelation("credit")}

            />{" "}
            <label htmlFor="credit">പണം തന്നത്</label>
          </li>
          <li>
            <input
              type="text"
              className={addperson.form_body_input}
              placeholder=" കൊടുത്ത പണം"
              onChange={inputHandler}
              name={relation === "debit" ? ("debit") : ("credit")}

            />

          </li>
          <li>
            <input
              type="text"
              className={addperson.form_body_input}
              placeholder="Address"
              name="address"
              onChange={inputHandler}

            />
          </li>
        </ul>

        <button className={`${addperson.form_btn}`} onClick={formSubmit}>ചേർക്കുക</button>
      </div>
    </div>
  );
};

export default Index;
