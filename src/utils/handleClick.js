exports.handleClick = () => {
  let btn = document.querySelector("#btn");
  let clearBtn = document.querySelector("#btnC")
  let input = document.querySelector("#filled-secondary");
  let datas = {};
  let isLoading = true;
  const proxy = "https://cors-anywhere.herokuapp.com/";
  if (isLoading === true) {
    btn.textContent = "Retriving data...";
  }else{btn.textContent="Find"}
  
  fetch(
    `${proxy}https://europe-west1-hotel-room-manager.cloudfunctions.net/api/room${input.value}`
  )
    .then(res => {
      return res.json();
      
    })
    .then(data => {
      datas = data;
     
      isLoading = false;
      console.log(datas);
      if(isLoading === false){btn.textContent= "Find"}
      datas.forEach(el => {
        const li = document.createElement("li");
        li.style.color = "black";
        li.setAttribute("class", "roomfinded");
        const ul = document.querySelector("#list");
        ul.appendChild(li);
        clearBtn.addEventListener("click",()=>{
          li.remove();
        })
        
    
        li.textContent =
          "Room " +
          el.num +
          " Beds: " +
          el.beds +
          " Client: " +
          el.occupiedBy +
          " From: " +
          el.occupiedFrom +
          " to: " +
          el.occupiedTo;
      });
    });
};
