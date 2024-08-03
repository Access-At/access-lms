// import CryptoJS from "crypto-js";

// export { createCodec, createKey };

// interface Codec {
//   encrypt(json: any): string;
//   decrypt(input: string): any;
// }

// function createCodec(stringKey: string): Codec {
//   if (typeof stringKey !== 'string') {
//     throw new Error('Expected ciphertext to be of type: string');
//   }

//   const key = CryptoJS.SHA256(stringKey).toString(CryptoJS.enc.Hex);

//   return {
//     encrypt,
//     decrypt,
//   };

//   function encrypt(json: any): string {
//     const iv = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
//     const encrypted = CryptoJS.AES.encrypt(JSON.stringify(json), CryptoJS.enc.Hex.parse(key), {
//       iv: CryptoJS.enc.Hex.parse(iv),
//     });

//     return encodeURIComponent(JSON.stringify([iv, encrypted.toString()]));
//   }

//   function decrypt(input: string): any {
//     const [iv, ciphertext] = JSON.parse(decodeURIComponent(input));
//     const decrypted = CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Hex.parse(key), {
//       iv: CryptoJS.enc.Hex.parse(iv),
//     });

//     return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
//   }
// }

// function createKey(): string {
//   return CryptoJS.lib.WordArray.random(48).toString(CryptoJS.enc.Hex);
// }
