import logo from './logo.svg';
import './App.css';
import LayoutForm from "./FormRedux/LayoutForm";
import { getDataLocal } from "./FormRedux/LayoutForm";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataLocal());
  }, [dispatch]);
  return (
    <div>
      <LayoutForm />
    </div>
  );
}

export default App;
