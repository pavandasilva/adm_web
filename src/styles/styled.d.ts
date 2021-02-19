import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    checkBoxes: {
      primary: {
        default: {
          backgroundColor: string,
          color: string,
          borderColor: string,
        },
        checked: {
          backgroundColor: string,
          color: string,
          borderColor: string,
        }
      },
    },
    colors : {
      font: {
        primary: string,
        secondary: string,
        tertiary: string,
        quaternary: string,
        quintenary: string,
        reverse: string
      },

      mainBackground: string,
      mainBackgroundLight: string
      mainBackgroundDarked: string,
      borderColor: string,
      primary: string,
      warning: string,
      danger: string,
      dangerLight: string,
      success: string,
      ok: string,
    },
    buttons: {
      primary: {
        default: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        hover: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        pressed: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        disabled: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        }
      },
      secondary: {
        default: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        hover: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        pressed: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        disabled: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        }
      },
      tertiary: {
        default: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        hover: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        pressed: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string
        },
        disabled: {
          backgroundColor: string,
          fontColor: string,
          borderColor: string,
        }
      },
    }
  }

}
