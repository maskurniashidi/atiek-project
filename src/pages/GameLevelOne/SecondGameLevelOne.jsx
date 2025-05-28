import React, { useState, useEffect, useRef } from "react";
import styles from "./FirstGameLevelOne.module.css";
import bola from "../../assets/bola.png";
import kucing from "../../assets/kucing.png";
import mobil from "../../assets/mobil.png";

const images = [
  { id: 1, label: "bola", image: bola },
  { id: 2, label: "kucing", image: kucing },
  { id: 3, label: "mobil", image: mobil },
];

function SecondGameLevelOne() {
  const [currentImage, setCurrentImage] = useState(images[0]); // bisa randomize juga
  const [feedback, setFeedback] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Browser kamu tidak mendukung fitur voice recognition.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "id-ID";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.trim().toLowerCase();
      console.log("Speech recognized:", speechResult);

      // Cek jawaban user sama dengan label gambar saat ini
      if (speechResult === currentImage.label) {
        setFeedback("✅ Benar!");
        alert("✅ Benar!");
      } else {
        setFeedback(`❌ Salah! Kamu bilang: "${speechResult}"`);
      }

      setIsListening(false);
    };

    recognitionRef.current.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setFeedback("❌ Error pada voice recognition: " + event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };
  }, [currentImage]);

  const startListening = () => {
    if (!recognitionRef.current) return;
    setFeedback(null);
    setIsListening(true);
    recognitionRef.current.start();
  };

  // Fungsi untuk ganti gambar secara random (opsional)
  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
    setFeedback(null);
  };

  return (
    <div className={styles.gameContainer}>
      <h2 className={styles.question}>🧠 Pertanyaan: Apakah ini?</h2>

      <div className={styles.optionsGrid} style={{ justifyContent: "center" }}>
        <div className={styles.optionCard}>
          <img src={currentImage.image} alt={currentImage.label} />
        </div>
      </div>

      <button
        onClick={startListening}
        disabled={isListening}
        className={styles.voiceButton}
      >
        {isListening ? "🎙️ Mendengarkan..." : "🎤 Mulai Rekam Jawaban Suara"}
      </button>

      <button onClick={changeImage} className={styles.changeImageButton}>
        🔄 Ganti Gambar
      </button>

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

export default SecondGameLevelOne;
