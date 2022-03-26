const ElList = document.getElementById('MainList');
const Arrival = document.getElementById('ArriveList');
const Wishlist = document.getElementById('wishlist');
const LeftSlide = document.getElementById('LefSlider');
const Form = document.getElementById('Form');
const Search = document.getElementById('SearchInput');


// FIRST SECTION ADDED -----


let id = 0;
movies.forEach((item, index) =>{
  if (index > 5 && index < 10){
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
    ElList.appendChild(li);
  }
})


// SECOND SECTION ADDED ----

let newArr = [];
movies.forEach((item) =>{
  if (item.year >= 2018){
    newArr.push(item);
  };
});

newArr.forEach((item, index) =>{
  if (index > 20 && index < 25){
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
    Arrival.appendChild(li);
  }
})


// WISHLIST PART --------

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

const Title = document.getElementById('MovieTitle');
const secondTitle = document.getElementById('secondTitle');
const Hero = document.getElementById('hero');

Search.addEventListener('keyup', filter);

function filter(e){
  let value = e.target.value.toLowerCase();
  let listItem = ElList.getElementsByTagName('li');
  let secondList = Arrival.getElementsByTagName('li');

  for (let i = 0; i < listItem.length; i++){
    let itemName = listItem[i].innerText;
    if (itemName.toLocaleLowerCase().indexOf(value) != -1){
      secondTitle.className = 'd-flex justify-content-between mb-5';
      listItem[i].style.display = 'block';
    }
    else{
      listItem[i].style.display = 'none';
      secondTitle.className = 'd-none';

    }
  }
  for (let i = 0; i < secondList.length; i++){
    let itemName = secondList[i].innerText;
    if (itemName.toLocaleLowerCase().indexOf(value) != -1){
      Title.className = 'd-flex justify-content-between mb-5';
      secondList[i].style.display = 'block';
    }
    else{
      secondList[i].style.display = 'none';
      Title.className = 'd-none';
    }
  }
}
    

// HERO SEARCH ------

const HeroSearch = document.getElementById('HeroSearch');
const modalUl = document.getElementById('modalUl');

Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let value = HeroSearch.value.toLowerCase();
  movies.forEach(item =>{
    if (value == item.title.toLowerCase()){
      modalUl.innerHTML = `
      <button class='modal-exit'><i class='bx modal-bx bx-x'></i></button>
      `;
      let li = document.createElement('li');
      li.className = ('list-item');
      li.innerHTML = `
      <div class="item-inner d-flex">
        <div class="img-wrapper">
          <img class="card-img" src="${item.youtubePoster}" alt="card-img-1">
        </div>
        <div class="series-wrapper d-flex justify-content-between align-items-center">
          <p class="series-text m-0">Tv series</p>
          <button class="heart-btn mt-2 modal-heart" onclick = "Heart('${item.imdbId}')"><i class='bx bxs-heart'></i></button>
        </div>
        <div class='ms-4'>
        <span class="card-usa modal-usa">${item.language} <span>${item.year}</span> - Current</span>
        <h3 class="card-stranger">${item.title}</h3>
        <img src="img/card-small-img.svg" alt="card-img" width="35" height="17">
        <span class="ms-2">${item.runtime}</span>
        <i class='bx bxs-star'></i>
        <span>${item.imdbRating}</span>
        <div>
        <p class="card-usa modal-category">${item.categories}</p>
        </div>
        <a class='hero-watch-link modal-watch' href='#'>Watch Movie</a>
        </div>
        
      `;
      modalUl.appendChild(li);
    
      const ModalExit = document.querySelector('.modal-exit');
     
      modalUl.style.top = '80px';
      modalUl.style.transition = 'all 0.5s ease';
     
      ModalExit.addEventListener('click', ()=>{
        modalUl.style.top = '-500px';
        li.innerHTML = '';
        modalUl.style.transition = 'none';
      
      })
    }
  })

  HeroSearch.value = '';
});

