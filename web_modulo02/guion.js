// ============================================================================
//  guion.js -- Módulo 2 (clase asincrónica): narración por página Beamer y
//  preguntas intercaladas. Cada página del PDF = un overlay = un paso.
//  Editar aquí el texto de la narración y las preguntas; el reproductor
//  (index.html) y el video (video/generar_video.py) no necesitan cambios.
//
//  Audio: si existe web/audio/p-NN.mp3 se reproduce ese archivo; si no,
//  se usa la síntesis de voz (navegador en la web; Piper en el video).
//  vozRespuesta: lo que dice la narración del VIDEO al mostrar la respuesta.
//  Pregunta: "despues" = la pregunta aparece al terminar esa página y hay que
//  responderla (o saltarla) antes de pasar a la siguiente.
// ============================================================================
window.MODULO = {
  titulo: "Módulo 2 · Caracterizaciones equivalentes y completar cuadrados",
  curso: "Introducción al Análisis Numérico · UdeA · 2026-II",
  frames: [
    { nombre: "Portada", desde: 1, hasta: 1 },
    { nombre: "Sección", desde: 2, hasta: 2 },
    { nombre: "Caracterizaciones equivalentes", desde: 3, hasta: 8 },
    { nombre: "Ejemplo: menores líderes", desde: 9, hasta: 16 },
    { nombre: "De la matriz a la forma cuadrática", desde: 17, hasta: 22 },
    { nombre: "Completar cuadrados, paso 1", desde: 23, hasta: 28 },
    { nombre: "Completar cuadrados, paso 2", desde: 29, hasta: 34 }
  ],
  // narracion[k] corresponde a la página k+1 (slides/p-NN.png)
  narracion: [
    // 1 -- portada
    "Bienvenidos al segundo módulo. En el primero vimos que ninguna condición necesaria, por sí sola, prueba que una matriz sea s.d.p. Hoy vamos a ver criterios que sí lo prueban, y una técnica a mano para certificarlo: completar cuadrados.",
    // 2 -- sección
    "Seguimos con las matrices simétricas definidas positivas.",
    // 3-8 -- Caracterizaciones equivalentes (overlays 1-6)
    "Este es el teorema central del tema. Sea A una matriz simétrica. Las afirmaciones que vamos a listar son equivalentes: si una se cumple, se cumplen todas. La primera es la que ya conocemos: A es definida positiva.",
    "Segunda: la expresión x transpuesta A y define un producto interno en R n. Es decir, una matriz s.d.p. es exactamente lo que se necesita para medir ángulos y longitudes de otra manera.",
    "Tercera: todos los autovalores de A son positivos. En el módulo anterior vimos que esto era necesario; el teorema dice que, para una matriz simétrica, también es suficiente.",
    "Cuarta, el criterio de Sylvester: todos los menores principales líderes son positivos. El menor delta k es el determinante de la submatriz formada por las primeras k filas y las primeras k columnas.",
    "Y quinta, el criterio de Cholesky: existe una matriz U triangular superior, con diagonal positiva, tal que A es U transpuesta por U. Además, esa U es única. A esta factorización le dedicaremos la siguiente parte de la semana.",
    "¿Para qué sirve cada una? La segunda da la llamada norma de energía. La tercera es la que usamos en las demostraciones. La cuarta es cómoda a mano para matrices pequeñas, de orden tres o menos. Y la quinta es el test práctico: cuesta del orden de n al cubo sobre tres operaciones, y además sirve para resolver el sistema.",
    // 9-16 -- Ejemplo: menores líderes (overlays 1-8)
    "Apliquemos el criterio de Sylvester a esta matriz simétrica de tres por tres.",
    "El primer menor líder es el determinante de la esquina de uno por uno: doce, que es positivo.",
    "El segundo es el determinante del bloque de dos por dos de la esquina superior izquierda: doce por dos, menos cuatro por cuatro, es decir, veinticuatro menos dieciséis, que da ocho. Positivo.",
    "El tercero es el determinante de toda la matriz. Desarrollando por la primera fila: doce por trece, menos cuatro por treinta y uno, más tres por menos diez. El resultado es dos, también positivo.",
    "Los tres menores líderes son positivos, así que, por el criterio de Sylvester, A es s.d.p. Observen la diferencia con el módulo anterior: aquí sí tenemos un certificado.",
    "Comprobémoslo con la tercera caracterización. Numéricamente, los autovalores son aproximadamente cero coma cero dos, seis coma siete y catorce coma tres. Los tres positivos, como predice el teorema.",
    "Pero noten que el menor es muy pequeño, apenas cero coma cero dos. El número de condición en norma dos, el cociente entre el autovalor mayor y el menor, es cerca de seiscientos ochenta y tres. Ser s.d.p. no significa estar bien condicionada.",
    "Una última reflexión: para una matriz de cien por cien, Sylvester exige cien determinantes, de tamaños uno hasta cien. Es demasiado costoso. Hay que buscar algo mejor, y eso nos llevará a completar cuadrados y, después, a Cholesky.",
    // 17-22 -- De la matriz a la forma cuadrática (overlays 1-6)
    "Vamos a probar lo mismo, pero a mano y sin determinantes, trabajando con la forma cuadrática. Partimos de la misma matriz A y de un vector x de componentes x, y, z.",
    "Paso uno: calculamos A por x, fila por columna. La primera componente es doce x más cuatro y más tres z; la segunda, cuatro x más dos y menos z; y la tercera, tres x menos y más siete z.",
    "Paso dos: multiplicamos a la izquierda por x transpuesta. Cada componente de A x se multiplica por la variable correspondiente: x, y o z.",
    "Paso tres: agrupamos términos semejantes. Los cuadrados son doce x cuadrado, dos y cuadrado y siete z cuadrado. Los términos cruzados aparecen dos veces: ocho x y, seis x z y menos dos y z.",
    "La regla de lectura: la diagonal de la matriz da los coeficientes de los cuadrados.",
    "Y cada par simétrico, a i j igual a a j i, da un solo término cruzado con coeficiente doble. Ahora la pregunta: ¿es q positiva para todo vector no nulo? Los términos cruzados pueden ser negativos, así que hay que reorganizar q.",
    // 23-28 -- Completar cuadrados, paso 1 (overlays 1-6)
    "La idea es completar cuadrados, como en el colegio, pero con varias variables. Primero juntamos todos los términos que contienen x.",
    "Sacamos el coeficiente de x cuadrado, que es doce. Dentro del paréntesis queda x cuadrado más dos x por un tercio de y más un cuarto de z.",
    "Ahora usamos la identidad x cuadrado más dos x u igual a x más u al cuadrado, menos u al cuadrado, con u igual a un tercio de y más un cuarto de z. Aparece un cuadrado perfecto y un término que se resta.",
    "Desarrollamos lo que se resta: doce por un noveno de y cuadrado, más un sexto de y z, más un dieciseisavo de z cuadrado. Eso da cuatro tercios de y cuadrado, más dos y z, más tres cuartos de z cuadrado.",
    "Juntamos ese resto con los términos que no tenían x: quedan dos tercios de y cuadrado, menos cuatro y z, más veinticinco cuartos de z cuadrado. Ya no aparece x.",
    "Resultado del paso uno: q es doce veces un cuadrado, más una forma cuadrática que solo depende de y y de z. El problema se redujo en una dimensión.",
    // 29-34 -- Completar cuadrados, paso 2 (overlays 1-6)
    "Repetimos el procedimiento con el resto: dos tercios de y cuadrado, menos cuatro y z, más veinticinco cuartos de z cuadrado.",
    "Sacamos dos tercios y completamos el cuadrado en y: queda dos tercios de y menos tres z, al cuadrado, menos seis z cuadrado.",
    "Lo que sobra es veinticinco cuartos de z cuadrado menos seis z cuadrado, es decir, un cuarto de z cuadrado.",
    "Y así llegamos a la forma triangular: q es doce por un primer cuadrado, más dos tercios por un segundo cuadrado, más un cuarto de z cuadrado.",
    "¿Por qué esto prueba que q es positiva? Los pesos doce, dos tercios y un cuarto son positivos, así que q es mayor o igual que cero. Y si q fuera cero, el último cuadrado obliga a que z sea cero; entonces el segundo obliga a que y sea cero; y el primero, a que x sea cero. La forma triangular lo hace evidente.",
    "Como ejercicio, desarrollen el recuadro y comprueben que se recupera la forma original. Y una observación para el próximo módulo: los pesos doce, dos tercios y un cuarto son exactamente los cocientes de los menores líderes: doce, ocho sobre doce y dos sobre ocho. No es casualidad: son los pivotes de la eliminación gaussiana, y de ahí sale Cholesky."
  ],
  // Preguntas intercaladas: se muestran al terminar la página "despues",
  // ANTES de que el PDF revele la respuesta.
  preguntas: [
    {
      despues: 10,
      enunciado: "Para \\(A=\\begin{pmatrix}12&4&3\\\\4&2&-1\\\\3&-1&7\\end{pmatrix}\\), calcule el segundo menor líder \\(\\Delta_2\\).",
      opciones: ["\\(8\\)", "\\(24\\)", "\\(40\\)", "\\(-8\\)"],
      correcta: 0,
      vozRespuesta: "La respuesta es A: ocho. Doce por dos es veinticuatro, menos cuatro por cuatro, que es dieciséis.",
      explicacion: "\\(\\Delta_2=\\begin{vmatrix}12&4\\\\4&2\\end{vmatrix}=24-16=8\\)."
    },
    {
      despues: 12,
      enunciado: "\\(A\\) es simétrica con \\(\\Delta_1=12\\), \\(\\Delta_2=8\\) y \\(\\Delta_3=2\\). ¿Qué se concluye?",
      opciones: ["\\(A\\) es s.d.p., por el criterio de Sylvester", "Nada todavía: faltan los autovalores", "\\(A\\) no es s.d.p., porque \\(\\Delta_3\\) es muy pequeño"],
      correcta: 0,
      vozRespuesta: "La respuesta es A. Para una matriz simétrica, que todos los menores líderes sean positivos es necesario y suficiente: A es s.d.p. El tamaño de delta tres no importa, solo su signo.",
      explicacion: "Para \\(A\\) simétrica, \\(\\Delta_k>0\\) para todo \\(k\\) equivale a ser s.d.p. A diferencia del Módulo 1, aquí sí hay un criterio suficiente."
    },
    {
      despues: 14,
      enunciado: "Si \\(\\lambda_{\\min}\\approx0.0209\\) y \\(\\lambda_{\\max}\\approx14.29\\), ¿cuánto vale aproximadamente \\(\\kappa_2(A)=\\lambda_{\\max}/\\lambda_{\\min}\\)?",
      opciones: ["\\(\\approx 683\\)", "\\(\\approx 14\\)", "\\(\\approx 0.0015\\)", "\\(\\approx 6.7\\)"],
      correcta: 0,
      vozRespuesta: "La respuesta es A: cerca de seiscientos ochenta y tres. Catorce coma tres dividido entre cero coma cero dos. La matriz es s.d.p., pero está mal condicionada.",
      explicacion: "\\(14.29/0.0209\\approx683\\). Ser s.d.p. no garantiza un buen condicionamiento."
    },
    {
      despues: 19,
      enunciado: "Al agrupar \\(q=\\mathbf x^TA\\mathbf x\\) para esta \\(A\\), ¿cuál es el coeficiente de \\(xy\\)?",
      opciones: ["\\(8\\)", "\\(4\\)", "\\(16\\)", "\\(0\\)"],
      correcta: 0,
      vozRespuesta: "La respuesta es A: ocho. El término x y aparece dos veces, una por a uno dos y otra por a dos uno: cuatro más cuatro.",
      explicacion: "El coeficiente de \\(x_ix_j\\) es \\(a_{ij}+a_{ji}=2a_{ij}\\): aquí \\(4+4=8\\)."
    },
    {
      despues: 25,
      enunciado: "Desarrolle \\(12\\bigl(\\tfrac13y+\\tfrac14z\\bigr)^2\\).",
      opciones: ["\\(\\tfrac43y^2+2yz+\\tfrac34z^2\\)", "\\(4y^2+3z^2\\)", "\\(\\tfrac43y^2+yz+\\tfrac34z^2\\)", "\\(\\tfrac19y^2+\\tfrac16yz+\\tfrac1{16}z^2\\)"],
      correcta: 0,
      vozRespuesta: "La respuesta es A. Un tercio de y más un cuarto de z, al cuadrado, es un noveno de y cuadrado, más un sexto de y z, más un dieciseisavo de z cuadrado; por doce: cuatro tercios, dos y tres cuartos.",
      explicacion: "\\(12\\bigl(\\tfrac19y^2+\\tfrac16yz+\\tfrac1{16}z^2\\bigr)=\\tfrac43y^2+2yz+\\tfrac34z^2\\). La opción D olvida multiplicar por 12; la C olvida el doble producto."
    },
    {
      despues: 32,
      enunciado: "Use la forma triangular \\(q=12\\bigl(x+\\tfrac13y+\\tfrac14z\\bigr)^2+\\tfrac23(y-3z)^2+\\tfrac14z^2\\) para calcular \\(q(1,-3,0)\\).",
      opciones: ["\\(6\\)", "\\(0\\)", "\\(-6\\)", "\\(18\\)"],
      correcta: 0,
      vozRespuesta: "La respuesta es A: seis. El primer cuadrado se anula, porque uno menos uno es cero; el segundo da dos tercios por nueve, que es seis; y el tercero es cero. Con la forma original también da seis: doce, menos veinticuatro, más dieciocho.",
      explicacion: "\\(12\\cdot0^2+\\tfrac23\\cdot9+0=6\\). Comprobación con la forma original: \\(12-24+18=6\\)."
    }
  ]
};
