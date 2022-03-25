const ElList = document.getElementById('MainList');
const Arrival = document.getElementById('ArriveList');
const Wishlist = document.getElementById('wishlist');

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
      <button class="heart-btn"><i class='bx bxs-heart'></i></button>
    </div>
    <div class='d-flex justify-content-between'>
    <span class="card-usa">${item.language} <span>${item.year}</span> - Current</span>

    <!-- Button trigger modal -->


    <button type="button" class="btn modal-btn mt-2"  data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Movie Description</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${item.summary}
            </div>
            <div class="modal-footer">
              
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
    ElList.appendChild(li);
  }
})


let HeartBtn = document.querySelectorAll('.heart-btn');
HeartBtn.forEach((item) =>{
  item.addEventListener('click', (e) =>{
    e.target.style.color = '#be123c';
    let li = document.createElement('li');
    li.className = 'list__item col-3';
    li.innerHTML = `
    <div class="item-inner">
    <div class="img-wrapper">
      <img class="card-img" src="${item.youtubePoster}" alt="card-img-1">
    </div>
    <div class="series-wrapper d-flex justify-content-between align-items-center">
      <p class="series-text m-0">Tv series</p>
      <button class="heart-btn"><i class='bx bxs-heart'></i></button>
    </div>
    <div class='d-flex justify-content-between'>
    <span class="card-usa">${item.language} <span>${item.year}</span> - Current</span>

   

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

    Wishlist.appendChild(li);
  })
})




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
      <button class="heart-btn"><i class='bx bxs-heart'></i></button>
    </div>
    <div class='d-flex justify-content-between'>
    <span class="card-usa">${item.language} <span>${item.year}</span> - Current</span>

    <!-- Button trigger modal -->

    
      <button type="button" class="btn modal-btn mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Movie Description</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        ${item.summary}
        </div>
            <div class="modal-footer">
              
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
    
    Arrival.appendChild(li);
  }
})
let btn = document.querySelectorAll('.heart-btn');

btn.forEach((item) =>{
  item.addEventListener('click', (e) =>{
    e.target.style.color = '#be123c';
  })
})

