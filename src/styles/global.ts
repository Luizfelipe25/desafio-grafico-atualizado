import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
        --container: 100rem;
        --small: 1.5rem;
        --medium: 3rem;
        --large: 5rem;
    }
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}

body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
}

`
export default GlobalStyles
