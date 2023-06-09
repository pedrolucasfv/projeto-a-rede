export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    },
    colors: {
      dark: 'rgba(0,0,0,0.5)',
      light: 'rgba(255,255,255,0.5)',
    }
  },
  colors: {
    primary: '#ffcd2a',
    secondary: '#0099db',
    tertiary: '#eb268f',
    quaternary: '#01a95d',
    lightGray: '#d3d3d3',
    gray: '#b0b0b0',
    darkGray: '#7f7f7f',
    white: '#fafafa',
    black: '#191919',
    divider: 'rgba(255,255,255,0.1)',
    placeholder: 'rgba(0,0,0,.4)',
    inputBorder: '#CFCFCF',
    inputError: '#CD2C2C'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
