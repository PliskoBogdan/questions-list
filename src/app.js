import './styles.css';
import {isValid} from './utils';
import {Question} from './questions';

const form = document.getElementById('question-form');
const input  = form.querySelector('#question-input')
const btn = document.querySelector('#input-button');
console.log(input.value);


window.addEventListener('load', Question.renderList);

form.addEventListener('submit', submit)

input.addEventListener('input', () =>{
    btn.disabled = !isValid(input.value);
})

function submit (e){
    e.preventDefault()
    if(isValid(input.value)){
        btn.disabled = false;
        const data = {
            text: input.value.trim(),
            data: new Date().toJSON()
        }
        submitBtn.disabled = true;
        Question.create(data)
        .then(()=>{
            btn.disabled = true
            input.value = '';
            
        })
    }

}

