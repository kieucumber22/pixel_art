let paletteColor = 'black';

const setPaletteColor = (palette) => {
    paletteColor = palette;
}

const setPixelColor = (pixel) => {
    pixel.style.backgroundColor = paletteColor;
}