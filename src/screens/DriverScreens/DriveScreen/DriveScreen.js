import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import styles from './DriveScreenStyles';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {showMessage} from 'react-native-flash-message';
import database from '@react-native-firebase/database';
import useStopwatch from '../../../utils/stopWatch';

const DriveScreen = ({route}) => {
  const [start, setStart] = useState(false);
  const [brake, setBrake] = useState(true);
  const [door, setDoor] = useState(false);
  const [light, setLight] = useState(false);

  const {item} = route.params;
  const {parsedDriverInfo} = route.params;

  const reference = database().ref('/drivers');
  const carReference = database().ref('/cars/' + item.id);
  const driverReference = database().ref('/drivers/' + parsedDriverInfo[0].id);
  const stopwatch = useStopwatch();

  const modelImageMap = {
    Sedan: require('../../../assets/Images/sedan.png'),
    Hatchback: require('../../../assets/Images/hatchback.png'),
    SUV: require('../../../assets/Images/suv.png'),
    Truck: require('../../../assets/Images/truck.png'),
    Van: require('../../../assets/Images/van.png'),
  };

  const modelImage =
    modelImageMap[item.style] || require('../../../assets/Images/sedan.png');

  const handleWrong = errorMessage => {
    showMessage({
      message: errorMessage,
      type: 'danger',
    });

    driverReference.once('value').then(snapshot => {
      const wrongValue = snapshot.val().wrong;
      driverReference
        .update({
          wrong: (wrongValue || 0) + 1,
        })
        .then();
    });
  };

  const onStart = () => {
    if (!brake) {
      handleWrong('El freni çekili değil.');
      return;
    }
    if (door) {
      handleWrong('Aracın kapısı açık.');
      return;
    }
    if (light) {
      handleWrong('Aracın farları açık.');
      return;
    }
    if (start) {
      const timer = stopwatch.getElapsedTime();
      carReference.update({
        inUse: false,
        driver: '',
      });
      driverReference.once('value').then(snapshot => {
        const timeValue = snapshot.val().time;
        driverReference.update({
          time: (timeValue || 0) + timer,
        });
      });
      stopwatch.resetStopwatch();
    }
    if (!start) {
      carReference
        .update({
          inUse: true,
          driver: parsedDriverInfo[0],
        })
        .then();
      stopwatch.startStopwatch();
    }

    setStart(!start);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={modelImage} style={styles.image} />
      </View>
      <Text style={styles.brand}> {item.brand + ' ' + item.model}</Text>
      <View style={styles.plate}>
        <Text style={styles.license}>{item.license}</Text>
        <TouchableOpacity style={styles.start} onPress={onStart}>
          {start ? (
            <MaterialCommunityIcons name="car-door" size={30} color="white" />
          ) : (
            <Icon name="key" size={30} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {start && (
        <View style={styles.startBox}>
          <View style={styles.sensor}>
            <View style={styles.innerSensor}>
              <Text style={styles.km}>0 km/h</Text>
            </View>
          </View>
          <View style={styles.infoBox}>
            <TouchableOpacity onPress={() => setBrake(!brake)}>
              <MaterialCommunityIcons
                name="car-brake-alert"
                size={40}
                color={brake ? 'red' : 'black'}
              />
            </TouchableOpacity>
            <View>
              <TouchableWithoutFeedback onPress={() => setDoor(!door)}>
                <MaterialCommunityIcons
                  name="car-door"
                  size={30}
                  color={!door ? 'green' : 'red'}
                />
              </TouchableWithoutFeedback>
            </View>
            <View>
              <TouchableWithoutFeedback onPress={() => setLight(!light)}>
                <MaterialCommunityIcons
                  name={light ? 'car-light-high' : 'car-light-dimmed'}
                  size={30}
                  color={light ? 'green' : null}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DriveScreen;
