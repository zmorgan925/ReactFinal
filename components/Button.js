import { StyleSheet, View, Pressable, Text } from 'react-native';
import React from 'react';

export default function Button({ label, theme, onPress }) {
    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 1, borderColor: "#f98b88" }]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#34495e" }]}
              onPress={onPress}
            >
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
        );
      }
      else if (theme === "small") {
        return (
          <View
          style={[styles.smallbuttonContainer]}
          >
            <Pressable
              style={[styles.button]}
              onPress={onPress}
            >
              <Text style={[styles.smallbuttonLabel, { color: "#fff" }]}>{label}</Text>
            </Pressable>
        </View>
        );
      }

return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#4169E1',
    padding: 20,
    borderRadius: 8,
    marginBottom: 30,
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  smallbuttonContainer: {
    backgroundColor: '#4169E1',
    padding: 20,
    borderRadius: 8,
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  smallbuttonLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
