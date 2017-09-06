let screenWidth = window.innerWidth;

if (screenWidth <= 1000){
    // Конвертация таблицы под мобильную версию
    function responseTable(table){
        let workTable = document.getElementsByClassName(table)[0]; //  объект с рабочей таблицей
        let itemTabsRow = document.querySelectorAll('tr', workTable); // Количество строк равно количеству табов
        let itemColums = document.querySelectorAll('tr:first-child td', workTable); //Количество столбцов
        let callHeader = ''; // блок с текущим заголовком
        let thisVal = ''; //значение тякущей ячейки для передачи в таб
        
        // Создаем общий бокс для табов
        let tabsBox = document.createElement('div');
        tabsBox.className = 'tabsTable';
        workTable.before(tabsBox);
        
        // Создаем список для навигации по табам
        let tabsNav = document.createElement('ul');
        tabsNav.className = 'tableTransormTabsControls';
        tabsBox.appendChild(tabsNav);
        
        // Создаем внутреннюю среду табов 
        for(i = 0; i < itemTabsRow.length; i++){
            if(i != 0){
                // Создаем элементы навигации по количеству строк (без строки заголовков)
                tabsNav.appendChild(document.createElement('li'));
                // Создаем боксы с табами по количеству строк (без строки заголовков)
                let elem = document.createElement('div');
                elem.className = 'tabsHolder';
                
                tabsNav.after(elem); 
            }
            // Разбираем каждую строку таблицы****************
            // Из первой строки выбираем ячейки для заголовков
            if(i == 0 ){
                for(j = 0; j < itemColums.length; j++){  
                    callHeader += '<p>'+document.querySelectorAll('tr:first-child td',itemTabsRow[0])[j].innerHTML+': <span></span></p>';
                }
            }    
        }
        //  Делаем активным первый таб
        document.querySelectorAll('.tabsHolder')[0].className += ' active';
        //  Делаем активным первую кнопку
        document.querySelectorAll('.tableTransormTabsControls li')[0].className += ' active';
        
        //  Проходимся по первым ячейкам каждой строки и забираем значение для названия кнопки таба
        
        for(i = 0; i < itemTabsRow.length; i++){
            // Добавляем заголовки строк к табам
            if (i != itemTabsRow.length - 1){
                document.querySelectorAll('.tabsHolder')[i].innerHTML = callHeader;
//                Раздаем кнопкам и табам атрибуты для дальнейшей навигации
                document.querySelectorAll('.tabsHolder')[i].setAttribute("data-tab", 'tab_'+ i)
                document.querySelectorAll('.tableTransormTabsControls li')[i].setAttribute("data-tab", 'tab_'+ i);
                
            }
            
            if(i != 0){
                //  Добавляем заголовки кнопкам
                let buttonText = itemTabsRow[i].querySelectorAll('td')[0].innerHTML;
                document.querySelectorAll('.tableTransormTabsControls li')[i-1].innerHTML = buttonText;

                for(j = 0; j < itemColums.length; j++){
                    // Добавляем информацию из строк в табы
                    let param = itemTabsRow[i].querySelectorAll('td')[j].innerHTML;
                    let paramPlace = document.querySelectorAll('.tabsHolder')[i-1];

                    paramPlace.querySelectorAll('span')[j].innerHTML = param; 
                }
            }
        } 
        
        // Анимация
        workTable.style.display="none";
        
        for(i = 0; i < itemTabsRow.length - 1; i++){
            document.querySelectorAll('.tableTransormTabsControls li')[i].onclick = function(){
                //  Анимация кнопок
                for (let j = 0; j < itemTabsRow.length - 1; j++) {
                   document.querySelectorAll('.tableTransormTabsControls li')[j].classList.remove('active'); 
                }
                this.className += " active";
                
                //  Анимация табов
                for (let j = 0; j < itemTabsRow.length - 1; j++) {
                    document.querySelectorAll('.tabsHolder')[j].classList.remove('active');

                    if(document.querySelectorAll('.tabsHolder')[j].getAttribute('data-tab') == this.getAttribute('data-tab')){
                        let thisTab = j;
                        setTimeout(function() {
                            document.querySelectorAll('.tabsHolder')[thisTab].className += " active";
                        }, 100);
                    }
                }
            }
        }
    }
    
    // Инициализация
    responseTable('tableTransform');  
}
 



























