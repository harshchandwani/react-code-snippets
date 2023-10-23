import React from "react";
import {useEffect} from "react";

// useEffect is called whenever the component is rendered
useEffect(() => {
    fetchData();
}, []);

//there are 3 types we use useEffect

useEffect(() => {});
//called everytime component is rendered

useEffect(() => {}, []);
//called only once when component is intialized

useEffect(() => {}, [dependencyArray]);
//in this case, useEffect will be called when array/dependency changed


const fetchData = async() => {
    const data = fectch("some url");
    const json = data.json();
    console.log(json);
}
const Users = () => {
    return (
        <h1>This is for Learning React useEffect</h1>
    )
}
