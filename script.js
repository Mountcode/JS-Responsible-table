let screenWidth = window.innerWidth;


if (screenWidth <= 1000){
    // Конвертация таблицы под мобильную версию
    function responseTable(table){
        //  объект с рабочей таблицей
        let workTable = document.getElementsByClassName(table)[0];
        // Количество строк равно количеству табов
        let itemTabsRow = document.querySelectorAll('tr', workTable);
        //Количество столбцов
        let itemColums = document.querySelectorAll('tr:first-child td', workTable);
        // блок с текущим заголовком
        let callHeader = '';
        //значение тякущей ячейки для передачи в таб
        let thisVal = '';
        
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
            // Создаем элементы навигации по количеству строк
            tabsNav.appendChild(document.createElement('li'));
            
            // Создаем боксы с табами по количеству строк
            var elem = document.createElement('div');
            elem.className = 'tabsHolder';
            tabsNav.after(elem); 
            
            
            // Разбираем каждую строку таблицы
            
        
            // Из первой строки выбираем ячейки для заголовков
            if(i == 0 ){
                for(j = 0; j < itemColums.length; j++){
                    callHeader += '<p>'+document.querySelectorAll('tr:first-child td',itemTabsRow[0])[j].innerHTML+'<span></span></p>';
                    
            // console.log(colHeader);
                }
            }         
            
            console.log()
        }
        
//        TODO
//        Тут нужно пройтись по первым ячейкам каждой строки и перетащить значение каждой из них в li от табов
        
        for(i = 0; i < itemTabsRow.length; i++){
            if(i != 0){
                var buttonText = document.querySelectorAll('td:first-child',itemTabsRow[i]);
                
                console.log(buttonText);
            }
        }
        
        // Добавляем заголовки строк к табам
        for(i = 0; i < itemTabsRow.length; i++){
            document.querySelectorAll('.tabsHolder')[i].innerHTML = callHeader;
        }

        

    }
    

    responseTable('tableTransform');  
}
 



























