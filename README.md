# Hipótesis y Muestra — EPISS

Calculadora estadística educativa en HTML, CSS y JavaScript, sin dependencias externas ni compilación.

## Funciones

- Pruebas de una muestra: Z para media con σ conocida, t de Student con σ desconocida y Z para proporción.
- Alternativas bilateral, izquierda y derecha; niveles de confianza 90 %, 95 % y 99 %.
- Entrada de media/desviación/n o lista de observaciones; cuenta n automáticamente y calcula s con divisor n−1.
- Intervalos bilaterales Z/t para medias y Wilson para proporciones.
- Tamaño muestral para estimar medias/proporciones, con corrección opcional por población finita y redondeo superior.
- Procedimiento, interpretación, región de rechazo, gráficos de intervalos y opción de imprimir/guardar PDF.
- Interpolación original en `interpolacion.html`.

No interpreta automáticamente enunciados de texto: el usuario selecciona el método y captura los datos. No incluye ANOVA, chi-cuadrado para tablas de contingencia ni prueba binomial exacta.

## Nuevos módulos

- Varianza de una población (χ²) y razón de dos varianzas (F), con alternativas unilaterales o bilateral e intervalos bilaterales.
- Medias independientes: Welch o t con varianza combinada; medias relacionadas: t de diferencias, pares alineados.
- Potencia de una prueba Z de una media con σ conocida: α, β, efecto con signo y búsqueda del menor n que alcanza el objetivo.
- Selección MAS, sistemática con intervalo N/n y estratificada con asignación proporcional o Neyman (costos iguales). Base de hasta 100 000 registros, semilla reproducible y descarga CSV.
- Menú lateral adaptable a móviles, resultados separados del formulario y gráficos de las distribuciones.

La base de muestreo se pega sin encabezados, un registro por línea: `id;estrato;valor`. Los valores son necesarios para Neyman. No se admiten identificadores repetidos. La semilla usa Mulberry32; MAS usa Fisher–Yates parcial. El código de selección se encuentra en `avanzado.js`. El sistemático depende del orden de entrada: revisar periodicidades. La asignación por restos mayores respeta capacidades; advierte si hay estratos sin selección. No calcula estimadores ponderados ni errores estándar del diseño complejo.

## Uso y despliegue

Abre `index.html`. En Netlify conserva el repositorio y la rama `main`; no necesita comando de compilación y publica `.` como indica `netlify.toml`. Si el despliegue continuo está conectado, un commit en main activa la actualización.

Para cambiar el subdominio gratuito, usa el nombre `hipotesis-y-muestra-episs` en la configuración del proyecto de Netlify, sujeto a disponibilidad. Cambiar el título HTML o el nombre del repositorio no cambia por sí solo la dirección del sitio. No se ha reservado ese nombre.

## Supuestos y límites

Muestreo aleatorio, independencia y distribución adecuada para cada procedimiento. En muestras pequeñas de medias se requiere normalidad aproximada y ausencia de valores atípicos importantes. La prueba Z de proporciones advierte si n·p₀ o n·(1−p₀) es menor que 10 y evita una conclusión definitiva. No rechazar H₀ no equivale a demostrarla. El IC complementario es bilateral, incluso para pruebas unilaterales.

La planificación de tamaño muestral no incorpora efecto de diseño, no respuesta ni potencia. La corrección finita supone muestreo sin reemplazo. Los valores de entrada se limitan a magnitud 10¹² y n de inferencia a 10⁶. Los cálculos usan punto flotante.

## Validación

Ejecuta `node tests/estadistica.test.js` y `node tests/avanzado.test.js`. Los nuevos contrastes χ², F y Welch se contrastaron con SciPy; se verifican pares, potencia y selección sin reemplazo/reproducible. Incluye casos de cuantiles Z/t, colas, media, Wilson, tamaño de muestra, resumen e invalidaciones. Se contrastaron 28 cuantiles t con SciPy (grados de libertad de 1 a 999999; error absoluto máximo menor que 1e-6).

## Referencias

- https://www.itl.nist.gov/div898/handbook/prc/section2/prc22.htm
- https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm
- https://online.stat.psu.edu/stat506/Lesson02

- https://www.itl.nist.gov/div898/handbook/eda/section3/eda359.htm
- https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm
- https://www.itl.nist.gov/div898/handbook/prc/section2/prc23.htm
- https://www.itl.nist.gov/div898/handbook/prc/section2/prc222.htm
- https://online.stat.psu.edu/stat506/Lesson06
- https://online.stat.psu.edu/stat506/Lesson08

## Interfaz institucional UNAJ

Diseño académico con el logotipo proporcionado, azul oscuro y naranja; inicio con las ocho herramientas existentes, menú contraíble, enlaces directos por fragmento (por ejemplo `/#compare`) e información del proyecto. Créditos: Mamani Delgado Pedro y Jove Benites Danny, Escuela Profesional de Ingeniería de Software y Sistemas, Facultad de Ciencias de Ingenierías, Universidad Nacional de Juliaca.

`unaj.css` y `unaj.js` contienen la presentación y navegación. `logo-unaj.svg` encapsula el PNG original sin modificar sus píxeles. Los núcleos `estadistica.js` y `avanzado.js` permanecen idénticos a la versión anterior; los cambios en los scripts de calculadoras se limitan a cadenas de presentación, colores y selector de navegación. No se agregaron métodos estadísticos.

Verificación del rediseño: pruebas numéricas existentes, revisión de capturas de escritorio y móvil, navegación de inicio/información/calculadoras, menú contraíble, enlaces directos, ejemplos de los 13 métodos, CSV, errores de entrada e interpolación/extrapolación; sin errores JavaScript ni desbordamiento horizontal a 390 px.
