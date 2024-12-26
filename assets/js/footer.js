document.addEventListener("DOMContentLoaded", () => {
    let footer = document.createElement('footer');

    footer.innerHTML = `
        
    <div class="footer_row_one">
    <div class="header_icons header_icons_footer">
        <div class="header_icons_block">
            <a class="header_icons_block_link header_icons_block_link_foot" href="/">
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
        <a class="footer_row_one_block_tel" href="tel:+78462500565">8(846) 250-05-65</a>
        <div><a class="footer_link1" href="javascript:void(0)">Позвоните мне</a></div>
        <div><a class="footer_link2" href="">Записаться на прием</a></div>
    </div>
    <div class="footer_adapt_block">
        <div class="footer_adapt_block_tel_soc">
            <a class="footer_adapt_block_tel_socTel" href="tel:+78462500565">8(846) 250-05-65</a>
            <div class="socialF">
                <a href=""><img src="../assets/img/soc3 (3).png" alt=""></a>
                <a href=""><img src="../assets/img/soc3 (3).png" alt=""></a>
                <a href=""><img src="../assets/img/soc3 (3).png" alt=""></a>
            </div>
        </div>
        <div class="footerLinks">
            <a href="../vrachi/vrachi.html">Все врачи</a>
            <a href="">Записаться на прием</a>
        </div>
    </div>
</div>
<div class="footer_row_two">
    <div class="footer_row_two_link">
        <div class="footer_row_two_block">
            <a href="../o-nas/o-nas.html">О нас</a>
            <a href="">Услуги ОМС</a>
            <a href="../pacientam/pacientam.html">Пациентам</a>
            <a href="">Контакты</a>
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
            <a href=""><img src="../assets/img/wsapp.png" alt=""></a>
            <a target="_blank" href="https://t.me/Sgp6_samara"><img src="../assets/img/tg.png" alt=""></a>
            <a target="_blank" href="https://vk.com/sgp6plus"><img src="../assets/img/vk.png" alt=""></a>
        </div>
        <a class="conf_polit" href="">Политика конфиденциальности</a>
        <p class="conf_polit_p">Все права защищены. © 2024 </p>
    </div>
</div>
<div class="footer_row_three">
    Информация, размещенная на данном сайте, не является публичной офертой...
    <div class="footer_conf">
        <a class="conf_polit2" href="">Политика конфиденциальности</a>
        <p class="conf_polit_p">Все права защищены. © 2024 </p>
    </div>
</div>














<div class="popup-overlay" id="popupOverlay">
    <div class="popup">
        <span class="close-btn" id="closePopup">&times;</span>
        <p style="color: rgba(92, 186, 234, 1); font-size: 16px;">СГП №6 Внебюджетное отделение Самара</p>
        <p>Запись на прием</p>
        <form id="popupForm">
            <input type="text" placeholder="Как вас зовут?" required>
            <input type="tel" placeholder="Номер телефона" required>
            <textarea placeholder="Ваш вопрос" rows="4" required></textarea>
            <button type="submit">Отправить</button>
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

    // Обработка отправки формы
    document.getElementById('popupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Форма отправлена!');
        document.getElementById('popupOverlay').style.display = 'none';
    });
});
