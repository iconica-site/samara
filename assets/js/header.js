// Создаем новый элемент header
let header = document.createElement('header');

// Добавляем содержимое в header (убираем лишний тег <header> в строке innerHTML)
header.innerHTML = `
<nav>
<div class="header_icons">
    <div class="header_icons_block">
        <a href="../index.html">
            <div>
                <img src="../assets/img/sert1.png" alt="">
                <img src="../assets/img/sert2.png" alt="">
            </div>
            <img src="../assets/img/logo.png" alt="">
        </a>
    </div>


    <div class="header_icons_block">
        <p>Самарская городская поликлиника <br> №6 Промышленного района</p>
        <p>Государственное бюджетное учреждение <br> здравоохранения Самарской области</p>
    </div>

    <div class="header_icons_block_mobile">
        <a class="burger_click" href="javascript:void(0);">
            <div class="burger_stick1"></div>
            <div class="burger_stick2"></div>
        </a>


    </div>

</div>
<div class="header_right_menu">


    <img id="specialButton" style="cursor:pointer;" src="https://lidrekon.ru/images/special.png"
        alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" />




    <div class="dropdown">
        <a href="#" class="dropbtn header_right_menu_link">Телефоны</a>
        <div class="dropdown-content dropdown-content_tel">
            <p>Для записи на прием</p>
            <span><a href="tel:88462500565">8(846)250-05-65</a></span>

            <p>Платное отделение</p>
            <span><a href="tel:88462500565">8(846)250-05-65</a></span>

            <p>ДМС</p>
            <span><a href="tel:88462500565">8(846)250-05-65</a></span>

            <p>ОМС</p>
            <span><a href="tel:88462500565">8(846)250-05-65</a></span>


        </div>
    </div>

    <div class="dropdown">
        <a href="../o-nas/o-nas.html" class="dropbtn header_right_menu_link">О нас</a>
        <div class="dropdown-content">
            <a href="../o-nas/o-nas.html">О поликлиннике</a>
            <a href="../news/news.html">Новости</a>
            <a href="#">Свидетельство о регистрации</a>
            <a href="../vakansii/vakansii.html">Вакансии</a>
            <a href="../Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh/Politika_v_otnoshenii_obrabotki_personal_nyh_dannyh.html">Политика конфидециальности</a>
            <a href="../Nashi_dostizheniya/Nashi_dostizheniya.html">Наши достижения</a>
            <a href="../contacts/contacts.html">Контакты</a>
            <a href="#">Приказ об организации платных услуг</a>
            <a href="../Litsenzii__sertifikaty__svidetel_stva__Ustav/Litsenzii__sertifikaty__svidetel_stva__Ustav.html">Лицензии, сертификаты, свидетельства, Устав</a>
        </div>
    </div>

    <div class="dropdown">
        <a href="../vopros-otvet/vopros-otvet.html" class="dropbtn header_right_menu_link">Пациентам</a>
        <div class="dropdown-content">

            <a href="../vopros-otvet/vopros-otvet.html">Вопрос-ответ</a>

            <a href="../prava_i_obyazannosti_grazhdan_v_sfere_ohrany_zdorov_ya/prava_i_obyazannosti_grazhdan_v_sfere_ohrany_zdorov_ya.html">Права и обязанности граждан в сфере охраны здоровья</a>

            <a href="../pravila_povedeniya/pravila_povedeniya.html">Правила поведения для пациентов и посетителей</a>

            <a href="../Programma_gosudarstvennyh_garantij_besplatnogo_okazaniya_grazhdanam_meditsinskoj_pomoschi/Programma_gosudarstvennyh_garantij_besplatnogo_okazaniya_grazhdanam_meditsinskoj_pomoschi.html">Программа государственных гарантий бесплатного оказания гражданам медицинской помощи</a>
            
            <a href="../YUridicheskaya_pomosch/YUridicheskaya_pomosch.html">Юридическая помощь</a>
            
            <a href="../Politika_v_oblasti_menedzhmenta/Politika_v_oblasti_menedzhmenta.html">Политика в области менеджмента</a>

            <a href="../Normativnye_dokumenty/Normativnye_dokumenty.html">Нормативные документы</a>

            <a href="../Goryachii_linii/Goryachii_linii.html">Горячие линии</a>

        </div>
    </div>




    <div><a class="header_link_form header_header_link_form" href="">Записаться на прием</a></div>
</div>
</nav>
<div class="nav_burger_block">
<div class="burgerlogo">

    <div class="burger_logo_block ">
        <img class="brg_logo1" src="../assets/img/logo.png" alt="">
        <div class="burger_logo_block2">
            <img class="brg_logo2" src="../assets/img/sert1.png" alt="">
            <img class="brg_logo2" src="../assets/img/sert2.png" alt="">
        </div>
    </div>

    <div class="burger_logo_block burger_logo_block1">
        <p>Самарская городская поликлиника №6 Промышленного района</p>
        <p>Государственное бюджетное учреждение здравоохранения Самарской области</p>
    </div>

</div>

<div class="burger_content">
    <div class="header_search header_search_burger">
        <input class="burger_input" placeholder="" type="text">
        <button class="brgr_btn_srch">
            <img src="../assets/img/input_search.png" alt="">
        </button>

    </div>




    <div class="burger_navbar">


        <div class="burger_nav_content">

            <div class="burger_navbar_block">
                <p>Телефоны</p>
                <i class="fi fi-rs-angle-small-down     icon1"></i>
            </div>
            <div class="burger_navbar_block_open">

                <div class="burger_navbar_block_open_tel">
                    <p>Для записи на прием</p>
                    <a href="">8(846) 250-05-65</a>

                    <p>Платное отделение</p>
                    <a href="">8(846) 250-05-65</a>

                    <p>ДМС</p>
                    <a href="">8(846) 250-05-65</a>

                    <p>ОМС</p>
                    <a href="">8(846) 250-05-65</a>
                </div>



            </div>
            <div style="display: block !important; height: 1px; width: 80%; background-color: rgba(237, 243, 248, 1); position: relative; z-index: 999; margin-left: 15px ;"
                class="burger_navbar_block_open_border_bottom"></div>

        </div>


        <div class="burger_nav_content">

            <div class="burger_navbar_block burger_navbar_block2">
                <p>О нас</p>
                <i class="fi fi-rs-angle-small-down  icon2"></i>
            </div>

            <div class="burger_navbar_block_open burger_navbar_block_open2">

                <div class="burger_navbar_block_open_tel">

                    <a href="../o-nas/o-nas.html">О поликлиннике</a>
                    <a href="../news/news.html">Новости</a>
                    <a href="#">Свидетельство о регистрации</a>
                    <a href="../Litsenzii__sertifikaty__svidetel_stva__Ustav/Litsenzii__sertifikaty__svidetel_stva__Ustav.html">Лицензии, сертификаты, свидетельства, Устав</a>
                    <a style="color: rgba(92, 186, 234, 1);" href="../o-nas/o-nas.html">Смотреть
                        больше...</a>

                </div>

            </div>
            <div style="display: block !important; height: 1px; width: 80%; background-color: rgba(237, 243, 248, 1); position: relative; z-index: 999; margin-left: 15px ;"
                class="burger_navbar_block_open_border_bottom"></div>
        </div>

        <div class="burger_nav_content">

            <div class="burger_navbar_block burger_navbar_block3">
                <p>Пациентам</p>
                <i class="fi fi-rs-angle-small-down  icon3"></i>
            </div>
            <div class="burger_navbar_block_open burger_navbar_block_open3">

                <div class="burger_navbar_block_open_tel">
                    <div style="display: flex; flex-direction: column; gap: 7px; margin-top: 5px;">
                        <a href="../pacientam/pacientam.html">Вопрос-ответ</a>
                        <a href="../prava_i_obyazannosti_grazhdan_v_sfere_ohrany_zdorov_ya/prava_i_obyazannosti_grazhdan_v_sfere_ohrany_zdorov_ya.html">Права и обязанности граждан в сфере охраны здоровья</a>
                        <a href="../pravila_povedeniya/pravila_povedeniya.html">Правила поведения для пациентов и посетителей</a>
                        <a href="../Programma_gosudarstvennyh_garantij_besplatnogo_okazaniya_grazhdanam_meditsinskoj_pomoschi/Programma_gosudarstvennyh_garantij_besplatnogo_okazaniya_grazhdanam_meditsinskoj_pomoschi.html">Программа государственных гарантий бесплатного оказания гражданам медицинской помощи</a>
                        <a style="color: rgba(92, 186, 234, 1);" href="../vopros-otvet/vopros-otvet.html">Смотреть
                            больше...</a>
                    </div>
                </div>

            </div>
            <div style="display: block !important; height: 1px; width: 80%; background-color: rgba(237, 243, 248, 1); position: relative; z-index: 999; margin-left: 15px ;"
                class="burger_navbar_block_open_border_bottom"></div>
        </div>


        <a class="burger_form" href="">Записаться на прием online</a>

    </div>
</div>
</div>


<div class="header-services-and-poisk-group">
<div class="swiper-container header_services_mobile">
    <div class="swiper-wrapper">
        <a href="../services/services.html" class="swiper-slide header_services_block">
            <div><img src="../assets/img/ic1.png" alt=""></div>
            <p class="pslider">Платные услуги</p>
        </a>
        <a href="../vrachi/vrachi.html" class="swiper-slide header_services_block">
            <div><img src="../assets/img/ic2.png" alt=""></div>
            <p>Врачи</p>
        </a>

        <a href="../price/price.html" class="swiper-slide header_services_block">
            <div><img src="../assets/img/ic3.png" alt=""></div>
            <p>Цены</p>
        </a>

        <a href="../akcii/akcii.html" class="swiper-slide header_services_block">
            <div><img src="../assets/img/ic4.png" alt=""></div>
            <p>Акции</p>
        </a>

        <a target="blank" href="https://gp6.mz63.ru/" class="swiper-slide header_services_block">
            <div><img src="../assets/img/ic5.png" alt=""></div>
            <p>ОМС</p>
        </a>
    </div>
</div>

<div class="header_services">
    <a href="../services/services.html" class="header_services_block">
        <div><img src="../assets/img/ic1.png" alt=""></div>
        <p>Платные услуги</p>
    </a>

    <a href="../vrachi/vrachi.html" class="header_services_block">
        <div><img src="../assets/img/ic2.png" alt=""></div>
        <p>Врачи</p>
    </a>

    <a href="../price/price.html" class="header_services_block">
        <div><img src="../assets/img/ic3.png" alt=""></div>
        <p>Цены</p>
    </a>

    <a href="../akcii/akcii.html" class="header_services_block">
        <div><img src="../assets/img/ic4.png" alt=""></div>
        <p>Акции</p>
    </a>

    <a target="blank" href="https://gp6.mz63.ru/" class="header_services_block">
        <div><img src="../assets/img/ic5.png" alt=""></div>
        <p>ОМС</p>
    </a>
</div>

<div class="header_bottom_menu">



    <div class="header_search header_search_burger">
        <input class="burger_input" placeholder="Поиск по сайту" type="text">
        <button class="brgr_btn_srch">
            <img src="../assets/img/input_search.png" alt="">
        </button>

    </div>







</div>
</div>

`;

// Находим элемент, к которому будем добавлять header
const body2 = document.body;

// Вставляем header в body
body2.insertBefore(header, body2.firstChild);


let burger_click = document.querySelector('.burger_click');
let nav_burger_block = document.querySelector('.nav_burger_block');
let body = document.querySelector('body');
let burger_stick1 = document.querySelector('.burger_stick1');
let burger_stick2 = document.querySelector('.burger_stick2');
let headerTop = document.querySelector('.header-services-and-poisk-group');




burger_click.addEventListener('click', function() {
    if (nav_burger_block.style.display === 'block') {
        nav_burger_block.style.display = 'none';

        burger_stick2.style.transform = '';
        burger_stick2.style.top = ''

        burger_stick1.style.transform = '';
        burger_stick1.style.top = '';

        burger_click.style.top = '';
        body.style.overflow = '';

        headerTop.style.marginTop = ''


        
    } else {
        nav_burger_block.style.display = 'block';

        burger_stick1.style.transform = 'rotate3d(0, 0, 1, 45deg)';
        burger_stick1.style.top = '3px';


        burger_stick2.style.transform = 'rotate3d(0, -1, -5, 45deg)';
        burger_stick2.style.top = '-10px';

        burger_click.style.top = '3px';
        body.style.overflow = 'hidden';

        headerTop.style.marginTop = '0'
        
    }
});



        //навбар

        let burger_navbar_block = document.querySelector('.burger_navbar_block');
        let burger_navbar_block_open = document.querySelector('.burger_navbar_block_open');

        let burger_navbar_block2 = document.querySelector('.burger_navbar_block2');
        let burger_navbar_block_open2 = document.querySelector('.burger_navbar_block_open2');

        let burger_navbar_block3 = document.querySelector('.burger_navbar_block3');
        let burger_navbar_block_open3 = document.querySelector('.burger_navbar_block_open3');

        let burgerIcon = document.querySelector('.icon1');
        let burgerIcon2 = document.querySelector('.icon2');
        let burgerIcon3 = document.querySelector('.icon3');



        



        

        burger_navbar_block.addEventListener('click', function() {
            if (burger_navbar_block_open.style.display === 'block') {
                burger_navbar_block_open.style.display = 'none';

                burgerIcon.style.transform = ''
                burgerIcon.style.top = ''
            } else {
                burger_navbar_block_open.style.display = 'block';

                burgerIcon.style.transform = 'rotate(180deg)'
                burgerIcon.style.top = '-4px'
            }
        });

        
        burger_navbar_block2.addEventListener('click', function() {
            if (burger_navbar_block_open2.style.display === 'block') {
                burger_navbar_block_open2.style.display = 'none';

                burgerIcon2.style.transform = ''
                burgerIcon2.style.top = ''
            } else {
                burger_navbar_block_open2.style.display = 'block';

                burgerIcon2.style.transform = 'rotate(180deg)'
                burgerIcon2.style.top = '-4px'
                
            }
        });


        burger_navbar_block3.addEventListener('click', function() {
            if (burger_navbar_block_open3.style.display === 'block') {
                burger_navbar_block_open3.style.display = 'none';

                burgerIcon3.style.transform = ''
                burgerIcon3.style.top = ''
            } else {
                burger_navbar_block_open3.style.display = 'block';

                burgerIcon3.style.transform = 'rotate(180deg)'
                burgerIcon3.style.top = '-4px'
            }
        });
        




        var swiper1 = new Swiper('.header_services_mobile', {
            slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
            spaceBetween: 10, // отступ
            speed: 800, // Плавная прокрутка
            freeMode: true, // написал выше
            effect: 'slide', // Эффект плавного перехода
            touchRatio: 1.5, // Увеличение чувствительности при свайпе
            resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
            // grabCursor: true, // Указатель мыши меняется на "руку"
            loop: false, // Отключаем бесконечную прокрутку
        });
        






        var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            freeMode: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        initialSlide: 0, 

        

        });





                // Создаем элемент <link>
        let favicon = document.createElement('link');

        // Задаем атрибуты для фавикона
        favicon.rel = 'icon'; // Тип: иконка
        favicon.href = '../assets/img/favicon.ico'; // Путь к фавикону

        // Вставляем фавикон в <head>
        document.head.appendChild(favicon);
