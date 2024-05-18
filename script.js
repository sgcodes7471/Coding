
//this code controls the action of the hamburger menu when it appears n mobiles/tablets
const hamburger = document.querySelector('.hamburger-btn')
const navbar =document.querySelector('.hamburger-menu')
let drop=false
hamburger.addEventListener('click' ,  ()=>{
    drop=!drop;
    if(drop){
        navbar.style.display = "flex"
        navbar.classList.add('hamburger-drop')
        navbar.classList.remove('hamburger-up')
    }else{
        navbar.classList.add('hamburger-up')
        navbar.classList.remove('hamburger-drop')
    }
})


//this controlls the clouds and moon in the weather bar
const weather = document.querySelector('.bar-weather')
weather.addEventListener('mouseenter' , ()=>{
    document.getElementById('badal').style.animation='moveLeft 0.8s   1  ease-out';
    document.getElementById('chaand').style.animation='moveRight 0.8s   1  ease-out';
})
weather.addEventListener('mouseleave' , ()=>{
    document.getElementById('badal').style.animation='';
    document.getElementById('chaand').style.animation='';
})


//this one controls the search bar appearence. The search bar appears puting the mouse on the serach icon but dissapears automatically if nothing is written within 10s
const searchBar = document.querySelector('#search-bar')
const searchBtn = document.querySelector('.search-icon')

const  searchAppear = ()=>{
        searchBar.classList.add('input-slider')
        setInterval( function(){if(searchBar.value == ""){
            searchDisappear(); 
        }
    }, 10000)
}
const  searchDisappear = ()=>{
        searchBar.classList.remove('input-slider')
}


//this brings in thee right section news in mobiles
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
        sliderBtn.style.right="20px";
        svgBtn.innerHTML =  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>`
    }
}



const Ncard = (headline , author , date , image , content)=>{
    return ` 
    <div class="cross-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
        </svg>
    </div>
    <div class="newBox-title-wrapper">
        <div class="newBox-headline">${headline}</div>
        <div class="newBox-author">${author}</div>   
        <div class="newBox-date">${date}</div> 
    </div>
            <div class="newBox-img">
            <img src="${image}" alt="Loading...">
            </div>           
            <div class="newBox-content">${content}</div>
`
}

const featureNewsCard = document.querySelectorAll('.featured-newsCard')
const newNewsCard = document.querySelector('.newBox-outer-wrapper')
featureNewsCard.forEach(card =>{
    card.addEventListener('click' , ()=>{
        const newCard = document.createElement('div')
        newCard.classList.add('newBox')
        newCard.innerHTML = Ncard(card.children[3].innerHTML , card.children[4].innerHTML , card.children[5].innerHTML ,card.children[1].currentSrc ,card.children[0].innerHTML)
        newNewsCard.appendChild(newCard)
        console.log(card.children[1].currentSrc);
        const crossBtn = newCard.firstElementChild
        crossBtn.addEventListener('click' , ()=>{
            newCard.remove()
        })
    })
})
