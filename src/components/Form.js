import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;
  //console.log(values);

  const onChange = (evt) => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      <h3>Name</h3>
      <input
        type='text'
        name='name'
        value={values.name}
        placeholder='Name'
        maxLength='30'
        onChange={onChange}
      />
      <h3>Email</h3>
      <input
        type='email'
        name='email'
        value={values.email}
        placeholder='Email'
        onChange={onChange}
      />
      <h3>Role</h3>
      <select value={values.role} name='role' onChange={onChange}>
        <option value=''>--Select Role--</option>
        <option value='Backend Engineer'>Backend Engineer</option>
        <option value='Frontend Engineer'>Frontend Engineer</option>
        <option value='Designer'>Designer</option>
      </select>

      <div>
        <button>submit</button>
      </div>
    </form>
  );
}
