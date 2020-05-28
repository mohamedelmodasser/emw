
function nav() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("extranav").style.opacity = "1";
        document.getElementById("extranav").style.transition = "0.25s ease";
    }else{
        document.getElementById("extranav").style.opacity = "0";
        document.getElementById("extranav").style.transition = "0.25s ease";
        
    }
}
window.onscroll = function(){
    nav();
}