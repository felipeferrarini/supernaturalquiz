import React, { useEffect, useState } from 'react';
import localDb from '../../../db.json';
import Widget, {
  Content,
  Header,
  ResultSVG,
  Topic
} from '../../../src/components/Widget';
import QuizBackground from '../../../src/components/QuizBackground';
import Head from 'next/head';
import QuizLogo from '../../../src/components/QuizLogo';
import { QuizContainer } from '../../components/QuizContainer';
import Button from '../../components/Button';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BackLinkArrow from '../../components/BackLinkArrow';
import LoadingSpiner from '../../components/LoadingSpiner';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'next-share';
const LoadingWidget = () => {
  return (
    <Widget
      variants={{
        show: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: '-100%' }
      }}
      initial="hidden"
      animate="show"
      transition={{ delay: 0, duration: 0.5 }}
    >
      <Header>Carregando...</Header>

      <Content>
        <LoadingSpiner />
      </Content>
    </Widget>
  );
};

interface ResultsWidgetProps {
  correctQuestions: number[];
  totalQuestions: number;
  questions: {
    image: string;
    title: string;
    description: string;
    answer: number;
    alternatives: string[];
  }[];
}

const ResultsWidget = ({
  correctQuestions,
  totalQuestions,
  questions
}: ResultsWidgetProps) => {
  const router = useRouter();

  return (
    <Widget
      variants={{
        show: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: '-100%' }
      }}
      initial="hidden"
      animate="show"
      transition={{ delay: 0, duration: 0.5 }}
    >
      <Header>
        <h3>Chegaram os Resultados, {router.query.name}!</h3>
      </Header>
      <img
        alt="Sucesso"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={
          correctQuestions.length === 0
            ? 'https://media.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.gif'
            : 'https://acegif.com/wp-content/uploads/funny-celebrate-56.gif'
        }
      />
      <Content>
        {correctQuestions.length === totalQuestions && (
          <>
            <p>Mandou bem, {router.query.name}!</p>
            <h2>
              Você acertou todas as perguntas e fez{' '}
              {correctQuestions.length * 100} Pontos!
            </h2>
          </>
        )}
        {correctQuestions.length > 0 &&
          correctQuestions.length < totalQuestions && (
            <>
              <p>Mandou bem, {router.query.name}!</p>
              <h2>Você fez {correctQuestions.length * 100} Pontos!</h2>
            </>
          )}
        {correctQuestions.length === 0 && (
          <>
            <p>Poxa {router.query.name}!</p>
            <h2>
              Você não acertou nenhuma questão e ficou com 0 pontos, boa sorte
              na próxima.
            </h2>
          </>
        )}

        <h4>Resumo:</h4>
        {questions.map((pergunta, index) => (
          <Topic key={index}>
            <label
              className={correctQuestions.includes(index) ? 'certa' : 'errada'}
            >
              Questão - {index + 1} -{' '}
              {correctQuestions.includes(index) ? 'Acertou' : 'Errou'}
            </label>
          </Topic>
        ))}

        <Link href="/" shallow={true}>
          <h5>Voltar para home</h5>
        </Link>

        <h3
          style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}
        >
          Compartilhe nas redes sociais:
        </h3>

        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FacebookShareButton
            url={'https://supernaturalquiz.vercel.app/'}
            quote={
              'Quiz sobre supernatural criado durante a 2ª Imersão React da Alura.'
            }
            hashtag={'#aluraquiz'}
            style={{ margin: '0 3px' }}
          >
            <FacebookIcon round={true} size={40} />
          </FacebookShareButton>
          <PinterestShareButton
            url={'https://supernaturalquiz.vercel.app/'}
            media={
              'Quiz sobre supernatural criado durante a 2ª Imersão React da Alura.'
            }
            style={{ margin: '0 3px' }}
          >
            <PinterestIcon round={true} size={40} />
          </PinterestShareButton>

          <TwitterShareButton
            url={'https://supernaturalquiz.vercel.app/'}
            title={
              'Quiz sobre supernatural criado durante a 2ª Imersão React da Alura.'
            }
            style={{ margin: '0 3px' }}
          >
            <TwitterIcon round={true} size={40} />
          </TwitterShareButton>

          <WhatsappShareButton
            url={'https://supernaturalquiz.vercel.app/'}
            title={
              'Quiz sobre supernatural criado durante a 2ª Imersão React da Alura.'
            }
            style={{ margin: '0 3px' }}
            separator=":: "
          >
            <WhatsappIcon round={true} size={40} />
          </WhatsappShareButton>
        </div>
      </Content>
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
  setResult: React.Dispatch<React.SetStateAction<number[]>>;
}

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  setResult
}: QuestionWidgetProps) => {
  const questionId = `question__${questionIndex}`;
  const [selectedAnswer, setSelectedAnswer] = useState<
    number | undefined | null
  >(undefined);
  const [lastAnswer, setLastAnswer] = useState<number | undefined | null>(
    undefined
  );
  const [teste, setTeste] = useState('');
  const isCorrect = question.answer === lastAnswer;
  const [isSubmited, setIsSubmited] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    if (!animate) {
      setTimeout(() => {
        setAnimate(true);
      }, 1 * 500);
    }
  }, [animate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedAnswer !== null) {
      setIsSubmited(true);
      if (selectedAnswer === question.answer) {
        setResult(predcate => [...predcate, questionIndex]);
        setTeste('Acertou!');
        setSelectedAnswer(null);
      } else {
        setTeste('Errou!');
        setSelectedAnswer(null);
      }
    } else {
      setAnimate(false);
      setIsSubmited(false);
      setSelectedAnswer(undefined);
      setTeste('');
      setLastAnswer(undefined);
      onSubmit();
    }
  };

  return (
    <Widget
      variants={{
        show: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: '-100%' }
      }}
      initial="hidden"
      animate="show"
      transition={{ delay: 0, duration: 0.5 }}
    >
      <Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={question.image}
      />
      <Content
        variants={{
          show: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: '-100%' }
        }}
        initial="hidden"
        animate={animate ? 'show' : 'hidden'}
        transition={{ delay: 0, duration: 0.5 }}
      >
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Topic key={alternativeIndex}>
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={e => {
                    e.target.value && setSelectedAnswer(alternativeIndex);
                    setLastAnswer(alternativeIndex);
                  }}
                  checked={selectedAnswer === alternativeIndex}
                  disabled={teste !== ''}
                />

                <label
                  htmlFor={alternativeId}
                  className={
                    isSubmited
                      ? lastAnswer === alternativeIndex
                        ? alternativeIndex === question.answer
                          ? 'certa'
                          : 'errada'
                        : 'ignorada'
                      : ''
                  }
                >
                  {alternative}
                </label>
              </Topic>
            );
          })}
          <Button disabled={selectedAnswer === undefined} type="submit">
            {selectedAnswer !== null
              ? 'Confirmar'
              : questionIndex + 1 === totalQuestions
              ? 'Ir para Resultados'
              : 'Próxima'}
          </Button>

          <ResultSVG className={`${isCorrect}`}>
            {isSubmited && (
              <div>
                {isCorrect && <FaCheck />}
                {!isCorrect && <FaTimes />}
              </div>
            )}
          </ResultSVG>
        </form>
      </Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};

interface QuizPageProps {
  db: typeof localDb;
}

const QuizPage: React.FC<QuizPageProps> = ({ db }) => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = db.questions[currentQuestion];
  const [resut, setResult] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => {
      if (screenState === screenStates.LOADING) {
        setScreenState(screenStates.QUIZ);
      }
    }, 1 * 1500);
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
        <Link href="/" shallow={true}>
          <a>
            <QuizLogo className="svg" />
          </a>
        </Link>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            setResult={setResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultsWidget
            correctQuestions={resut}
            totalQuestions={totalQuestions}
            questions={db.questions}
          />
        )}
      </QuizContainer>
    </QuizBackground>
  );
};
export default QuizPage;
