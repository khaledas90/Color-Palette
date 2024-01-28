

var container = document.querySelector(".container");
var Refresh = document.querySelector(".Refresh-btn");


let countOfPatel = 12

let GeneratePatel = function(){
  container.innerHTML = ""
   for( let i = 0 ; i < countOfPatel ; i++){
        
  // to generate code color
 let  randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
 randomColor = `#${randomColor.padStart(6 , "0")}`;
 
// to create list in page
 let list = document.createElement("li");
 list.classList.add("color")
 list.innerHTML = `
 <div class="box" style="background:${randomColor}"></div>
     <span class="value-color">${randomColor}</span>
 
 `
 list.addEventListener("click" , ()=> copyColor(list , randomColor ))
 container.append(list)
   }
}
GeneratePatel()

const copyColor  = (e , vc )=>{
    
    let colorElement = e.querySelector(".value-color");

    navigator.clipboard.writeText(vc).then(()=>{
      colorElement.innerText = "Copied"
      setTimeout(() => colorElement.innerText = vc , 1000)
    })
    

}
Refresh.addEventListener("click" , GeneratePatel);