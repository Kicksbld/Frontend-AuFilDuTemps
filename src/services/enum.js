// utils/enums.js

export const formatEnum = (value) => {
    if (!value) return '';
    
    // Convert MASCULINE/FEMININE to Masculine/Feminine
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };
  
  export const genderOptions = [
    { value: 'MASCULINE', label: 'Masculine' },
    { value: 'FEMININE', label: 'Feminine' }
  ];
  
  export const sizeOptions = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' }
  ];
  
  export const colorOptions = [
    { value: 'RED', label: 'Red' },
    { value: 'BLUE', label: 'Blue' },
    { value: 'GREEN', label: 'Green' },
    { value: 'BLACK', label: 'Black' },
    { value: 'WHITE', label: 'White' },
    { value: 'GREY', label: 'Grey' },
    { value: 'YELLOW', label: 'Yellow' },
    { value: 'PURPLE', label: 'Purple' },
    { value: 'PINK', label: 'Pink' },
    { value: 'ORANGE', label: 'Orange' },
    { value: 'BROWN', label: 'Brown' }
  ];