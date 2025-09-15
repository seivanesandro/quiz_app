import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "../components/load/Loading";
import ErrorComponent from "../components/error/ErrorComponent";

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

// api url
const ApiUrl = process.env.REACT_APP_API_URL;

// create app context
const AppContext = React.createContext();

// create provider
const AppProvider = ({ children }) => {
  // Função para atualizar valores do quiz (inputs controlados)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuiz((prevQuiz) => ({ ...prevQuiz, [name]: value }));
  };
  // waiting for context values
  const [waiting, setWaiting] = useState(true);
  // loading
  const [loading, setLoading] = useState(false);
  // error
  const [error, setError] = useState(null);
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

  // Função para buscar perguntas
  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    setError(false);
    try {
      const response = await axios(url);
      if (response) {
        const data = response.data.results;
        if (data.length > 0) {
          setQuestions(data);
          setLoading(false);
          setWaiting(false);
          setError(false);
        } else {
          setWaiting(true);
          setLoading(false);
          setError(true);
        }
      } else {
        setWaiting(true);
        setLoading(false);
        setError(true);
      }
    } catch (err) {
      setWaiting(true);
      setLoading(false);
      setError(true);
    }
  };

  // Atualiza perguntas quando quiz muda
  useEffect(() => {
    const url = `${ApiUrl}&amount=${quiz.amount}&difficulty=${quiz.difficulty}&category=${table[quiz.category]}&type=multiple`;
    fetchQuestions(url);
  }, [quiz]);

  // Submete o formulário e obtem perguntas
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${ApiUrl}&amount=${quiz.amount}&difficulty=${quiz.difficulty}&category=${table[quiz.category]}&type=multiple`;
    fetchQuestions(url);
  };

  // Próxima pergunta
  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1;
      if (newIndex > questions.length - 1) {
        setIsModalOpen(true);
        return 0;
      } else {
        return newIndex;
      }
    });
  };

  // Verifica resposta
  const checkAnswers = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  // Fecha modal
  const closeModal = () => {
    setIsModalOpen(false);
    setWaiting(true);
    setCorrect(0);
  };

  if (loading) {
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    );
  }

  if (error) {
    return (
      <ContainerError>
        <ErrorComponent errorname={"Ocorreu um erro ao buscar perguntas."} />
      </ContainerError>
    );
  }

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        error,
        questions,
        index,
        correct,
        quiz,
        isModalOpen,
        setQuiz,
        setIndex,
        setCorrect,
        setIsModalOpen,
        nextQuestion,
        checkAnswers,
        closeModal,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };
