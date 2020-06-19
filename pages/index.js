import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { 
  survey as surveyJSONExample
 } from "../sampleJSON/sampleJson"
 import { surveyEndPoint } from './api/endpoins'

export default function Home() {
  //Local Json Template
  const surveyJSON = surveyJSONExample
  var [survey, setSurvey] = useState({});
  const [url, setUrl] = useState(surveyEndPoint,);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
      const survey = await axios(url);
      setSurvey(survey);
    } catch (error) {
      setIsError(true);
    }
      setIsLoading(false);
    };
      fetchData();
    }, []);
    
    console.log("isError:")
    console.log(isError)
    console.log("isLoading:")
    console.log(isLoading)
    console.log("survey")
    console.log({survey})
    console.log("survey.questions")
    console.log(survey.questions)
    console.log("surveyJSON.questions")
    console.log(surveyJSON.questions)

    if (survey.questions) {
      return (
      <React.Fragment>
        Success:
        <ul>
          <span>Loaded</span>
          { survey.questions.map(question => (
            
            <li key={question.id}>
              {question.title}
            </li>
          ))}
        </ul>
      </React.Fragment>
      )
    } 
    if (isLoading) {
      console.log("***isLoading Check:")
      return ( 
        <div>Awaitng Response</div>
      )
    }
    if (isError) {
      console.log("***Error Check:")
      return(
        <div>axios: error</div>
      )
    }
    if (survey) {

      return (
        <React.Fragment>
          Data Recieved With Formatting Errors
        </React.Fragment>
      )
    }
    if (surveyJSON) {
      return (
        <React.Fragment>
          Connection Error Expected Result:
          <ul>
          { surveyJSON.questions.map(question => (
            <li key={question.id}>
              {question.title}
            </li>
          ))}
        </ul>
        </React.Fragment>
      )
    }   
  }

