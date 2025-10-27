# Prework JavaScript - Cohorte 127

Repositorio de ejercicios prácticos para aprender los fundamentos de JavaScript. Este proyecto contiene 8 módulos progresivos que cubren desde los conceptos más básicos hasta la creación de un generador de excusas.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Configuración](#instalación-y-configuración)
  - [Opción 1: Usando GitHub Codespaces (Recomendado)](#opción-1-usando-github-codespaces-recomendado)
  - [Opción 2: Desarrollo Local](#opción-2-desarrollo-local)
- [Cómo Usar Este Repositorio](#cómo-usar-este-repositorio)
- [Módulos de Aprendizaje](#módulos-de-aprendizaje)
- [Recursos Adicionales](#recursos-adicionales)

## Descripción

Este repositorio es parte del prework de 4Geeks Academy para la Cohorte 127. Está diseñado para que los estudiantes practiquen conceptos fundamentales de JavaScript de manera progresiva, desde lo más básico hasta ejercicios más complejos.

Cada módulo incluye:
- Un archivo `index.html` para visualizar el ejercicio
- Un archivo `app.js` con el código JavaScript
- Comentarios explicativos dentro del código
- Ejemplos prácticos y casos de uso

## Estructura del Proyecto

```
Start_JavaScript_day4_Prework/
│
├── 01_First_Steps/              # Primeros pasos con console.log()
│   ├── index.html
│   └── app.js
│
├── 02_Variables/                # Declaración y uso de variables
│   ├── index.html
│   └── app.js
│
├── 03_Functions/                # Introducción a funciones
│   ├── index.html
│   └── app.js
│
├── 04_Conditionals_and_Loops/   # Estructuras condicionales y bucles
│   ├── index.html
│   └── app.js
│
├── 05_Arrays/                   # Trabajo con arrays
│   ├── index.html
│   └── app.js
│
├── 06_Iterating_in_Arrays/      # Iteración y recorrido de arrays
│   ├── index.html
│   └── app.js
│
├── 07_Functions/                # Funciones avanzadas
│   ├── index.html
│   └── app.js
│
└── 08_Excuse_Generator_Knowledge/ # Proyecto final: Generador de excusas
    ├── index.html
    └── app.js
```

## Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conocimientos básicos de HTML
- Ganas de aprender JavaScript

## Instalación y Configuración

### Opción 1: Usando GitHub Codespaces (Recomendado)

GitHub Codespaces te permite trabajar en un entorno de desarrollo completo directamente desde tu navegador, sin necesidad de instalar nada en tu computadora.

#### Paso 1: Crear un Codespace

1. Ve al repositorio en GitHub
2. Haz clic en el botón verde **"Code"**
3. Selecciona la pestaña **"Codespaces"**
4. Haz clic en **"Create codespace on main"**

Espera unos segundos mientras se crea tu entorno de desarrollo. Una vez listo, verás un editor de código VS Code en tu navegador.

#### Paso 2: Instalar Live Server en Codespaces

Live Server es una extensión que crea un servidor local y recarga automáticamente la página cuando guardas cambios.

1. En Codespaces, abre el panel de extensiones:
   - Haz clic en el icono de cuadrados en la barra lateral izquierda
   - O presiona `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (Mac)

2. Busca **"Live Server"** en el buscador de extensiones

3. Instala la extensión **"Live Server"** de Ritwick Dey (tiene millones de descargas)

4. Espera a que se instale (aparecerá un botón de recarga si es necesario)

#### Paso 3: Usar Live Server

1. En el explorador de archivos (barra lateral izquierda), navega a cualquier carpeta de ejercicio, por ejemplo: `01_First_Steps/`

2. Haz clic derecho sobre el archivo `index.html`

3. Selecciona **"Open with Live Server"**

4. Se abrirá una nueva pestaña del navegador con tu página web

5. Ahora, cada vez que modifiques el archivo `app.js` o `index.html` y guardes (Ctrl+S / Cmd+S), la página se recargará automáticamente

#### Paso 4: Ver la Consola del Navegador

Para ver los mensajes de `console.log()` y depurar tu código:

1. En la página web que se abrió, presiona **F12** (o clic derecho > Inspeccionar)

2. Ve a la pestaña **"Console"** (Consola)

3. Aquí verás todos los mensajes que tu código JavaScript genera

#### Ventajas de Codespaces + Live Server:

- No necesitas instalar nada en tu computadora
- Tu código se guarda automáticamente en GitHub
- Puedes trabajar desde cualquier dispositivo
- Recarga automática al guardar cambios
- Entorno de desarrollo profesional

### Opción 2: Desarrollo Local

Si prefieres trabajar en tu computadora:

#### Paso 1: Clonar el Repositorio

```bash
git clone <URL-del-repositorio>
cd Start_JavaScript_day4_Prework
```

#### Paso 2: Instalar Live Server

**Opción A: Extensión de VS Code**
1. Abre VS Code
2. Ve a Extensiones (Ctrl+Shift+X)
3. Busca "Live Server"
4. Instala la extensión de Ritwick Dey

**Opción B: Usar Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Opción C: Usar Node.js**
```bash
npx live-server
```

#### Paso 3: Abrir en el Navegador

- Con Live Server: Clic derecho en `index.html` > "Open with Live Server"
- Con Python/Node: Abre `http://localhost:8000` en tu navegador

## Cómo Usar Este Repositorio

### Flujo de Trabajo Recomendado

1. **Empieza por el módulo 01**
   ```
   Abre: 01_First_Steps/index.html con Live Server
   ```

2. **Lee el código en `app.js`**
   - Cada archivo tiene comentarios explicativos
   - Entiende qué hace cada línea

3. **Abre la consola del navegador (F12)**
   - Ve a la pestaña "Console"
   - Observa los resultados de `console.log()`

4. **Experimenta con el código**
   - Modifica valores
   - Añade nuevas líneas
   - Prueba tus propias ideas
   - Guarda y observa los cambios en tiempo real

5. **Avanza al siguiente módulo**
   - Una vez entiendas el concepto actual
   - No tengas prisa, la práctica es clave

### Ejemplo Práctico

En el módulo `01_First_Steps`:

```javascript
// app.js
console.log("Hello World");
console.log("Mi primera línea de JavaScript");
```

**Qué hacer:**
1. Abre `01_First_Steps/index.html` con Live Server
2. Presiona F12 para abrir la consola
3. Verás los mensajes en la consola
4. Modifica el mensaje, guarda y observa el cambio automático

## Módulos de Aprendizaje

### 01 - First Steps
**Concepto:** Introducción a `console.log()` y ejecución de JavaScript
- Cómo escribir tu primer mensaje en la consola
- Diferencia entre JavaScript en archivo externo y en el HTML

### 02 - Variables
**Concepto:** Declaración y uso de variables
- `let`, `const`, y `var`
- Tipos de datos: strings, números, booleanos
- Asignación y reasignación de valores

### 03 - Functions
**Concepto:** Creación y uso de funciones básicas
- Sintaxis de funciones
- Parámetros y argumentos
- Return y valores de retorno

### 04 - Conditionals and Loops
**Concepto:** Estructuras de control
- `if`, `else if`, `else`
- Operadores de comparación
- Bucles `for` y `while`

### 05 - Arrays
**Concepto:** Trabajo con arrays (listas)
- Creación de arrays
- Acceso a elementos por índice
- Propiedades y métodos básicos

### 06 - Iterating in Arrays
**Concepto:** Recorrido de arrays
- Bucle `for` con arrays
- Métodos como `forEach()`, `map()`, `filter()`
- Iteración sobre colecciones

### 07 - Functions (Avanzado)
**Concepto:** Funciones más complejas
- Funciones con múltiples parámetros
- Scope (alcance) de variables
- Arrow functions

### 08 - Excuse Generator Knowledge
**Proyecto Final:** Generador aleatorio de excusas
- Manipulación del DOM con `getElementById()`
- Uso de `Math.random()` y `Math.floor()`
- `window.onload()` para ejecutar código al cargar la página
- Selección aleatoria de elementos de arrays
- Construcción de strings dinámicos

**Conceptos aplicados:**
```javascript
// Elementos aleatorios de arrays
let fruits = ["Apple", "Orange", "Banana"];
let randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

// Manipulación del DOM
document.getElementById('demo').innerHTML = "Nuevo contenido";

// Ejecutar código al cargar la página
window.onload = function() {
    // Tu código aquí
};
```

## Recursos Adicionales

### Documentación Oficial
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)

### Herramientas Útiles
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [VS Code](https://code.visualstudio.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Práctica Adicional
- [freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Exercism - JavaScript Track](https://exercism.org/tracks/javascript)
- [JavaScript30](https://javascript30.com/)

## Preguntas Frecuentes

**P: ¿Por qué no veo nada en la página web?**
R: La mayoría de ejercicios muestran resultados en la consola (F12). Abre la consola del navegador para ver los mensajes de `console.log()`.

**P: ¿Cómo sé si mi código funciona?**
R: Verifica la consola del navegador. Si hay errores, aparecerán en rojo. Si todo está bien, verás los mensajes que programaste.

**P: ¿Puedo modificar el código?**
R: ¡Absolutamente! De hecho, se recomienda. Experimenta, rompe cosas, aprende de los errores.

**P: ¿En qué orden debo hacer los módulos?**
R: Sigue el orden numérico (01 a 08). Cada módulo construye sobre los conocimientos del anterior.

**P: ¿Necesito internet para usar Codespaces?**
R: Sí, Codespaces funciona en el navegador y requiere conexión. Para trabajar sin internet, usa la opción de desarrollo local.

---

**Hecho con dedicación para la Cohorte 127 de 4Geeks Academy**

Si tienes dudas o sugerencias, no dudes en abrir un issue o contactar a tu instructor.
