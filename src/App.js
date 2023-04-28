import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Question from './components/Questions/Question';

function App() {
  return (
    <div>
      <div className='container'>
        <Header></Header>
      </div>
      <Main></Main>
      <Question></Question>
    </div>
  );
}

export default App;
