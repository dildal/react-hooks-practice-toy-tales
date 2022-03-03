import React, {useState} from "react";

function ToyForm({onFormSubmit}) {
  const [form, setForm] = useState({
    name: '',
    image: '',
  })

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })
      .then(res=>res.json())
      .then(newToy => onFormSubmit(newToy))
      
      setForm({name: '', image: ''})
  }



  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={form.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
