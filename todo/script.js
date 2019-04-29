let item = document.getElementById('item');
let list = document.getElementById('list');
const submit = document.querySelector('.submit'),
      remove = document.querySelectorAll('.remove'),
      clr = document.querySelector('.clear'),
      container = document.querySelector('.container');


addItem = function(e) {
    let stored = localStorage.getItem('item');
    let li_item = JSON.parse(stored);
    
    if (item.value != ''  && li_item != null) {
        li_item.push(item.value);
        stored = JSON.stringify(li_item);
    } else if (item.value != ''  && li_item == null) {
        li_item = [item.value];
        stored = JSON.stringify(li_item);
    }
    localStorage.setItem('item', stored);
    document.location.reload(false);
    
}

removeItem = function(e) {
    
    if (e.target.classList.value == 'remove') {
        let a = e.target.parentElement.textContent;
        let b = a.slice(0, a.length-1);
        console.log(b);
        
        let stored = localStorage.getItem('item');
        let li_item = JSON.parse(stored);
        
        let i = li_item.indexOf(b);

        if (i > -1) {
            li_item.splice(i, 1);
        }

         stored = JSON.stringify(li_item);
          localStorage.setItem('item', stored);
         document.location.reload(false);
    }
    
}

clear = function() {
    localStorage.removeItem('item');
    document.location.reload(false);
}

showItem = function() {
    let stored = localStorage.getItem('item');
    let li_item = JSON.parse(stored);
    if (stored != null) {
        for (let i = 0; i < li_item.length; i++) {
            const a = li_item[i];
            let li = document.createElement('LI');
            let btn = document.createElement('BUTTON');
            
            let list_item = document.createTextNode(a);
            let remove_symbol = document.createTextNode('X');
            btn.setAttribute('class', 'remove');
            li.setAttribute('class', 'li');
            btn.appendChild(remove_symbol);
            li.appendChild(list_item);
            li.appendChild(btn);
            list.appendChild(li);
        }
    }
    
}

submit.addEventListener('click', addItem);

container.addEventListener('click', removeItem);

clr.addEventListener('click', clear);


showItem();