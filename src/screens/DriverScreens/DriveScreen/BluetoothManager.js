// BluetoothManager.js
import BleManager from 'react-native-ble-manager';

class BluetoothManager {
  constructor() {
    this.devices = [];
    this.isConnected = false;
  }

  init() {
    BleManager.start({showAlert: false});
  }

  scanDevices() {
    return BleManager.scan([], 5, true)
      .then(() => {
        console.log('Scanning...');
      })
      .catch(error => {
        console.error(error);
      });
  }

  stopScan() {
    BleManager.stopScan()
      .then(() => {
        console.log('Scan stopped');
      })
      .catch(error => {
        console.error(error);
      });
  }

  connectToDevice(deviceId) {
    return BleManager.connect(deviceId)
      .then(() => {
        console.log('Connected to device');
        this.isConnected = true;
      })
      .catch(error => {
        console.error(error);
      });
  }

  disconnectDevice(deviceId) {
    return BleManager.disconnect(deviceId)
      .then(() => {
        console.log('Disconnected from device');
        this.isConnected = false;
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const bluetoothManager = new BluetoothManager();

export default bluetoothManager;
