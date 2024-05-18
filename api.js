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

const data=[
    {
      "id": 1,
      "type": "cultural",
      "headline": "India won the international award for the best cultural country",
      "date": "2021-06-01",
      "image": "https://cdn.pixabay.com/photo/2017/03/27/12/45/woman-2178480_1280.jpg",
      "author": "John Doe",
      "content": "India has been awarded the best cultural country award by the International Cultural Organization for its rich and diverse cultural heritage."
    },
    {
      "id": 2,
      "type": "historical",
      "headline": "Lost texts from Mount Vesuvius eruption deciphered with new AI",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2014/01/18/10/14/vaulted-cellar-247391_1280.jpg",
      "author": "Jane Smith",
      "content": "New AI techniques are helping researchers read previously illegible texts carbonized after the eruption of Mount Vesuvius in A.D. 79, revealing new historical insights."
    },
    {
      "id": 3,
      "type": "historical",
      "headline": "Gobekli Tepe reveals new 11,000-year-old finds",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2023/03/28/18/28/hieroglyph-7883891_1280.jpg",
      "author": "Ali Khan",
      "content": "Recent excavations at Gobekli Tepe have uncovered more ancient artifacts, including statues and carvings, dating back 11,000 years, offering a glimpse into early human civilization."
    },
    {
      "id": 4,
      "type": "lifestyle",
      "headline": "The London National Gallery celebrates 200 years",
      "date": "2024-05-08",
      "image": "https://cdn.pixabay.com/photo/2017/07/24/08/19/national-gallery-2533907_1280.jpg",
      "author": "Emily Clark",
      "content": "The London National Gallery is celebrating its bicentennial with special exhibitions and events, reflecting on its history and looking towards future innovations in public outreach."
    },
    {
      "id": 5,
      "type": "lifestyle",
      "headline": "University students use technology to restore historic buildings in Hawaii",
      "date": "2024-05-06",
      "image": "https://cdn.pixabay.com/photo/2020/05/18/22/18/university-5188610_1280.jpg",
      "author": "Michael Lee",
      "content": "Students at the University of Hawaii are employing cutting-edge technology to create digital twins of historic buildings damaged in wildfires, preserving them for future generations."
    },
    {
      "id": 6,
      "type": "food",
      "headline": "Exploring the culinary heritage of Armenia",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2018/10/02/12/12/armenia-3718710_1280.jpg",
      "author": "Nina Petrosyan",
      "content": "A deep dive into Armenian cuisine reveals a rich tradition of flavors and techniques, with dishes like khorovats and dolma highlighting the countrys culinary diversity."
    },
    {
      "id": 7,
      "type": "food",
      "headline": "The rise of sustainable seafood: Benefits and challenges",
      "date": "2024-05-05",
      "image": "https://cdn.pixabay.com/photo/2020/05/31/19/53/light-bulb-5244001_1280.jpg",
      "author": "Carlos Rodriguez",
      "content": "Sustainable seafood is gaining popularity as consumers become more environmentally conscious. This article explores the benefits and challenges of this trend."
    },
    {
      "id": 8,
      "type": "science",
      "headline": "Mysterious L-shaped structure discovered near Giza Pyramids",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2019/01/24/21/27/pyramids-3953368_1280.jpg",
      "author": "Laura Thompson",
      "content": "Archaeologists have uncovered a 4,500-year-old L-shaped structure near the Great Pyramid of Giza, shedding new light on ancient Egyptian architecture."
    },
    {
      "id": 9,
      "type": "science",
      "headline": "New insights into Homo naledi burial practices",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2017/04/19/14/14/homo-erectus-2242425_1280.jpg",
      "author": "David Brown",
      "content": "Recent studies suggest that Homo naledi, a species of early hominids, might have buried their dead, providing new insights into the evolution of burial practices."
    },
    {
      "id": 10,
      "type": "science",
      "headline": "AI making 2,000-year-old scrolls readable again",
      "date": "2024-05-02",
      "image": "https://cdn.pixabay.com/photo/2012/10/26/01/19/papyrus-63004_1280.jpg",
      "author": "Sophia Li",
      "content": "Innovative AI technology is helping researchers read ancient scrolls that were previously unreadable, unlocking mysteries from thousands of years ago."
    }
  ]
// putNews(data)
 
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



