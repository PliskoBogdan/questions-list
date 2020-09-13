export class Question{
    static create(question){
        return fetch('https://ichlernedeutch-91d85.firebaseio.com/questions.json',{
            method: 'POST',
            body: JSON.stringify(question),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response =>{
            console.log(response.name);
            return question;
        })
        .then(addQuestionFromLocalStorage)
        .then(Question.renderList)
    }
    static renderList(){
        const questions = getQuestionFromLocalStorage();

        const html = questions.length
        ? questions.map(toCard).join('') 
        : ` <div class="mui--text-headline">Вы пока ничего не спросили </div>`

        const list = document.querySelector('#list')
        list.innerHTML = html
    }
}


function addQuestionFromLocalStorage(question){
    const all = getQuestionFromLocalStorage();
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionFromLocalStorage(){
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question){
    return `
    <div class="mui--text-black-54">
    ${new Date(question.data).toLocaleDateString()}
    ${new Date(question.data).toLocaleTimeString()}
    </div>
    <div>${question.text}</div>
    <br></br>
    `
}