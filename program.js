dictionaryMain = [
	{
		category: 'Категория А, А1',
		pict: "images/letter_a.svg",
		price: 'от 16 500 ₽',
		hedding: 'Обучение водителей категории А и А1 во Владивостоке',
		Pfirst: `После прохождения обучения на категорию А вы сможете 
		управлять любыми видами мотоциклов, включая мотоциклы с коляской, 
		а также трех- и четырехколесные ТС, чья масса в снаряженном 
		состоянии не превышает 400 кг. Также эта категория позволит 
		управлять легкими мотоциклами подкатегории А1.`,
		Psecond: `Обучение на подкатегорию А1 позволит управлять 
		мотоциклами с объемом двигателя до 125 см3 и мощностью до 11 
		киловатт. Подробнее о разнице между категориями А, А1 и получении 
		прав на мотоцикл читайте в нашем блоге. С образовательной 
		программой и учебным планом можно ознакомиться здесь.`
	},
	{
		category: 'Категория B',
		pict: "images/letter_b.svg",
		price: 'от 34 900 ₽',
		hedding: 'Обучение водителей категории В во Владивостоке',
		Pfirst: `После обучения в автошколе на категорию B вы сможете 
		управлять легковыми автомобилями, небольшими грузовиками, 
		микроавтобусами и джипами. Масса ТС, доступных для управления 
		водителям категории B, не должна превышать 3 500 кг. Количество 
		пассажирских мест — не более 8. Также допускается управление 
		прицепом с массой до 750 кг.`,
		Psecond: `При обучении на категорию B можно выбрать автоматическую 
		коробку передач (АКПП или «автомат») или механическую (МКПП или 
		«механика»). При обучении на АКПП вы сможете водить только ТС на 
		«автомате», а при обучении на МКПП — управлять как «автоматами», 
		так и «механикой». О том, что лучше — «автомат» или «механика», 
		читайте в этом материале блога нашей автошколы.`
	},
	{
		category: 'Категория C',
		pict: "images/letter_c.svg",
		price: 'от 37 000 ₽',
		hedding: 'Обучение водителей категории C во Владивостоке',
		Pfirst: `После обучения на категорию С вы сможете управлять 
		грузовыми автомобилями с разрешенной максимальной массой от 3,5 
		тонн. Также в список ТС, разрешенных к управлению с водительским 
		удостоверением категории С, входят грузовые автомобили с прицепами 
		массой не более 750 кг.`,
		Psecond: `Обучение на категорию С в автошколе «IDrive» во 
		Владивостоке проходит в соответствии с образовательной программой 
		переподготовки водителей с категории В на С, согласованной ГИБДД.`
	},
	{
		category: 'Категория D',
		pict: "images/letter_d.svg",
		price: 'от 42 000 ₽',
		hedding: 'Обучение водителей категории D во Владивостоке',
		Pfirst: `С правами категории D вы сможете управлять автобусами 
		различных размеров: от небольших маршрутных такси до крупных 
		туристических автобусов, с 8 и более сидячими местами. Кроме 
		того, ТС категории D могут буксировать прицеп массой до 750 кг.`,
		Psecond: `<b>Важно!</b> Обязательным условием для начала обучения на 
		категорию D в нашей автошколе является наличие действующего 
		водительского удостоверения категории B , и стаж управления т/с 
		категории В не менее одного года.`
	}

	]
function createPage(numDict) {

    // получаем информацию о категории по его номеру в массиве
    let dictionary = dictionaryMain[numDict];

    let categoryName = document.getElementsByTagName('h2')[0];
    categoryName.innerHTML = dictionary.category;

    //для рисунка указываем ссылку на изображение
    let pict = document.getElementById('image')
    pict.setAttribute ('src', dictionary.pict);

    let price = document.getElementsByClassName('price')[0];
    price.innerHTML = dictionary.price;

    let hedding = document.getElementsByTagName('h3')[0];
    hedding.innerHTML = dictionary.hedding

    // формируем абзацы
    let article = document.getElementsByClassName('article')[0];
    let pars = article.getElementsByTagName('p');
    pars[0].innerHTML = dictionary.Pfirst;
    pars[1].innerHTML = dictionary.Psecond;
}

document.addEventListener("DOMContentLoaded", function() {

    // читаем значение переменной, переданной с главной страницы
    let numDict = localStorage.getItem('struct');
    // формируем страницу для информации о том рисунке, на котором был клик
    createPage(numDict);
})

let test = [
	{
		typeQuestion: 'SC', 
		//тип вопроса, один ответ верный
		photo: '',
		// формулировка вопроса
		questionText: '<b>В каком случае водитель совершит вынужденную остановку?</b>',
		// список ответов
		answers: ['Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу',
				   "Остановившись на проезжей части из-за технической неисправности транспортного средства",
				   "В обоих перечисленных случаях"],
		// для каждого ответа указываем, верный он (true) или неверный (false)
		correct: [false, true, false],
		explanation: `<b>Правильный ответ: 2</b><br>«Вынужденная остановка» - 
		прекращение движения транспортного средства, связанное с его технической 
		неисправностью, опасностью, создаваемой перевозимым грузом, состоянием 
		водителя (пассажира) или появления препятствия на дороге. (Пункт 1.2 ПДД, 
		термин «Вынужденная остановка»)`
	},
	{
		typeQuestion: 'SC',
		photo: 'images/question2.jpg',
		questionText: `<b>Разрешен ли Вам поворот на дорогу с грунтовым покрытием?</b>`,
		answers: ['Разрешен',
				  'Разрешен только при технической неисправности транспортного средства',
				  'Запрещен'],
		correct: [true, false, false],
		explanation: `<b>Правильный ответ: 1</b><br>Впереди по ходу Вашего движения 
		предупреждающий знак 1.11.2 «Опасный поворот» и знаки 1.34.2 «Направление поворота», 
		которые указывают направление движения на закруглении дороги малого радиуса с ограниченной 
		видимостью. Ничего, что бы Вам запрещало поворот на дорогу с грунтовым покрытием, нет. 
		По Вашему желанию поворачиваете направо. («Дорожные знаки»).`
	},
	{
		typeQuestion: 'SC',
		photo: 'images/question3.jpg',
		questionText: `<b>Можно ли Вам остановиться в указанном месте для посадки пассажира?</b>`,
		answers: ['Можно',
				  'Можно, если Вы управляете такси',
				  'Нельзя'],
		correct: [true, false, false],
		explanation: `<b>Правильный ответ: 1</b><br>Знак 3.28 «Стоянка запрещена» не запрещает 
		производить остановку. В указанном месте Вам совершить остановку можно. («Дорожные знаки»)`
	},
	{
		typeQuestion: 'SC',
		photo: 'images/question4.jpg',
		questionText: `<b>Какие из указанных знаков запрещают движение водителям мопедов?</b>`,
		answers: ['Только А',
				  'Только Б',
				  'В и Г',
				  'Все'],
		correct: [false, false, false, true],
		explanation: `<b>Правильный ответ: 4</b><br>Запрещают движение водителям мопедов все 
		знаки из перечисленных: А – 4.4.1 «Велосипедная дорожка»; Б – 5.14.1 «Полоса для маршрутных 
		транспортных средств»; В – 4.5.2 «Пешеходная и велосипедная дорожка с совмещенным движением»; 
		Г – 4.5.4 «Пешеходная и велосипедная дорожка с разделением движения». (Дорожные знаки) Только 
		знак 5.14.2 «Полоса для велосипедистов» разрешает движение мопедов, но он не представлен в 
		вопросе Пункт 24.7 ПДД`
	},
	{
		typeQuestion: 'MC',
		photo: '',
		questionText: `<b>Запрещается эксплуатация легковых и грузовых автомобилей до 3,5 т при отсутствии:</b>`,
		answers: ['аптечки',
				  'огнетушителя',
				  'знака аварийной остановки',
				  'противооткатных упоров',
				  "всего из вышеперечисленного"],
		correct: [true, true, true, false, false],
		explanation: `<b>Правильные ответы: 1, 2, 3</b><br>Запрещается эксплуатация легковых и грузовых 
		автомобилей до 3,5 т при отсутствии аптечки, огнетушителя, знака аварийной остановки.`
	},
	{
		typeQuestion: 'MC',
		photo: '',
		questionText: `<b>Скорость движеня на автомагистрали до 110 км/ч разрешена:</b>`,
		answers: ['мотоциклам',
				  "легковым автомобилям",
				  'грузовым автомобилям до 3,5 т',
				  'муждугородним автобусам',
				  'маломестным автобусам',
				  'всем вышеперечисленным',],
		correct: [true, true, true, false, false, false],
		explanation: `<b>Правильные ответы: 1, 2, 3</b><br>Мотоциклам, легковым и грузовым автомобилям до 3,5 т, разверено движение на автомагистрали до 110 км/ч`
	},
	{
		typeQuestion: 'SC',
		photo: '',
		questionText: `<b>Что означает мигание зелёного сигнала светофора?</b>`,
		answers: ['Предупреждает о неисправности светофора',
				  'Разрешает движение и информирует о том, что вскоре будет включен запрещающий сигнал',
				  'Запрещает дальнейшее движение'],
		correct: [false, true, false],
		explanation: `<b>Правильный ответ: 2</b><br>Длительность мигания зелёного сигнала светофора 
		обычно составляет 3-4 с. Это позволяет водителю заблаговременно, в зависимости от конкретных 
		условий, принять решение: 1) продолжить движение с прежней скоростью; 2) несколько увеличить 
		скорость; 3) начать снижение скорости вплоть до остановки. (Пункт 6.2 ПДД).`
	},
	{
		typeQuestion: 'SN',
		photo: '',
		questionText: `<b>С какой максимальной скоростью (в км/ч) разрешено движение легковым и грузовым автомобилям до 3,5 т вне населенного пункта?</b>`,
		answers: ['90'],
		correct: ['90'],
		explanation: `<b>Правильный ответ: 90 км/ч</b><br>Легковым и грузовым автомобилям до 3,5 т 
		разрешено движение с максимальной скоростью 90 км/ч вне населенного пунква.`
	},
	{
		typeQuestion: 'SN',
		photo: '',
		questionText: `<b>С какой максимальной скоростью (в км/ч) разрешено движение легковому автомобилю с прицепом вне населенного пункта?</b>`,
		answers: ['70'],
		correct: ["70"],
		explanation: `<b>Правильный ответ: 70 км/ч</b><br>Легковому автомобилю с прицепом 
		разрешено движение с максимальной скоростью 70 км/ч вне населенного пункта`
	},
	{
		typeQuestion: 'SC',
		photo: 'images/question10.jpg',
		questionText: `<b>Как Вам следует поступить при повороте направо?`,
		answers: ['Перестроиться на правую полосу, затем осуществить поворот',
				  'Продолжить движение по второй полосе до перекрёстка, затем повернуть',
				  'Возможны оба варианта действий</b>'],
		correct: [false, false, true],
		explanation: `<b>Правильный ответ: 3</b><br>Разметка разрешает поворот направо с обеих полос, 
		поэтому возможны оба варианта действий. В таких случаях, выполняя поворот на перекрёстке, 
		соблюдайте избранную Вами рядность. («Горизонтальная разметка» 1.18, пункт 8.5 ПДД)`
	}
	]

function createTest(testData) {
 /* находим элемент, в котором будем формировать тест */
 let element = document.getElementById('test');

 /* обрабатываем все вопросы из массива testData */
 for(let i = 0; i < testData.length; i++) {

     /* создаем элемент li для отображения очередного вопроса */
     let itemTest = document.createElement('li');
     /* относим его к классу question */
     itemTest.classList.add('question');
     /* заносим текст вопроса */
     itemTest.innerHTML = testData[i].questionText;

     //Добавляем фото где нужно
     let image = document.createElement('img');
     image.setAttribute('src', testData[i].photo);
     image.setAttribute('class', 'PDDimg')
     itemTest.appendChild(image);

     /* формируем элемент для отображения ответов */
     let itemsAnswers = document.createElement('ol')

     /* обрабатываем все ответы текущего вопроса */
     for(let j = 0; j < testData[i].answers.length; j++) {

         /* создаем элемент для отображения ответа */
         let answer = document.createElement('li');

         /* заносим в него элемент radio для выбора одного ответа*/
         
        if (testData[i].typeQuestion === "SC") {
            answer.innerHTML = `<label><input type="radio" name="answer${i}">${testData[i].answers[j]}</label>`;
        } else if (testData[i].typeQuestion === "MC") {
            answer.innerHTML = `<label><input type="checkbox" name="answer${i}">${testData[i].answers[j]}</label>`;
        } else if (testData[i].typeQuestion === "SN") {
            answer.innerHTML = `<label>Ответ:<input type="text" name="answer${i}"></label>`;
        }

         /* добавляем очередной ответ в элемент для отображения ответов */
         itemsAnswers.appendChild(answer);
     }
     /* добавляем ответы к очередному вопросу */
     itemTest.appendChild(itemsAnswers);

     /* добавляем сформированный вопрос с ответами к тесту */
     element.appendChild(itemTest);
    
     //добавляем объяснение
    let explanation = document.createElement('p');
    explanation.setAttribute('class', 'explain')
    explanation.innerHTML = testData[i].explanation;
    itemTest.appendChild(explanation);
    explanation.hidden = true;
 }
}
document.addEventListener("DOMContentLoaded", function() {
    createTest(test);
})


function checkTest(testData){
     /* выбираем коллекцию элементов-вопросов */
     let questions = document.getElementsByClassName('question');
     let correctQuestion = 0; // количество верных вопросов
     /* обрабатываем каждый вопрос*/
     for(let i = 0; i < questions.length; i++) {
         /* выбираем все поля input, в которых пользователь указывал ответы */
         let answers = questions[i].getElementsByTagName('input');
         let amountCorrect = 0; // количество верных ответов в каждом вопросе
         /* перебираем все ответы одного вопроса */
         for(let j = 0; j < answers.length; j++) {
             /* сравниваем каждый ответ пользователя с ответами из массива*/
             /* если пользователь отметил ответ в свойстве checked
             передается значение true,в противном случае - false */
             if (testData[i].typeQuestion == 'SC' || testData[i].typeQuestion == 'MC'){
                 if(answers[j].checked == testData[i].correct[j]) {
                    amountCorrect ++;
                 }
             } else if (testData[i].typeQuestion == 'SN') {
                if (answers[j].value == testData[i].correct) {
                    amountCorrect ++;
                }
             }

         }
         /* если все ответы пользователя на вопрос совпали с ответами из массива,
         то увеличиваем количество верных вопросов */
         if(amountCorrect == answers.length) {
         correctQuestion ++;
         } else {
            questions[i].classList.add('error');
            let explanation = document.getElementsByClassName('explain');
            explanation[i].hidden = false
         }
     }
     /* выводим результат в документ */
     document.getElementById('result').innerHTML = `Верных ответов - ${correctQuestion}, что составляет ${Math.round(correctQuestion/questions.length * 100)}%.`;
}


function clearTest(testData){
     /* очищаем элементы с вопросами и результатом*/
     document.getElementById('test').innerHTML = "";
     document.getElementById('result').innerHTML = "";
     createTest(testData);
}


function setSortTable(idTable, idSelect) {
    // находим нужную таблицу
    let table = document.getElementById(idTable);

    //перебираем все строки таблицы
    for (let i = 0; i < table.rows.length; i++) {
        // создаем новую ячейку таблицы
        let cell = document.createElement('td');
        cell.innerHTML = i;
        cell.hidden = true;
        // вставляем ее в таблицу перед всеми остальными ячейками
        table.rows[i].insertBefore(cell, table.rows[i].firstElementChild);
    }

    // находим поле со списком
    let selectField = document.getElementById(idSelect);

    // выделяем заголовочные ячейки таблицы
    let rowTh = table.rows[0].cells;

    // перебираем все ячейки таблицы, кроме 0
    for (let i = 1; i < rowTh.length; i++) {
        // создаем элемент списка
        let item = document.createElement('option');
        item.innerHTML = rowTh[i].innerHTML;
        item.setAttribute("value", i);
        // добавляем очередной элемент к списку
        selectField.appendChild(item);
    }
}

// вызываем функцию настройки сортировки при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
 setSortTable('list', 'fields');
}
)


function filterTable(idTable, data) {
    // находим нужную таблицу
    let table = document.getElementById(idTable);

    // текст фильтра из поля Марка
    let mark = data.mark.value.toLowerCase();

    // текст фильтра из поля Модель
    let model = data.model.value.toLowerCase();

    // текст фильтра из поля Тип КПП
    let type = data.type.value.toLowerCase();

    // текст фильтра из поля Привод
    let drive = data.drive.value.toLowerCase();

    // текст фильтра из поля Год от, если поле не заполнено – вставляем минус бесконечность
    let yearFrom = data.yearFrom.value;
    if (yearFrom === '') {
        yearFrom = -Infinity;
    }

    // текст фильтра из поля Год до
    let yearTo = data.yearTo.value;
    if (yearTo === '') {
        yearTo = Infinity;
    }

    // текст фильтра из поля Мощность  от, если поле не заполнено – вставляем минус бесконечность
    let powerFrom = data.powerFrom.value;
    if (powerFrom === '') {
        powerFrom = -Infinity;
    }

    // текст фильтра из поля Год до
    let powerTo = data.powerTo.value;
    if (powerTo === '') {
        powerTo = Infinity;
    }

    //перебираем все строки таблицы без заголовка
    for (let i = 1; i < table.rows.length; i++) {

        // скрываем все строки таблицы
        table.rows[i].hidden = true;
        
        // выбираем значение из очередной строки столбца Марка
        let cellMark = table.rows[i].cells[1].innerHTML.toLowerCase();

        // выбираем значение из очередной строки столбца Модель
        let cellModel = table.rows[i].cells[2].innerHTML.toLowerCase();

        // выбираем значение из очередной строки столбца Тип КПП
        let cellType = table.rows[i].cells[3].innerHTML.toLowerCase();

        // выбираем значение из очередной строки столбца Привод
        let cellDrive = table.rows[i].cells[4].innerHTML.toLowerCase();

        // выбираем значение из очередной строки столбца Год
        let cellYear = Number(table.rows[i].cells[5].innerHTML);

        // выбираем значение из очередной строки столбца Мощность 
        let cellPower = Number(table.rows[i].cells[6].innerHTML);

        // если значение из поля встречается в ячейке -
        // делаем строку видимой
        if (cellMark.indexOf(mark) !== -1 && cellModel.indexOf(model) !== -1 && cellType.indexOf(type) !== -1 && cellDrive.indexOf(drive) !== -1 && (cellYear >= yearFrom && cellYear <= yearTo) && (cellPower >= powerFrom && cellPower <= powerTo)) {
            table.rows[i].hidden = false;
        }
    }
}

function sortTable(idTable, sortColumn, desc) {
    //находим нужную таблицу и ее раздел tbody
    let table = document.getElementById(idTable).tBodies[0];

    // получаем коллекцию строк
    let rowData = table.rows;

    // сортируем строки таблицы без заголовков методом "пузырька"
    for(var i = 1; i < rowData.length - 1; i++){
        for(let j = 1; j < rowData.length - i; j++){
            // выделяем ячейки из столбца, по которому сортируем
            let cellA = rowData[j].cells[sortColumn].innerHTML;
            let cellB = rowData[j + 1].cells[sortColumn].innerHTML;
            // сравниваем ячейки соседних строк и меняем
            // их местами при необходимости
            if (rowData == 4 || rowData == 5) {
                cellA = +cellA;
                cellB = +cellB;
            }
            if ((desc && cellA < cellB) || (!desc && cellA > cellB)){
                table.insertBefore(rowData[j+1],rowData[j]);
            }
        }
    }
}


function clearFilter(idTable, data) {
    data.mark.value = '';
    data.model.value = '';
    data.type.value = '';
    data.drive.value = '';
    data.yearTo.value = '';
    data.yearFrom.value = '';
    data.powerTo.value = '';
    data.powerFrom.value = '';
    let table = document.getElementById(idTable);
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].hidden = false;
    }
}


let canvasWidth = document.getElementById('canvas').width;
let canvasHeight = document.getElementById('canvas').height;
let idTimer;
function drawing(){
    ctx = document.getElementById('canvas').getContext('2d');
    // запускаем бесконечное движение
    move();
}
// очищаем канвас
function clearCanvas(){
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.restore();
}

function drawRoad() {
	ctx.fillStyle = '#8f8787';
	ctx.fillRect(0, 110, canvasWidth, 60);
	ctx.fillStyle = '#eeeeee';
	ctx.beginPath();
	ctx.moveTo(480, 110);
	ctx.lineTo(510, 170);
	ctx.lineTo(550, 170);
	ctx.lineTo(510, 110);
	ctx.closePath();
	ctx.fill();
	ctx.fillStyle = '#8f8787'
	ctx.beginPath();
	ctx.moveTo(490, 0);
	ctx.lineTo(700, 340);
	ctx.lineTo(700, 70);
	ctx.lineTo(660, 0);
	ctx.closePath();
	ctx.fill();
}

function drawCar(){
 // корпус
 ctx.lineWidth = 1;
 ctx.fillStyle = "green";
 ctx.strokeStyle = "black";
 ctx.beginPath();
 ctx.moveTo(0, 0);
 ctx.lineTo(40, -20);
 ctx.lineTo(90, -20);
 ctx.lineTo(90, -40);
 ctx.lineTo(190, -40);
 ctx.lineTo(180, -30);
 ctx.lineTo(180, -10);
 ctx.lineTo(180, -10);
 ctx.lineTo(200, -20);
 ctx.lineTo(290, -20);
 ctx.lineTo(310, -10);
 ctx.lineTo(320, 0);
 ctx.lineTo(300, 30);
 ctx.lineTo(10, 30);
 ctx.lineTo(10, 10);
 ctx.closePath();
 ctx.fill();
 ctx.stroke();
 
 // окна
 ctx.fillStyle = 'SkyBlue';
 ctx.beginPath();
 ctx.moveTo(60, -20);
 ctx.lineTo(90, -20);
 ctx.lineTo(90, -40);
 ctx.lineTo(70, -30);
 ctx.lineTo(60, -20);
 ctx.moveTo(190, -40);
 ctx.lineTo(180, -30);
 ctx.lineTo(180, -10);
 ctx.lineTo(190, -10);
 ctx.lineTo(200, -10);
 ctx.lineTo(190, -40);
 ctx.closePath();
 ctx.fill();
 ctx.stroke();
 ctx.fillRect(100, -30, 70, 20);
 ctx.strokeRect(100, -30, 70, 20);

 // фары
 ctx.fillStyle = 'red';
 ctx.fillRect(-2, 10, 12, 10);
 ctx.fillStyle = 'yellow';
 ctx.beginPath();
 ctx.moveTo(300, 10);
 ctx.lineTo(300, 20);
 ctx.lineTo(306, 20);
 ctx.lineTo(313, 10);
 ctx.closePath();
 ctx.fill();

 // дно
 ctx.fillStyle = 'grey';
 ctx.fillRect(30, 20, 250, 10);
 ctx.strokeRect(30, 20, 250, 10);

//колеса
 ctx.fillStyle = '#393e46';
 ctx.beginPath();
 ctx.arc(50,30,20,0,Math.PI*2,true);
 ctx.arc(260,30,20,0,Math.PI*2,true);
 ctx.closePath();
 ctx.fill();

 ctx.fillStyle = 'grey';
 ctx.beginPath();
 ctx.arc(50,30,10,0,Math.PI*2,true);
 ctx.arc(260,30,10,0,Math.PI*2,true);
 ctx.closePath();
 ctx.fill();

 //линии
 ctx.beginPath();
 ctx.moveTo(0, 0);
 ctx.lineTo(320, 0);
 ctx.moveTo(180, -10);
 ctx.lineTo(180, 0);
 ctx.lineTo(180, 30);
 ctx.lineTo(180, 0);
 ctx.moveTo(200, 10);
 ctx.lineTo(230, 10);
 ctx.moveTo(100, 30);
 ctx.lineTo(100, -10);
 ctx.closePath();
 ctx.stroke();
}

function drawAccident() {
    ctx.fillStyle = '#eb2632'
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, 40);
    ctx.lineTo(10, 12);
    ctx.lineTo(50, 19);
    ctx.lineTo(80, 0);
    ctx.lineTo(140, 0);
    ctx.lineTo(200, 20);//
    ctx.lineTo(120, 7);//
    ctx.lineTo(110, 10);//
    ctx.lineTo(85, 52);///////
    ctx.lineTo(80, 52);///////
    ctx.lineTo(83, 10);//
    ctx.lineTo(77, 4);//
    ctx.lineTo(60, 50);//
    ctx.lineTo(72, 50);
    ctx.lineTo(120, 60);
    ctx.lineTo(280, 63);
    ctx.lineTo(310, 80);
    ctx.lineTo(310, 137);
    ctx.lineTo(300, 160);
    ctx.lineTo(120, 160);
    ctx.lineTo(80, 140);
    ctx.lineTo(60, 60);
    ctx.lineTo(50, 90);
    ctx.lineTo(60, 140);
    ctx.lineTo(40, 140);
    ctx.lineTo(40, 120);
    ctx.lineTo(20, 100);
    ctx.lineTo(10, 40);
    ctx.lineTo(0, 70);
    ctx.lineTo(0, 40);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //лобовое
    ctx.fillStyle = '#2d4059'
    ctx.beginPath();
    ctx.moveTo(200, 20);
    ctx.lineTo(120, 7);
    ctx.lineTo(100, 10);
    ctx.lineTo(85, 52);
    ctx.lineTo(120, 60);
    ctx.lineTo(230, 61);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(80, 52);
    ctx.lineTo(83, 10);
    ctx.lineTo(77, 4);
    ctx.lineTo(60, 50);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#be3144';
    ctx.beginPath();
    ctx.moveTo(120, 60);
    ctx.lineTo(260, 63);
    ctx.lineTo(280, 80);
    ctx.lineTo(260, 100);
    ctx.lineTo(180, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#455d7a';
    ctx.beginPath();
    ctx.moveTo(120, 80);
    ctx.lineTo(120, 98);
    ctx.lineTo(150, 105);
    ctx.lineTo(158, 98);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 90);
    ctx.lineTo(300, 103);
    ctx.lineTo(280, 110);
    ctx.lineTo(278, 98);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //левое колесо
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(57, 140);
    ctx.lineTo(60, 145);
    ctx.lineTo(70, 160);
    ctx.lineTo(80, 170);
    ctx.lineTo(100, 177);
    ctx.lineTo(110, 170);
    ctx.lineTo(120, 165);
    ctx.lineTo(123, 160);
    ctx.lineTo(120, 160);
    ctx.lineTo(80, 140);
    ctx.lineTo(60, 60);
    ctx.lineTo(50, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //правое колесо
    ctx.beginPath();
    ctx.moveTo(250, 160);
    ctx.lineTo(260, 178);
    ctx.lineTo(275, 182);
    ctx.lineTo(284, 180);
    ctx.lineTo(295, 170);
    ctx.lineTo(300, 160);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //заднее колесо
    ctx.beginPath();
    ctx.moveTo(0, 70);
    ctx.lineTo(-3, 90);
    ctx.lineTo(0, 98);
    ctx.lineTo(4, 104);
    ctx.lineTo(10, 108);
    ctx.lineTo(20, 100);
    ctx.lineTo(10, 40);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawBoom() {
    ctx.strokeStyle = '#ff6f3c';
    ctx.fillStyle = 'yellow'
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(0, 65);
    ctx.lineTo(15, 40);
    ctx.lineTo(20, 50);
    ctx.lineTo(35, 15);
    ctx.lineTo(45, 50);
    ctx.lineTo(50, 30);
    ctx.lineTo(60, 65);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function move(){
    idTimer = setInterval('moveCar();',20);
}

let posX = 0;
let posY = 0;
let h = 2; // шаг, с которым будем изменять положение рисунка

//let r = 50; //радиус смайлика
//let angle = 0; //угол поворота
//let hAngle = h / r; //шаг поворота

// функция, которая реализует движение по горизонтали
function moveCar() {
	// очищаем канвас
	clearCanvas();
	drawRoad();
	// выводим рисунок с новыми координатами
	ctx.save();
	ctx.translate(-330,100);
	ctx.translate(posX, posY);
	//ctx.rotate(angle);
	drawCar();
	ctx.restore();
	// изменяем направление
	if (posX >= canvasWidth + 340){
		posX = 0;
	}
	posX += h;
	// изменяем положение рисунка по горизонтали
	// изменяем угол поворота
	//angle += (!moveBack) ? hAngle : -hAngle;
}


function clickButton(button) {
 if (button.value == "Остановить") {
 // останавливаем движение
 clearInterval(idTimer);
 if (posX > 570) {
 	ctx.save();
 	ctx.scale(0.6, 0.6)
 	ctx.translate(875, 7);
 	drawAccident();
 	ctx.restore();
 	ctx.save();
 	ctx.translate(550, 20);
 	ctx.scale(1.7, 1.7);
 	drawBoom();
 	ctx.restore();
 	let stopLine = document.getElementById('stopLine');
 	stopLine.innerHTML = 'Вы спровоцировали аварию! Теперь Вы обязаны выплатить 400&nbsp;000 рублей!<br>Вскоре мы пришлем Вам чек на электронную почту.'
 }
 button.value = "Запустить";
 } else {
 // запускаем движение
 move();
 button.value = "Остановить";
 let stopLine = document.getElementById('stopLine');
 stopLine.innerHTML = ''
 }
}

