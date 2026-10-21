// ============================================================================
//  guion.js -- Módulo 4 (clase asincrónica): narración por página Beamer y
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
  titulo: "Módulo 4 · Definitud positiva y convergencia de los métodos iterativos",
  curso: "Introducción al Análisis Numérico · UdeA · 2026-II",
  frames: [
    { nombre: "Portada", desde: 1, hasta: 1 },
    { nombre: "Sección", desde: 2, hasta: 2 },
    { nombre: "Recordatorio de la Semana 08", desde: 3, hasta: 5 },
    { nombre: "La norma de energía", desde: 6, hasta: 10 },
    { nombre: "Gauss–Seidel es descenso por coordenadas", desde: 11, hasta: 15 },
    { nombre: "Teorema de Householder–John", desde: 16, hasta: 20 },
    { nombre: "Un teorema, cuatro corolarios", desde: 21, hasta: 27 },
    { nombre: "s.d.p. no basta para Jacobi", desde: 28, hasta: 34 },
    { nombre: "Jacobi y JOR: caracterización exacta", desde: 35, hasta: 39 },
    { nombre: "Caso tridiagonal: teorema de Young", desde: 40, hasta: 42 },
    { nombre: "Ejemplo 5×5: certificados de s.d.p.", desde: 43, hasta: 46 },
    { nombre: "Ejemplo 5×5: Jacobi y Gauss–Seidel", desde: 47, hasta: 52 },
    { nombre: "Ejemplo 5×5: ω óptimo de SOR", desde: 53, hasta: 59 },
    { nombre: "¿Directo o iterativo?", desde: 60, hasta: 64 },
    { nombre: "Referencias", desde: 65, hasta: 65 }
  ],
  // narracion[k] corresponde a la página k+1 (slides/p-NN.png)
  narracion: [
    // 1 -- portada
    "Bienvenidos al cuarto y último módulo de esta parte. Ya sabemos qué es una matriz s.d.p., cómo certificarla y cómo factorizarla con Cholesky. Ahora vamos a responder una pregunta que quedó pendiente desde la semana ocho: por qué los métodos iterativos convergen cuando la matriz es s.d.p.",
    // 2 -- sección
    "Definitud positiva y convergencia de los métodos iterativos.",
    // 3-5 -- Recordatorio (overlays 1-3)
    "Recordemos. Escribimos A como D más A L más A R: la diagonal, la parte estrictamente inferior y la estrictamente superior. Cada método iterativo tiene la forma x k más uno igual a x k más P inversa por el residuo, con matriz de iteración B igual a I menos P inversa A, y converge si y solo si el radio espectral de B es menor que uno. Jacobi usa P igual a D; JOR, D sobre omega; Gauss-Seidel, D más A L; y SOR, D sobre omega más A L.",
    "Y en la semana ocho enunciamos, sin prueba, tres resultados para A s.d.p.: Gauss-Seidel converge; SOR converge si omega está entre cero y dos, que es el teorema de Ostrowski-Reich; y JOR converge si y solo si omega está entre cero y dos sobre el radio espectral de D inversa A.",
    "El plan de hoy: con una sola herramienta, la norma de energía, y un solo teorema, el de Householder-John, vamos a demostrar los tres resultados, y además vamos a entender qué pasa con Jacobi.",
    // 6-10 -- Norma de energía (overlays 1-5)
    "Si A es s.d.p., la segunda caracterización del módulo dos nos da un producto interno, y con él una norma: la norma A de x es la raíz de x transpuesta A x.",
    "Usando Cholesky, A es U transpuesta U, así que la norma A de x es simplemente la norma euclidiana de U x. A la derecha comparamos las bolas unitarias: la euclidiana es un círculo; la de la norma A es una elipse, alineada con los autovectores de A.",
    "¿Por qué se llama norma de energía? Si x estrella resuelve A x igual a b, y definimos la función f de x igual a un medio de x transpuesta A x menos b transpuesta x, entonces f de x menos f de x estrella es exactamente un medio de la norma A del error, al cuadrado.",
    "Consecuencia: x estrella es el único minimizador de f. Y reducir el error en norma de energía es exactamente lo mismo que bajar la energía f.",
    "La prueba es un ejercicio corto: desarrollen un medio de x menos x estrella, transpuesta, A por x menos x estrella, y usen que A x estrella es b y que A es simétrica.",
    // 11-15 -- Gauss-Seidel es descenso por coordenadas (overlays 1-5)
    "Ahora una observación muy bonita. Supongamos que queremos minimizar f moviendo solamente la coordenada x i. Derivamos e igualamos a cero: la componente i de A x menos b i debe ser cero. Despejando x i obtenemos una fórmula conocida.",
    "¡Es exactamente la actualización de Gauss-Seidel!",
    "Es decir, cada subpaso de Gauss-Seidel es el mínimo exacto de la energía a lo largo de un eje coordenado. Por lo tanto, la energía nunca sube, y el error decrece en norma A.",
    "La figura lo muestra: las elipses son curvas de nivel de f. Cada tramo horizontal o vertical termina justo donde es tangente a una curva de nivel, que es donde está el mínimo sobre esa recta.",
    "En este ejemplo de dos por dos, en cada subpaso el cuadrado de la norma de energía del error se multiplica por cuatro novenos: tres coma setenta y cinco, uno coma sesenta y siete, cero coma setenta y cuatro, y así sucesivamente.",
    // 16-20 -- Householder-John (overlays 1-5)
    "Este es el teorema que lo explica todo, el de Householder-John. Sea A s.d.p. y P invertible. Si la matriz Q, igual a P más P transpuesta menos A, es definida positiva, entonces la matriz de iteración tiene norma A menor que uno. En particular, el método converge para cualquier punto inicial, y el error baja en norma de energía en cada paso.",
    "Demostración. Tomamos x distinto de cero y definimos y igual a P inversa A x, que también es distinto de cero porque A es invertible. Entonces B x es x menos y, y A x es P y.",
    "Calculamos la norma A de B x al cuadrado: desarrollando, es la norma A de x al cuadrado, menos dos y transpuesta A x, más y transpuesta A y.",
    "Pero y transpuesta A x es y transpuesta P y, que es un medio de y transpuesta por P más P transpuesta, por y. Sustituyendo, la norma A de B x al cuadrado es la norma A de x al cuadrado menos y transpuesta Q y. Como Q es definida positiva, esto es estrictamente menor.",
    "Para terminar: la esfera unitaria en norma A es compacta, así que el máximo de la norma de B x se alcanza, y es menor que uno. Y como el radio espectral está acotado por cualquier norma inducida, el radio espectral de B también es menor que uno.",
    // 21-27 -- Un teorema, cuatro corolarios (overlays 1-7)
    "Apliquemos el teorema a cada método. Como A es simétrica, A R es A L transpuesta, y Q es muy fácil de calcular.",
    "Gauss-Seidel: P es D más A L. Entonces P más P transpuesta menos A da D, que es s.d.p. siempre, porque la diagonal de una matriz s.d.p. es positiva. Gauss-Seidel converge siempre.",
    "SOR: P es D sobre omega más A L, y Q resulta dos sobre omega menos uno, por D. Es s.d.p. exactamente cuando omega está entre cero y dos.",
    "Jacobi: P es D, y Q es dos D menos A. Esto hay que verificarlo; no es automático.",
    "Y JOR: P es D sobre omega, y Q es dos sobre omega por D, menos A, que es s.d.p. si omega es suficientemente pequeño.",
    "De la fila de SOR sale el teorema de Ostrowski-Reich: si A es s.d.p. y omega está entre cero y dos, SOR converge. Y combinado con el teorema de Kahan, que dice que el radio espectral es al menos el valor absoluto de uno menos omega, obtenemos que SOR converge si y solo si omega está entre cero y dos.",
    "¿Y Jacobi? El teorema solo dice que, si dos D menos A es s.d.p., Jacobi converge. Pero ser s.d.p. no basta, como vamos a ver en el siguiente ejemplo.",
    // 28-34 -- s.d.p. no basta para Jacobi (overlays 1-7)
    "Tomemos esta matriz de tres por tres, con unos en la diagonal y cero coma seis fuera de ella. La solución del sistema que usaremos es uno, uno, uno.",
    "Sus autovalores son dos coma dos, cero coma cuatro y cero coma cuatro. Todos positivos: A es s.d.p.",
    "Pero dos D menos A tiene autovalores menos cero coma dos, uno coma seis y uno coma seis. No es s.d.p.",
    "Como D es la identidad, la matriz de Jacobi es I menos A, con autovalores menos uno coma dos, cero coma seis y cero coma seis. El radio espectral es uno coma dos, mayor que uno: Jacobi diverge.",
    "En cambio, Gauss-Seidel tiene radio espectral cerca de cero coma cuatro seis cinco: converge, como garantiza el teorema.",
    "La tabla muestra las primeras iteraciones desde x cero igual a cero. El error inicial es justamente un autovector de la matriz de Jacobi, así que el error de Jacobi se multiplica exactamente por menos uno coma dos en cada paso, en cualquier norma. Gauss-Seidel, en cambio, converge.",
    "Un detalle muy instructivo: en la norma infinito, el error de Gauss-Seidel sube en el primer paso, de uno a uno coma dos. Pero en la norma de energía baja siempre. La norma de energía es la norma natural del problema.",
    // 35-39 -- Jacobi y JOR (overlays 1-5)
    "Para Jacobi y JOR podemos dar la caracterización exacta. La matriz de Jacobi es semejante a una matriz simétrica: I menos A sombrero, donde A sombrero es D a la menos un medio, A, D a la menos un medio, que también es s.d.p.",
    "Si mu mínimo hasta mu máximo son los autovalores de A sombrero, que son los mismos de D inversa A, entonces los autovalores de Jacobi son uno menos mu i, y los de JOR son uno menos omega mu i.",
    "De ahí sale el teorema: Jacobi converge si y solo si mu máximo es menor que dos, que equivale a que dos D menos A sea s.d.p. JOR converge si y solo si omega está entre cero y dos sobre mu máximo. Y el omega óptimo es dos sobre la suma de mu mínimo y mu máximo.",
    "En el ejemplo anterior, D es la identidad y los mu son cero coma cuatro y dos coma dos. La gráfica muestra el radio espectral de JOR en función de omega. Jacobi, con omega igual a uno, está por encima de uno.",
    "El omega óptimo es dos sobre dos coma seis, cerca de cero coma setenta y siete, con radio espectral cerca de cero coma sesenta y nueve. JOR rescata a Jacobi amortiguando el paso.",
    // 40-42 -- Young (overlays 1-3)
    "Un recordatorio del caso tridiagonal, el teorema de Young: si A es s.d.p. y tridiagonal, el radio espectral de Gauss-Seidel es el cuadrado del de Jacobi, el omega óptimo de SOR tiene una fórmula explícita, y el radio espectral de SOR con ese omega es omega óptimo menos uno.",
    "¿Por qué aquí sí converge Jacobi, si acabamos de ver que en general no? Porque, para una matriz tridiagonal, dos D menos A se obtiene cambiando el signo de las subdiagonales, y eso es una semejanza con la matriz diagonal de unos y menos unos alternados. Así que dos D menos A también es s.d.p.",
    "Y un criterio cómodo para reconocer matrices s.d.p.: si A es simétrica, con diagonal positiva y estrictamente diagonal dominante, entonces es s.d.p. Por Gershgorin, sus autovalores son reales y están en intervalos contenidos en los positivos.",
    // 43-46 -- Ejemplo 5x5: certificados (overlays 1-4)
    "Veamos un ejemplo completo: este sistema de cinco por cinco, cuya matriz es tridiagonal, con tres en la diagonal y menos uno en las subdiagonales.",
    "Primer certificado de que es s.d.p., el criterio cómodo: es simétrica, la diagonal es tres, y la suma de los valores absolutos fuera de la diagonal es a lo sumo dos, menor que tres.",
    "Segundo certificado, Sylvester. Desarrollando por la última fila, los menores líderes cumplen la recurrencia delta k igual a tres delta k menos uno, menos delta k menos dos. Salen tres, ocho, veintiuno, cincuenta y cinco y ciento cuarenta y cuatro. Todos positivos.",
    "Y tercero, Gershgorin: los autovalores están entre uno y cinco. De hecho, se conocen exactamente: tres menos dos coseno de j pi sobre seis, entre uno coma veintisiete y cuatro coma setenta y tres.",
    // 47-52 -- Ejemplo 5x5: Jacobi y Gauss-Seidel (overlays 1-6)
    "La matriz de Jacobi de este ejemplo es un tercio por la matriz con unos en las dos subdiagonales.",
    "Sus autovalores son dos tercios del coseno de j pi sobre seis: más y menos raíz de tres sobre tres, más y menos un tercio, y cero. El radio espectral es raíz de tres sobre tres, cerca de cero coma cincuenta y ocho.",
    "Su polinomio característico se factoriza así, lo que confirma esos autovalores.",
    "Esta es la matriz de Gauss-Seidel. Observen la primera columna de ceros y las potencias de un tercio.",
    "Su polinomio característico tiene raíz cero de multiplicidad tres, y las raíces un tercio y un noveno. El radio espectral es un tercio.",
    "Y aquí se verifica Young: los autovalores no nulos de Gauss-Seidel son los cuadrados de los de Jacobi. Raíz de tres sobre tres al cuadrado es un tercio; un tercio al cuadrado es un noveno.",
    // 53-59 -- ω óptimo de SOR (overlays 1-7)
    "Calculemos el omega óptimo de SOR con la fórmula de Young. Como el radio espectral de Jacobi al cuadrado es un tercio, omega óptimo es dos sobre uno más la raíz de uno menos un tercio.",
    "Es decir, dos sobre uno más raíz de dos tercios.",
    "Racionalizando, se obtiene seis menos dos raíz de seis, aproximadamente uno coma uno cero uno.",
    "Y el radio espectral de SOR con ese omega es omega óptimo menos uno: cinco menos dos raíz de seis, cerca de cero coma uno cero uno.",
    "En la práctica, desde x cero igual a cero y hasta que el error sea menor que diez a la menos seis: Jacobi necesita veintiocho iteraciones, Gauss-Seidel quince, y SOR con omega óptimo, solo nueve.",
    "La gráfica muestra el radio espectral de SOR en función de omega. El mínimo, en rojo, está en omega óptimo; Gauss-Seidel corresponde a omega igual a uno.",
    "Como el radio espectral de Jacobi es pequeño, el omega óptimo queda cerca de uno. La ganancia de SOR crece cuando el radio de Jacobi se acerca a uno, como pasaba con la matriz tridiagonal menos uno, dos, menos uno de la semana ocho.",
    // 60-64 -- ¿Directo o iterativo? (overlays 1-5)
    "Para cerrar, comparemos Cholesky con los métodos iterativos. Ambos se apoyan en que A sea s.d.p.: Cholesky la necesita para existir, y para Gauss-Seidel y SOR es suficiente para converger.",
    "El costo: Cholesky cuesta n al cubo sobre tres una sola vez, y dos n cuadrado por cada lado derecho. Un paso de Gauss-Seidel cuesta del orden de dos veces el número de entradas no nulas de A.",
    "El resultado: Cholesky da la solución exacta salvo redondeo; el iterativo da una aproximación y se detiene con una tolerancia.",
    "Y la memoria: en Cholesky, U se llena dentro de la banda de A; el iterativo solo guarda A y x.",
    "Algunos órdenes de magnitud. Para una matriz densa de mil por mil, Cholesky cuesta unos tres coma tres por diez a la ocho operaciones, y un paso de Gauss-Seidel unos dos millones: iterar compensa solo si bastan menos de unos ciento setenta pasos. Si A es tridiagonal, Cholesky conserva la banda y cuesta del orden de n: gana el método directo. Pero en problemas en dos dimensiones, sobre una malla, U se llena y el costo crece mucho; ahí los métodos iterativos, y sus sucesores, suelen ganar.",
    // 65 -- referencias
    "Estas son las referencias del tema. El teorema de Young, en particular, está en el libro de Burden y Faires. Con esto terminamos la parte de matrices simétricas definidas positivas. Les recomiendo resolver los ejercicios de validación de la semana."
  ],
  // Preguntas intercaladas: se muestran al terminar la página "despues",
  // ANTES de que el PDF revele la respuesta.
  preguntas: [
    {
      despues: 7,
      enunciado: "Con \\(A=\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}\\), calcule \\(\\|\\mathbf x\\|_A=\\sqrt{\\mathbf x^TA\\mathbf x}\\) para \\(\\mathbf x=(1,1)^T\\).",
      opciones: ["\\(\\sqrt2\\)", "\\(2\\)", "\\(\\sqrt6\\)", "\\(1\\)"],
      correcta: 0,
      explicacion: "\\(\\mathbf x^TA\\mathbf x=2-2+2=2\\), así que \\(\\|\\mathbf x\\|_A=\\sqrt2\\). Coincide con \\(\\sqrt{\\lambda}\\,\\|\\mathbf x\\|_2=\\sqrt1\\cdot\\sqrt2\\), pues \\((1,1)^T\\) es autovector con \\(\\lambda=1\\)."
    },
    {
      despues: 14,
      enunciado: "Con \\(A=\\begin{pmatrix}3&2\\\\2&3\\end{pmatrix}\\), \\(\\mathbf b=(5,5)^T\\) y \\(\\mathbf x_0=(-\\tfrac12,2)^T\\), el primer subpaso de Gauss–Seidel actualiza \\(x_1\\). ¿Qué valor toma?",
      opciones: ["\\(\\tfrac13\\)", "\\(1\\)", "\\(\\tfrac53\\)", "\\(-\\tfrac12\\)"],
      correcta: 0,
      explicacion: "\\(x_1=\\tfrac{1}{3}(5-2\\cdot2)=\\tfrac13\\). En la figura es el primer tramo horizontal, de \\(-\\tfrac12\\) a \\(\\tfrac13\\)."
    },
    {
      despues: 23,
      enunciado: "Para Jacobi, \\(P=D\\). ¿Cuánto vale \\(Q=P+P^T-A\\)?",
      opciones: ["\\(2D-A\\)", "\\(D\\)", "\\(D-A\\)", "\\(A-2D\\)"],
      correcta: 0,
      explicacion: "\\(D\\) es diagonal, así que \\(D^T=D\\) y \\(Q=2D-A\\). A diferencia de Gauss–Seidel (\\(Q=D\\)), esta matriz no tiene por qué ser s.d.p."
    },
    {
      despues: 30,
      enunciado: "Con \\(D=I\\), la matriz de Jacobi es \\(B_J=I-A\\). Si \\(\\sigma(A)=\\{2.2,\\ 0.4,\\ 0.4\\}\\), ¿cuánto vale \\(\\rho(B_J)\\)?",
      opciones: ["\\(1.2\\)", "\\(0.6\\)", "\\(2.2\\)", "\\(0.4\\)"],
      correcta: 0,
      explicacion: "\\(\\sigma(B_J)=\\{1-2.2,\\ 1-0.4,\\ 1-0.4\\}=\\{-1.2,\\ 0.6,\\ 0.6\\}\\), y \\(\\rho(B_J)=1.2>1\\): Jacobi diverge aunque \\(A\\) sea s.d.p."
    },
    {
      despues: 37,
      enunciado: "Con \\(\\mu_{\\min}=0.4\\) y \\(\\mu_{\\max}=2.2\\), calcule \\(\\omega_{\\mathrm{opt}}=\\dfrac{2}{\\mu_{\\min}+\\mu_{\\max}}\\) para JOR.",
      opciones: ["\\(\\approx0.769\\)", "\\(\\approx0.909\\)", "\\(1\\)", "\\(\\approx0.692\\)"],
      correcta: 0,
      explicacion: "\\(2/2.6\\approx0.769\\). El valor \\(0.909=2/2.2\\) es el límite de convergencia, no el óptimo; \\(0.692\\) es \\(\\rho_{\\mathrm{opt}}\\)."
    },
    {
      despues: 50,
      enunciado: "Si \\(\\sigma(B_J)=\\{\\pm\\tfrac{\\sqrt3}{3},\\ \\pm\\tfrac13,\\ 0\\}\\) y la matriz es s.d.p. y tridiagonal, ¿cuánto vale \\(\\rho(B_{GS})\\)?",
      opciones: ["\\(\\tfrac13\\)", "\\(\\tfrac{\\sqrt3}{3}\\)", "\\(\\tfrac19\\)", "\\(\\tfrac23\\)"],
      correcta: 0,
      explicacion: "Por Young, \\(\\rho(B_{GS})=\\rho(B_J)^2=\\bigl(\\tfrac{\\sqrt3}{3}\\bigr)^2=\\tfrac13\\)."
    },
    {
      despues: 55,
      enunciado: "Con \\(\\omega_{\\mathrm{opt}}=6-2\\sqrt6\\approx1.1010\\), ¿cuánto vale \\(\\rho\\bigl(B_{\\mathrm{SOR}}(\\omega_{\\mathrm{opt}})\\bigr)\\)?",
      opciones: ["\\(\\approx0.1010\\)", "\\(\\approx1.1010\\)", "\\(\\approx0.3333\\)", "\\(\\approx0.5774\\)"],
      correcta: 0,
      explicacion: "Por Young, \\(\\rho=\\omega_{\\mathrm{opt}}-1=5-2\\sqrt6\\approx0.1010\\), mucho menor que \\(\\rho(B_{GS})=\\tfrac13\\) y \\(\\rho(B_J)\\approx0.5774\\)."
    }
  ]
};
