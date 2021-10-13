import React, {useState} from 'react';

function Products() {
  const[showForm, setForm] = useState(true);

  function handleClick(event){
    setForm(!showForm);
  }

  return <>
   <button class="btn btn-primary" onClick={handleClick} style={ {visibility: showForm ? "visible" : "hidden"} }>Register Now</button>
  <form class="products" onClick={handleClick} style={ {visibility: showForm ? "hidden" : "visible"} }>
   <h1>Register</h1>
    <div class="ui input">
    <input type="text" placeholder="Enter Id" />
    </div>
    <div class="ui input">
    <input type="text" placeholder="Enter First Name" />
    </div>
    <div class="ui input">
    <input type="text" placeholder="Enter Last Name" />
    </div>
    <div class="ui input">
    <input type="date" class="date"/>
    </div><br/><br/>
    <button class="btn btn-primary submit">Submit</button>
    <button class="btn btn-primary">Cancel</button>
  </form>
  </>
}

export default Products;


