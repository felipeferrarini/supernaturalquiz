import React, { useEffect, useState } from 'react';
import db from '../../../db.json';
import Widget, { ResultSVG, Topic } from '../../../src/components/Widget';
import QuizBackground from '../../../src/components/QuizBackground';
import Head from 'next/head';
import QuizLogo from '../../../src/components/QuizLogo';
import { QuizContainer } from '../../components/QuizContainer';
import Button from '../../components/Button';
import { FaCheck, FaTimes } from 'react-icons/fa';

const LoadingWidget = () => {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
};

interface QuestionWidgetProps {
  question: {
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: string[];
  };
  questionIndex: number;
  totalQuestions: number;
  onSubmit: () => void;
  result: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  result,
  setResult
}: QuestionWidgetProps) => {
  const questionId = `question__${questionIndex}`;
  const [currentAnswer, setCurrentAnswer] = useState<number | undefined | null>(
    undefined
  );
  const [lastAnswer, setLastAnswer] = useState<number | undefined | null>(
    undefined
  );
  const [teste, setTeste] = useState('');

  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={event => {
            event.preventDefault();

            if (currentAnswer !== null) {
              if (currentAnswer === question.answer) {
                setResult(result + 1);
                setTeste('Acertou!');
                setCurrentAnswer(null);
              } else {
                setTeste('Errou!');
                setCurrentAnswer(null);
              }
            } else {
              setCurrentAnswer(undefined);
              setTeste('');
              setLastAnswer(undefined);
              onSubmit();
            }
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Topic key={alternativeIndex}>
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={e => {
                    e.target.value && setCurrentAnswer(alternativeIndex);
                    setLastAnswer(alternativeIndex);
                  }}
                  checked={currentAnswer === alternativeIndex}
                  disabled={teste !== ''}
                />

                <label
                  htmlFor={alternativeId}
                  className={
                    teste === 'Acertou!'
                      ? alternativeIndex === question.answer &&
                        alternativeIndex === lastAnswer
                          ? 'certa'
                          : 'naoEscolhida'
                      : teste === 'Errou!'
                        ? alternativeIndex === lastAnswer
                            ? 'errada'
                            : alternativeIndex === question.answer
                              ? 'certa'
                              : 'naoEscolhida'
                        : 'ignorada'
                  }
                >
                  {alternative}
                </label>
              </Topic>
            );
          })}
          <Button disabled={currentAnswer === undefined} type="submit">
            {currentAnswer !== null ? 'Confirmar' : 'Próxima'}
          </Button>

          <ResultSVG className={teste}>
          {teste === 'Acertou!' && <FaCheck/>}
          {teste === 'Errou!' && <FaTimes/>}
          </ResultSVG>

        </form>
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};

const QuizPage: React.FC = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = db.questions[currentQuestion];
  const [resut, setResult] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Supernatural</title>
      </Head>
      <QuizContainer>
        <QuizLogo className="svg" />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            setResult={setResult}
            result={resut}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <div>Você acertou X questões, parabéns!</div>
        )}
      </QuizContainer>
    </QuizBackground>
  );
};
export default QuizPage;
