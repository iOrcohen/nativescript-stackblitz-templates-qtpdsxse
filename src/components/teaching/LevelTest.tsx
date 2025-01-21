import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackLayout, Label, Button } from "@nativescript/core";
import { useState } from "react";
import { words, Word } from "../../data/words";

interface LevelTestProps {
  onComplete: (level: number) => void;
}

export function LevelTest({ onComplete }: LevelTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [testWords] = useState(() => generateTestWords());

  function generateTestWords(): Array<Word & { options: string[] }> {
    // Select 15 words from different levels
    const selectedWords: Array<Word & { options: string[] }> = [];
    
    // Get all available words
    const allWords = [...words];
    
    // Select 15 random words
    for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * allWords.length);
      const word = allWords[randomIndex];
      
      // Generate 3 wrong options
      const wrongOptions = words
        .filter(w => w.translation !== word.translation)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.translation);

      // Add correct answer at random position
      const options = [...wrongOptions];
      const correctPos = Math.floor(Math.random() * 4);
      options.splice(correctPos, 0, word.translation);

      selectedWords.push({ ...word, options });
      
      // Remove the selected word to avoid duplicates
      allWords.splice(randomIndex, 1);
    }

    return selectedWords;
  }

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === testWords[currentQuestion].translation) {
      setCorrectAnswers(prev => prev + 1);
    }

    if (currentQuestion < 14) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Test complete - calculate level
      const percentageCorrect = (correctAnswers / 15) * 100;
      let calculatedLevel;
      
      if (percentageCorrect >= 80) calculatedLevel = 5;
      else if (percentageCorrect >= 60) calculatedLevel = 4;
      else if (percentageCorrect >= 40) calculatedLevel = 3;
      else if (percentageCorrect >= 20) calculatedLevel = 2;
      else calculatedLevel = 1;

      onComplete(calculatedLevel);
    }
  };

  const currentWord = testWords[currentQuestion];

  return (
    <stackLayout style={styles.container}>
      <label style={styles.progress}>Question {currentQuestion + 1} of 15</label>
      
      <label style={styles.word}>{currentWord.word}</label>
      
      <stackLayout style={styles.optionsContainer}>
        {currentWord.options.map((option, index) => (
          <button
            key={index}
            style={styles.optionButton}
            text={option}
            onTap={() => handleAnswer(option)}
          />
        ))}
      </stackLayout>
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
  progress: {
    fontSize: 16,
    color: "#666",
    textAlignment: "center",
    marginBottom: 20,
  },
  word: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196F3",
    textAlignment: "center",
    marginBottom: 30,
  },
  optionsContainer: {
    rowGap: 16,
  },
  optionButton: {
    fontSize: 18,
    backgroundColor: "#ffffff",
    color: "#333333",
    padding: 16,
    borderRadius: 8,
    textAlignment: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
});