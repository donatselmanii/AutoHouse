import React, { useState, useEffect } from 'react';
import axios from '../utils/csrf';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/question/getAllQuestions', {
            headers: {
              'X-XSRF-TOKEN': getCsrfTokenFromCookies(),
            },
          });
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const getCsrfTokenFromCookies = () => {
    return document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith('XSRF-TOKEN='))
      ?.split('=')[1];
  };

  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <strong>{question.question}</strong>
            <p>{question.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
