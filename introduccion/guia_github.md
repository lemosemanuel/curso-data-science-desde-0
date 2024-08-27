
# ¿Qué es un repositorio?

Un **repositorio** es un lugar donde se almacena el código de un proyecto, como un contenedor o carpeta digital. Git es un sistema de control de versiones que te permite rastrear los cambios en el código, colaborar con otros, y gestionar diferentes versiones del proyecto. GitHub es una plataforma en línea que permite alojar repositorios y colaborar con otros desarrolladores.

## Instalación de Git

### 1. Verificar si Git está instalado

Abre la Terminal y escribe:
```
git --version
```
Si Git está instalado, verás la versión. Si no, sigue los pasos para instalarlo según tu sistema operativo.

### 2. Instalar Git

#### En Linux
En la terminal:
``` 
sudo apt-get update
sudo apt-get install git
```

#### En Windows
1. **Descargar Git**: Ve al sitio web oficial de Git: [git-scm.com](https://git-scm.com) y descarga el instalador para Windows.
2. **Instalar Git**:
   - Abre el instalador y sigue las instrucciones. Puedes dejar las configuraciones predeterminadas si no estás seguro de qué elegir.
   - Durante la instalación, se te preguntará si deseas agregar Git a tu variable de entorno `PATH`. Asegúrate de marcar esta opción para poder usar Git desde la línea de comandos.
3. **Verificar la instalación**: Abre la terminal (Git  , cmd, o PowerShell) y escribe:
   ``` 
   git --version
   ```

#### En macOS
Puedes usar el gestor de paquetes **Homebrew** para instalar Git. Primero, instala Homebrew si no lo tienes:
``` 
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Luego, instala Git usando Homebrew:
``` 
brew install git
```
Finalmente, verifica la instalación:
``` 
git --version
```

## Pasos para subir tu carpeta a GitHub

### 1. Crear una cuenta en GitHub
Primero, si no tienes una cuenta en GitHub, regístrate en [https://github.com](https://github.com). Luego, inicia sesión.

### 2. Crear un nuevo repositorio en GitHub
1. En GitHub, haz clic en el botón "+" en la esquina superior derecha y selecciona "New repository".
2. Asigna un nombre al repositorio, como `curso-data-science` (o el nombre que prefieras).
3. Puedes añadir una descripción si lo deseas.
4. Elige si quieres que sea **público** (visible para todos) o **privado** (solo tú y los colaboradores pueden verlo).
5. Puedes inicializar el repositorio con un archivo `README`, donde puedes describir tu proyecto.
6. Haz clic en **Create repository**.

### 3. Clonar el repositorio en tu máquina (bajarlo)
Esto es necesario si quieres vincular la carpeta de tu proyecto con el repositorio en GitHub.

1. Copia el enlace del repositorio que aparece en GitHub (comienza con `https://`).
2. Abre la terminal en tu máquina y navega hasta el directorio donde quieres guardar tu proyecto, por ejemplo:
   ``` 
   cd /Users/Desktop/miProyecto
   ```
3. Clona el repositorio:
   ``` 
   git clone https://github.com/tu-usuario/curso-data-science.git
   ```

### 4. Subir tus archivos a GitHub

1. Navega a la carpeta del repositorio:
   ``` 
   cd /Users/Desktop/curso-data-science/
   ```
2. Añade todos los archivos al repositorio local:
   ``` 
   git add .
   ```
   Esto añade todos los archivos en la carpeta `curso-data-science` al área de preparación de Git.
3. Confirma los cambios con un mensaje de descripción:
   ``` 
   git commit -m "Añadir archivos de introducción del curso"
   ```
4. Sube (push) los archivos al repositorio en GitHub:
   ``` 
   git push origin main
   ```
