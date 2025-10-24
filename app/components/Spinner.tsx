// DotSpinner.tsx
import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

const Spinner = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [rotateAnim]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const dots = Array.from({ length: 8 });

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.spinner,
                    { transform: [{ rotate: spin }] },
                ]}
            >
                {dots.map((_, i) => {
                    const angle = (i * 2 * Math.PI) / dots.length;
                    const radius = 20;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <View
                            key={i}
                            style={[
                                styles.dot,
                                {
                                    transform: [
                                        { translateX: x },
                                        { translateY: y },
                                    ],
                                    opacity: (i + 1) / dots.length,
                                },
                            ]}
                        />
                    );
                })}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    spinner: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "white",
        position: "absolute",
    },
});

export default Spinner;
