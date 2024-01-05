import {sha256} from 'react-native-sha256';

const keyCreator = async data => {
  const generateSalt = () => {
    const randomBytes = Array.from({length: 16}, () =>
      Math.floor(Math.random() * 256),
    );
    const salt = randomBytes
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
    return salt;
  };

  const salt = generateSalt();
  const hash = await sha256(data + salt);
  return hash;
};

export default keyCreator;
