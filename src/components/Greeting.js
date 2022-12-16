import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../redux/Greetings/Greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const eternalgratis = useSelector(state => state.greetings)
console.log(eternalgratis)



  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);
  
  return (
    <>
    <h1>{eternalgratis.greetings.text}</h1>
    <button type="button" onClick={() => dispatch(fetchApi())}>Click me</button>
    </>
  );
};

export default Greeting;