import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

// styled component
import styled from 'styled-components';
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => (props.inValid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    // border: 1px solid #ccc;
    border: 1px solid ${props => (props.inValid ? 'red' : '#ccc')};
    background: ${props => (props.inValid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  // not needed with inValid prop
  // &.invalid input {
  //   border-color: red;
  //   background: #ffd7d7;
  // }

  // &.invalid label {
  //   color: red;
  // }
`;


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Dynamic class to the form - enable CourseInput.css*/}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        {/* <label style={{ color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{ borderColor: !isValid ? 'red' : 'black', backgroundColor: !isValid ? 'salmon' : 'black' }} type="text" onChange={goalInputChangeHandler} /> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      {/* styled component */}
      {/* <FormControl className={ !isValid && 'invalid' }></FormControl> */}
      <FormControl inValid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;