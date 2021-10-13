import React, {useState} from 'react';

function Home() {
  const [name, setName] = useState("");
  const [heading , setHead] = useState("");

  function getName(event){
    setName(event.target.value);
  }

  function handleEvent(event){
    setHead(name);
    event.preventDefault();
  }

  return (
    <div className="home">

   <form onSubmit={handleEvent}>
   <h3>Hello {heading}</h3>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" value={name}>First Name</label>
    <input type="text" class="form-control" onChange={getName}/>
    </div>
  <div class="mb-3">
    <label for="last name" class="form-label">Last Name</label>
    <input type="text" class="form-control"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

</div>
  );
}

export default Home;
