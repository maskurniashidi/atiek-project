import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const levels = [
    {
      id: 1,
      name: "Level 1: Pilih Gambar",
      path: "/game-level-one",
      color: "#ffb703",
    },
    {
      id: 2,
      name: "Level 2: Temukan Objek",
      path: "/game-level-two",
      color: "#219ebc",
    },
    {
      id: 3,
      name: "Level 3: Susun Kalimat",
      path: "/game-level-three",
      color: "#8ecae6",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🎮 Pilih Level Permainan</h1>
      <div className={styles.levelList}>
        {levels.map((level) => (
          <div
            key={level.id}
            className={styles.levelCard}
            style={{ backgroundColor: level.color }}
            onClick={() => navigate(level.path)}
          >
            <span className={styles.levelText}>{level.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
