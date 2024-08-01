// import { encode } from "blurhash";

// const loadImage = async (src: string): Promise<HTMLImageElement> =>
//   new Promise((resolve, reject) => {
//     const img = new Image();
//     img.crossOrigin = "Anonymous"; // Tambahkan baris ini
//     img.onload = () => resolve(img as HTMLImageElement);
//     img.onerror = (...args) => reject(args);
//     img.src = src;
//   });

// const getImageData = (image: HTMLImageElement): ImageData => {
//   const canvas = document.createElement("canvas");
//   canvas.width = image.width;
//   canvas.height = image.height;
//   const context = canvas.getContext("2d");
//   if (!context) throw new Error("Unable to get canvas context");
//   context.drawImage(image, 0, 0);
//   return context.getImageData(0, 0, image.width, image.height);
// };

// export const encodeImageToBlurhash = async (imageUrl: string): Promise<string> => {
//   try {
//     // console.log(imageUrl)
//     const image = await loadImage(imageUrl);
//     const imageData = getImageData(image);
//     return encode(imageData.data, imageData.width, imageData.height, 4, 4);
//   } catch (error) {
//     console.error("Error encoding image to Blurhash:", error);
//     throw error;
//   }
// };
