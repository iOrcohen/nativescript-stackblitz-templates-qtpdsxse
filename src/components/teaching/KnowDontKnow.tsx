import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackLayout, Label, Button } from "@nativescript/core";
import { useState } from "react";
import { Word } from "../../data/words";

interface KnowDontKnowProps {
  words: Word[];
  onComplete: () => void;
}

export function KnowDontKnow({ words, onComplete }: KnowDontKnowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleResponse = (knows: boolean) => {
    // In a real app, we would save this information
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowTranslation(false);
    } else {
      onComplete();
    }
  };

  return (
    <stackLayout style={styles.container}>
      <label style={styles.progress}>Word {currentIndex + 1} of {words.length}</label>
      
      <label style={styles.word}>{words[currentIndex].word}</label>
      
      {showTranslation ? (
        <stackLayout style={styles.translationContainer}>
          <label style={styles.translation}>{words[currentIndex].translation}</label>
          <label style={styles.example}>{words[currentIndex].example}</label>
          
          <stackLayout style={styles.buttonContainer}>
            <button 
              style={[styles.responseButton, styles.knowButton]}
              text="I Knew It!"
              onTap={() => handleResponse(true)}
            />
            <button 
              style={[styles.responseButton, styles.dontKnowButton]}
              text="Didn't Know"
              onTap={() => handleResponse(false)}
            />
          </stackLayout>
        </stackLayout>
      ) : (
        <button
          style={styles.showButton}
          text="Show Translation"
          onTap={() => setShowTranslation(true)}
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
  translationContainer: {
    rowGap: 16,
  },
  translation: {
    fontSize: 20,
    color: "#333",
    textAlignment: "center",
    marginBottom: 8,
  },
  example: {
    fontSize: 16,
    color: "#666",
    textAlignment: "center",
    marginBottom: 20,
    textWrap: true,
  },
  buttonContainer: {
    rowGap: 16,
  },
  responseButton: {
    fontSize: 18,
    padding: 16,
    borderRadius: 8,
    textAlignment: "center",
  },
  knowButton: {
    backgroundColor: "#4CAF50",
    color: "#ffffff",
  },
  dontKnowButton: {
    backgroundColor: "#F44336",
    color: "#ffffff",
  },
  showButton: {
    fontSize: 18,
    backgroundColor: "#ffffff",
    color: "#2196F3",
    padding: 16,
    borderRadius: 8,
    textAlignment: "center",
    borderWidth: 1,
    borderColor: "#2196F3",
  },
});