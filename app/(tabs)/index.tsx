import React, {useEffect} from 'react';
import {  Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Home= () => {
  const backgroundColor = useSharedValue('green');
  const opacity = useSharedValue(1);
  const position = useSharedValue(-100);



  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  });

  useEffect(() => {
    position.value = withTiming(0, { duration: 1000 });
  }, []);

  const handlePress = () => {
    backgroundColor.value = withTiming('blue', { duration: 500 });
    opacity.value = withTiming(0, { duration: 500 });
  };


  const animatedTitle= useAnimatedStyle(() => {
    return {
      transform: [{ translateY: position.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedBackgroundStyle]}>
      <Animated.Text style={[styles.title, animatedTitle]}>
        Bienvenido
      </Animated.Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
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
    color:"white",
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: '30%',
    textAlign: 'center',
  },
  button: {
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
