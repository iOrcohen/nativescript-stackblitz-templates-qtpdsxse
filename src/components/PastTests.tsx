import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackLayout, Label } from "@nativescript/core";

export function PastTests() {
  return (
    <stackLayout style={styles.container}>
      <label style={styles.text}>Coming Soon!</label>
      <label style={styles.description}>
        Your test history will be available here in the next update.
      </label>
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlignment: "center",
    textWrap: true,
  },
});