document.addEventListener("DOMContentLoaded", () => {
    let sideBar = document.createElement('sidebar');
    let sidebarDiv = document.querySelector('.sidebar'); // Ищем элемент с классом .sidebar

    sideBar.innerHTML = `
    
    <ul>
        <a href="../o-nas/o-nas.html"><li>О нас</li></a>
        <a href="../news/news.html"><li>Новости</li></a>
        <a href=""><li>Свидетельство о регистрации</li></a>
        <a href=""><li>Сертификаты</li></a>
        <a href=""><li>Вакансии</li></a>
        <a href=""><li>Лицензии</li></a>
        <a href=""><li>Политика конфиденциальности</li></a>
        <a href=""><li>Наши достижения</li></a>
        <a href="../contacts/contacts.html"><li>Контакты</li></a>
        <a href=""><li>Приказ об организации платных услуг</li></a>
    </ul>

    `;

    if (sidebarDiv) {
        // Если элемент найден, добавляем sideBar внутрь sidebarDiv
        sidebarDiv.appendChild(sideBar);
    } else {
        // Логируем ошибку, если элемент не найден
        console.error("Элемент с классом '.test' не найден в DOM.");
    }


    if (document.querySelector('h1').textContent.trim() === 'О нас') {
        document.querySelector('ul a:nth-child(1) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Новости') {
        document.querySelector('ul a:nth-child(2) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Контакты') {
        document.querySelector('ul a:nth-child(9) li').classList.add('active');
    }



});


