document.addEventListener("DOMContentLoaded", () => {
    let sideBar2 = document.createElement('sidebar');
    let sidebarDiv2 = document.querySelector('.sidebar'); // Ищем элемент с классом .sidebar

    sideBar2.innerHTML = `
    
    <ul>
            <a href="../full-info/full-info.html"><li>Общая информация</li></a>
            <a href="../vopros-otvet/vopros-otvet.html"><li>Вопрос-ответ</li></a>
            <a href="../dezhurnye_vrachi/dezhurnye_vrachi.html"><li>Дежурные врачи</li></a>
            <a href="../Izmeneniya_v_raspisanii/Izmeneniya_v_raspisanii.html"><li>Изменения в расписании</li></a>
            <a href="../Poryadok_zapisi_na_priem_k_vrachu/Poryadok_zapisi_na_priem_k_vrachu.html"><li>Порядок записи на прием к врачу</li></a>
            <a href="../poryadok_gospitalizatsii/poryadok_gospitalizatsii.html"><li>Порядок госпитализации</li></a>
            <a href="../prava_i_obyazannosti_grazhdan_v_sfere_ohrany_zdorov_ya/prava_i_obyazannosti_grazhdan_v_sfere_ohrany_zdorov_ya.html"> <li>Права и обязанности граждан в сфере
                охраны здоровья</li></a>
            <a href="../pravila_povedeniya/pravila_povedeniya.html"> <li>Правила поведения для пациентов и
                посетителей</li></a>
            <a href="../Programma_gosudarstvennyh_garantij_besplatnogo_okazaniya_grazhdanam_meditsinskoj_pomoschi/Programma_gosudarstvennyh_garantij_besplatnogo_okazaniya_grazhdanam_meditsinskoj_pomoschi.html"> <li>Программа государственных гарантий
                бесплатного оказания гражданам
                медицинской помощи</li></a>
            <a href="../YUridicheskaya_pomosch/YUridicheskaya_pomosch.html"> <li>Юридическая помощь</li></a>
            <a href=""> <li>Прохождение медико-социальной
                экспертизы</li></a>
            <a href=""><li>Оказание услуг по правовой и
                психологической помощи в период
                беременности.</li></a>
            <a href=""> <li>Политика в области менеджмента</li></a>
            <a href=""> <li>Лицензии, сертификаты, свидетельства, Устав</li></a>
            <a href=""> <li>Платные услуги</li></a>
            <a href=""> <li>Наши партнеры</li></a>
            <a href=""> <li>Организации, контролирующие деятельность поликлиники</li></a>
            <a href=""> <li>Нормативные документы</li></a>
            <a href=""> <li>Нормативные документы</li></a>
            <a href=""> <li>Информация о страховых медицинских организациях</li></a>
            <a href=""> <li>Горячие линии</li></a>


    </ul>

    `;

    if (sidebarDiv2) {
        // Если элемент найден, добавляем sideBar внутрь sidebarDiv
        sidebarDiv2.appendChild(sideBar2);
    } else {
        // Логируем ошибку, если элемент не найден
        console.error("Элемент с классом '.test' не найден в DOM.");
    }


    if (document.querySelector('h1').textContent.trim() === 'Общая информация') {
        document.querySelector('ul a:nth-child(1) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Вопрос-ответ') {
        document.querySelector('ul a:nth-child(2) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Дежурные врачи') {
        document.querySelector('ul a:nth-child(3) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Изменения в расписании') {
        document.querySelector('ul a:nth-child(4) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Порядок записи на прием к врачу') {
        document.querySelector('ul a:nth-child(5) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Порядок госпитализации') {
        document.querySelector('ul a:nth-child(6) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Права и обязанности граждан в сфере охраны здоровья') {
        document.querySelector('ul a:nth-child(7) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Правила поведения для пациентов и посетителей') {
        document.querySelector('ul a:nth-child(8) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Программа государственных гарантий бесплатного оказания гражданам медицинской помощи') {
        document.querySelector('ul a:nth-child(9) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Юридическая помощь') {
        document.querySelector('ul a:nth-child(10) li').classList.add('active');
    }


});


