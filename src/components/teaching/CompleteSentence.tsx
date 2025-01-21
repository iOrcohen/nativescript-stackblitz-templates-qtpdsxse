import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackLayout, Label, Button } from "@nativescript/core";
import { useState } from "react";
import { Word } from "../../data/words";

interface CompleteSentenceProps {
  words: Word[];
  onComplete: () => void;
}

export function CompleteSentence({ words, onComplete }: CompleteSentenceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options] = useState(() => generateOptions());

  function generateOptions() {
    return words.map(word => {
      const otherWords = words.filter(w => w.word !== word.word);
      const wrongOptions = otherWords
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.word);
      
      const allOptions = [...wrongOptions, word.word];
      return allOptions.sort(() => Math.random() - 0.5);
    });
  }

  const getCurrentSentence = () => {
    const sentence = words[currentIndex].example;
    return sentence.replace(
      new RegExp(words[currentIndex].word, 'gi'),
      '_____'
    );
  };

  const handleAnswer = (answer: string) => {
    // In a real app, we would save this information
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <stackLayout style={styles.container}>
      <label style={styles.progress}>Sentence {currentIndex + 1} of {words.length}</label>
      
      <label style={styles.sentence} textWrap={true}>{getCurrentSentence()}</label>
      
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
  sentence: {
    fontSize: 20,
    color: "#333",
    textAlignment: "center",
    marginBottom: 30,
    textWrap: true,
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