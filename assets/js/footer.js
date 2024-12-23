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
                <div><a class="footer_link1" href="">Позвоните мне</a></div>
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
                    <a href=""><img src="../assets/img/tg.png" alt=""></a>
                    <a href=""><img src="../assets/img/vk.png" alt=""></a>
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
    `;

    document.body.appendChild(footer);
});
