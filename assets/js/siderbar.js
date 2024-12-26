document.addEventListener("DOMContentLoaded", () => {
    let sideBar = document.createElement('sidebar');
    let sidebarDiv = document.querySelector('.sidebar'); // Ищем элемент с классом .sidebar

    sideBar.innerHTML = `
    
    <ul>
        <a href="../o-nas/o-nas.html"><li>О нас</li></a>
        <a href="../news/news.html"><li>Новости</li></a>
        <a href="../svidetelstvo_reg/svidetelstvo_reg.html"><li>Свидетельство о регистрации</li></a>
        <a href="../vakansii/vakansii.html"><li>Вакансии</li></a>
        <a href="../Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh/Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh.html"><li>Политика конфиденциальности</li></a>
        <a href="../Nashi_dostizheniya/Nashi_dostizheniya.html"><li>Наши достижения</li></a>
        <a href="../contacts/contacts.html"><li>Контакты</li></a>
        <a href=""><li>Приказ об организации платных услуг</li></a>
        <a href="../Litsenzii__sertifikaty__svidetel_stva__Ustav/Litsenzii__sertifikaty__svidetel_stva__Ustav.html"> <li>Лицензии, сертификаты, свидетельства, Устав</li></a>
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

    if (document.querySelector('h1').textContent.trim() === 'Свидетельство о регистрации') {
        document.querySelector('ul a:nth-child(3) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Вакансии') {
        document.querySelector('ul a:nth-child(4) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Политика конфиденциальности') {
        document.querySelector('ul a:nth-child(5) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Наши достижения') {
        document.querySelector('ul a:nth-child(6) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Контакты') {
        document.querySelector('ul a:nth-child(7) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Приказ об организации платных услуг') {
        document.querySelector('ul a:nth-child(8) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Лицензии, сертификаты, свидетельства, Устав') {
        document.querySelector('ul a:nth-child(9) li').classList.add('active');
    }




});


