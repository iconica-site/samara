# import shutil

# # Укажите полный путь к файлу
# source_file = 'C:/Users/Pluug/Documents/GitHub/samara/vrachi-detail/vrachi-detail.html'

# # Количество копий
# num_copies = 100

# # Создаем копии с пронумерованными названиями
# for i in range(1, num_copies + 1):
#     new_file = f'C:/Users/Pluug/Documents/GitHub/samara/vrachi-detail/vrachi-detail{i}.html'
#     shutil.copy(source_file, new_file)
#     print(f'Создан файл: {new_file}')

# print("Все файлы успешно созданы.")


from bs4 import BeautifulSoup

# Исходный файл HTML-шаблона
source_file = 'C:/Users/Pluug/Documents/GitHub/samara/vrachi-detail/vrachi-detail.html'

# Список словарей с данными для каждого файла
fio_data_list = [
    {"fio": "Бекназарова Юлия Вячеславовна", "role": "Врач", "speciality": "Терапия", "photo_num": 1},
    {"fio": "Кривошеева Татьяна Викторовна", "role": "Врач", "speciality": "Акушерство и гинекология", "photo_num": 2},
    {"fio": "Петрова Ольга Владиславовна", "role": "Врач", "speciality": "Акушерство и гинекология", "photo_num": 3},
    {"fio": "Есипова Светлана Вадимовна", "role": "Врач", "speciality": "Акушерство и гинекология", "photo_num": 4},
    {"fio": "Угарова Ольга Олеговна", "role": "Врач", "speciality": "Функциональная диагностика", "photo_num": 5},
    {"fio": "Жалмуханова Эльвира Фяридовна", "role": "Врач", "speciality": "Функциональная диагностика", "photo_num": 6},
    {"fio": "Долгушина Лидия Ивановна", "role": "Медсестра", "speciality": "Функциональная диагностика", "photo_num": 7},
    {"fio": "Бикметова Дарья Юрьевна", "role": "Врач", "speciality": "Ультразвуковая диагностика", "photo_num": 8},
    {"fio": "Строкина Наталья Михайловна", "role": "Медсестра", "speciality": "Рентгенология", "photo_num": 9},
    {"fio": "Дорофеева Инна Владимировна", "role": "Медицинская сестра", "speciality": "Рентгенология", "photo_num": 10},
    {"fio": "Натарова Галина Николаевна", "role": "Врач", "speciality": "Клиническая лабораторная диагностика", "photo_num": 11},
    {"fio": "Курочина Надежда Юрьевна", "role": "Фельдшер-лаборант", "speciality": "Лабораторная диагностика", "photo_num": 12},
    {"fio": "Золина Оксана Сергеевна", "role": "Фельдшер-лаборант", "speciality": "Лабораторная диагностика", "photo_num": 13},
    {"fio": "Шарипова Вера Александровна", "role": "Биолог-преподаватель", "speciality": "Клиническая лабораторная диагностика", "photo_num": 14},
    {"fio": "Гусакова Екатерина Алексеевна", "role": "Врач", "speciality": "Физиотерапия", "photo_num": 15},
    {"fio": "Трухов Константин Николаевич", "role": "Врач", "speciality": "Хирургия", "photo_num": 16},
    {"fio": "Бодрова Ольга Александровна", "role": "Врач", "speciality": "Эндокринология", "photo_num": 17},
    {"fio": "Захарова Оксана Владимировна", "role": "Врач", "speciality": "Эндокринология", "photo_num": 18},
    {"fio": "Никулина Ирина Викторовна", "role": "Врач", "speciality": "Урология", "photo_num": 19},
    {"fio": "Михайлов Александр Георгиевич", "role": "Врач", "speciality": "Эндоскопия", "photo_num": 20},
    {"fio": "Корочук Светлана Леонидовна", "role": "Врач", "speciality": "Оториноларингология", "photo_num": 21},
    {"fio": "Васин Борис Алексеевич", "role": "Врач", "speciality": "Оториноларингология", "photo_num": 22},
    {"fio": "Скопина Анастасия Петровна", "role": "Врач", "speciality": "Оториноларингология", "photo_num": 23},
    {"fio": "Чернова Любовь Парфирьевна", "role": "Врач", "speciality": "Офтальмология", "photo_num": 24},
    {"fio": "Чульмякова Варвара Сергеевна", "role": "Врач", "speciality": "Офтальмология", "photo_num": 25},
    {"fio": "Максимова Зульфия Рифатовна", "role": "Врач", "speciality": "Неврология", "photo_num": 26},
    {"fio": "Годоба Наталья Михайловна", "role": "Врач", "speciality": "Терапия", "photo_num": 27},
    {"fio": "Ромадина Екатерина Анатольевна", "role": "Медсестра общей практики", "speciality": "Сестринское дело (среднее образование)", "photo_num": 28},
    {"fio": "Байзульдинова Алия Сагиевна", "role": "Врач", "speciality": "Оториноларингология", "photo_num": 29},
    {"fio": "Каткова Анна Васильевна", "role": "Врач", "speciality": "Ультразвуковая диагностика", "photo_num": 30},
    {"fio": "Альнуров Габдель-Мажит Хайржанович", "role": "Фельдшер", "speciality": "Медицинский массаж", "photo_num": 31},
    {"fio": "Вавилова Елена Николаевна", "role": "Врач", "speciality": "Дерматовенерология", "photo_num": 32},
    {"fio": "Дорогойченкова Оксана Петровна", "role": "Медсестра", "speciality": "Сестринское дело (среднее образование)", "photo_num": 33},
    {"fio": "Сухина Екатерина Анатольевна", "role": "Медсестра", "speciality": "Сестринское дело (среднее образование)", "photo_num": 34},
    {"fio": "Фролова Ирина Петровна", "role": "Медсестра", "speciality": "Сестринское дело (среднее образование)", "photo_num": 35},
    {"fio": "Карпюк Наталья Михайловна", "role": "Медсестра", "speciality": "Медицинский массаж", "photo_num": 36},
    {"fio": "Казакбаев Руслан Миниярович", "role": "Коммерческий директор", "speciality": "", "photo_num": 37},
    {"fio": "Спирина Арина Андреевна", "role": "Врач акушер", "speciality": "гинеколог", "photo_num": 38},
    {"fio": "Мендаева Галия Ряшитовна", "role": "Врач акушер", "speciality": "гинеколог", "photo_num": 39},
    {"fio": "Шуляк Наталья Николаевна", "role": "Администратор", "speciality": "", "photo_num": 40},
    {"fio": "Москалева Татьяна Александровна", "role": "Медицинский психолог", "speciality": "", "photo_num": 41}
]

# # Чтение исходного HTML-шаблона
# with open(source_file, 'r', encoding='utf-8') as file:
#     template_content = file.read()

# # Создание файлов с данными из fio_data_list
# for i, data in enumerate(fio_data_list, start=1):
#     # Создаем копию HTML с использованием BeautifulSoup
#     soup = BeautifulSoup(template_content, 'html.parser')
    
#     # Обновляем тег <h2 class="name"> с ФИО
#     h2_tag = soup.find('h2', class_='name')
#     if h2_tag:
#         h2_tag.string = data["fio"]
    
#     # Обновляем тег <div class="name" style="color: rgba(191, 200, 210, 1);"> с ФИО
#     div_tag = soup.find('div', class_='name', style="color: rgba(191, 200, 210, 1);")
#     if div_tag:
#         div_tag.string = data["fio"]
    
#     # Обновляем тег <span class="role"> с ролью
#     role_tag = soup.find('span', class_='role')
#     if role_tag:
#         role_tag.string = data["role"]
    
#     # Обновляем тег <span class="speciality"> со специальностью
#     speciality_tag = soup.find('span', class_='speciality')
#     if speciality_tag:
#         speciality_tag.string = data["speciality"]

#     # Создаем новый файл с уникальным именем
#     new_file = f'C:/Users/Pluug/Documents/GitHub/samara/vrachi-detail/vrachi-detail{i}.html'
#     with open(new_file, 'w', encoding='utf-8') as file:
#         file.write(str(soup))
    
#     print(f'Создан файл: {new_file} с ФИО: {data["fio"]}, ролью: {data["role"]}, специальностью: {data["speciality"]}')

# print("Все файлы успешно созданы.")


from bs4 import BeautifulSoup

# Чтение исходного HTML-шаблона
with open(source_file, 'r', encoding='utf-8') as file:
    template_content = file.read()

# Создание файлов с данными из fio_data_list
for i, data in enumerate(fio_data_list, start=1):
    # Создаем копию HTML с использованием BeautifulSoup
    soup = BeautifulSoup(template_content, 'html.parser')
    
    # Обновляем тег <h2 class="name"> с ФИО
    h2_tag = soup.find('h2', class_='name')
    if h2_tag:
        h2_tag.string = data["fio"]
    
    # Обновляем тег <div class="name" style="color: rgba(191, 200, 210, 1);"> с ФИО
    div_tag = soup.find('div', class_='name', style="color: rgba(191, 200, 210, 1);")
    if div_tag:
        div_tag.string = data["fio"]
    
    # Обновляем тег <span class="role"> с ролью
    role_tag = soup.find('span', class_='role')
    if role_tag:
        role_tag.string = data["role"]
    
    # Обновляем тег <span class="speciality"> со специальностью
    speciality_tag = soup.find('span', class_='speciality')
    if speciality_tag:
        speciality_tag.string = data["speciality"]
    
    # Обновляем тег <img class="photo_card" src="../assets/img/doctor.png" alt=""> с путём к картинке
    img_tag = soup.find('img', class_='photo_card')
    if img_tag:
        img_tag['src'] = f"../vrachi-detail/img/{i}.jpg"
    
    # Создаем новый файл с уникальным именем
    new_file = f'C:/Users/Pluug/Documents/GitHub/samara/vrachi-detail/vrachi-detail{i}.html'
    with open(new_file, 'w', encoding='utf-8') as file:
        file.write(str(soup))
    
    print(f'Создан файл: {new_file} с ФИО: {data["fio"]}, ролью: {data["role"]}, специальностью: {data["speciality"]}')

print("Все файлы успешно созданы.")




