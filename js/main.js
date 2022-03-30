const ElList = document.getElementById('MainList');
const Arrival = document.getElementById('ArriveList');
const Exclusive = document.getElementById('exclusiveList');
const Wishlist = document.getElementById('wishlist');
const Form = document.getElementById('Form');
const FilterForm = document.getElementById('filterForm');
const Search = document.getElementById('SearchInput');
const select = document.getElementById('selectCategory');
const Movie = document.getElementById('movie');
const All = document.getElementById('AllList');
const RightSlide = document.querySelectorAll('.rightSlide');
const LeftSlide = document.querySelectorAll('.leftSlide');
const YearFrom = document.getElementById('YearFrom');
const YearTo = document.getElementById('YearTo');
let Result = document.getElementById('FilterResult');



// FIRST SECTION ADDED -----


let id = 0;



// SECOND SECTION ADDED ----

let newArr = [];
movies.forEach((item) =>{
  if (item.year >= 2018){
    newArr.push(item);
  };
});

newArr.forEach((item, index) =>{
  if (index > 40 && index < 49){
    let li = document.createElement('li');
    Arrival.style.flexWrap = 'nowrap';
    li.className = 'list__item col-3';
    li.innerHTML = `
    <div class="item-inner">
    <div class="img-wrapper">
      <img class="card-img" src="${item.youtubePoster}" alt="card-img-1">
      </div>
    <div class="series-wrapper d-flex justify-content-between align-items-center">
      <p class="series-text m-0">Tv series</p>
      <button class="heart-btn" onclick = "Heart('${item.imdbId}')"><i class='bx bxs-heart'></i></button>
    </div>
    <div class='d-flex justify-content-between'>
    <span class="card-usa">${item.language} <span>${item.year}</span> - Current</span>
      <button type="button" class="btn modal-btn mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">More</button>
      
      <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Movie Description</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class='d-flex'>
         <img class="card-img modal-img me-5" src="${item.youtubePoster}" alt="card-img-1">
          ${item.summary}
         </div>
         <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
         <span class="ms-2">${item.runtime}</span>
         <i class='bx bxs-star'></i>
         <span class='me-3'>${item.imdbRating}</span>
         <p class="card-usa">${item.categories}</p>
         
        </div>
       </div>
      </div>
      </div>
     </div>
    <h3 class="card-stranger">${item.title}</h3>
    <div class="d-flex justify-content-between ">
      <div>
        <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
        <span class="ms-2">${item.runtime}</span>
      </div>
      <div>
        <i class='bx bxs-star'></i>
        <span>${item.imdbRating}</span>
      </div>
      </div>
    <p class="card-usa">${item.categories}</p>
    </div>
    `;
    id++;
    Arrival.appendChild(li);
  }
})


// EXCLUSIVE SECTION ADDED ----

let temp = [];
movies.forEach((item) =>{
  if (item.runtime > 100){
    temp.push(item);
  };
});

temp.forEach((item, index) =>{
  if (index > 80 && index < 89){
    Exclusive.style.flexWrap = 'nowrap';
    let li = document.createElement('li');
    li.className = 'list__item col-3';
    li.innerHTML = `
    <div class="item-inner">
    <div class="img-wrapper">
      <img class="card-img" src="${item.youtubePoster}" alt="card-img-1">
      </div>
    <div class="series-wrapper d-flex justify-content-between align-items-center">
      <p class="series-text m-0">Tv series</p>
      <button class="heart-btn" onclick = "Heart('${item.imdbId}')"><i class='bx bxs-heart'></i></button>
    </div>
    <div class='d-flex justify-content-between'>
    <span class="card-usa">${item.language} <span>${item.year}</span> - Current</span>
      <button type="button" class="btn modal-btn mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">More</button>
      
      <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Movie Description</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class='d-flex'>
         <img class="card-img modal-img me-5" src="${item.youtubePoster}" alt="card-img-1">
          ${item.summary}
         </div>
         <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
         <span class="ms-2">${item.runtime}</span>
         <i class='bx bxs-star'></i>
         <span class='me-3'>${item.imdbRating}</span>
         <p class="card-usa">${item.categories}</p>
         
        </div>
       </div>
      </div>
      </div>
     </div>
    <h3 class="card-stranger">${item.title}</h3>
    <div class="d-flex justify-content-between ">
      <div>
        <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
        <span class="ms-2">${item.runtime}</span>
      </div>
      <div>
        <i class='bx bxs-star'></i>
        <span>${item.imdbRating}</span>
      </div>
      </div>
    <p class="card-usa">${item.categories}</p>
    </div>
    `;
    id++;
    Exclusive.appendChild(li);
  }
})



// WISHLIST PART --------

let wish = [];
function Heart(id){
  movies.forEach((item,index) =>{
    let li = document.createElement('li');
    if (id == item.imdbId){
    li.className = 'list__item wishlist-item';
    li.innerHTML = `
    <div class="item-inner">
    <div class="img-wrapper">
      <img class="card-img" src="${movies[index].youtubePoster}" alt="card-img-1">
      </div>
    <div class="series-wrapper d-flex justify-content-between align-items-center">
      <p class="series-text m-0">Tv series</p>
      <button class="heart-btn"><i class='bx bxs-heart'></i></button>
    </div>
    <div class='d-flex justify-content-between'>
    <span class="card-usa">${movies[index].language} <span>${movies[index].year}</span>-Current</span>
      <button type="button" class="btn remove-btn modal-btn mt-2">Remove</button>
     </div>
    <h3 class="card-stranger">${movies[index].title}</h3>
    <div class="d-flex justify-content-between ">
      <div>
        <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
        <span class="ms-2">${movies[index].runtime}</span>
      </div>
      <div>
        <i class='bx bxs-star'></i>
        <span>${movies[index].imdbRating}</span>
      </div>
      </div>
    <p class="card-usa">${movies[index].categories}</p>
    </div>
    `;
    Wishlist.appendChild(li);
    
  }
})



const removeBtn = document.querySelectorAll('.remove-btn');

removeBtn.forEach(item => {
  item.addEventListener('click', () =>{
    item.parentNode.parentNode.remove();
  })
})
}


// FILTER PART ------


movies.forEach((item,index) =>{
  if (index < 20){
    let cat = item.categories;
    cat.forEach(el =>{
      let option = document.createElement('option');
      option.innerText = el;
      select.append(option);
    })
  }
})




FilterForm.addEventListener('submit', (e) =>{
 e.preventDefault();
 let value = Search.value.toLowerCase();
 let from = YearFrom.value;
 let to = YearTo.value;
 let categ = select.value;
 
 Result.innerHTML = '';

 movies.forEach(el =>{
   let title = el.title.toLowerCase();
   if (title.indexOf(value) != -1 && el.year >= from && el.year <= to){
        let li = document.createElement('li');
        li.className = 'list__item col-3';
        li.innerHTML = `
        <div class="item-inner">
        <div class="img-wrapper">
          <img class="card-img" src="${el.youtubePoster}" alt="card-img-1">
        </div>
        <div class="series-wrapper d-flex justify-content-between align-items-center">
          <p class="series-text m-0">Tv series</p>
          <button class="heart-btn" onclick = "Heart('${el.imdbId}')"><i class='bx bxs-heart'></i></button>
        </div>
        <div class='d-flex justify-content-between'>
        <span class="card-usa">${el.language} <span>${el.year}</span> - Current</span>
    
        <button class="btn modal-btn mt-2"  data-bs-toggle="modal" data-bs-target="#exampleModal${id}">More</button>
          <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Movie Description</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class='d-flex'>
                  <img class="card-img modal-img me-5" src="${el.youtubePoster}" alt="card-img-1">
                  ${el.summary}
                </div>
                 <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
                 <span class="ms-2">${el.runtime}</span>
                 <i class='bx bxs-star'></i>
                 <span class='me-3'>${el.imdbRating}</span>
                 <p class="card-usa">${el.categories}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="card-stranger">${el.title}</h3>
        <div class="d-flex justify-content-between ">
          <div>
            <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
            <span class="ms-2">${el.runtime}</span>
          </div>
          <div>
            <i class='bx bxs-star'></i>
            <span>${el.imdbRating}</span>
          </div>
          </div>
          <p class="card-usa">${el.categories}</p>
      </div>
        `;
        id++;
      Result.appendChild(li);
    }
  })
})






// HERO SEARCH ------

const HeroSearch = document.getElementById('HeroSearch');
const modalUl = document.getElementById('modalUl');

Form.addEventListener('submit', (e) =>{
  e.preventDefault();

  modalUl.innerHTML = `
  <button class='modal-exit'><i class='bx modal-bx bx-x'></i></button>
  `;

  let value = HeroSearch.value.toLowerCase();
  movies.forEach(item =>{
    let title = item.title.toLowerCase();
    if (title.indexOf(value) != -1){
      
        let li = document.createElement('li');
        li.className = 'list__item col-4';
        li.innerHTML = `
        <div class="item-inner">
        <div class="img-wrapper">
          <img class="card-img" src="${item.youtubePoster}" alt="card-img-1">
          </div>
        <div class="series-wrapper d-flex justify-content-between align-items-center">
          <p class="series-text m-0">Tv series</p>
          <button class="heart-btn" onclick = "Heart('${item.imdbId}')"><i class='bx bxs-heart'></i></button>
        </div>
        <div class='d-flex justify-content-between'>
        <span class="card-usa">${item.language} <span>${item.year}</span> - Current</span>
          <button type="button" class="btn modal-btn mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">More</button>
          
          <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Movie Description</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class='d-flex'>
             <img class="card-img modal-img me-5" src="${item.youtubePoster}" alt="card-img-1">
              ${item.summary}
             </div>
             <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
             <span class="ms-2">${item.runtime}</span>
             <i class='bx bxs-star'></i>
             <span class='me-3'>${item.imdbRating}</span>
             <p class="card-usa">${item.categories}</p>
             
            </div>
           </div>
          </div>
          </div>
         </div>
        <h3 class="card-stranger">${item.title}</h3>
        <div class="d-flex justify-content-between ">
          <div>
            <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
            <span class="ms-2">${item.runtime}</span>
          </div>
          <div>
            <i class='bx bxs-star'></i>
            <span>${item.imdbRating}</span>
          </div>
          </div>
        <p class="card-usa">${item.categories}</p>
        </div>
        `;
        id++;
    
        modalUl.appendChild(li);
        modalUl.style.top = '80px';
        modalUl.style.transition = 'all 0.5s ease';
        
        const ModalExit = document.querySelector('.modal-exit');
        ModalExit.addEventListener('click', ()=>{
          modalUl.style.top = '-600px';
          li.innerHTML = '';
          modalUl.style.transition = 'none';
        })
    }
    HeroSearch.value = '';
  })
});



// SLIDER PART ------

let listArray = [];

  movies.forEach((item, index) =>{
    if (index < 8){
      let li = document.createElement('li');
      ElList.style.flexWrap = 'nowrap';
      li.className = 'list__item col-3';
      li.innerHTML = `
      <div class="item-inner">
      <div class="img-wrapper">
        <img class="card-img" src="${item.youtubePoster}" alt="card-img-1">
        </div>
      <div class="series-wrapper d-flex justify-content-between align-items-center">
        <p class="series-text m-0">Tv series</p>
        <button class="heart-btn" onclick = "Heart('${item.imdbId}')"><i class='bx bxs-heart'></i></button>
      </div>
      <div class='d-flex justify-content-between'>
      <span class="card-usa">${item.language} <span>${item.year}</span> - Current</span>
        <button type="button" class="btn modal-btn mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal${id}">More</button>
        
        <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Movie Description</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class='d-flex'>
           <img class="card-img modal-img me-5" src="${item.youtubePoster}" alt="card-img-1">
            ${item.summary}
           </div>
           <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
           <span class="ms-2">${item.runtime}</span>
           <i class='bx bxs-star'></i>
           <span class='me-3'>${item.imdbRating}</span>
           <p class="card-usa">${item.categories}</p>
           
          </div>
         </div>
        </div>
        </div>
       </div>
      <h3 class="card-stranger">${item.title}</h3>
      <div class="d-flex justify-content-between ">
        <div>
          <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
          <span class="ms-2">${item.runtime}</span>
        </div>
        <div>
          <i class='bx bxs-star'></i>
          <span>${item.imdbRating}</span>
        </div>
        </div>
      <p class="card-usa">${item.categories}</p>
      </div>
      `;
      id++;
      listArray.push(li);
    }
  })

  function addItem(){
    listArray.forEach(el =>{
      ElList.appendChild(el);
    })
  }
  addItem();

 


let firstCount = 0;

RightSlide.forEach((item,index) =>{
  item.addEventListener('click', ()=>{
    if (index == 0){
      let c = listArray[firstCount];
      listArray[firstCount] = listArray[firstCount +1];
      listArray[listArray.length] = c;
      firstCount++;
      addItem();
    }
  })
})


movies.forEach((item, index) =>{
  if (index > 200 && index < 229){
    let li = document.createElement('li');
    li.className = 'list__item col-3';
    li.innerHTML = `
    <div class="item-inner">
    <div class="img-wrapper">
      <img class="card-img" src="${item.youtubePoster}" alt="card-img-1">
    </div>
    <div class="series-wrapper d-flex justify-content-between align-items-center">
      <p class="series-text m-0">Tv series</p>
      <button class="heart-btn" onclick = "Heart('${item.imdbId}')"><i class='bx bxs-heart'></i></button>
    </div>
    <div class='d-flex justify-content-between'>
    <span class="card-usa">${item.language} <span>${item.year}</span> - Current</span>

    <button class="btn modal-btn mt-2"  data-bs-toggle="modal" data-bs-target="#exampleModal${id}">More</button>
      <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Movie Description</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class='d-flex'>
              <img class="card-img modal-img me-5" src="${item.youtubePoster}" alt="card-img-1">
              ${item.summary}
            </div>
             <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
             <span class="ms-2">${item.runtime}</span>
             <i class='bx bxs-star'></i>
             <span class='me-3'>${item.imdbRating}</span>
             <p class="card-usa">${item.categories}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 class="card-stranger">${item.title}</h3>
    <div class="d-flex justify-content-between ">
      <div>
        <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
        <span class="ms-2">${item.runtime}</span>
      </div>
      <div>
        <i class='bx bxs-star'></i>
        <span>${item.imdbRating}</span>
      </div>
      </div>
      <p class="card-usa">${item.categories}</p>
  </div>
    `;
    id++;
    All.appendChild(li);
  }
  
})




let heart = document.querySelectorAll('.heart-btn');
heart.forEach(item =>{
   item.addEventListener('click', (e) =>{
     e.target.style.color = '#be123c';
   })
})