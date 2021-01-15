import React, { useState, useEffect } from "react";
import axios from "axios";
import { RANDOM_ADVICE_URL } from "../Constants";
import Advice from "./Advice";

export default function RandomButton() {
  const [randomAdvice, setRandomAdvice] = useState(""); // randomadvice iniitalize to our Usestate, the second value is an update

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(RANDOM_ADVICE_URL); // fetching data
        const { slip } = response.data; //extracting the advice slip
        setRandomAdvice(slip); // Changing value from randomAdvice('') to SetRandomAdvice which is the update that updates the current or the randomAdvice by pulling data from the API
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchData();
  }, []);

  const Advice = (props) => {
    return <h4>{props.advice}</h4>;
  };
  export default Advice;
}
