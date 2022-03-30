import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Member from "./components/Member";
import Form from "./components/Form";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

const initialTeamMembers = [
  {
    name: "Gabriel Velez",
    email: "gabriel.velez@ymail.com",
    role: "Creator",
  },
];

function App() {
  const [teamMemebers, setTeamMembers] = useState(initialTeamMembers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    if (!newMember.name) {
      setFormError("Please Check Username");
      return;
    } else if (!newMember.email) {
      setFormError("Please Check Email");
      return;
    } else if (!newMember.role || !newMember.role === "inital") {
      setFormError("Please Check Role");
      return;
    }

    setTeamMembers([newMember, ...teamMemebers]);
    setFormValues(initialFormValues);
  };

  return (
    <>
      <h1>Enter Team Memeber</h1>
      <Form values={formValues} update={updateForm} submit={submitForm} />
      {formError && <h3 className='error'>{formError}</h3>}
      <h1>Team Memebers</h1>
      {teamMemebers.map((member, idx) => {
        return <Member details={member} key={idx} />;
      })}
    </>
  );
}

export default App;
