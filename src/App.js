import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Mission from './components/Mission';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Mission />} />
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
