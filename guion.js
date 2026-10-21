// ============================================================================
//  guion.js -- Módulo 1 (clase asincrónica): narración por página Beamer y
//  preguntas intercaladas. Cada página del PDF = un overlay = un paso.
//  Editar aquí el texto de la narración y las preguntas; el reproductor
//  (index.html) no necesita cambios.
//
//  Audio: si existe web/audio/p-NN.mp3 se reproduce ese archivo; si no,
//  se usa la síntesis de voz del navegador (provisional).
//  vozRespuesta: lo que dice la narración del VIDEO al mostrar la respuesta.
//  Pregunta: "despues" = la pregunta aparece al terminar esa página y hay que
//  responderla (o saltarla) antes de pasar a la siguiente.
// ============================================================================
window.MODULO = {
  titulo: "Módulo 1 · Matrices simétricas definidas positivas",
  curso: "Introducción al Análisis Numérico · UdeA · 2026-II",
  frames: [
    { nombre: "Portada", desde: 1, hasta: 1 },
    { nombre: "Sección", desde: 2, hasta: 2 },
    { nombre: "Definición", desde: 3, hasta: 15 },
    { nombre: "Geometría: cuenco o silla", desde: 16, hasta: 20 },
    { nombre: "CN 1: diagonal positiva", desde: 21, hasta: 30 },
    { nombre: "CN 2: autovalores positivos", desde: 31, hasta: 41 },
    { nombre: "CN 3: determinante positivo", desde: 42, hasta: 45 },
    { nombre: "CN 4: submatrices principales", desde: 46, hasta: 53 },
    { nombre: "CN 4 en acción", desde: 54, hasta: 64 }
  ],
  // narracion[k] corresponde a la página k+1 (slides/p-NN.png)
  narracion: [
    // 1 -- portada
    "Bienvenidos al primer módulo de esta clase asincrónica de Análisis Numérico. Vamos a estudiar las matrices simétricas definidas positivas y cuatro propiedades que toda matriz de este tipo debe cumplir. Avancen a su ritmo, y respondan las preguntas que irán apareciendo: son cuentas cortas para comprobar que van entendiendo.",
    // 2 -- sección
    "Empezamos por la definición.",
    // 3-15 -- Definición (overlays 1-13)
    "Una matriz cuadrada real A es simétrica definida positiva, que abreviaremos s.d.p., si cumple dos cosas: es simétrica, A igual a A transpuesta, y para todo vector x distinto de cero el número x transpuesta A x es estrictamente positivo. A ese número, visto como función de x, lo llamamos la forma cuadrática de A, y lo denotamos q de x.",
    "Veamos tres ejemplos de dos por dos. El primero es la matriz con dos en la diagonal y menos uno fuera de ella.",
    "Con x igual a x, y, la forma cuadrática es dos x cuadrado menos dos x y más dos y cuadrado. Y esto se puede reescribir como x cuadrado más y cuadrado más x menos y al cuadrado: una suma de cuadrados, que solo se anula cuando x y y son ambos cero.",
    "Así que esta matriz sí es s.d.p. Observen que el certificado es una identidad válida para todo vector, no una prueba con unos cuantos valores.",
    "Segundo ejemplo: la matriz con unos en la diagonal y doses fuera de ella. Es simétrica y todas sus entradas son positivas.",
    "Probemos con el vector uno, menos uno.",
    "La cuenta da uno menos cuatro más uno, es decir, menos dos.",
    "Un solo vector con forma cuadrática negativa basta: esta matriz no es s.d.p.",
    "Tercer ejemplo: cuatro, dos; dos, uno.",
    "Tomemos ahora el vector uno, menos dos.",
    "Obtenemos cuatro menos ocho más cuatro, que es cero. La forma cuadrática no es negativa, pero se anula en un vector no nulo: la matriz es solo semidefinida.",
    "Y como la definición exige desigualdad estricta, tampoco es s.d.p.",
    "Retengan esta asimetría. Para refutar basta un vector con q de x menor o igual que cero, o que la matriz no sea simétrica. Para probar, en cambio, hay que controlar todos los vectores, y para eso necesitamos criterios. Eso es lo que viene.",
    // 16-20 -- Geometría (overlays 1-5)
    "Antes de los criterios, una imagen. A la izquierda, la superficie z igual a q de x, y para la primera matriz.",
    "Es un cuenco: la altura es positiva en todas partes salvo en el origen, y las curvas de nivel son elipses.",
    "A la derecha, la forma cuadrática de la matriz uno, dos; dos, uno.",
    "Es una silla: sube en unas direcciones y baja en otras. En la dirección uno, menos uno vale menos dos, aunque todas las entradas de la matriz son positivas.",
    "La moraleja: los signos de las entradas no deciden nada. Lo que decide es la forma cuadrática.",
    // 21-30 -- CN 1 (overlays 1-10)
    "Primera condición necesaria. Si A es s.d.p., su diagonal es positiva. La razón: el elemento a i i es exactamente e i transpuesta A e i, la forma cuadrática evaluada en el i-ésimo vector canónico, que no es cero.",
    "Usemos esta matriz de tres por tres como ejemplo de referencia; la volveremos a usar en las siguientes condiciones.",
    "Paso uno: identificamos la diagonal, a uno uno, a dos dos y a tres tres.",
    "Paso dos: A por e uno es la primera columna de A, el vector cuatro, uno, dos.",
    "Paso tres: e uno transpuesta por esa columna toma su primera componente, cuatro, que es a uno uno.",
    "Paso cuatro: de la misma forma, e dos da tres y e tres da cinco.",
    "Las tres son positivas, así que A pasa este primer filtro.",
    "Ahora una matriz para descartar: dos, tres; tres, menos uno. Su segunda entrada diagonal es negativa.",
    "Con x igual a e dos, la forma cuadrática vale a dos dos, es decir, menos uno. No es s.d.p., sin más cuentas.",
    "Pero ojo: el recíproco es falso. La matriz dos, tres; tres, dos tiene diagonal positiva y no es s.d.p. Lo veremos con la siguiente propiedad.",
    // 31-41 -- CN 2 (overlays 1-11)
    "Segunda condición necesaria: todo autovalor de una matriz s.d.p. es positivo. Si A v igual a lambda v con v no nulo, entonces v transpuesta A v es lambda por la norma de v al cuadrado; el lado izquierdo es positivo, así que lambda también.",
    "Comprobémoslo en nuestra matriz de referencia. El polinomio característico es el determinante de A menos lambda I.",
    "Desarrollando por la tercera columna se obtienen estos tres términos.",
    "Simplificando: menos el polinomio lambda cubo menos doce lambda cuadrado más cuarenta y dos lambda menos cuarenta y tres.",
    "Evaluando ese cúbico en algunos enteros vemos tres cambios de signo: hay raíces entre uno y dos, entre tres y cuatro, y entre seis y siete. Numéricamente, los autovalores son aproximadamente uno coma ocho cinco cinco, tres coma cuatro siete seis y seis coma seis seis nueve. Los tres positivos, como debía ser.",
    "Volvamos a la matriz B, dos, tres; tres, dos, que tenía diagonal positiva.",
    "Su polinomio característico es dos menos lambda al cuadrado, menos nueve.",
    "Igualando a cero, dos menos lambda es más o menos tres: los autovalores son cinco y menos uno.",
    "Busquemos un autovector de menos uno: resolvemos B más I por v igual a cero, y obtenemos v igual a uno, menos uno.",
    "Y la forma cuadrática en ese vector vale dos menos seis más dos, menos dos, que es justamente lambda dos por la norma de v al cuadrado.",
    "Conclusión: B no es s.d.p. Un autovalor menor o igual que cero no solo descarta la matriz; además nos da el vector que la refuta.",
    // 42-45 -- CN 3 (overlays 1-4)
    "Tercera condición necesaria: el determinante es positivo, porque es el producto de los autovalores, y todos son positivos. En particular, una matriz s.d.p. es invertible.",
    "En la matriz de referencia, el determinante es cuarenta y tres, que coincide con el producto de los tres autovalores que calculamos.",
    "Para descartar: la matriz uno, dos; dos, uno tiene diagonal positiva, pero su determinante es menos tres. No es s.d.p.",
    "Pero esta condición tampoco basta. La matriz C, con unos en la diagonal y doses fuera de ella, tiene diagonal positiva y determinante cinco. Sin embargo, sus autovalores son cinco, menos uno y menos uno: dos negativos dan un producto positivo. C no es s.d.p. ¿Quién la atrapa? La cuarta propiedad.",
    // 46-53 -- CN 4 (overlays 1-8)
    "Cuarta condición necesaria: si A es s.d.p., toda submatriz principal también lo es. Una submatriz principal A J J se obtiene escogiendo un conjunto de índices J y conservando solo esas filas y esas mismas columnas.",
    "Ejemplo con n igual a tres y J igual a uno, tres: conservamos las filas y columnas uno y tres, y queda una matriz de dos por dos.",
    "La idea de la prueba: un vector y de la submatriz se rellena con un cero en la posición que eliminamos.",
    "Demostración. Tomamos cualquier y no nulo en R a la J.",
    "Formamos x en R n copiando las componentes de y en los índices de J y poniendo cero en los demás. Como y no es cero, x tampoco.",
    "En la suma doble de x transpuesta A x se anulan todos los términos con algún índice fuera de J, y lo que queda es exactamente y transpuesta A J J y.",
    "Como A es s.d.p., ese número es positivo. Luego A J J es s.d.p.",
    "En el ejemplo: x transpuesta A x se reduce a a uno uno y uno cuadrado, más dos a uno tres y uno y tres, más a tres tres y tres cuadrado, que es y transpuesta A J J y.",
    // 54-64 -- CN 4 en acción (overlays 1-11)
    "Veamos la cuarta propiedad en acción, con las dos matrices de tres por tres que ya conocemos.",
    "Primero, la matriz A de referencia, que sabemos que es s.d.p.",
    "Con J igual a uno, tres, el vector relleno es y uno, cero, y tres, y aparece la submatriz cuatro, dos; dos, cinco, con determinante dieciséis.",
    "Con J igual a dos, tres: la submatriz tres, cero; cero, cinco, con determinante quince.",
    "Con J igual a uno, dos: la submatriz cuatro, uno; uno, tres, con determinante once.",
    "Y con J de un solo elemento recuperamos la primera propiedad: a i i positivo. A pasa la prueba.",
    "Ahora la matriz C de la tercera propiedad, que pasó los filtros de la diagonal y del determinante.",
    "Con J igual a uno, dos, la submatriz es uno, dos; dos, uno, y su determinante es menos tres. Falla.",
    "Con y igual a uno, menos uno, la forma cuadrática de esa submatriz vale menos dos.",
    "Y rellenando con un cero, x igual a uno, menos uno, cero, obtenemos x transpuesta C x igual a menos dos. Ya tenemos el vector que refuta a C.",
    "C no es s.d.p.: la cuarta propiedad la atrapa. Y la lección general del módulo: ninguna condición necesaria, por sí sola, prueba que una matriz sea s.d.p. Para certificar hacen falta las caracterizaciones equivalentes, que son el tema del siguiente módulo."
  ],
  // Preguntas intercaladas: se muestran al terminar la página "despues",
  // ANTES de que el PDF revele la respuesta.
  preguntas: [
    {
      despues: 8,
      enunciado: "Para \\(B=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\) y \\(\\mathbf x=(1,-1)^T\\), calcule \\(q(\\mathbf x)=\\mathbf x^TB\\mathbf x\\).",
      opciones: ["\\(-2\\)", "\\(2\\)", "\\(0\\)", "\\(6\\)"],
      correcta: 0,
      vozRespuesta: "La respuesta es A: menos dos. Uno menos cuatro más uno da menos dos, y un solo vector con forma cuadrática negativa basta para refutar.",
      explicacion: "\\(q=1\\cdot1^2+2\\cdot2\\cdot1\\cdot(-1)+1\\cdot(-1)^2=1-4+1=-2\\). Un solo vector con \\(q\\le0\\) basta para refutar."
    },
    {
      despues: 12,
      enunciado: "Para \\(\\begin{pmatrix}4&2\\\\2&1\\end{pmatrix}\\) y \\(\\mathbf x=(1,-2)^T\\): ¿cuánto vale \\(q(\\mathbf x)\\) y qué se concluye?",
      opciones: ["\\(q=0\\); no es s.d.p. (solo semidefinida)", "\\(q=0\\); sí es s.d.p., porque \\(q\\ge0\\)", "\\(q=-4\\); no es s.d.p.", "\\(q=4\\); sí es s.d.p."],
      correcta: 0,
      vozRespuesta: "La respuesta es A. La cuenta da cero con un vector distinto de cero; como la definición exige desigualdad estricta, la matriz no es s.d.p. Es solo semidefinida.",
      explicacion: "\\(q=4-8+4=0\\) con \\(\\mathbf x\\ne\\mathbf 0\\). La definición exige \\(q>0\\) estricto, así que la matriz no es s.d.p.; de hecho \\(q=(2x+y)^2\\ge0\\): es semidefinida."
    },
    {
      despues: 28,
      enunciado: "Para \\(\\begin{pmatrix}2&3\\\\3&-1\\end{pmatrix}\\), ¿qué vector la refuta de inmediato y cuánto vale \\(q\\) en él?",
      opciones: ["\\(\\mathbf e_1\\), con \\(q=2\\)", "\\(\\mathbf e_2\\), con \\(q=-1\\)", "\\((1,1)^T\\), con \\(q=7\\)"],
      correcta: 1,
      vozRespuesta: "La respuesta es B: el vector e dos. Recuerden que q de e i es la entrada diagonal a i i, y a dos dos vale menos uno.",
      explicacion: "\\(q(\\mathbf e_i)=a_{ii}\\). Con \\(\\mathbf e_2\\): \\(q=a_{22}=-1<0\\). Los otros vectores dan valores positivos y no refutan nada."
    },
    {
      despues: 37,
      enunciado: "Si \\(\\det(B-\\lambda I)=(2-\\lambda)^2-9\\), ¿cuáles son los autovalores de \\(B\\)?",
      opciones: ["\\(5\\) y \\(-1\\)", "\\(5\\) y \\(1\\)", "\\(-5\\) y \\(1\\)", "\\(11\\) y \\(-7\\)"],
      correcta: 0,
      vozRespuesta: "La respuesta es A: cinco y menos uno. Comprobación rápida: suman cuatro, que es la traza, y su producto es menos cinco, que es el determinante.",
      explicacion: "\\((2-\\lambda)^2=9\\Rightarrow 2-\\lambda=\\pm3\\Rightarrow\\lambda=-1\\) o \\(\\lambda=5\\). Comprobación: suma \\(=4=\\operatorname{tr}B\\), producto \\(=-5=\\det B\\)."
    },
    {
      despues: 44,
      enunciado: "\\(C=\\begin{pmatrix}1&2&2\\\\2&1&2\\\\2&2&1\\end{pmatrix}\\) tiene diagonal positiva y \\(\\det C=5>0\\). ¿Qué se puede concluir?",
      opciones: ["\\(C\\) es s.d.p.", "Nada todavía: esas condiciones son necesarias, no suficientes", "\\(C\\) no es s.d.p., porque \\(\\det C\\) es impar"],
      correcta: 1,
      vozRespuesta: "La respuesta es B: todavía no se puede concluir nada. Diagonal positiva y determinante positivo son condiciones necesarias, no suficientes. De hecho, C tiene autovalores cinco, menos uno y menos uno.",
      explicacion: "Diagonal positiva y \\(\\det>0\\) son consecuencias de ser s.d.p., no criterios. De hecho \\(\\sigma(C)=\\{5,-1,-1\\}\\): dos autovalores negativos dan producto positivo."
    },
    {
      despues: 60,
      enunciado: "Para la misma \\(C\\) y \\(J=\\{1,2\\}\\), calcule \\(\\det C_{JJ}\\).",
      opciones: ["\\(-3\\)", "\\(3\\)", "\\(5\\)", "\\(-1\\)"],
      correcta: 0,
      vozRespuesta: "La respuesta es A: menos tres. La submatriz es uno, dos; dos, uno, y su determinante es uno menos cuatro.",
      explicacion: "\\(C_{JJ}=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}\\), \\(\\det=1-4=-3<0\\). Una submatriz principal que no es s.d.p. basta para que \\(C\\) no lo sea."
    }
  ]
};
