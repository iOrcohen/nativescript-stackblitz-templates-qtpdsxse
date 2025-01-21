import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackLayout, Label, Button, GridLayout } from "@nativescript/core";
import { useState, useEffect } from "react";
import { Word } from "../../data/words";

interface WordPairsProps {
  words: Word[];
  onComplete: () => void;
}

export function WordPairs({ words, onComplete }: WordPairsProps) {
  const [selectedEnglish, setSelectedEnglish] = useState<string | null>(null);
  const [selectedHebrew, setSelectedHebrew] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [shuffledEnglish, setShuffledEnglish] = useState<string[]>([]);
  const [shuffledHebrew, setShuffledHebrew] = useState<string[]>([]);

  useEffect(() => {
    setShuffledEnglish(words.map(w => w.word).sort(() => Math.random() - 0.5));
    setShuffledHebrew(words.map(w => w.translation).sort(() => Math.random() - 0.5));
  }, [words]);

  const handleEnglishSelect = (word: string) => {
    if (matchedPairs.has(word)) return;
    setSelectedEnglish(word);

    if (selectedHebrew) {
      const hebrewMatch = words.find(w => w.word === word)?.translation;
      if (hebrewMatch === selectedHebrew) {
        // Correct match
        setMatchedPairs(prev => new Set([...prev, word]));
        setSelectedEnglish(null);
        setSelectedHebrew(null);

        if (matchedPairs.size === words.length - 1) {
          // All pairs matched
          setTimeout(onComplete, 1000);
        }
      } else {
        // Wrong match
        setTimeout(() => {
          setSelectedEnglish(null);
          setSelectedHebrew(null);
        }, 1000);
      }
    }
  };

  const handleHebrewSelect = (translation: string) => {
    if (matchedPairs.has(words.find(w => w.translation === translation)?.word || '')) return;
    setSelectedHebrew(translation);

    if (selectedEnglish) {
      const englishMatch = words.find(w => w.translation === translation)?.word;
      if (englishMatch === selectedEnglish) {
        // Correct match
        setMatchedPairs(prev => new Set([...prev, englishMatch]));
        setSelectedEnglish(null);
        setSelectedHebrew(null);

        if (matchedPairs.size === words.length - 1) {
          // All pairs matched
          setTimeout(onComplete, 1000);
        }
      } else {
        // Wrong match
        setTimeout(() => {
          setSelectedEnglish(null);
          setSelectedHebrew(null);
        }, 1000);
      }
    }
  };

  const getButtonStyle = (word: string, isHebrew: boolean) => {
    const matched = matchedPairs.has(isHebrew ? 
      words.find(w => w.translation === word)?.word || '' : 
      word
    );
    const selected = isHebrew ? 
      selectedHebrew === word :
      selectedEnglish === word;

    return {
      ...styles.pairButton,
      ...(matched && styles.matchedButton),
      ...(selected && styles.selectedButton),
    };
  };

  return (
    <gridLayout style={styles.container} columns="*, *">
      <stackLayout col="0" style={styles.column}>
        {shuffledEnglish.map((word, index) => (
          <button
            key={index}
            style={getButtonStyle(word, false)}
            text={word}
            onTap={() => handleEnglishSelect(word)}
          />
        ))}
      </stackLayout>

      <stackLayout col="1" style={styles.column}>
        {shuffledHebrew.map((translation, index) => (
          <button
            key={index}
            style={getButtonStyle(translation, true)}
            text={translation}
            onTap={() => handleHebrewSelect(translation)}
          />
        ))}
      </stackLayout>
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
  column: {
    rowGap: 16,
  },
  pairButton: {
    fontSize: 16,
    backgroundColor: "#ffffff",
    color: "#333333",
    padding: 12,
    borderRadius: 8,
    textAlignment: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    margin: 4,
  },
  selectedButton: {
    backgroundColor: "#E3F2FD",
    borderColor: "#2196F3",
  },
  matchedButton: {
    backgroundColor: "#E8F5E9",
    borderColor: "#4CAF50",
    color: "#4CAF50",
  },
});