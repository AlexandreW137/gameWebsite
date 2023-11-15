import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Noticias from './pages/Noticias';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
    </Router>
  );
}
export default App;