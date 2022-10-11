// Generates styles for CSS
const generateCSS = () => {
  return `/* Style Variables */
:root {
    /* theme from https://www.color-hex.com/color-palette/98179 dark theme */
    --white: #fff;
    --blue-gray: #5885AF;
    --blue: #007acc;
    --gray-1: #c0c0c0;
    --light-gray: #D3D3D3;
    --gray-2: #3e3e42;
    --gray-3: #2d2d30;
    --black-1: #252526;
    --black-2: #1e1e1e;
    --border-radius: 0.3rem;
}
    
/* Font established for rem units */
html {
    font-size: 16px;
}
    
/* Base styles */
body {
    background: var(--light-gray);
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    font-size: 16px;
    color: var(--gray-1);
}
    
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 700;
    margin: 0;
    color: var(--white);
    line-height: 1.25;
}
    
header {
    padding: 4.5%;
    background-color: var(--blue-gray);
}
    
.app-title {
    padding: 0 10px;
    display: flex;
    justify-content: center;
}
    
.app-title h1 {
    font-size: 4rem;
}
    
/* Card styles */
.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1.5% 2% 2% 0;
}
    
.card {
    margin: 2% 2% 0 0;
    border: none;
}
    
.card-header {
    background-color: var(--blue);
}
    
.card-header p {
    color: var(--light-gray);
    font-size: 1.75rem;
}
    
.card-body {
    color: var(--black-2);
}
    
.card-body a {
    color: var(--blue);
    text-decoration: none;
}
`;
};

module.exports = {
    generateCSS
};
