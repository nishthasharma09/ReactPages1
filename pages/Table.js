import React from 'react';
import MOCK_DATA from './MOCK_DATA.json'
import * as ReactBootStrap from "react-bootstrap";

function Table() {
  const renderData = (MOCK_DATA, index) => {
    return (
      <tr key={index}>
        <td> {MOCK_DATA.first_name} </td>
        <td> {MOCK_DATA.last_name} </td>
        <td> {MOCK_DATA.email} </td>
      </tr>
    );
  }
  
  return (
    <div className='reports'>
     <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {MOCK_DATA.map(renderData)}
  </tbody>
</ReactBootStrap.Table>
    </div>
  );
}

export default Table;
