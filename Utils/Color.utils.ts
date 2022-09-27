/**
 * Gets the adjusted luminance of hex code
 * @param  {String} hex The target hexcode
 * @param  {Number} lum An number ranging from -1.0 <-> 0 <-> 1.0 (negatives for darker and positive for lighter)
 * @return {String} hexcode of the luminance
 */

export const getColorLuminance = (hex: string, lum: number): string => {
  hex = String(hex).replace(/[^0-9a-f]/gi, "");

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  lum = lum || 0;
  let rgb: string = "#",
    c: string | number,
    i: number;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
};
