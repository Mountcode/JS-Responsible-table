let screenWidth = window.innerWidth;

if (screenWidth <= 1000){
    // Конвертация таблицы под мобильную версию
    function responseTable(table){
        //  объект с рабочей таблицей
        let workTable = document.getElementsByClassName(table)[0];
        // Количество строк равно количеству табов
        let itemTabsRow = document.querySelectorAll('tr', workTable);
        //Количество столбцов
        let itemColums = document.querySelectorAll('tr:first-child td', workTable).length;
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
            
            
//            TODO 
//            Тут нужно будет перебрать значения ячеек первой строки и раскидать их по кнопкам дабов
            // Выбираем ячейку с заголовком
            var text = document.querySelectorAll('td',itemTabsRow[i]).innerHTML;
            
            
            console.log(itemTabsRow[i])
        }
        

        
        
        
        
        
    }
    
    
    
    responseTable('tableTransform');  
}




























