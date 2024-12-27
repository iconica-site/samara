# import os
# from bs4 import BeautifulSoup

# # Получаем путь к текущей директории
# current_directory = os.path.dirname(os.path.abspath(__file__))

# # Проходим по всем файлам в директории
# for filename in os.listdir(current_directory):
#     # Проверяем, что файл имеет расширение .html
#     if filename.endswith('.html'):
#         file_path = os.path.join(current_directory, filename)
        
#         # Открываем файл и читаем его содержимое
#         with open(file_path, 'r', encoding='utf-8') as file:
#             content = file.read()

#         # Используем BeautifulSoup для парсинга HTML
#         soup = BeautifulSoup(content, 'html.parser')

#         # Удаляем теги <header> и <footer>
#         for tag in ['header', 'footer']:
#             for element in soup.find_all(tag):
#                 element.decompose()  # Удаляем элемент из дерева

#         # Записываем измененный контент обратно в файл
#         with open(file_path, 'w', encoding='utf-8') as file:
#             file.write(str(soup))

# print("Теги <header> и <footer> удалены из всех .html файлов.")




# import os
# from bs4 import BeautifulSoup

# # Получаем путь к текущей директории
# current_directory = os.path.dirname(os.path.abspath(__file__))

# # Проходим по всем файлам в директории
# for filename in os.listdir(current_directory):
#     # Проверяем, что файл имеет расширение .html
#     if filename.endswith('.html'):
#         file_path = os.path.join(current_directory, filename)
        
#         # Открываем файл и читаем его содержимое
#         with open(file_path, 'r', encoding='utf-8') as file:
#             content = file.read()

#         # Используем BeautifulSoup для парсинга HTML
#         soup = BeautifulSoup(content, 'html.parser')

#         # Удаляем теги <header> и <footer>
#         for tag in ['header', 'footer']:
#             for element in soup.find_all(tag):
#                 element.decompose()  # Удаляем элемент из дерева

#         # Удаляем <script src="../assets/js/main.js"></script>
#         for script in soup.find_all('script', src="../assets/js/main.js"):
#             script.decompose()  # Удаляем элемент <script>

#         # Записываем измененный контент обратно в файл
#         with open(file_path, 'w', encoding='utf-8') as file:
#             file.write(str(soup))

# print("Теги <header>, <footer> и <script src='../assets/js/main.js'> удалены из всех .html файлов.")




# import os
# from bs4 import BeautifulSoup

# # Получаем путь к текущей директории
# current_directory = os.path.dirname(os.path.abspath(__file__))

# # Проходим по всем файлам в директории
# for filename in os.listdir(current_directory):
#     # Проверяем, что файл имеет расширение .html
#     if filename.endswith('.html'):
#         file_path = os.path.join(current_directory, filename)
        
#         # Открываем файл и читаем его содержимое
#         with open(file_path, 'r', encoding='utf-8') as file:
#             content = file.read()

#         # Используем BeautifulSoup для парсинга HTML
#         soup = BeautifulSoup(content, 'html.parser')

#         # Удаляем теги <header> и <footer>
#         for tag in ['header', 'footer']:
#             for element in soup.find_all(tag):
#                 element.decompose()  # Удаляем элемент из дерева

#         # Удаляем <script src="../assets/js/main.js"></script>
#         for script in soup.find_all('script', src="../assets/js/main.js"):
#             script.decompose()  # Удаляем элемент <script>

#         # Создаем новый тег <script src="../assets/js/footer.js" defer></script>
#         footer_script = soup.new_tag('script', src="../assets/js/footer.js", defer=True)
        
#         # Ищем закрывающий тег </body> и вставляем новый скрипт перед ним
#         body_tag = soup.find('body')
#         if body_tag:
#             body_tag.append(footer_script)

#         # Записываем измененный контент обратно в файл
#         with open(file_path, 'w', encoding='utf-8') as file:
#             file.write(str(soup))

# print("Теги <header>, <footer>, <script src='../assets/js/main.js'> удалены, а <script src='../assets/js/footer.js' defer></script> добавлен перед </body> во всех .html файлах.")



# import os
# from bs4 import BeautifulSoup

# # Получаем путь к текущей директории
# current_directory = os.path.dirname(os.path.abspath(__file__))

# # Проходим по всем файлам в директории
# for filename in os.listdir(current_directory):
#     # Проверяем, что файл имеет расширение .html
#     if filename.endswith('.html'):
#         file_path = os.path.join(current_directory, filename)
        
#         # Открываем файл и читаем его содержимое
#         with open(file_path, 'r', encoding='utf-8') as file:
#             content = file.read()

#         # Используем BeautifulSoup для парсинга HTML
#         soup = BeautifulSoup(content, 'html.parser')

#         # Удаляем <script defer="True" src="../assets/js/footer.js"></script>
#         for script in soup.find_all('script', src="../assets/js/footer.js", defer=True):
#             script.decompose()  # Удаляем тег <script>

#         # Записываем измененный контент обратно в файл
#         with open(file_path, 'w', encoding='utf-8') as file:
#             file.write(str(soup))

# print("Тег <script defer='True' src='../assets/js/footer.js'></script> удален из всех .html файлов.")

# import os
# from bs4 import BeautifulSoup

# # Получаем путь к текущей директории
# current_directory = os.path.dirname(os.path.abspath(__file__))

# # Проходим по всем файлам в директории
# for filename in os.listdir(current_directory):
#     # Проверяем, что файл имеет расширение .html
#     if filename.endswith('.html'):
#         file_path = os.path.join(current_directory, filename)
        
#         # Открываем файл и читаем его содержимое
#         with open(file_path, 'r', encoding='utf-8') as file:
#             content = file.read()

#         # Используем BeautifulSoup для парсинга HTML
#         soup = BeautifulSoup(content, 'html.parser')

#         # Удаляем теги <header> и <footer>
#         for tag in ['header', 'footer']:
#             for element in soup.find_all(tag):
#                 element.decompose()  # Удаляем элемент из дерева

#         # Удаляем <script src="../assets/js/main.js"></script>
#         for script in soup.find_all('script', src="../assets/js/main.js"):
#             script.decompose()  # Удаляем элемент <script>

#         # Создаем новый тег <script src="../assets/js/footer.js" defer></script>
#         footer_script = soup.new_tag('script', src="../assets/js/footer.js", defer=True)
        
#         # Ищем закрывающий тег </body> и вставляем новый скрипт перед ним
#         body_tag = soup.find('body')
#         if body_tag:
#             body_tag.append(footer_script)

#         # Записываем измененный контент обратно в файл
#         with open(file_path, 'w', encoding='utf-8') as file:
#             file.write(str(soup))

# print("Теги <header>, <footer>, <script src='../assets/js/main.js'> удалены, а <script src='../assets/js/footer.js' defer></script> добавлен перед </body> во всех .html файлах.")



# import os
# from bs4 import BeautifulSoup

# # Получаем путь к текущей директории
# current_directory = os.path.dirname(os.path.abspath(__file__))

# # Проходим по всем файлам в директории
# for filename in os.listdir(current_directory):
#     # Проверяем, что файл имеет расширение .html
#     if filename.endswith('.html'):
#         file_path = os.path.join(current_directory, filename)
        
#         # Открываем файл и читаем его содержимое
#         with open(file_path, 'r', encoding='utf-8') as file:
#             content = file.read()

#         # Используем BeautifulSoup для парсинга HTML
#         soup = BeautifulSoup(content, 'html.parser')

#         # Ищем тег <script defer="True" src="../assets/js/footer.js"></script>
#         script_tag = soup.find('script', {'src': "../assets/js/footer.js", 'defer': "True"})
        
#         # Если такой тег найден, удаляем ="True" из атрибута defer
#         if script_tag:
#             script_tag['defer'] = None  # Удаляем значение атрибута defer

#         # Записываем измененный контент обратно в файл
#         with open(file_path, 'w', encoding='utf-8') as file:
#             file.write(str(soup))

# print("Из атрибута defer удалено =\"True\" в тегах <script src='../assets/js/footer.js'></script> во всех .html файлах.")



# import os
# from bs4 import BeautifulSoup

# # Получаем путь к текущей директории
# current_directory = os.path.dirname(os.path.abspath(__file__))

# # Проходим по всем файлам в директории
# for filename in os.listdir(current_directory):
#     # Проверяем, что файл имеет расширение .html
#     if filename.endswith('.html'):
#         file_path = os.path.join(current_directory, filename)
        
#         # Открываем файл и читаем его содержимое
#         with open(file_path, 'r', encoding='utf-8') as file:
#             content = file.read()

#         # Используем BeautifulSoup для парсинга HTML
#         soup = BeautifulSoup(content, 'html.parser')

#         # Создаем новый тег <script src="../assets/js/header.js" defer></script>
#         header_script = soup.new_tag('script', src="../assets/js/header.js", defer=True)
        
#         # Находим тег <head> и вставляем новый скрипт в начало
#         head_tag = soup.find('head')
#         if head_tag:
#             head_tag.insert(0, header_script)  # Вставляем в начало <head>

#         # Записываем измененный контент обратно в файл
#         with open(file_path, 'w', encoding='utf-8') as file:
#             file.write(str(soup))

# print("Тег <script src='../assets/js/header.js' defer></script> добавлен в начало <head> во всех .html файлах.")




import os
from bs4 import BeautifulSoup

# Получаем путь к текущей директории
current_directory = os.path.dirname(os.path.abspath(__file__))

# Проходим по всем файлам в директории
for filename in os.listdir(current_directory):
    # Проверяем, что файл имеет расширение .html
    if filename.endswith('.html'):
        file_path = os.path.join(current_directory, filename)
        
        # Открываем файл и читаем его содержимое
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Используем BeautifulSoup для парсинга HTML
        soup = BeautifulSoup(content, 'html.parser')

        # Ищем тег <script defer="True" src="../assets/js/header.js"></script>
        script_tag = soup.find('script', {'src': "../assets/js/header.js", 'defer': "True"})
        
        # Если такой тег найден, удаляем ="True" из атрибута defer
        if script_tag:
            script_tag['defer'] = None  # Удаляем значение атрибута defer

        # Записываем измененный контент обратно в файл
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(str(soup))

print("Из атрибута defer удалено =\"True\" в тегах <script src='../assets/js/header.js'></script> во всех .html файлах.")
