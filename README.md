# Interpolación lineal - EPISS

Calculadora web de interpolación lineal entre dos puntos, con gráfico, procedimiento y validación de entradas. Hecha con HTML, CSS y JavaScript, sin dependencias ni compilación.

## Uso local

Abre `index.html` en un navegador. Pulsa **Cargar ejemplo** para obtener y = 150 con x = 15.

## GitHub

Crea un repositorio llamado `interpolacion-lineal-episs` y sube los archivos de esta carpeta a la raíz del repositorio.

## Netlify

Importa el repositorio desde GitHub. No se necesita comando de compilación. El directorio de publicación es `.` y ya está configurado en `netlify.toml`.

Puedes solicitar el nombre `interpolacion-lineal-episs` para la dirección de Netlify, sujeto a disponibilidad. El despliegue en Netlify tiene su propia configuración de acceso; no hereda la de la publicación previa en Sites.

## Archivos

- `index.html`: interfaz de la calculadora.
- `style.css`: diseño adaptable a PC y móvil.
- `app.js`: cálculo, gráfico y validaciones.
- `netlify.toml`: configuración de publicación.

## Método

`y = y1 + ((x - x1) / (x2 - x1)) * (y2 - y1)`

Los valores x1 y x2 deben ser distintos. Si x está fuera del intervalo se indica extrapolación. Los cálculos utilizan números de punto flotante de JavaScript y presentan hasta 12 cifras significativas.
