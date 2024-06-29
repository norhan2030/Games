import {Game} from '../js/detailes.js'


let mmorpgRow=document.querySelector("#mmorpg")
let pixelRow=document.querySelector("#pixel")
let superheroRow=document.querySelector("#superhero")
let permadeathRow=document.querySelector("#permadeath")
let sailingRow=document.querySelector("#sailing")
let shooterRow=document.querySelector("#shooter")
let mmorpgBtn=document.querySelector("#nav-MMORPG-tab")
let pixelBtn=document.querySelector("#nav-PIXEL-tab")
let superheroBtn=document.querySelector("#nav-SUPERHERO-tab")
let permadeathBtn=document.querySelector("#nav-PERMADEATH-tab")
let shooterBtn=document.querySelector("#nav-SHOOTER-tab")
let sailingBtn=document.querySelector("#nav-SAILING-tab")
let resultLenght=0

const navbar = document.querySelector('.fixed-top');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-colored');
    } else {
        navbar.classList.remove('nav-colored');
    }
};






let category="mmorpg"

async function display(cat){
  let carton=""
  let x=new Game();
  let result=await x.data(cat)
  resultLenght=result.length
// console.log(resultLenght)

// console.log(await x.details("452"))
// console.log(result)
  for (let i = 0; i < result.length; i++) {
    carton +=`
    <div class="col-md-4 p-3 coll rounded-4 game pb-0 ">                 
                        <div class="">
                            <img src="${result[i].thumbnail}" class="w-100 rounded-4 game_img" id="img" alt="">
    
                            </div>
                            <div class=""> 
                                <div class="row p-3">
                                    <div class="col-md-8 ">
                                        <h4 class="text-white">${result[i].title}</h4>
                                        <h6 class="text-color">${result[i].short_description.slice(0,30)}</h6>
                                    </div>
                                    <div class="col-md-4 text-end pe-0">
                                      <button class="btn game_btn" >Free</button>
    
                                    </div>
                                    <div class="col-md-12 game_footer pt-2">
                                        <span class="me-3"><i class="fa-solid fa-hurricane pe-1"></i> ${result[i].genre}</span> <span><i class="fa-brands fa-windows px-1-"></i> ${result[i].platform}</span> 
                                    </div>
                                    <div class="col-md-12 text-center game_btn w-100 mt-3 py-1" >
                                    <a type="button" class=" text-white text-decoration-none pointer-event w-100"  data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="w-100  px-5" idd='${result[i].id}'>Show Details</span></a>
                                    </div>
                                </div>
                            </div>
                </div>
    
    
    `
    
  }
  
  if(cat=="mmorpg"){
    mmorpgRow.innerHTML=carton
  }else if(cat=="pixel"){
    pixelRow.innerHTML=carton
  }else if(cat=="superhero"){
    superheroRow.innerHTML=carton
  }else if(cat=="permadeath"){
    permadeathRow.innerHTML=carton
  }else if(cat=="sailing"){
    sailingRow.innerHTML=carton
  }else {
    shooterRow.innerHTML=carton

  }
 
}

display("mmorpg")












mmorpgBtn.addEventListener("click",function(){
  display("mmorpg")
  category="mmorpg"
})
pixelBtn.addEventListener("click",function(){
  display("pixel")
  category="pixel"

})
permadeathBtn.addEventListener("click",function(){
  display("permadeath")
  category="permadeath"
  
})
sailingBtn.addEventListener("click",function(){
  display("sailing")
  category="sailing"

})
shooterBtn.addEventListener("click",function(){
  display("shooter")
  category="shooter"

})
superheroBtn.addEventListener("click",function(){
 display("superhero")
 category="superhero"

})


let showingId=0
window.addEventListener("click",async function(e){
  if(e.target.getAttribute('idd') != null){
    showingId=e.target.getAttribute('idd')
    console.log(showingId)
    await idd(showingId)
  }
})

async function idd(id){
  await display(category)
  let x=new Game();
  let result=await x.details(showingId)
console.log(result)

let carton=`
      <div class="col-md-4">
          <img src="${result.thumbnail}" class="w-100" alt="">
      </div>
      <div class="col-md-8">
          <h3>Title: Genshin Impact</h3>
          <h4>Platform: ${result.platform}</h4>
          <h4>Status: ${result.status}</h4>
          <p>
              ${result.description} 
          </p>
                    <a href="${result.freetogame_profile_url}" target="_blank"><button class="btn game_btn" >Show Game</button></a>

          
      </div>


`
  document.querySelector('.carton_detailes').innerHTML=carton

}
// idd(1)

// de()