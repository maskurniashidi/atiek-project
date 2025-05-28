import React, { useState } from "react";
import styles from "./GameLevelTwo.module.css";
import dapur from "../../assets/dapur.jpg";
import piring from "../../assets/piring.png";
import sendok from "../../assets/sendok.png";
import kompor from "../../assets/kompor.png";

const options = [
  {
    id: 1,
    label: "Piring",
    image: piring,
    isCorrect: true,
    top: "40%",
    left: "20%",
  },
  {
    id: 2,
    label: "Sendok",
    image: sendok,
    isCorrect: false,
    top: "55%",
    left: "60%",
  },
  {
    id: 3,
    label: "Kompor",
    image: kompor,
    isCorrect: false,
    top: "70%",
    left: "35%",
  },
];

function GameLevelTwo() {
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
      <h2 className={styles.question}>🧠 Pertanyaan: Mana Piring?</h2>

      <div className={styles.sceneWrapper}>
        <img src={dapur} alt="Dapur" className={styles.backgroundImage} />

        {options.map((option) => (
          <img
            key={option.id}
            src={option.image}
            alt={option.label}
            className={styles.object}
            style={{ top: option.top, left: option.left }}
            onClick={() => handleClick(option.isCorrect)}
          />
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

export default GameLevelTwo;
