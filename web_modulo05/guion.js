// ============================================================================
//  guion.js -- Módulo 5 (clase asincrónica): ejercicios de validación y
//  resumen de la semana. Cada página del PDF = un overlay = un paso.
//  Editar aquí el texto de la narración y las preguntas; el reproductor
//  (index.html) no necesita cambios.
//
//  Audio: si existe audio/p-NN.mp3 (junto a este archivo) se reproduce; si no,
//  se usa la síntesis de voz del navegador.
//  Pregunta: "despues" = la pregunta aparece al terminar esa página y hay que
//  responderla (o saltarla) antes de pasar a la siguiente. Aquí cada pregunta
//  va justo antes de que aparezca la solución del ejercicio correspondiente.
// ============================================================================
window.MODULO = {
  titulo: "Módulo 5 · Ejercicios de validación y resumen de la semana",
  curso: "Introducción al Análisis Numérico · UdeA · 2026-II",
  frames: [
    { nombre: "Portada", desde: 1, hasta: 1 },
    { nombre: "Sección", desde: 2, hasta: 2 },
    { nombre: "Ejercicios de validación", desde: 3, hasta: 3 },
    { nombre: "Valores para comprobar", desde: 4, hasta: 7 },
    { nombre: "Resumen de la semana", desde: 8, hasta: 11 }
  ],
  // narracion[k] corresponde a la página k+1 (slides/p-NN.png)
  narracion: [
    // 1 -- portada
    "Bienvenidos al último módulo de la semana. Aquí no hay teoría nueva: son cuatro ejercicios de validación, en los que ustedes calculan y luego comprueban, y al final un resumen de todo lo que vimos.",
    // 2 -- sección
    "Ejercicios.",
    // 3 -- enunciados
    "Estos son los cuatro ejercicios. El primero es un ejemplo completo de Cholesky: menores líderes, el factor U y la solución de un sistema. El segundo muestra cómo falla el algoritmo cuando la matriz no es s.d.p. El tercero estudia una familia de matrices tridiagonales que dependen de un parámetro alfa. Y el cuarto retoma la matriz con cero coma seis fuera de la diagonal. Les recomiendo detenerse aquí y resolverlos con lápiz y papel; cada ejercicio indica qué hay que validar. Cuando sigan, antes de cada solución aparecerá una pregunta corta para que comparen su resultado.",
    // 4-7 -- valores para comprobar (overlays 1-4)
    "Ejercicio uno. Los menores líderes son nueve, treinta y seis y ciento cuarenta y cuatro, todos positivos. El factor de Cholesky tiene enteros: tres, uno, menos uno; dos, uno; y dos. La validación: el producto de la diagonal, tres por dos por dos, al cuadrado, es ciento cuarenta y cuatro, que es el determinante. Y las dos sustituciones dan y igual a uno, menos uno, dos, y x igual a uno, menos uno, uno.",
    "Ejercicio dos. En la primera matriz, cuatro, dos; dos, uno, el radicando de u dos dos es cero: la matriz es solo semidefinida, y el vector uno, menos dos da forma cuadrática cero. En la segunda, el radicando es cinco menos ocho, menos tres: el algoritmo se detiene, y el vector dos, uno da forma cuadrática menos tres, que lo confirma.",
    "Ejercicio tres. Los menores líderes son dos, cuatro menos alfa cuadrado y ocho menos cuatro alfa cuadrado, así que la matriz es s.d.p. exactamente cuando el valor absoluto de alfa es menor que raíz de dos. El radio espectral de Jacobi es el valor absoluto de alfa sobre raíz de dos, que es menor que uno en ese mismo rango. Con alfa igual a uno: el radio de Gauss-Seidel es un medio, el omega óptimo es cuatro menos dos raíz de dos, cerca de uno coma diecisiete, y el radio de SOR es tres menos dos raíz de dos. Contando iteraciones: Jacobi cuarenta, Gauss-Seidel diecinueve y SOR once.",
    "Ejercicio cuatro. Los dos primeros pasos de Gauss-Seidel dan los vectores que ven en pantalla. Las normas del error reproducen la tabla de la clase: en norma infinito, uno, uno coma dos y cero coma cuarenta y seis, que sube antes de bajar; en norma de energía, dos coma cincuenta y siete, cero coma noventa y tres y cero coma cuarenta y uno, que baja siempre. Y para JOR con omega igual a cero coma setenta y cinco, el radio espectral es el máximo entre cero coma siete y cero coma sesenta y cinco: cero coma siete, así que converge.",
    // 8-11 -- resumen (overlays 1-4)
    "Para cerrar, el resumen de la semana. Una matriz s.d.p. es simétrica y su forma cuadrática es positiva: geométricamente, un cuenco. Son equivalentes: autovalores positivos, menores líderes positivos y la factorización U transpuesta U. Y son necesarias, pero no suficientes: la diagonal positiva, el determinante positivo y que las submatrices principales sean s.d.p.",
    "Cholesky: A es L D L transpuesta, que es U transpuesta U, con U igual a la raíz de D por L transpuesta. Cuesta n al cubo sobre tres operaciones, no necesita pivoteo, y los cuadrados de la diagonal de U son los cocientes de menores líderes, como anticipamos en el módulo dos. En la práctica, es el test de definitud.",
    "Métodos iterativos con A s.d.p.: el teorema de Householder-John dice que, si P más P transpuesta menos A es s.d.p., la iteración contrae en norma de energía. De ahí, Gauss-Seidel converge siempre, y SOR si y solo si omega está entre cero y dos. Jacobi converge si y solo si dos D menos A es s.d.p., y JOR si omega está entre cero y dos sobre el radio espectral de D inversa A. Y en el caso tridiagonal, el radio de Gauss-Seidel es el cuadrado del de Jacobi, y el omega óptimo es explícito.",
    "La próxima semana empezamos interpolación polinómica: Vandermonde, Lagrange, Newton y el error. La matriz de Vandermonde no es s.d.p. y está muy mal condicionada, así que veremos cómo evitarla. ¡Gracias, y nos vemos en clase!"
  ],
  // Preguntas intercaladas: cada una antes de la solución del ejercicio.
  preguntas: [
    {
      despues: 3,
      enunciado: "Ejercicio 1(a). Para \\(A=\\begin{pmatrix}9&3&-3\\\\3&5&1\\\\-3&1&6\\end{pmatrix}\\), ¿cuáles son \\((\\Delta_1,\\Delta_2,\\Delta_3)\\)?",
      opciones: ["\\((9,\\ 36,\\ 144)\\)", "\\((9,\\ 45,\\ 144)\\)", "\\((9,\\ 36,\\ 108)\\)", "\\((9,\\ 36,\\ -144)\\)"],
      correcta: 0,
      explicacion: "\\(\\Delta_2=45-9=36\\); \\(\\Delta_3=9(30-1)-3(18+3)-3(3+15)=261-63-54=144\\). Validación con Cholesky: \\((3\\cdot2\\cdot2)^2=144\\)."
    },
    {
      despues: 4,
      enunciado: "Ejercicio 2. Al aplicar Cholesky a \\(\\begin{pmatrix}2&-4\\\\-4&5\\end{pmatrix}\\), ¿cuánto vale el radicando de \\(u_{22}\\), es decir \\(a_{22}-u_{12}^2\\)?",
      opciones: ["\\(-3\\)", "\\(3\\)", "\\(13\\)", "\\(-11\\)"],
      correcta: 0,
      explicacion: "\\(u_{11}=\\sqrt2\\), \\(u_{12}=-4/\\sqrt2=-2\\sqrt2\\), \\(u_{12}^2=8\\), y \\(5-8=-3<0\\): el algoritmo se detiene. Validación: \\(\\mathbf x=(2,1)^T\\) da \\(q=8-16+5=-3\\)."
    },
    {
      despues: 5,
      enunciado: "Ejercicio 3(a). ¿Para qué valores de \\(\\alpha\\) es \\(A(\\alpha)=\\begin{pmatrix}2&\\alpha&0\\\\\\alpha&2&\\alpha\\\\0&\\alpha&2\\end{pmatrix}\\) s.d.p.?",
      opciones: ["\\(|\\alpha|<\\sqrt2\\)", "\\(|\\alpha|<2\\)", "\\(|\\alpha|<1\\)", "\\(\\alpha>0\\)"],
      correcta: 0,
      explicacion: "\\(\\Delta_1=2\\), \\(\\Delta_2=4-\\alpha^2\\), \\(\\Delta_3=8-4\\alpha^2\\). La condición más fuerte es \\(\\Delta_3>0\\iff\\alpha^2<2\\). La opción \\(|\\alpha|<2\\) solo asegura \\(\\Delta_2>0\\)."
    },
    {
      despues: 6,
      enunciado: "Ejercicio 4(a). Con la matriz de \\(0.6\\) fuera de la diagonal, \\(\\mathbf b=(2.2,2.2,2.2)^T\\) y \\(\\mathbf x_0=\\mathbf 0\\), ¿cuál es \\(\\mathbf x_1\\) de Gauss–Seidel?",
      opciones: ["\\((2.2,\\ 0.88,\\ 0.352)^T\\)", "\\((2.2,\\ 2.2,\\ 2.2)^T\\)", "\\((2.2,\\ 0.88,\\ 0.88)^T\\)", "\\((1,\\ 1,\\ 1)^T\\)"],
      correcta: 0,
      explicacion: "\\(x_1=2.2\\); \\(x_2=2.2-0.6\\cdot2.2=0.88\\); \\(x_3=2.2-0.6(2.2+0.88)=0.352\\). La opción \\((2.2,2.2,2.2)^T\\) es el paso de Jacobi, que no usa los valores recién calculados."
    }
  ]
};
