import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { StackLayout, GridLayout, Label } from "@nativescript/core";
import { NavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

interface HomePageProps {
    navigation: NavigationProp<MainStackParamList, "Home">;
}

export function HomePage({ navigation }: HomePageProps) {
    const navigateTo = (screen: keyof MainStackParamList) => {
        navigation.navigate(screen);
    };

    return (
        <stackLayout style={styles.container}>
            <stackLayout style={styles.header}>
                <label style={styles.title}>English Vocabulary</label>
                <label style={styles.subtitle}>Master your English vocabulary</label>
            </stackLayout>

            <stackLayout style={styles.menuContainer}>
                <stackLayout 
                    style={[styles.menuItem, styles.blueBackground]}
                    onTap={() => navigateTo("TeachMe")}
                >
                    <label text="📚" style={styles.menuIcon} />
                    <label style={styles.menuText}>Teach Me</label>
                    <label style={styles.menuDescription}>Learn new words through interactive lessons</label>
                </stackLayout>

                <stackLayout 
                    style={[styles.menuItem, styles.purpleBackground]}
                    onTap={() => navigateTo("PastTests")}
                >
                    <label text="📝" style={styles.menuIcon} />
                    <label style={styles.menuText}>Past Tests</label>
                    <label style={styles.menuDescription}>Review your previous test results</label>
                </stackLayout>

                <stackLayout 
                    style={[styles.menuItem, styles.greenBackground]}
                    onTap={() => navigateTo("Vocabulary")}
                >
                    <label text="📖" style={styles.menuIcon} />
                    <label style={styles.menuText}>Word Bank</label>
                    <label style={styles.menuDescription}>Browse and study vocabulary by level</label>
                </stackLayout>
            </stackLayout>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        height: "100%",
    },
    header: {
        padding: 20,
        backgroundColor: "#2196F3",
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffffff",
        textAlignment: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        color: "#ffffff",
        textAlignment: "center",
    },
    menuContainer: {
        padding: 20,
    },
    menuItem: {
        borderRadius: 16,
        padding: 24,
        marginBottom: 30,
        elevation: 2,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    blueBackground: {
        backgroundColor: "#ffffff",
    },
    purpleBackground: {
        backgroundColor: "#ffffff",
    },
    greenBackground: {
        backgroundColor: "#ffffff",
    },
    menuIcon: {
        fontSize: 36,
        marginBottom: 12,
    },
    menuText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#333333",
    },
    menuDescription: {
        fontSize: 16,
        textWrap: true,
        color: "#666666",
    },
});