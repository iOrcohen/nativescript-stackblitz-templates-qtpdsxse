import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackLayout, Label, Button } from "@nativescript/core";
import { useState } from "react";
import { Word } from "../../data/words";

interface MultipleChoiceProps {
  words: Word[];
  onComplete: () => void;
}

export function MultipleChoice({ words, onComplete }: MultipleChoiceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showClue, setShowClue] = useState(false);
  const [options] = useState(() => generateOptions());

  function generateOptions() {
    return words.map(word => {
      const otherWords = words.filter(w => w.translation !== word.translation);
      const wrongOptions = otherWords
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.translation);
      
      const allOptions = [...wrongOptions, word.translation];
      return allOptions.sort(() => Math.random() - 0.5);
    });
  }

  const handleAnswer = (answer: string) => {
    // In a real app, we would save this information
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowClue(false);
    } else {
      onComplete();
    }
  };

  return (
    <stackLayout style={styles.container}>
      <label style={styles.progress}>Word {currentIndex + 1} of {words.length}</label>
      
      <label style={styles.word}>{words[currentIndex].word}</label>
      
      {showClue && (
        <label style={styles.clue}>{words[currentIndex].example}</label>
      )}
      
      <stackLayout style={styles.optionsContainer}>
        {options[currentIndex].map((option, index) => (
          <button
            key={index}
            style={styles.optionButton}
            text={option}
            onTap={() => handleAnswer(option)}
          />
        ))}
      </stackLayout>
      
      {!showClue && (
        <button
          style={styles.clueButton}
          text="Give me a clue"
          onTap={() => setShowClue(true)}
        />
      )}
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
  clue: {
    fontSize: 16,
    color: "#666",
    textAlignment: "center",
    marginBottom: 20,
    textWrap: true,
    fontStyle: "italic",
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
  clueButton: {
    fontSize: 16,
    backgroundColor: "transparent",
    color: "#2196F3",
    padding: 16,
    textAlignment: "center",
    marginTop: 20,
  },
});