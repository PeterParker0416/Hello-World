// CSS Link
import './App.css';
// Counter component import
import Counter from './components/counter/Counter.component';
// Age calculator
import AgeCalculator from './components/ageCalculator/AgeCalculator.component';
// Avatar
import Avatar from './components/avatar/Avatar.component';

function App() {
  const userInfo = {
    username: "Peter Parker",
    age: 24,
    email: "peter1parker2022@gmail.com",
    birthDate: "27 July 2001"
  }

  return (
    <div className="App">
      <Avatar userInfo={userInfo} />
    </div>
  );
}

export default App;
