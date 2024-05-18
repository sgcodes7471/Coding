const hamburger = document.querySelector('.hamburger-btn')
const navbar =document.querySelector('.hamburger-menu')
let drop=false
hamburger.addEventListener('click' , async ()=>{
    drop=!drop;
    if(drop){
        navbar.style.display = "flex"
        navbar.classList.add('hamburger-drop')
        navbar.classList.remove('hamburger-up')
    }else{
        navbar.classList.add('hamburger-up')
        navbar.classList.remove('hamburger-drop')
        // navbar.style.display="none"
    }
})



const weather = document.querySelector('.bar-weather')
weather.addEventListener('mouseenter' , ()=>{
    document.getElementById('badal').style.animation='moveLeft 0.8s   1  ease-out';
    document.getElementById('chaand').style.animation='moveRight 0.8s   1  ease-out';
})
weather.addEventListener('mouseleave' , ()=>{
    document.getElementById('badal').style.animation='';
    document.getElementById('chaand').style.animation='';
})



const searchBar = document.querySelector('#search-bar')
const searchBtn = document.querySelector('.search-icon')

const  searchAppear = ()=>{
        searchBar.classList.add('input-slider')
       console.log(searchBar.value)
        setInterval( function(){if(searchBar.value == ""){
            searchDisappear(); 
        }
    }, 10000)
}
const  searchDisappear = ()=>{
        searchBar.classList.remove('input-slider')
}



const commonNews= document.querySelector('.common-news-wrapper')
const sliderBtn = document.querySelector('.common-news-slider')
const svgBtn = document.querySelector('.slider-btn')
const open =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
</svg>`
const close = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
</svg>`
let slide = false;
const newsSlider = ()=>{
    slide = !slide
    if(slide){
        commonNews.classList.add('common-news-extra-class')
        sliderBtn.style.right="94vw";
        svgBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>`

    }else{
        commonNews.classList.remove('common-news-extra-class')
        sliderBtn.style.right="0px";
        svgBtn.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>`
    }
}