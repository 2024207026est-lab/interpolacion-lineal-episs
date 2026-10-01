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

No interpreta automáticamente enunciados de texto: el usuario selecciona el método y captura los datos. No incluye pruebas de dos muestras, ANOVA, chi-cuadrado, binomial exacta ni cálculo de potencia.

## Uso y despliegue

Abre `index.html`. En Netlify conserva el repositorio y la rama `main`; no necesita comando de compilación y publica `.` como indica `netlify.toml`. Si el despliegue continuo está conectado, un commit en main activa la actualización.

Para cambiar el subdominio gratuito, usa el nombre `hipotesis-y-muestra-episs` en la configuración del proyecto de Netlify, sujeto a disponibilidad. Cambiar el título HTML o el nombre del repositorio no cambia por sí solo la dirección del sitio. No se ha reservado ese nombre.

## Supuestos y límites

Muestreo aleatorio, independencia y distribución adecuada para cada procedimiento. En muestras pequeñas de medias se requiere normalidad aproximada y ausencia de valores atípicos importantes. La prueba Z de proporciones advierte si n·p₀ o n·(1−p₀) es menor que 10 y evita una conclusión definitiva. No rechazar H₀ no equivale a demostrarla. El IC complementario es bilateral, incluso para pruebas unilaterales.

La planificación de tamaño muestral no incorpora efecto de diseño, no respuesta ni potencia. La corrección finita supone muestreo sin reemplazo. Los valores de entrada se limitan a magnitud 10¹² y n de inferencia a 10⁶. Los cálculos usan punto flotante.

## Validación

Ejecuta `node tests/estadistica.test.js`. Incluye casos de cuantiles Z/t, colas, media, Wilson, tamaño de muestra, resumen e invalidaciones. Se contrastaron 28 cuantiles t con SciPy (grados de libertad de 1 a 999999; error absoluto máximo menor que 1e-6).

## Referencias

- https://www.itl.nist.gov/div898/handbook/prc/section2/prc22.htm
- https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm
- https://online.stat.psu.edu/stat506/Lesson02
