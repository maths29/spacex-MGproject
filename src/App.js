import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
