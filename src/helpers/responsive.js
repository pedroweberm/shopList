import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 780;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const normalize = (size) => {
  const newSize = moderateScale(size);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const pixel = (size) => PixelRatio.roundToNearestPixel(size);

const widthPercentage = (value) => {
  const percent = (width * parseFloat(value)) / 100;

  return PixelRatio.roundToNearestPixel(percent);
};

const heightPercentage = (value) => {
  const percent = (height * parseFloat(value)) / 100;

  return PixelRatio.roundToNearestPixel(percent);
};

export {
  scale,
  verticalScale,
  moderateScale,
  normalize,
  widthPercentage,
  heightPercentage,
  pixel,
};
