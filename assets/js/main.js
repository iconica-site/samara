
        // burger

        let burger_click = document.querySelector('.burger_click');
        let nav_burger_block = document.querySelector('.nav_burger_block');
        let body = document.querySelector('body');
        let burger_stick1 = document.querySelector('.burger_stick1');
        let burger_stick2 = document.querySelector('.burger_stick2');

        burger_click.addEventListener('click', function() {
            if (nav_burger_block.style.display === 'block') {
                nav_burger_block.style.display = 'none';

                burger_stick2.style.transform = '';
                burger_stick2.style.top = ''

                burger_stick1.style.transform = '';
                burger_stick1.style.top = '';

                burger_click.style.top = '';
                body.style.overflow = '';
                
            } else {
                nav_burger_block.style.display = 'block';

                burger_stick1.style.transform = 'rotate3d(0, 0, 1, 45deg)';
                burger_stick1.style.top = '3px';


                burger_stick2.style.transform = 'rotate3d(0, -1, -5, 45deg)';
                burger_stick2.style.top = '-10px';

                burger_click.style.top = '3px';
                body.style.overflow = 'hidden';
                
            }
        });



        var swiper1 = new Swiper('.header_services_mobile', {
            slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
            spaceBetween: 20, // отступ
            speed: 800, // Плавная прокрутка
            freeMode: true, // написал выше
            effect: 'slide', // Эффект плавного перехода
            touchRatio: 1.5, // Увеличение чувствительности при свайпе
            resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
            // grabCursor: true, // Указатель мыши меняется на "руку"
            loop: false, // Отключаем бесконечную прокрутку
        });
        




         // slider 2

    // var swiper2 = new Swiper(".mySwiper2", {
    //     slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
    //     spaceBetween: 20, // отступ
    //     speed: 800, // Плавная прокрутка
    //     freeMode: true, // написал выше
    //     effect: 'slide', // Эффект плавного перехода
    //     touchRatio: 1.5, // Увеличение чувствительности при свайпе
    //     resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
    //     // grabCursor: true, // Указатель мыши меняется на "руку"
    //     loop: false, // Отключаем бесконечную прокрутку
    // });




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







        //навбар

        let burger_navbar_block = document.querySelector('.burger_navbar_block');
        let burger_navbar_block_open = document.querySelector('.burger_navbar_block_open');

        let burger_navbar_block2 = document.querySelector('.burger_navbar_block2');
        let burger_navbar_block_open2 = document.querySelector('.burger_navbar_block_open2');

        let burger_navbar_block3 = document.querySelector('.burger_navbar_block3');
        let burger_navbar_block_open3 = document.querySelector('.burger_navbar_block_open3');

        



        

        burger_navbar_block.addEventListener('click', function() {
            if (burger_navbar_block_open.style.display === 'block') {
                burger_navbar_block_open.style.display = 'none';
            } else {
                burger_navbar_block_open.style.display = 'block';
            }
        });

        
        burger_navbar_block2.addEventListener('click', function() {
            if (burger_navbar_block_open2.style.display === 'block') {
                burger_navbar_block_open2.style.display = 'none';
            } else {
                burger_navbar_block_open2.style.display = 'block';
            }
        });


        burger_navbar_block3.addEventListener('click', function() {
            if (burger_navbar_block_open3.style.display === 'block') {
                burger_navbar_block_open3.style.display = 'none';
            } else {
                burger_navbar_block_open3.style.display = 'block';
            }
        });
        
       
       