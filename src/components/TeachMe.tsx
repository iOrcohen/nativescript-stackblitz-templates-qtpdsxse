import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackLayout, Label, Button, GridLayout } from "@nativescript/core";
import { useState, useEffect } from "react";
import { words, Word } from "../data/words";
import { LevelTest } from "./teaching/LevelTest";
import { KnowDontKnow } from "./teaching/KnowDontKnow";
import { MultipleChoice } from "./teaching/MultipleChoice";
import { CompleteSentence } from "./teaching/CompleteSentence";
import { WordPairs } from "./teaching/WordPairs";

export function TeachMe() {
  const [userLevel, setUserLevel] = useState<number | null>(null);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [isTestComplete, setIsTestComplete] = useState(false);

  useEffect(() => {
    // In a real app, we would load the user's level from storage
    // For now, we'll assume they need to take the test if userLevel is null
  }, []);

  const handleTestComplete = (level: number) => {
    setUserLevel(level);
    setIsTestComplete(true);
  };

  const handleModeSelect = (mode: string) => {
    setSelectedMode(mode);
  };

  const getWordsForPractice = (): Word[] => {
    if (!userLevel) return [];
    
    // Get words from current level, one level up, and one level down
    const levelRange = [Math.max(1, userLevel - 1), userLevel, Math.min(20, userLevel + 1)];
    const availableWords = words.filter(word => levelRange.includes(word.level));
    
    // Randomly select 10 words
    return availableWords
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  };

  const renderModeSelection = () => (
    <stackLayout style={styles.container}>
      <label style={styles.title}>How would you like to practice?</label>
      
      <gridLayout style={styles.modeContainer}>
        <button 
          style={styles.modeButton} 
          onTap={() => handleModeSelect('know')}
          text="I Know / I Don't Know"
        />
        <button 
          style={styles.modeButton}
          onTap={() => handleModeSelect('choice')}
          text="What's the meaning?"
        />
        <button 
          style={styles.modeButton}
          onTap={() => handleModeSelect('sentence')}
          text="Complete the Sentence"
        />
        <button 
          style={styles.modeButton}
          onTap={() => handleModeSelect('pairs')}
          text="Match Word Pairs"
        />
      </gridLayout>
    </stackLayout>
  );

  const renderSelectedMode = () => {
    const practiceWords = getWordsForPractice();

    switch (selectedMode) {
      case 'know':
        return <KnowDontKnow words={practiceWords} onComplete={() => setSelectedMode(null)} />;
      case 'choice':
        return <MultipleChoice words={practiceWords} onComplete={() => setSelectedMode(null)} />;
      case 'sentence':
        return <CompleteSentence words={practiceWords} onComplete={() => setSelectedMode(null)} />;
      case 'pairs':
        return <WordPairs words={practiceWords} onComplete={() => setSelectedMode(null)} />;
      default:
        return renderModeSelection();
    }
  };

  if (!userLevel && !isTestComplete) {
    return <LevelTest onComplete={handleTestComplete} />;
  }

  return renderSelectedMode();
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 20,
    textAlignment: "center",
  },
  modeContainer: {
    rows: "auto, auto, auto, auto",
    rowGap: 16,
  },
  modeButton: {
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