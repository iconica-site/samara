document.addEventListener("DOMContentLoaded", () => {
    let footer = document.createElement('footer');

    footer.innerHTML = `
        
    <div class="footer_row_one">
    <div class="header_icons header_icons_footer">
        <div class="header_icons_block">
            <a class="header_icons_block_link header_icons_block_link_foot" href="../index.html">
                <div class="header_icons_block_link_div">
                    <img class="footer_logos" src="../assets/img/sert1.png" alt="">
                    <img class="footer_logos" src="../assets/img/sert2.png" alt="">
                </div>
                <img class="footer_logo footer_logo-foot" src="../assets/img/logo.png" alt="">
            </a>
        </div>
        <div style="display: block;" class="header_icons_block header_icons_blockFooter">
            <p>Самарская городская поликлиника <br> N6 Промышленного района</p>
            <p>Государственное бюджетное учреждение <br> здравоохранения Самарской области</p>
        </div>
    </div>
    <div class="footer_row_one_block">
        <a class="footer_row_one_block_tel" href="tel:+79033011301">8-903-301-13-01</a>
        <div><a class="footer_link1" href="javascript:void(0)">Позвоните мне</a></div>
        <div><a class="footer_link2" href="javascript:void(0)">Записаться на прием</a></div>
    </div>
    <div class="footer_adapt_block">
        <div class="footer_adapt_block_tel_soc">
        <a class="footer_adapt_block_tel_socTel" href="tel:+79033011301">8-903-301-13-01</a>
            <div class="socialF">
            <a target="_blank" href="https://t.me/Sgp6_samara"><img src="../assets/img/tg.png" alt=""></a>
            <a target="_blank" href="https://vk.com/sgp6plus"><img src="../assets/img/vk.png" alt=""></a>
            <a target="_blank" href="https://wa.me/89033011301"><img src="../assets/img/wsapp.png" alt="WhatsApp"></a>
            </div>
        </div>
        <div class="footerLinks">
            <a href="../vrachi/vrachi.html">Все врачи</a>
            <a class="mobileBtnForm" href="javascript:void(0)">Записаться на прием</a>
        </div>
    </div>
</div>
<div class="footer_row_two">
    <div class="footer_row_two_link">
        <div class="footer_row_two_block">
            <a href="../o-nas/o-nas.html">О нас</a>
            <a href="https://gp6.mz63.ru/">Услуги ОМС</a>
            <a href="../vopros-otvet/vopros-otvet.html">Пациентам</a>
            <a href="../contacts/contacts.html">Контакты</a>
        </div>
        <div class="footer_row_two_block">
            <a href="../vrachi/vrachi.html">Врачи</a>
            <a href="../price/price.html">Цены</a>
            <a href="../akcii/akcii.html">Акции</a>
            <a href="../services/services.html">Платные услуги</a>
        </div>
    </div>
    <div class="footer_row_two_social">
        <div>
            <a target="_blank" href="https://wa.me/89033011301"><img src="../assets/img/wsapp.png" alt="WhatsApp"></a>
            <a target="_blank" href="https://t.me/Sgp6_samara"><img src="../assets/img/tg.png" alt=""></a>
            <a target="_blank" href="https://vk.com/sgp6plus"><img src="../assets/img/vk.png" alt=""></a>
        </div>
        <a class="conf_polit" href="../Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh/Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh.html">Политика конфиденциальности</a>
        <p class="conf_polit_p">Все права защищены. © 2024 </p>
    </div>
</div>
<div class="footer_row_three">
Информация, размещенная на данном сайте, не является публичной офертой в смысле статьи 435 Гражданского Кодекса Российской Федерации, носит исключительно информационно-вспомогательный характер и не предполагается для использования в коммерческих целях. Использование, информации, размещенной на данном сайте, в том числе с указанием данного сайта в качестве информационного источника без письменного согласия ГБУЗ СО СГП No6 Промышленного района запрещено. Любые риски, связанные с использованием информации, размещенной на данном сайте, несут исключительно посетители сайта.
    <div class="footer_conf">
    <a class="conf_polit2"
    href="./Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh/Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh.html">Политика
    конфидециальности</a>
        <p class="conf_polit_p">Все права защищены. © 2024 </p>
    </div>
</div>














<div class="popup-overlay" id="popupOverlay">
    <div class="popup">
        <span class="close-btn" id="closePopup">&times;</span>
       <!-- <p style="color: rgba(92, 186, 234, 1); font-size: 16px;">СГП №6 Внебюджетное отделение Самара</p> -->
        <p>Запись на прием</p>
        <form id="popupForm" action="../assets/forms/form1.php" method="POST">
        <input type="text" name="name" placeholder="Как вас зовут?" required
            style="width: 100%; margin-bottom: 15px; padding: 10px; font-size: 14px;">
        <input type="tel" name="phone" placeholder="Номер телефона" required
            style="width: 100%; margin-bottom: 15px; padding: 10px; font-size: 14px;">
        <textarea name="question" placeholder="Ваш вопрос" rows="4" required
            style="width: 100%; margin-bottom: 15px; padding: 10px; font-size: 14px; resize: none;"></textarea>
        <button type="submit"
            style="width: 100%; margin-bottom: 15px; padding: 10px; background: rgba(92, 186, 234, 1); color: white; border: none; cursor: pointer; transition: 0.15s;">Отправить</button>
    </form>

    </div>
</div>



<style>
.akcii-block {
    cursor: pointer;
}

.popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    
    z-index: 999;
}
.popup {
    background: white;
    padding: 35px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 420px;
    width: 100%;
}
.popup p {
    margin: 0 0 20px;
    font-size: 16px;
}
.popup input,
.popup textarea,
.popup button {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 14px;

    resize: none;
}


.popup button {
    background: rgba(92, 186, 234, 1);;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.15s;
}
.popup button:hover {
    background: rgb(40, 172, 238);
    transition: 0.15s;
}
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
}
</style>



<!--
<div id="overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 999;"></div>


<div style="max-width: 900px; width: 100%; background-color: #6C95FF; border-radius: 20px; display: none; padding-bottom: 40px;"

    class="popUpMain">
    

    <form class="mainForm" style="display: flex; flex-direction: column; align-items: center;" action="">
        <span style="display: flex;  padding-top: 40px; max-width: 500px; width: 100%;">
            <p
                style="color: white; text-align: center; font-size: 30px; font-weight: 500; max-width: 500px; width: 100%;">
                Запись на прием</p>
            <div style="cursor: pointer;" class="cross"></div>
        </span>

        <p
            style="color: white; font-size: 18px; max-width: 500px; width: 100%; text-align: center; padding-top: 30px; line-height: 21px;">
            Оставьте свои контактные данные и мы вам перезвоним в течение 5 минут</p>
        <p
            style="color: white; font-size: 16px; max-width: 500px; width: 100%; text-align: center; padding-top: 30px; font-weight: 200; line-height: 19px;">
            Записываясь на амбулаторный прием, вы подтверждаете, что <br> у вас отсутствуют признаки ОРВИ, повышенная
            температура, <br> и вы не контактировали в течение последних 14 дней с <br> лицами, у которых лабораторно
            подтвержден диагноз<br> COVID-19</p>
        <input
            style="background-color: rgba(255, 255, 255, 0.4); max-width: 480px; width: 100%; height: 47px; border: none; border-radius: 10px; margin-top: 30px; padding-left: 20px; box-sizing: border-box;"
            type="text" placeholder="Имя*" required>
        <input
            style="background-color: rgba(255, 255, 255, 0.4); max-width: 480px; width: 100%; height: 47px; border: none; border-radius: 10px; margin-top: 10px; padding-left: 20px; box-sizing: border-box;"
            type="text" placeholder="Телефон*" required>
        <input
            style="background-color: rgba(255, 255, 255, 0.4); max-width: 480px; width: 100%; height: 47px; border: none; border-radius: 10px; margin-top: 10px; padding-left: 20px; box-sizing: border-box;"
            type="text" placeholder="Почта">
        <button type="submit"
            style="max-width: 500px; width: 100%; color: rgba(108, 149, 255, 1); border-radius: 100px; font-size: 18px; height: 52px; border: none; margin-top: 20px; background-color: rgba(255, 255, 255, 1); cursor: pointer;">Записаться
            на прием</button>
        <span
            style="font-family: Manrope, serif; margin-top: 10px; font-size: 14px; max-width: 500px; width: 100%; text-align: center; line-height: 14px; color: rgba(255, 255, 255, 0.692);">нажимая
            кнопку, я соглашаюсь на обработку моих персональных данных, в соответствии с <a style="color: white;"
                href="./Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh/Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh.html">политикой конфиденциальности</a></span>
    </form>
</div>
-->








    `;

    document.body.appendChild(footer);



    // Находим элемент с классом .footer_link1
    const footerLink = document.querySelector('.footer_link1');
    if (footerLink) {
        footerLink.addEventListener('click', () => {
            document.getElementById('popupOverlay').style.display = 'flex';
        });
    }

    // Закрытие попапа по кнопке "закрыть"
    document.getElementById('closePopup').addEventListener('click', () => {
        document.getElementById('popupOverlay').style.display = 'none';
    });

    // Закрытие попапа при клике на фон
    document.getElementById('popupOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            document.getElementById('popupOverlay').style.display = 'none';
        }
    });

    










});




    
document.addEventListener('DOMContentLoaded', () => {
    const popUpMain = document.querySelector('.popUpMain');
    const overlay = document.getElementById('overlay');
    const openButton = document.querySelector('.header_link_form');
    const closeButton = document.querySelector('.cross');
    const bodyOver = document.body;

    let burger_formBtnMobile = document.querySelector('.burger_form');
    let mobileBtnForm = document.querySelector('.mobileBtnForm');
    let footer_link2 = document.querySelector('.footer_link2');

   
    

    // Функция для открытия формы
    const openForm = () => {

        popUpMain.style.display = 'flex';
        overlay.style.display = 'block';
        bodyOver.style.overflow = 'hidden';
    };

    // Функция для закрытия формы
    const closeForm = () => {

        popUpMain.style.display = 'none';
        overlay.style.display = 'none';
        bodyOver.style.overflow = '';
    };

    // Открытие формы
    openButton.addEventListener('click', openForm);
    burger_formBtnMobile.addEventListener('click', openForm);
    mobileBtnForm.addEventListener('click', openForm);
    footer_link2.addEventListener('click', openForm);

    // Закрытие формы
    closeButton.addEventListener('click', closeForm);

    // Закрытие формы по клику на overlay
    overlay.addEventListener('click', closeForm);
});


        
// Найдем все кнопки в блоке left_menu_btns_row
const buttons = document.querySelectorAll('.left_menu_btns_row button');

// Первый и последний элементы кнопок
const firstButton = buttons[0];
const lastButton = buttons[buttons.length - 1];

// Имитируем клик на кнопке с id="callButton" при клике на первый элемент
firstButton.addEventListener('click', function() {
    const callButton = document.getElementById('callButton');
    if (callButton) {
        callButton.click();  // Имитируем клик на callButton
    }
});

// Имитируем клик на кнопке с class="footer_link1" при клике на последний элемент
lastButton.addEventListener('click', function() {
    const footerLink = document.querySelector('.footer_link1');
    if (footerLink) {
        footerLink.click();  // Имитируем клик на footer_link1
    }
});
