 window.addEventListener('DOMContentLoaded', (event) => {

    const switchInput = document.querySelector('header label input');
    var currentTheme = localStorage.getItem('theme');
    const switch_theme_btn = document.querySelector('.header_right label .icon_theme_container');
   

   

    if (!currentTheme) {
    //    console.log('no theme localStorage')
       localStorage.setItem('theme', 'light');
       currentTheme = localStorage.getItem('theme');

    document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        if(currentTheme === 'dark') {
            switchInput.checked = true;
        }
    document.documentElement.setAttribute('data-theme', currentTheme);

    }








switch_theme_btn.onclick = (event) => {
  
    if(currentTheme === "light") {
        changeThemeDark();
        
    }else {
        changeThemeLight();
    }

}

var changeThemeDark = () => {
    // console.log('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
   
    currentTheme = "dark";

}

    
var changeThemeLight = () => {
    // console.log('light')
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    currentTheme = "light";
}












});