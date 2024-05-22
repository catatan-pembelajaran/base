import { useState } from 'react'

function App() {
    const [questions] = useState([
        { image: "1", answer: "X" },
        { image: "2", answer: "Q" },
        { image: "3", answer: "99" },
        { image: "4", answer: "9" },
        { image: "5", answer: "62" },
        { image: "6", answer: "98" },
    ]);
    const [results, setResults] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');

    const handleSubmit = () => {
        const question = questions[currentQuestion];
        const result = {
            questionIndex: question.image,
            correctAnswer: question.answer,
            userAnswer: userAnswer.toUpperCase(),
            result: userAnswer.toUpperCase() === question.answer ? 'Correct' : 'Incorrect'
        };
        setResults([...results, result]);
        setUserAnswer('');

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    const title = "Base"

    return (
        <>
            <div className="container p-5 card">
                <h1 className="mb-4 text-center">{title}</h1>
                <hr />
                <div className="card p-2 text-center mb-2">
                    <ul>
                        <li>Terdiri dari 5 pertanyaan berurutan yang diacak (tiap kali refresh)</li>
                        <li>Hasil akan tampil setelah menjawab 5 pertanyaan</li>
                    </ul>
                </div>
                {currentQuestion < questions.length - 1 ? (
                    <div className="mb-3 text-center">
                        <img src={`images/image${questions[currentQuestion].image}.jpg`} className="img-fluid" alt={`Question ${questions[currentQuestion].image}`} />
                        <label htmlFor="answer" className="form-label">Masukkan huruf atau angka yang terlihat:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="answer"
                            name="answer"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-primary mt-2"
                            onClick={handleSubmit}
                        >
                            Ok
                        </button>
                    </div>
                ) : (
                    <div id="resultTable">
                        <h2 className="text-center">Hasil</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Image</th>
                                    <th>Correct Answer</th>
                                    <th>Your Answer</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><img src={`images/image${result.questionIndex}.jpg`} className="img-fluid result" alt={`Question ${result.questionIndex}`} /></td>
                                        <td>{result.correctAnswer}</td>
                                        <td>{result.userAnswer ? result.userAnswer : '-'}</td>
                                        <td>{result.result}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
