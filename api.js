const dateIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
</svg>`
const months = ['January' , 'February' , 'March' , 'April' ,'May' , 'June' , 'July' ,'August' , 'September' ,'October' , 'November' ,'December']
const Fnews= (id , image , type , author , date ,content ,headline)=>{
    date=months[parseInt(date.substring(6,7) , 10)] + ' '+ date.substring(8,10)+', '+date.substring(0,4) ;
    return ` <div class="featured-newsCard-content" id="featured-newsCard-content-${id}">
    ${content}
    </div>
    <img src="${image}" alt="">
    <div class="featured-newsCard-tags-wrapper" id="featured-newsCard-tags-wrapper-${id}">
        <p class="featured-news-tags">${type}</p>
        <p class="featured-news-tags">Featured</p>
    </div>
    <div class="featured-news-heading" id="featured-news-heading-${id}">${headline}</div>
    <div class="featured-news-author" id="featured-news-author-${id}">By ${author}</div>
    <div class="featured-news-date" id="featured-news-date-${id}">${dateIcon}${date}</div>`
}

const Cnews = (id , image , type , author , date ,content , headline)=>{
  
    date=months[parseInt(date.substring(6,7) , 10)] + ' '+ date.substring(8,10)+', '+date.substring(0,4) ;
    return `<div class="common-newsCard-visible">
    <div class="common-newsCard-img">
      <img src="${image}" alt="">
    </div>
    <div class="common-newsCard-info">
      <div class="common-newsCard-heading">${headline.substring(0,40)+"..."}</div>
      <div class="common-newsCard-date">${dateIcon}${date}</div>
    </div>
</div>
<div class="common-newsCard-hidden">
<div class="common-newsCard-author">By ${author}</div>
      <div class="common-newsCard-fullheadline">${headline}</div>
      <div class="common-newsCard-content">${content}</div>
</div>
`
}

const putNews=(data)=>{
    const featuredNewsCard = document.querySelectorAll('.featured-newsCard')
    const commonNewsWrapper = document.querySelector('.common-news-scroll')
    let index=0;
    data.forEach(e => {
        if(index<4)
            featuredNewsCard[index].innerHTML=Fnews(e.id, e.image  , e.type , e.author , e.date,e.content , e.headline ) 
        else{
            let commonNewsCard = document.createElement('div')
            commonNewsCard.classList.add('common-newsCard');
            commonNewsCard.innerHTML=Cnews(e.id  , e.image  , e.type , e.author , e.date ,e.content ,e.headline)
            commonNewsWrapper.appendChild(commonNewsCard)
            commonNewsCard.addEventListener('mouseenter' , ()=>{
              commonNewsCard.lastElementChild.classList.add('card-visible')
            })
            commonNewsCard.addEventListener('mouseleave' , ()=>{
              commonNewsCard.lastElementChild.classList.remove('card-visible')
            })
            commonNewsCard.addEventListener('click' , ()=>{
              if(commonNewsCard.lastElementChild.classList.length < 2)
              commonNewsCard.lastElementChild.classList.add('card-visible')
            else
            commonNewsCard.lastElementChild.classList.remove('card-visible')
            })
            

        }   
        index++;
    });
}

 
const fetchData = async ()=>{
  try{
    const reponse = await fetch('https://coding-week-2024-api.onrender.com/api/data')
    const data = await reponse.json();
    const ArrayData = data;
    putNews(ArrayData)
  }catch(error){
    alert("error in fetching data \n" , error)
  }
}

fetchData()



