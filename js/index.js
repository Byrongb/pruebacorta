import { item_comando } from "./cargar-los-datos.js"
import { item_comando2 } from "./cargar-los-datos.js"
import { item_comando3 } from "./cargar-los-datos.js"
import { item_comando4 } from "./cargar-los-datos.js"
 
function comando1 (){

let caja1 = document.querySelector(".caja1")
let itemList = document.createElement('div')
itemList.innerHTML = item_comando();

caja1.appendChild(itemList)

console.log(itemList)
}
comando1();


function comando2 (){
    let caja = document.getElementById('caja')
    let caja2 = document.querySelector(".caja2")
    let itemList2 = document.createElement('div')
    itemList2.innerHTML = item_comando2();

    caja2.appendChild(itemList2)

    console.log(itemList2)
    }
    comando2();


    function comando3 (){
        let caja = document.getElementById('caja')
        let caja3 = document.querySelector(".caja3")
        let itemList3 = document.createElement('div')
        itemList3.innerHTML = item_comando3();
    
        caja3.appendChild(itemList3)
    
        console.log(itemList3)
        }
        comando3();

        function comando4 (){
            let caja = document.getElementById('caja')
            let caja4 = document.querySelector(".caja4")
            let itemList4 = document.createElement('div')
            itemList4.innerHTML = item_comando4();
        
            caja4.appendChild(itemList4)
        
            console.log(itemList4)
            }
            comando4();