import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ScrollView, StackLayout, Label, GridLayout, TextField, Button, Image } from "@nativescript/core";
import { words, Word } from "../data/words";
import { useState } from "react";

export function VocabularyList() {
  const [expandedWord, setExpandedWord] = useState<string | null>(null);
  const [associations, setAssociations] = useState<{ [key: string]: string }>({});

  const wordsByLevel = React.useMemo(() => {
    const levels: { [key: number]: typeof words } = {};
    for (let i = 1; i <= 20; i++) {
      levels[i] = words.filter(word => word.level === i);
    }
    return levels;
  }, []);

  const handleWordTap = (word: string) => {
    setExpandedWord(expandedWord === word ? null : word);
  };

  const handleAssociationChange = (word: string, text: string) => {
    setAssociations(prev => ({
      ...prev,
      [word]: text
    }));
  };

  const saveAssociation = (word: string) => {
    // Here you would typically save to local storage or a backend
    console.log(`Saving association for ${word}: ${associations[word]}`);
    // Show success feedback to user
    alert("Association saved successfully!");
  };

  const renderWord = (word: Word) => {
    const isExpanded = expandedWord === word.word;

    return (
      <stackLayout key={word.word} style={styles.wordWrapper}>
        <gridLayout 
          columns="*,auto,auto" 
          className="p-4"
          style={styles.wordContainer}
          onTap={() => handleWordTap(word.word)}
        >
          <label 
            col="0"
            className={`${word.isVerb ? 'text-blue-600' : ''}`}
            style={styles.englishWord}
          >
            {word.word}
          </label>
          <label 
            col="1"
            className="text-right mr-2"
            style={styles.hebrewWord}
          >
            {word.translation}
          </label>
          <label
            col="2"
            className="text-xs text-blue-500"
            style={styles.expandIcon}
          >
            {isExpanded ? "▼" : "▶"}
          </label>
        </gridLayout>

        {isExpanded && (
          <stackLayout className="p-4" style={styles.expandedContent}>
            <label className="text-sm mb-2" style={styles.sectionLabel}>
              Example:
            </label>
            <label className="mb-4" style={styles.exampleText} textWrap={true}>
              {word.example}
            </label>
            
            <label className="text-sm mb-2" style={styles.sectionLabel}>
              Your Association:
            </label>
            <gridLayout columns="*,auto" className="mb-2">
              <textField
                col="0"
                text={associations[word.word] || ''}
                hint="Add your association..."
                style={styles.inputField}
                onTextChange={(args) => handleAssociationChange(word.word, args.value)}
              />
              <button
                col="1"
                className="ml-2"
                text="Save"
                style={styles.saveButton}
                onTap={() => saveAssociation(word.word)}
              />
            </gridLayout>
          </stackLayout>
        )}
      </stackLayout>
    );
  };

  return (
    <scrollView>
      <stackLayout style={styles.container}>
        {Object.entries(wordsByLevel).map(([level, levelWords]) => (
          <stackLayout key={level} style={styles.levelContainer}>
            <label className="text-xl font-bold p-2" style={styles.levelHeader}>
              Level {level}
            </label>
            {levelWords.map(renderWord)}
          </stackLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  levelContainer: {
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  levelHeader: {
    backgroundColor: "#E3F2FD",
    color: "#1976D2",
    padding: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  wordWrapper: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    marginHorizontal: 8,
  },
  wordContainer: {
    backgroundColor: "white",
    borderRadius: 4,
  },
  englishWord: {
    fontSize: 16,
    textAlignment: "left",
    color: "black",
    fontWeight: "bold",
  },
  hebrewWord: {
    fontSize: 16,
    textAlignment: "right",
    color: "#666",
  },
  expandIcon: {
    fontSize: 12,
    color: "#2196F3",
  },
  expandedContent: {
    backgroundColor: "#F5F5F5",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 12,
  },
  sectionLabel: {
    color: "#666",
    fontWeight: "bold",
  },
  exampleText: {
    color: "#333",
    fontSize: 14,
    padding: 8,
  },
  inputField: {
    backgroundColor: "white",
    color: "black",
    padding: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
  },
  saveButton: {
    backgroundColor: "#2196F3",
    color: "white",
    padding: 8,
    borderRadius: 4,
  },
});