import React, { useState } from "react";
import styles from "./FirstGameLevelOne.module.css";
import bola from "../../assets/bola.png";
import kucing from "../../assets/kucing.png";
import mobil from "../../assets/mobil.png";

const options = [
  { id: 1, label: "Bola", image: bola, isCorrect: true },
  { id: 2, label: "Kucing", image: kucing, isCorrect: false },
  { id: 3, label: "Mobil", image: mobil, isCorrect: false },
];

function FirstGameLevelOne() {
  const [feedback, setFeedback] = useState(null);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setFeedback("✅ Benar!");
      alert("✅ Benar!");
    } else {
      setFeedback("❌ Salah!");
    }
  };

  return (
    <div className={styles.gameContainer}>
      <h2 className={styles.question}>🧠 Pertanyaan: Mana bola?</h2>

      <div className={styles.optionsGrid}>
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleClick(option.isCorrect)}
            className={styles.optionCard}
          >
            <img src={option.image} alt={option.label} />
            <p>{option.label}</p>
          </div>
        ))}
      </div>

      {feedback && (
        <div
          className={`${styles.feedback} ${
            feedback.includes("Benar") ? styles.correct : styles.wrong
          }`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
}

export default FirstGameLevelOne;
