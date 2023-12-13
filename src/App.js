
import { useState, useEffect } from "react";
import './App.css';

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <main class="main">
      <h1>Quote Generattttor</h1>
      <button onClick={getNewQuote}>New Quote</button>
      <div class="card">



        <section>

          <h3>
            <span>“</span>
            {quote?.text}
          </h3>
          <i> - {quote?.author}</i>
        </section>
      </div>
    </main>
  );
}
