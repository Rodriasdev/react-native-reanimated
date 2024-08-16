import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import  Constants  from 'expo-constants';
import Animated,{useSharedValue} from 'react-native-reanimated';


export default function HomeScreen() {

  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = width.value + 50
  }


  return (

      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Animated.View style={{
            width,
            height:100,
            backgroundColor: 'red'
          }}/>
        </TouchableOpacity>
        <Button onPress={() => width.value = 50} title='reset'/>
      </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight
  }
});
