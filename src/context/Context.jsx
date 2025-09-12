import React, { useEffect, useState } from "react";
import axios from "axios";

// api url
const ApiUrl = process.env.REACT_API_URL;

// create app context
const AppContext = React.createContext();

// create provider
const AppProvider = ({ children }) => {
    
    // waiting for context values
    const [waiting, setWaiting] = useState(true);
    // loading
    const [loading, setLoading] = useState(false);
    // error
    const [error, setError] = useState(false);
    // Questions
    const [questions, setQuestions] = useState([]);
    // index
    const [index, setIndex] = useState(0);
    // correct
    const [correct, setCorrect] = useState(0);
    // Quiz 
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: "sports",
        difficulty: "easy",
    });
    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // fetch questions
  useEffect(() => {
    const fetchQuestions = async () => {
        setLoading(true);
        setWaiting(false);
        const response  = await axios(ApiUrl).catch((error) => console.log(error) );
        console.log(response);

        if (response) {
            const data = response.data.results;
            if (data.length > 0) {
                setQuestions(data);
                setLoading(false);
                setWaiting(false);
                setError(false);
            } else {
                setWaiting(true);
                setError(true);
            }
        }else {
            setWaiting(true);
        }
    }

    }
)

    return(
        <>
            <AppContext.PRovider>
                {children}
            </AppContext.PRovider>
        </>
    )
}

// custom hook
export const useGlobalContext = () => {
    return React.useContext(AppContext);
};

export { AppContext, AppProvider };