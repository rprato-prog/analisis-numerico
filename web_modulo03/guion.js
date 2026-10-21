// ============================================================================
//  guion.js -- Módulo 3 (clase asincrónica): narración por página Beamer y
//  preguntas intercaladas. Cada página del PDF = un overlay = un paso.
//  Editar aquí el texto de la narración y las preguntas; el reproductor
//  (index.html) no necesita cambios.
//
//  Audio: si existe audio/p-NN.mp3 (junto a este archivo) se reproduce; si no,
//  se usa la síntesis de voz del navegador.
//  Pregunta: "despues" = la pregunta aparece al terminar esa página y hay que
//  responderla (o saltarla) antes de pasar a la siguiente.
// ============================================================================
window.MODULO = {
  titulo: "Módulo 3 · Factorización de Cholesky",
  curso: "Introducción al Análisis Numérico · UdeA · 2026-II",
  frames: [
    { nombre: "Portada", desde: 1, hasta: 1 },
    { nombre: "Sección", desde: 2, hasta: 2 },
    { nombre: "Eliminación gaussiana, paso a paso", desde: 3, hasta: 12 },
    { nombre: "Cada paso es una matriz elemental", desde: 13, hasta: 19 },
    { nombre: "Comprobación: A = LU", desde: 20, hasta: 26 },
    { nombre: "La simetría: de LU a LDLᵀ", desde: 27, hasta: 35 },
    { nombre: "LDLᵀ es completar cuadrados", desde: 36, hasta: 39 },
    { nombre: "De LDLᵀ a Cholesky", desde: 40, hasta: 48 },
    { nombre: "El algoritmo general", desde: 49, hasta: 53 },
    { nombre: "Cholesky en Python", desde: 54, hasta: 57 },
    { nombre: "Resolver Ax = b con Cholesky", desde: 58, hasta: 63 }
  ],
  // narracion[k] corresponde a la página k+1 (slides/p-NN.png)
  narracion: [
    // 1 -- portada
    "Bienvenidos al tercer módulo. En el anterior certificamos que una matriz es s.d.p. completando cuadrados, y vimos que los pesos que aparecían eran los cocientes de los menores líderes. Hoy vamos a descubrir que ese cálculo es la eliminación gaussiana disfrazada, y de ahí obtendremos la factorización de Cholesky.",
    // 2 -- sección
    "Factorización de Cholesky.",
    // 3-12 -- Eliminación gaussiana (overlays 1-10)
    "Tomamos la misma matriz de los módulos anteriores y le aplicamos eliminación gaussiana, sin intercambiar filas.",
    "En la columna uno, el pivote es a uno uno, igual a doce. Los multiplicadores son las entradas de abajo divididas por el pivote: ele dos uno es cuatro sobre doce, un tercio; y ele tres uno es tres sobre doce, un cuarto.",
    "A la fila dos le restamos un tercio de la fila uno. Cuatro, dos, menos uno, menos un tercio de doce, cuatro, tres, da cero, dos tercios, menos dos.",
    "A la fila tres le restamos un cuarto de la fila uno, y obtenemos cero, menos dos, veinticinco cuartos.",
    "Esta es la matriz después del primer paso.",
    "La columna uno ya tiene ceros debajo del pivote.",
    "Pasamos a la columna dos. El nuevo pivote es dos tercios, y el multiplicador ele tres dos es menos dos dividido entre dos tercios, es decir, menos tres.",
    "A la fila tres le restamos menos tres veces la fila dos; es decir, le sumamos tres veces la fila dos. Queda cero, cero, un cuarto.",
    "Llegamos a U, triangular superior, con los pivotes doce, dos tercios y un cuarto en la diagonal.",
    "Y aquí está la conexión: estos pivotes son exactamente los pesos que aparecieron al completar cuadrados en el módulo anterior.",
    // 13-19 -- Matrices elementales (overlays 1-7)
    "Cada paso de la eliminación se puede escribir como una multiplicación por una matriz. Restar ele veces la fila j de la fila i equivale a multiplicar a la izquierda por la identidad con menos ele en la posición i, j. El primer paso es E uno.",
    "El segundo paso es E dos, con menos un cuarto en la posición tres, uno.",
    "Y el tercero es E tres, con un tres en la posición tres, dos, porque el multiplicador era menos tres.",
    "Entonces E tres por E dos por E uno por A es igual a U. Despejando, A es igual al producto de las inversas, por U.",
    "Invertir estas matrices es muy fácil: para deshacer una resta se suma, así que basta cambiar el signo de la entrada fuera de la diagonal.",
    "Y al multiplicar las inversas en este orden pasa algo muy conveniente: los multiplicadores caen cada uno en su sitio, sin mezclarse. Esa matriz es L.",
    "¡Cuidado con el orden! El producto en el orden contrario sí mezcla las entradas: aparece menos cinco cuartos en la esquina. Por eso se guarda L, la de las inversas, y no el producto de las E.",
    // 20-26 -- Comprobación A = LU (overlays 1-7)
    "Comprobemos que L por U da A. Una forma cómoda de multiplicar: la fila i del producto es una combinación de las filas de U, con los coeficientes de la fila i de L.",
    "Fila uno: uno por la primera fila de U, que es doce, cuatro, tres.",
    "Fila dos: un tercio de la primera fila de U, más la segunda. Da cuatro, dos, menos uno.",
    "Fila tres: un cuarto de la primera fila, menos tres veces la segunda, más la tercera. Da tres, menos uno, siete.",
    "Las tres filas coinciden: L por U es A.",
    "La lectura es esta: L guarda los multiplicadores, con su signo, debajo de la diagonal y con unos en ella; U guarda el resultado de la eliminación, con los pivotes en la diagonal. Factorizar es simplemente registrar la eliminación.",
    "Pero A es simétrica, y eso todavía no lo hemos aprovechado. Veremos que U y L transpuesta están relacionadas.",
    // 27-35 -- De LU a LDLᵀ (overlays 1-9)
    "Partimos de L y de la U de la eliminación, que llamaremos U sub L U para no confundirla con la U de Cholesky.",
    "Paso uno: dividimos cada fila de U sub L U entre su pivote.",
    "La primera fila, entre doce, da uno, un tercio, un cuarto.",
    "La segunda, entre dos tercios, da cero, uno, menos tres.",
    "Y la tercera, entre un cuarto, da cero, cero, uno.",
    "Así, U sub L U se escribe como una matriz diagonal D, con los pivotes, por una matriz triangular superior con unos en la diagonal.",
    "Paso dos: comparen esa matriz con L. Tiene los mismos multiplicadores, un tercio, un cuarto y menos tres, pero reflejados. Es L transpuesta.",
    "Por lo tanto, A es igual a L por D por L transpuesta.",
    "¿Por qué tenía que salir L transpuesta? Porque A es simétrica: transponiendo se obtiene otra factorización de la misma forma, y la factorización L U con L unitaria es única. Así que las dos tienen que coincidir.",
    // 36-39 -- LDLᵀ es completar cuadrados (overlays 1-4)
    "Ahora miremos la forma cuadrática. Con A igual a L D L transpuesta, x transpuesta A x es una suma de los pivotes por los cuadrados de las componentes de L transpuesta por x.",
    "Calculemos L transpuesta por x: las componentes son x más un tercio de y más un cuarto de z; luego y menos tres z; y finalmente z.",
    "Entonces q es doce por el primer cuadrado, más dos tercios por el segundo, más un cuarto de z cuadrado. ¡Es exactamente la suma de cuadrados que obtuvimos a mano en el módulo anterior!",
    "Son dos caras del mismo cálculo. Los pesos del completar cuadrados son los pivotes, que van en D. Los coeficientes dentro de los cuadrados son los multiplicadores, que van en L transpuesta. Y q es positiva si y solo si todos los pivotes son positivos.",
    // 40-48 -- De LDLᵀ a Cholesky (overlays 1-9)
    "Paso tres: repartimos D en dos raíces. Como los pivotes son positivos, podemos tomar la raíz cuadrada de D, y escribir A como U transpuesta por U, con U igual a raíz de D por L transpuesta.",
    "En la práctica, esto significa multiplicar la fila k de L transpuesta por la raíz del pivote k.",
    "La primera fila por raíz de doce: dos raíz de tres, dos sobre raíz de tres, y raíz de tres sobre dos.",
    "La segunda por raíz de dos tercios: cero, raíz de dos tercios, y menos raíz de seis.",
    "Y la tercera por raíz de un cuarto, que es un medio: cero, cero, un medio.",
    "Esta es la matriz U de Cholesky: triangular superior y con diagonal positiva.",
    "Y la forma cuadrática queda escrita como una norma: q es la norma euclidiana de U x, al cuadrado. Una suma de tres cuadrados, sin pesos.",
    "Una comprobación rápida: el determinante de A es el producto de la diagonal de U, al cuadrado. Dos raíz de tres, por raíz de dos tercios, por un medio, da raíz de dos; al cuadrado, dos. Coincide con delta tres.",
    "Este es el resumen del camino: eliminación para obtener L U; simetría para pasar a L D L transpuesta; y raíces de los pivotes, que exigen pivotes positivos, para llegar a U transpuesta U.",
    // 49-53 -- El algoritmo general (overlays 1-5)
    "En la práctica no se hace todo este recorrido: se calcula U directamente. Igualamos la entrada i, j de U transpuesta U con a i j, para j mayor o igual que i.",
    "De ahí salen las fórmulas de Cholesky. La entrada diagonal u i i es la raíz de a i i menos la suma de los cuadrados de lo que ya está arriba en esa columna. Y las demás entradas de la fila i se obtienen restando productos y dividiendo entre u i i.",
    "El costo: del orden de n al cubo sobre tres operaciones, la mitad que L U; n raíces cuadradas; y solo se guarda U, la mitad de la memoria.",
    "Además, no hace falta pivotear. Como a j j es la suma de los cuadrados de la columna j de U, ninguna entrada de U puede superar en valor absoluto a la raíz de a j j. Las entradas no crecen, y por eso Cholesky es estable sin intercambiar filas.",
    "Y si en algún paso hay que sacar la raíz de un número menor o igual que cero, el algoritmo se detiene: la matriz no es s.d.p. Ese es el test práctico que anunciamos en el módulo dos.",
    // 54-57 -- Cholesky en Python (overlays 1-4)
    "Así se ve el algoritmo en Python. Para cada fila i, se calcula el radicando; si no es positivo, se lanza un error; si lo es, se toma la raíz y se completa el resto de la fila. Al final se prueba con nuestra matriz y con la matriz uno, dos; dos, uno.",
    "La salida: la U que calculamos a mano, en decimales; la comprobación de que U transpuesta U es A; la comparación con numpy; y el error para la matriz que no es s.d.p.",
    "Ojo con una convención: numpy punto linalg punto cholesky devuelve L igual a U transpuesta, la triangular inferior, con A igual a L L transpuesta.",
    "Y un detalle de implementación: las sumas de productos son productos punto entre columnas de U, que en numpy se escriben con el operador arroba.",
    // 58-63 -- Resolver Ax = b (overlays 1-6)
    "Para terminar, usemos Cholesky para resolver un sistema. Tomamos esta matriz s.d.p. de tres por tres y este lado derecho.",
    "Su factor de Cholesky es esta U, con enteros. Les queda como ejercicio comprobar que U transpuesta por U da A.",
    "Como A es U transpuesta por U, el sistema A x igual a b se convierte en dos sistemas triangulares: primero U transpuesta por y igual a b, por sustitución hacia adelante; y luego U por x igual a y, por sustitución hacia atrás.",
    "Primer sistema: de dos y uno igual a cuatro sale y uno igual a dos; luego y dos igual a tres; y finalmente y tres igual a uno.",
    "Segundo sistema, de abajo hacia arriba: x tres es uno; x dos es uno; y x uno es uno. La solución es uno, uno, uno.",
    "Y el costo: la factorización, n al cubo sobre tres, se hace una sola vez; cada lado derecho nuevo cuesta solo del orden de dos n cuadrado. Con esto cerramos Cholesky: en el siguiente bloque veremos cómo la definitud positiva garantiza la convergencia de los métodos iterativos."
  ],
  // Preguntas intercaladas: se muestran al terminar la página "despues",
  // ANTES de que el PDF revele la respuesta.
  preguntas: [
    {
      despues: 8,
      enunciado: "Tras el primer paso, \\(A^{(1)}=\\begin{pmatrix}12&4&3\\\\0&\\tfrac23&-2\\\\0&-2&\\tfrac{25}4\\end{pmatrix}\\). Calcule el multiplicador \\(\\ell_{32}=a^{(1)}_{32}/a^{(1)}_{22}\\).",
      opciones: ["\\(-3\\)", "\\(3\\)", "\\(-\\tfrac43\\)", "\\(-\\tfrac13\\)"],
      correcta: 0,
      explicacion: "\\(\\ell_{32}=\\dfrac{-2}{2/3}=-3\\). La opción \\(-\\tfrac43\\) multiplica en vez de dividir."
    },
    {
      despues: 17,
      enunciado: "Con \\(\\ell_{21}=\\tfrac13\\), \\(\\ell_{31}=\\tfrac14\\), \\(\\ell_{32}=-3\\), ¿cuál es \\(L=E_1^{-1}E_2^{-1}E_3^{-1}\\)?",
      opciones: ["\\(\\begin{pmatrix}1&0&0\\\\\\tfrac13&1&0\\\\\\tfrac14&-3&1\\end{pmatrix}\\)", "\\(\\begin{pmatrix}1&0&0\\\\-\\tfrac13&1&0\\\\-\\tfrac14&3&1\\end{pmatrix}\\)", "\\(\\begin{pmatrix}1&0&0\\\\\\tfrac13&1&0\\\\\\tfrac54&-3&1\\end{pmatrix}\\)"],
      correcta: 0,
      explicacion: "En este orden los multiplicadores caen en su sitio, con su signo. La segunda conserva los signos de las \\(E_k\\), sin invertirlas; la tercera mezcla entradas, como el producto en el orden contrario."
    },
    {
      despues: 22,
      enunciado: "Calcule la fila 3 de \\(LU\\): \\(\\tfrac14(12,4,3)-3\\,(0,\\tfrac23,-2)+1\\cdot(0,0,\\tfrac14)\\).",
      opciones: ["\\((3,-1,7)\\)", "\\((3,3,7)\\)", "\\((3,-1,-5)\\)", "\\((3,1,7)\\)"],
      correcta: 0,
      explicacion: "\\((3,\\ 1-2,\\ \\tfrac34+6+\\tfrac14)=(3,-1,7)\\), que es la fila 3 de \\(A\\). Ojo con el signo: \\(-3\\cdot(-2)=+6\\)."
    },
    {
      despues: 32,
      enunciado: "\\(U_{LU}=D\\,M\\) con \\(M=\\begin{pmatrix}1&\\tfrac13&\\tfrac14\\\\0&1&-3\\\\0&0&1\\end{pmatrix}\\). Compárela con \\(L=\\begin{pmatrix}1&0&0\\\\\\tfrac13&1&0\\\\\\tfrac14&-3&1\\end{pmatrix}\\). ¿Qué es \\(M\\)?",
      opciones: ["\\(L^T\\)", "\\(L^{-1}\\)", "\\(L\\)", "No tiene relación con \\(L\\)"],
      correcta: 0,
      explicacion: "Tiene los mismos multiplicadores, reflejados respecto a la diagonal: \\(M=L^T\\), y así \\(A=LDL^T\\). Es consecuencia de la simetría de \\(A\\)."
    },
    {
      despues: 46,
      enunciado: "Con \\(u_{11}=2\\sqrt3\\), \\(u_{22}=\\sqrt{2/3}\\), \\(u_{33}=\\tfrac12\\), calcule \\(\\det A=(u_{11}u_{22}u_{33})^2\\).",
      opciones: ["\\(2\\)", "\\(\\sqrt2\\)", "\\(4\\)", "\\(\\tfrac12\\)"],
      correcta: 0,
      explicacion: "\\(2\\sqrt3\\cdot\\sqrt{2/3}=2\\sqrt2\\); por \\(\\tfrac12\\) da \\(\\sqrt2\\); al cuadrado, \\(2=\\Delta_3\\). La opción \\(\\sqrt2\\) olvida elevar al cuadrado."
    },
    {
      despues: 61,
      enunciado: "Resuelva \\(U\\mathbf x=\\mathbf y\\) con \\(U=\\begin{pmatrix}2&1&-1\\\\0&2&1\\\\0&0&1\\end{pmatrix}\\) e \\(\\mathbf y=(2,3,1)^T\\).",
      opciones: ["\\(\\mathbf x=(1,1,1)^T\\)", "\\(\\mathbf x=(2,1,1)^T\\)", "\\(\\mathbf x=(1,2,1)^T\\)", "\\(\\mathbf x=(0,1,1)^T\\)"],
      correcta: 0,
      explicacion: "De abajo hacia arriba: \\(x_3=1\\); \\(2x_2+1=3\\Rightarrow x_2=1\\); \\(2x_1+1-1=2\\Rightarrow x_1=1\\). Comprobación: \\(A(1,1,1)^T=(4,8,2)^T=\\mathbf b\\)."
    }
  ]
};
