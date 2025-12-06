const styleSwitch = document.getElementById('switch-mode')
// const backgroundColor = document.getElementById('body-wrapper')
// const contentBoxColor = document.getElementsByClassName('content-box')
// const buttonColor = document.getElementsByClassName('send-btn')
// const footerColor = document.getElementsByClassName('footer')

let darkTitle = '<span id="format-title">Dark 🌙</span>'
let lightTitle = '<span id="format-title">Light ☀️</span>'


let isDark = true;

// document.documentElement.style.setProperty('', '');

styleSwitch.addEventListener('click', () => {
    if (isDark) {
        // setting dark mode
        styleSwitch.innerHTML = darkTitle;
        document.documentElement.style.setProperty('--background-color', '#384959');
        document.documentElement.style.setProperty('--text-color', '#FFFDF5'); 
        document.documentElement.style.setProperty('--title-shadow', '0.1px 0.2px 0.3px hsl(0deg 0% 71% / 0.28), 0.4px 0.7px 0.9px -1.2px hsl(0deg 0% 71% / 0.29), 1.3px 2.6px 3.3px -2.4px hsl(0deg 0% 71% / 0.3)');
        document.documentElement.style.setProperty('--content-box-color', '#576879');
        document.documentElement.style.setProperty('--button-background-color', '#d65108');
        document.documentElement.style.setProperty('--footer-background-color', '#023047');
        document.documentElement.style.setProperty('--footer-text-color', '#FFFDF5');
        document.documentElement.style.setProperty('--shadow-elevation-medium-dark', '0.3px 0.5px 0.7px hsl(221deg 77% 5% / 0.36), 0.8px 1.6px 2px -0.8px hsl(221deg 77% 5% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl(221deg 77% 5% / 0.36), 5px 10px 12.6px -2.5px hsl(221deg 77% 5% / 0.36)');
        isDark = false
    } else {
        // setting light mode
        styleSwitch.innerHTML = lightTitle;
        document.documentElement.style.setProperty('--background-color', '#efefef');
        document.documentElement.style.setProperty('--text-color', '#080d21');
        document.documentElement.style.setProperty('--title-shadow', '0.1px 0.2px 0.3px hsl(0deg 0% 71% / 0.28), 0.4px 0.7px 0.9px -1.2px hsl(0deg 0% 71% / 0.29), 1.3px 2.6px 3.3px -2.4px hsl(0deg 0% 71% / 0.3)');
        document.documentElement.style.setProperty('--content-box-color', '#fcf9fa');
        document.documentElement.style.setProperty('--button-background-color', '#93032e');
        document.documentElement.style.setProperty('--footer-background-color', '#ACC8E5');
        document.documentElement.style.setProperty('--footer-text-color', '#112A46');
        document.documentElement.style.setProperty('--shadow-elevation-medium-light', '0.3px 0.5px 0.7px hsl(0deg 0% 52% / 0.36), 0.8px 1.6px 2px -0.8px hsl(0deg 0% 52% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl(0deg 0% 52% / 0.36), 5px 10px 12.6px -2.5px hsl(0deg 0% 52% / 0.36)');

        isDark = true;
    }
});

