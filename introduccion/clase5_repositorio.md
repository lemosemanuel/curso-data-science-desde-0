¿Qué es un repositorio?
Un repositorio es un lugar donde se almacena el código de un proyecto, 
como un contenedor o carpeta digital. 
Git es un sistema de control de versiones que te permite rastrear los cambios en el código, 
colaborar con otros, y gestionar diferentes versiones del proyecto. 
GitHub es una plataforma en línea que permite alojar repositorios y colaborar con otros desarrolladores.

Primero:
necesitas instalar Git en tu máquina antes de poder usar los comandos de Git para subir y descargar repositorios. Aquí te explico cómo hacerlo:
Verificar si Git ya está instalado: Abre la Terminal y escribe:
git --version

sino:
Instalar Git 

En Linux:
en la terminal:
sudo apt-get update
sudo apt-get install git

En Windows:
Descargar Git: Ve al sitio web oficial de Git: git-scm.com y descarga el instalador para Windows.
Instalar Git:
Abre el instalador y sigue las instrucciones. Puedes dejar las configuraciones predeterminadas si no estás seguro de qué elegir.
Durante la instalación, se te preguntará si deseas agregar Git a tu variable de entorno PATH. Asegúrate de marcar esta opción para poder usar Git desde la línea de comandos.
Verificar la instalación: Abre la terminal (Git Bash, cmd, o PowerShell) y escribe:
git --version

En macOS:
puedes usar el gestor de paquetes Homebrew para instalarlo. Primero, instala Homebrew si no lo tienes:
en la terminal:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git



Pasos para subir tu carpeta a GitHub
1. Crear una cuenta en GitHub

Primero, si no tienes una cuenta en GitHub, regístrate en https://github.com. Luego, inicia sesión.

2. Crear un nuevo repositorio en GitHub

En GitHub, haz clic en el botón + en la esquina superior derecha y selecciona New repository.
Asigna un nombre al repositorio, como curso-data-science (o el nombre que le quieras poner)
Puedes añadir una descripción si lo deseas.
Elige si quieres que sea público (visible para todos) o privado (solo tú y los colaboradores pueden verlo).
Puedes inicializar el repositorio con un archivo README, que es un documento donde puedes describir tu proyecto.
Haz clic en Create repository.


3. Clonar el repositorio en tu máquina (osea bajarlo)
Esto es necesario si quieres vincular la carpeta de tu proyecto con el repositorio en GitHub.
Copia el enlace del repositorio que aparece en GitHub (comienza con https://).
Abre la terminal o el comando en tu máquina y navega hasta el directorio donde quieres guardar tu proyecto:
por ejemplo:
cd /Users/Desktop/miProyecto
git clone https://github.com/tu-usuario/curso-data-science.git


5. Subir tus archivos a GitHub
Navega a la carpeta del repositorio: (donde estan los archivos que subiras)
en terminal: cd /Users/Desktop/curso-data-science/
Añade todos los archivos al repositorio local:
en terminal: git add .
Esto añade todos los archivos en la carpeta curso-data-science al área de preparación de Git.
Confirma los cambios con un mensaje de descripción:
en terminal: git commit -m "Añadir archivos de introducción del curso"
Sube (push) los archivos al repositorio en GitHub:
en la terminal : git push origin main

