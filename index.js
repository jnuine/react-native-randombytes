import { Buffer } from 'buffer';
import { NativeModules } from 'react-native';
const { RNRandomBytes } = NativeModules;

function toBuffer (nativeStr) {
  return new Buffer(nativeStr, 'base64');
}

export default function randomBytes (length) {
  return new Promise(function (resolve, reject) {
    RNRandomBytes.randomBytes(length, function (err, base64String) {
      if (err) {
        reject(err);
        return;
      }

      resolve(toBuffer(base64String));
    });
  });
}
