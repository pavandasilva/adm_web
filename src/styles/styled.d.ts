import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
    colors : {
      font: {
        primary: string,
        secondary: string,
        tertiary: string,
        reverse: string
      },
      mainBackground: string,
      mainBackgroundDarked: string,      
      primary: string,
      warning: string,
      danger: string,
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
