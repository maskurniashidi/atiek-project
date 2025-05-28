import React, { useState, useEffect } from "react";
import ibuImage from "../../assets/ibu.png";
import memasakImage from "../../assets/memasak.png";
import dapurImage from "../../assets/dapur.jpg";
import styles from "./GameLevelThree.module.css";

const correctSentence = "ibu memasak di dapur";
const words = correctSentence.split(" ");
const shuffledWords = [...words].sort(() => Math.random() - 0.5);

function GameLevelThree() {
  const [selectedWords, setSelectedWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleWordClick = (word) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords((prev) => [...prev, word]);
    }
  };

  const resetGame = () => {
    setSelectedWords([]);
    setIsCorrect(null);
  };

  useEffect(() => {
    if (selectedWords.length === words.length) {
      const sentence = selectedWords.join(" ");
      setIsCorrect(sentence === correctSentence);
    }
  }, [selectedWords]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>🧩 Petunjuk dari gambar:</div>

      <div className={styles.imageContainer}>
        <img src={ibuImage} alt="ibu" className={styles.image} />
        <img src={memasakImage} alt="memasak" className={styles.image} />
        <img src={dapurImage} alt="dapur" className={styles.image} />
      </div>

      <div className={styles.instructions}>
        Susun kata berdasarkan petunjuk gambar:
      </div>

      <div className={styles.wordList}>
        {shuffledWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word)}
            disabled={selectedWords.includes(word)}
            className={styles.wordButton}
          >
            {word}
          </button>
        ))}
      </div>

      <div className={styles.sentence}>
        <strong>Kalimat:</strong> {selectedWords.join(" ")}
      </div>

      {isCorrect !== null && (
        <div
          className={`${styles.feedback} ${
            isCorrect ? styles.correct : styles.incorrect
          }`}
        >
          {isCorrect ? "✅ Kalimat benar!" : "❌ Kalimat salah."}
        </div>
      )}

      <button onClick={resetGame} className={styles.resetButton}>
        🔄 Ulangi
      </button>
    </div>
  );
}

export default GameLevelThree;
