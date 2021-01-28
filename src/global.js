import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
    body,html,#root{
        height:100%;
        background: #eee;
        -webkit-font-smoothing: antialiased !important;
    }
    :root {
      --color-button1: #2D3047;
      --color-background: #8DE4FF;
      --color-border: #ccc;
      --color-button: #575A89;
      --color-text: #000;
      --color-gray-text: #999;
      --color-background-geral: #eee;
      --color-white:#fff;
      --color-comments: #333;
      --color-red:#f00;
      --color-orange: orange;
      --color-purple3:#CB429F;
      --color-purple2:#690375;
      --color-purple:#2C0E37;
      --color-yellow: yellow;
    }
`