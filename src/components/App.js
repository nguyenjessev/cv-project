import '../styles/App.css';
import Education from './Education';
import FullName from './FullName';
import PersonalInfo from './PersonalInfo';

function App() {
  return (
    <div className='App'>
      <FullName />

      <hr />

      <PersonalInfo />

      <hr />

      <Education />
    </div>
  );
}

export default App;
