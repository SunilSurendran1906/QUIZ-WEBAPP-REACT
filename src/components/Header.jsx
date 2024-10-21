import React from "react";
import LogoImg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={LogoImg} alt="logo Image" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
