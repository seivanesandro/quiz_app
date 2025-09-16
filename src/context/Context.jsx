import React, { useState, useEffect } from "react";
import axios from "axios";

// tabelas de categoria
const table = {
  GeneralKnowledge: 9,
  Books: 10,
  Film: 11,
  Music: 12,
  MusicalsTheatres: 13,
  Television: 14,
  VideoGames: 15,
  BoardGames: 16,
  Nature: 17,
  Computers: 18,
  Mathematics: 19,
  Mythology: 20,
  Sports: 21,
  Geography: 22,
  History: 23,
  Politics: 24,
  Art: 25,
  Celebrities: 26,
  Animals: 27,
  Vehicles: 28,
  Comics: 29,
  Gadgets: 30,
  Anime: 31,
  Cartoon: 32,
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
  // Função para carregar estado do localStorage
  const loadFromStorage = (key, defaultValue) => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  // waiting for context values
  const [waiting, setWaiting] = useState(() => {
    const storedQuestions = loadFromStorage('quiz_questions', []);
    const storedWaiting = loadFromStorage('quiz_waiting', true);
    return storedQuestions.length > 0 ? false : storedWaiting;
  });
  // loading
  const [loading, setLoading] = useState(false);
  // error
  const [error, setError] = useState(null);
  // Questions
  const [questions, setQuestions] = useState(() => loadFromStorage('quiz_questions', []));
  // index
  const [index, setIndex] = useState(() => loadFromStorage('quiz_index', 0));
  // correct
  const [correct, setCorrect] = useState(() => loadFromStorage('quiz_correct', 0));
  // Quiz
  const [quiz, setQuiz] = useState(() => loadFromStorage('quiz_config', {
    amount: 5,
    category: "Sports",
    difficulty: "easy",
  }));
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Salvar estados no localStorage
  useEffect(() => {
    localStorage.setItem('quiz_waiting', JSON.stringify(waiting));
  }, [waiting]);

  useEffect(() => {
    localStorage.setItem('quiz_questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem('quiz_index', JSON.stringify(index));
  }, [index]);

  useEffect(() => {
    localStorage.setItem('quiz_correct', JSON.stringify(correct));
  }, [correct]);

  useEffect(() => {
    localStorage.setItem('quiz_config', JSON.stringify(quiz));
  }, [quiz]);

  // Função para buscar perguntas
  const fetchQuestions = async (url) => {
    //FIXME: console.log("Iniciando fetch com URL:", url);
    //FIXME: console.log("Estado atual no fetch:", { loading, waiting, error });
    
    try {
      // Delay mínimo para mostrar loading
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await axios.get(url);
      //FIXME:console.log("Response recebida:", response.data);

      if (response.data && response.data.results) {
        const data = response.data.results;
        if (data.length > 0) {
          //FIXME:console.log("Perguntas encontradas:", data.length);
          setQuestions(data);
          setLoading(false);
          setWaiting(false);
          setError(false);
        } else {
          //FIXME:console.log("Nenhuma pergunta encontrada");
          setWaiting(true);
          setLoading(false);
          setError(true);
        }
      } else {
        //FIXME:console.log("Resposta inválida da API");
        setWaiting(true);
        setLoading(false);
        setError(true);
      }
    } catch (err) {
      // FIXME: console.log("Erro no fetch:", err);
      setWaiting(true);
      setLoading(false);
      setError(true);
    }
  };

  // Submete o formulário e obtem perguntas
  const handleSubmit = (e) => {
    e.preventDefault();
    //FIXME:console.log("HandleSubmit chamado - Estado inicial:", { waiting, loading, error });

    // Define estados imediatamente
    setLoading(true);
    setWaiting(false);
    setError(false);
    setIndex(0);
    setCorrect(0);
    setIsModalOpen(false);
    setQuestions([]);

    //FIXME:console.log("Estados definidos - Loading:", true, "Waiting:", false, "Error:", false);

    const url = `${ApiUrl}?amount=${quiz.amount}&difficulty=${quiz.difficulty}&category=${table[quiz.category]}&type=multiple`;
    //FIXME: console.log("URL gerada:", url);
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
    setIndex(0);
    setQuestions([]);
    // Limpar localStorage
    localStorage.removeItem('quiz_waiting');
    localStorage.removeItem('quiz_questions');
    localStorage.removeItem('quiz_index');
    localStorage.removeItem('quiz_correct');
  };

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
