
    //     // burger

    //     let burger_click = document.querySelector('.burger_click');
    //     let nav_burger_block = document.querySelector('.nav_burger_block');
    //     let body = document.querySelector('body');
    //     let burger_stick1 = document.querySelector('.burger_stick1');
    //     let burger_stick2 = document.querySelector('.burger_stick2');
    //     let headerTop = document.querySelector('.header-services-and-poisk-group');

    //     burger_click.addEventListener('click', function() {
    //         if (nav_burger_block.style.display === 'block') {
    //             nav_burger_block.style.display = 'none';

    //             burger_stick2.style.transform = '';
    //             burger_stick2.style.top = ''

    //             burger_stick1.style.transform = '';
    //             burger_stick1.style.top = '';

    //             burger_click.style.top = '';
    //             body.style.overflow = '';

    //             headerTop.style.marginTop = ''


                
    //         } else {
    //             nav_burger_block.style.display = 'block';

    //             burger_stick1.style.transform = 'rotate3d(0, 0, 1, 45deg)';
    //             burger_stick1.style.top = '3px';


    //             burger_stick2.style.transform = 'rotate3d(0, -1, -5, 45deg)';
    //             burger_stick2.style.top = '-10px';

    //             burger_click.style.top = '3px';
    //             body.style.overflow = 'hidden';

    //             headerTop.style.marginTop = '0'
                
    //         }
    //     });



    //     var swiper1 = new Swiper('.header_services_mobile', {
    //         slidesPerView: 'auto', // чтобы не листалось по одному слайду надо здесь поставить авто и добавить freeMode true
    //         spaceBetween: 10, // отступ
    //         speed: 800, // Плавная прокрутка
    //         freeMode: true, // написал выше
    //         effect: 'slide', // Эффект плавного перехода
    //         touchRatio: 1.5, // Увеличение чувствительности при свайпе
    //         resistanceRatio: 0.8, // Плавное сопротивление при достижении конца слайдера
    //         // grabCursor: true, // Указатель мыши меняется на "руку"
    //         loop: false, // Отключаем бесконечную прокрутку
    //     });
        






    // var swiper2 = new Swiper(".mySwiper2", {
    //     slidesPerView: 'auto',
    //     spaceBetween: 30,
    //     freeMode: true,
    //     pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    //   initialSlide: 0, 

    

    // });







    //     //навбар

    //     let burger_navbar_block = document.querySelector('.burger_navbar_block');
    //     let burger_navbar_block_open = document.querySelector('.burger_navbar_block_open');

    //     let burger_navbar_block2 = document.querySelector('.burger_navbar_block2');
    //     let burger_navbar_block_open2 = document.querySelector('.burger_navbar_block_open2');

    //     let burger_navbar_block3 = document.querySelector('.burger_navbar_block3');
    //     let burger_navbar_block_open3 = document.querySelector('.burger_navbar_block_open3');

    //     let burgerIcon = document.querySelector('.icon1');
    //     let burgerIcon2 = document.querySelector('.icon2');
    //     let burgerIcon3 = document.querySelector('.icon3');



        



        

    //     burger_navbar_block.addEventListener('click', function() {
    //         if (burger_navbar_block_open.style.display === 'block') {
    //             burger_navbar_block_open.style.display = 'none';

    //             burgerIcon.style.transform = ''
    //             burgerIcon.style.top = ''
    //         } else {
    //             burger_navbar_block_open.style.display = 'block';

    //             burgerIcon.style.transform = 'rotate(180deg)'
    //             burgerIcon.style.top = '-4px'
    //         }
    //     });

        
    //     burger_navbar_block2.addEventListener('click', function() {
    //         if (burger_navbar_block_open2.style.display === 'block') {
    //             burger_navbar_block_open2.style.display = 'none';

    //             burgerIcon2.style.transform = ''
    //             burgerIcon2.style.top = ''
    //         } else {
    //             burger_navbar_block_open2.style.display = 'block';

    //             burgerIcon2.style.transform = 'rotate(180deg)'
    //             burgerIcon2.style.top = '-4px'
                
    //         }
    //     });


    //     burger_navbar_block3.addEventListener('click', function() {
    //         if (burger_navbar_block_open3.style.display === 'block') {
    //             burger_navbar_block_open3.style.display = 'none';

    //             burgerIcon3.style.transform = ''
    //             burgerIcon3.style.top = ''
    //         } else {
    //             burger_navbar_block_open3.style.display = 'block';

    //             burgerIcon3.style.transform = 'rotate(180deg)'
    //             burgerIcon3.style.top = '-4px'
    //         }
    //     });
        
       
       




// vrachi

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".docs_container_block");
    const showMoreButton = document.querySelector(".show_more2");
    const itemsToShow = 8; // Количество элементов для отображения за раз
    let currentlyShown = itemsToShow; // Количество элементов, которые сейчас отображены
  
    // Скрываем все элементы, кроме первых 9
    items.forEach((item, index) => {
      if (index >= itemsToShow) {
        item.style.display = "none";
      }
    });
  
    // Обработчик события для кнопки "Показать ещё"
    showMoreButton.addEventListener("click", () => {
      // Показываем следующие 9 элементов
      for (let i = currentlyShown; i < currentlyShown + itemsToShow && i < items.length; i++) {
        items[i].style.display = "block";
      }
      currentlyShown += itemsToShow;
  
      // Скрываем кнопку, если больше нечего показывать
      if (currentlyShown >= items.length) {
        showMoreButton.style.display = "none";
      }
    });
  });
  