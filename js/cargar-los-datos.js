import { data } from "./data.js";


export function item_comando (){
    let item1 = ` 
<div class="todoitem0">
    <p>
        ${data[0].titulo}
       
    </p>
</div>
<div class="todoitem0m">
    <p>
        
        ${data[0].mensaje}
    </p>
</div>`; 

return item1;

}

export function item_comando2 (){
    let item1 = ` 
    <div class="todoitem0">
        <p>
            ${data[1].titulo}
           
        </p>
    </div>
    <div class="todoitem0m">
        <p>
            
            ${data[1].mensaje}
        </p>
    </div>`; 
return item1;

}

export function item_comando3 (){
    let item1 = ` 
    <div class="todoitem0">
        <p>
            ${data[2].titulo}
           
        </p>
    </div>
    <div class="todoitem0m">
        <p>
            
            ${data[2].mensaje}
        </p>
    </div>`; 

return item1;

}

export function item_comando4 (){
    let item1 = ` 
    <div class="todoitem0">
        <p>
            ${data[3].titulo}
           
        </p>
    </div>
    <div class="todoitem0m">
        <p>
            
            ${data[3].mensaje}
        </p>
    </div>`; 

return item1;

}