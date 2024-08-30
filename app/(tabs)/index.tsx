import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const HomeScreen = () => {
  const titlePosition = useSharedValue(-100);
  const backgroundColor = useSharedValue('#74b9ff');
  const titleOpacity = useSharedValue(1);

  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: titleOpacity.value,
    };
  });


  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  });

  React.useEffect(() => {
    titlePosition.value = withTiming(0, { duration: 1000 });
  }, []);

  const handleStartPress = () => {
    backgroundColor.value = withTiming('red', { duration: 500 });
    titleOpacity.value = withTiming(0, { duration: 500 });
  };

  return (
    <Animated.View style={[styles.container, animatedBackgroundStyle]}>
      <Animated.Text style={[styles.title, animatedTitleStyle]}>
        Bienvenido
      </Animated.Text>
      <TouchableOpacity style={styles.button} onPress={handleStartPress}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: '30%',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#6c5ce7',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
