const englishInput = document.getElementById('input-eng'),
    russianInput = document.getElementById('input-rus'),
    inputs = document.querySelectorAll('input'),
    saveButton = document.getElementById('btn'),
    table = document.getElementById('table'),
    rows = document.getElementsByClassName('row');

let words = [];
let count = 0;

localStorage.length < 1 ? words = [] : words = JSON.parse(localStorage.getItem('words'));

let addWordToTable = index =>{
    table.innerHTML += `
    <tr class="row" data-row=${count}> 
        <td class="coll translate">${words[index].translate}</td>
        <td class="coll russian">${words[index].russian}</td>
        <td class="buttonCell coll">		
            <button class="btn-delete">
                Удалить
            </button>
        </td>
    </tr>`;
    count++;
    //здесь я решила ввести count для подсчета номера строки и передачу его в data-row для дальнейших операций
}



 words.forEach((element, i) => {
     addWordToTable(i);
 });

class CreateWord{
    constructor(translate, russian){
        this.translate = translate;
        this.russian = russian;
    }
}

saveButton.addEventListener('click', () => {
    if(englishInput.value.length < 1 || russianInput.value.length < 1 || !isNaN(englishInput.value) || !isNaN(russianInput.value)){
        for(let key of inputs){
            key.classList.add('error');
        }
    }else{
        for(let key of inputs){
            key.classList.remove('error');  
    }
    words.push(new CreateWord(englishInput.value, russianInput.value));
    localStorage.setItem('words', JSON.stringify(words));
    addWordToTable(words.length - 1);
}});

let deleteWord = el => {
    let currTab = event.target.parentNode.parentNode.dataset.row; //передаем в перемнную номер строки, на которую нажали
    for(let i = 0; i <= words.length-1; i++){//цикл для обхода массива таблицы
    if(el.classList.contains('btn-delete') == true){//если нажата кнопка "удалить", то выполнять следующие действия
        words.splice(currTab, 1); //удалить из массива элемент на текущей позиции
        el.parentNode.parentNode.remove();//удалить из таблицы строку, в которую входит текущий элемент
    }
    localStorage.setItem('words', JSON.stringify(words)); //записать в localStorage новый массив, из которого удален элемент
    }
 };

 table.addEventListener('click', function(e){
    deleteWord(event.target); //вызов функции удаления и передачи в нее текущего элемента
});