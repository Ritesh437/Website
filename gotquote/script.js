
const input = document.getElementById('input-s');
const fact_p = document.getElementById('fact-p');
const fact = document.querySelector('.fact');
const btn = document.getElementById('btn');


// AJAX method

// const getFact = (e) => {
//     let value = e.target.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `http://numbersapi.com/${value}`);

//     xhr.onload = function() {
//         if(this.status == 200 && value != '') {
//             fact.style.display = 'block';
//             fact_p.innerText = this.responseText;
//         }else {
//             fact.style.display = 'none';
//         }
//     }
//     xhr.send();
// }

// AJAX method


// FETCH method

const showData = (data) => {
    data = JSON.parse(data);
    fact_p.innerText = data.quote;
}

const getFact = (e) => {
    let value = input.value;

    fetch(`https://got-quotes.herokuapp.com/quotes?char=${value}`)
    .then(response => response.text())
    .then(data => {
        if(value != '') {
            fact.style.display = 'block';
            showData(data);
        }else {
            fact.style.display = 'none';
        }
    }).catch(err => console.log(err));
}


// FETCH method

btn.addEventListener('click', getFact);


// can use any of two method

// FETCH is asynchronous
// AJAX is synchronous