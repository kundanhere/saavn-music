import { useState } from 'react';

import ColorThief from 'colorthief';

/**
 * A custom React hook that extracts the dominant color from an image and updates a state variable.
 *
 * @function useColors
 * @returns {Object} An object containing the color state, putColor function, and getPalette function.
 * @property {string} color - The current dominant color of the image.
 * @property {Function} putColor - A function to update the color state with the dominant color of the provided image.
 * @property {Function} getPalette - A function to get the color palette of the provided image. (Not implemented in this example)
 */
const useColors = () => {
  const [color, setColor] = useState('#fff');
  const [palette, setPalette] = useState([]);
  const colorThief = new ColorThief();
  const img = new Image();
  img.crossOrigin = 'Anonymous';

  // Helper function to return the dominant color of the image as a hex color.
  const getHexColor = async (img) => {
    const rgbColor = await colorThief.getColor(img);

    // If the image has a valid color, return it as a hex color.
    if (rgbColor.length > 0) return rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2]);
  };

  // Helper function to convert RGB to hex color.
  const rgbToHex = (r, g, b) =>
    `#${[r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
      })
      .join('')}`;

  /**
   * Updates the color state with the dominant color of the provided image.
   *
   * @function putColor
   * @param {string} [src=''] - The source URL of the image.
   * @returns {null} Returns null if the source URL is empty.
   */
  const putColor = (src = '') => {
    if (src.length === 0) return null;

    // Load the image and get the dominant color.
    img.src = src;
    img.addEventListener('load', async () => setColor(await getHexColor(img)));
  };

  /**
   * Updates the palette state with the color palette of the provided image.
   *
   * @function putPalette
   * @param {string} [src=''] - The source URL of the image.
   * @param {number} [colorCount=5] - The number of colors to extract from the image's color palette.
   * @returns {null} Returns null if the source URL is empty.
   */
  const putPalette = (src = '', colorCount = 5) => {
    if (src.length === 0) return null;

    // Load the image and get the color palette.
    img.src = src;
    img.addEventListener('load', async () => setPalette(await getPalette(img, colorCount)));
  };

  // Helper function to get the color palette of the image.
  const getPalette = async (img, colorCount) => {
    const colors = await colorThief.getPalette(img, colorCount);
    return colors;
  };

  return {
    color,
    putColor,
    palette,
    putPalette,
  };
};

export default useColors;
