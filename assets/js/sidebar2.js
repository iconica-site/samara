document.addEventListener("DOMContentLoaded", () => {
    let sideBar2 = document.createElement('sidebar');
    let sidebarDiv2 = document.querySelector('.sidebar'); // Ищем элемент с классом .sidebar

    sideBar2.innerHTML = `
    
    <ul>
          
            <a href="../vopros-otvet/vopros-otvet.html"><li>Вопрос-ответ</li></a>
           
            <a href="../prava_i_obyazannosti_grazhdan_v_sfere_ohrany_zdorov_ya/prava_i_obyazannosti_grazhdan_v_sfere_ohrany_zdorov_ya.html"> <li>Права и обязанности граждан в сфере
                охраны здоровья</li></a>
            <a href="../pravila_povedeniya/pravila_povedeniya.html"> <li>Правила поведения для пациентов и
                посетителей</li></a>
            <a href="../Programma_gosudarstvennyh_garantij_besplatnogo_okazaniya_grazhdanam_meditsinskoj_pomoschi/Programma_gosudarstvennyh_garantij_besplatnogo_okazaniya_grazhdanam_meditsinskoj_pomoschi.html"> <li>Программа государственных гарантий
                бесплатного оказания гражданам
                медицинской помощи</li></a>
            <a href="../YUridicheskaya_pomosch/YUridicheskaya_pomosch.html"> <li>Юридическая помощь</li></a>
            <a href="../Politika_v_oblasti_menedzhmenta/Politika_v_oblasti_menedzhmenta.html"> <li>Политика в области менеджмента</li></a>
            <a href="../Normativnye_dokumenty/Normativnye_dokumenty.html"><li>Нормативные документы</li></a>
            <a href="../Goryachii_linii/Goryachii_linii.html"><li>Горячие линии</li></a>


    </ul>

    `;

    if (sidebarDiv2) {
        // Если элемент найден, добавляем sideBar внутрь sidebarDiv
        sidebarDiv2.appendChild(sideBar2);
    } else {
        // Логируем ошибку, если элемент не найден
        console.error("Элемент с классом '.test' не найден в DOM.");
    }


    

    if (document.querySelector('h1').textContent.trim() === 'Вопрос-ответ') {
        document.querySelector('ul a:nth-child(1) li').classList.add('active');
    }


    if (document.querySelector('h1').textContent.trim() === 'Права и обязанности граждан в сфере охраны здоровья') {
        document.querySelector('ul a:nth-child(2) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Правила поведения для пациентов и посетителей') {
        document.querySelector('ul a:nth-child(3) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Программа государственных гарантий бесплатного оказания гражданам медицинской помощи') {
        document.querySelector('ul a:nth-child(4) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Юридическая помощь') {
        document.querySelector('ul a:nth-child(5) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Политика в области менеджмента') {
        document.querySelector('ul a:nth-child(6) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Нормативные документы') {
        document.querySelector('ul a:nth-child(7) li').classList.add('active');
    }

    if (document.querySelector('h1').textContent.trim() === 'Горячие линии') {
        document.querySelector('ul a:nth-child(8) li').classList.add('active');
    }


});


