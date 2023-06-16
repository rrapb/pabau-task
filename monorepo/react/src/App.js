import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css'

const App = () => {
    const [step, setStep] = useState('1/2');

    const handleOption = () => {
        setStep('2/2');
    };

    const handleBack = () => {
        setStep('1/2');
    };

    return (
        <Router>
            <div>
                <Header step={step} />
            </div>
            <Body>
                <Routes>
                    <Route
                        path="/"
                        element={<MainSelection handleOptionSelect={handleOption} />}
                    />
                    <Route
                        path="/selected/:option"
                        element={<SelectedOption handleBack={handleBack} />}
                    />
                </Routes>
            </Body>
            <div>
                <Footer />
            </div>
        </Router>
    );
};

const Header = ({ step }) => {
    return (
        <header>
            <h1>Current Step: {step}</h1>
        </header>
    );
};

const MainSelection = ({handleOptionSelect}) => {
    const options = ['Pabau ', 'UK', 'React', 'Javascript'];
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        handleOptionSelect();
        navigate(`/selected/${encodeURIComponent(option)}`);
    };

    return (
        <div className="middle">
            <h2>Select an option:</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <button className="button" onClick={() => handleOptionClick(option)}>{option}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SelectedOption = ({handleBack}) => {
    const {option} = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        handleBack();
        navigate('/');
    };

    return (
        <div className="middle">
            <h2>Selected Option: {option}</h2>
            <button className="back-button" onClick={handleBackClick}>Back</button>
        </div>
    );
};

const Body = ({children}) => {
    return <body>{children}</body>;
};

const Footer = () => {
    return <footer>Pabau 2023</footer>;
};

export default App;
