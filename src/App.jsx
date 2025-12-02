import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TrabalheConosco from './pages/TrabalheConosco'

function App() {
    return (
        <Router>
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
