import React, { useEffect, useState } from 'react'
import './App.css'
import {Sugar} from 'react-preloaders';
import Form from './components/form';

function App() {
  const [loading,setLoading]= useState(true);
  useEffect(()=>{
    const loadingdiv=()=>{
      setTimeout(()=>{
        setLoading(false);
      },4500);
    };
    loadingdiv();
  },[])
  return loading?
    (<Sugar time={4000} animation="slide-up" background="blur" color="white"/>
    ):(
      <div>
        <Form/>
      </div>
    );
}

export default App