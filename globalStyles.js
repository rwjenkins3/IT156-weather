import { Appearance } from "react-native";

const isDarkMode = Appearance.getColorScheme() === 'dark';

const FontConstants = {

};

const ColorConstants = {
    background: isDarkMode ? '#333333' : '#efefef',
    backgroundMedium: isDarkMode ? '#666666' : '#dddddd',

    normal: isDarkMode ? '#cccccc' : '#cccccc',
    title: isDarkMode ? '#ffffff' : '#000000',
    highlight: isDarkMode ? 'lightblue' : 'darkblue',
};

const SizeConstants = {
    paddingSmall: 2,
    paddingRegular: 8,
    paddingLarge: 16,
    borderRadius: 8
};

export { FontConstants, ColorConstants, SizeConstants }