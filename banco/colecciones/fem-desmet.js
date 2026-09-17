// COLECCIÓN: Desmet y Vandepitte, «Finite Element Modeling for Acoustics»
// (cap. 2 del curso Numerical Acoustics, LMS International, 2005; reedición del
// trabajo en ISAAC 13, Leuven, 2002). PDF en referencias/ como «FEM for Acoustics».
// Numeración impresa del capítulo: págs. 37 a 58 (pie de página del documento).
//
// Ítems atados al documento y sus secciones. Cada ítem lleva `seccion` + `cat`;
// `fuente` se aplica con .map() al final. NO lleva `area`.
// Regla de oro: 4 opciones del mismo largo (±5). Validar con check_banco.py.

export const FEM_DESMET = [

  // ─── 2.2-2.3 Formulación ───
  {
    id: "col-fem-dos-conceptos",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 2,
    q: "El método de elementos finitos se apoya en dos conceptos:",
    opts: [
      "formulación integral del problema y funciones de forma.",
      "sorteo de rayos y luego promedio de energía en la celda.",
      "medición del campo y luego ajuste por mínimos cuadrados.",
      "solución exacta de la onda en cada punto del dominio real.",
    ],
    ans: 0,
    why: "El FEM transforma la ecuación diferencial en una formulación integral equivalente (residuos ponderados o variacional) y aproxima el campo con funciones de forma definidas localmente en pequeños subdominios (los elementos). Así el problema de hallar el campo en todo el continuo se reduce a hallar sus valores en un número finito de nodos.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.1, p. 37",
  },
  {
    id: "col-fem-helmholtz",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 2,
    q: "La ecuación que gobierna el problema acústico interior es…",
    opts: [
      "la de Helmholtz: ∇²p + k²p = −jρ₀ωq, con k = ω/c.",
      "la de difusión de calor aplicada al campo de presión.",
      "la de Laplace ∇²p = 0, sin término de número de onda.",
      "la ecuación de onda resuelta paso a paso en el tiempo.",
    ],
    ans: 0,
    why: "La presión estacionaria en un dominio fluido acotado, excitado a frecuencia ω por una fuente q, cumple la ecuación de Helmholtz ∇²p + k²p = −jρ₀ωq, con k = ω/c el número de onda. Es la forma armónica de la ecuación de onda: el FEM la resuelve frecuencia por frecuencia, no en el dominio del tiempo.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.2, p. 38",
  },
  {
    id: "col-fem-condiciones",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 2,
    q: "Sobre la frontera del dominio se puede imponer…",
    opts: [
      "presión, velocidad normal o impedancia normal dadas.",
      "solo la presión, nunca la velocidad ni la impedancia.",
      "la temperatura y el flujo de calor de las paredes.",
      "únicamente el número de modos que caben en la sala.",
    ],
    ans: 0,
    why: "Para que el campo quede unívocamente definido, en cada punto de la frontera cerrada se especifica una de tres condiciones: presión impuesta, velocidad normal impuesta o impedancia (admitancia) normal impuesta. La impedancia es la que representa paredes absorbentes, y es la que introduce la matriz de amortiguamiento del modelo.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.2, p. 38",
  },
  {
    id: "col-fem-forma-debil",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 3,
    q: "Para pasar a la «forma débil», al residuo ponderado se le aplica…",
    opts: [
      "el teorema de la divergencia, que baja el orden de derivada.",
      "una transformada de Fourier que elimina el tiempo restante.",
      "un promedio estadístico sobre muchas posiciones de fuente.",
      "la ley de Sabine para incluir la reverberación del recinto.",
    ],
    ans: 0,
    why: "La formulación de residuos ponderados exige que la integral del residuo por una función de peso se anule. Aplicando el teorema de la divergencia (integración por partes) se obtiene la forma débil: baja el orden de derivación (de segundo a primero) e incorpora de forma natural las condiciones de contorno de velocidad e impedancia en la integral de superficie.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.3.1, p. 39",
  },
  {
    id: "col-fem-funcion-forma",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 2,
    q: "Cada función de forma Nᵢ del elemento se define de modo que valga…",
    opts: [
      "uno en su nodo i y cero en todos los otros nodos.",
      "cero en su nodo i y uno en el resto de los nodos.",
      "la presión exacta medida en el nodo i del elemento.",
      "uno en todo el dominio, como una constante global.",
    ],
    ans: 0,
    why: "En cada elemento la presión se aproxima como suma p ≈ Σ Nᵢ·pᵢ, donde la función de forma Nᵢ vale 1 en el nodo i y 0 en los demás nodos del elemento. Así cada coeficiente pᵢ es directamente la presión aproximada en el nodo i. Las funciones de forma globales tienen soporte local (solo son no nulas en los elementos que tocan su nodo).",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.3.2, p. 40",
  },
  {
    id: "col-fem-galerkin",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 3,
    q: "En el enfoque de Galerkin, las funciones de peso se toman…",
    opts: [
      "iguales al mismo conjunto de funciones de forma de la presión.",
      "como polinomios de un orden más alto que las de la presión.",
      "constantes por elemento, sin variación dentro de cada celda.",
      "al azar en cada nodo, para no sesgar el residuo del modelo.",
    ],
    ans: 0,
    why: "En el método de Galerkin la función de peso se expande en el mismo conjunto de funciones de forma que se usó para la presión. Al usar sucesivamente cada función de forma global como peso, se obtiene un sistema de nf ecuaciones en las nf presiones nodales incógnitas. Esta elección es la que da matrices simétricas, una ventaja clave del modelo.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.3.3, p. 41",
  },
  {
    id: "col-fem-K-M",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 3,
    q: "En el modelo acústico, la «matriz de rigidez» K en realidad…",
    opts: [
      "es una matriz de movilidad: liga presión con aceleración.",
      "liga fuerza con desplazamiento, igual que en estructuras.",
      "es siempre diagonal y no depende de la malla que se use.",
      "representa la absorción de las paredes reales del recinto.",
    ],
    ans: 0,
    why: "Los nombres se heredan del FEM estructural, pero el sentido físico se invierte: la «rigidez» K acústica es en verdad una matriz de movilidad (masa inversa), que liga la presión con una aceleración; y la «masa» M acústica es una matriz de compresibilidad, que liga la presión con un desplazamiento. Conviene tenerlo presente al interpretar el modelo.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.3.3.1, p. 42",
  },
  {
    id: "col-fem-rala-banda",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 2,
    q: "Las matrices del modelo FEM resultan…",
    opts: [
      "ralas y en banda, gracias al soporte local de las formas.",
      "totalmente llenas, con casi todos los términos no nulos.",
      "diagonales exactas, sin ningún elemento fuera de la diagonal.",
      "antisimétricas, con la diagonal principal siempre en cero.",
    ],
    ans: 0,
    why: "Un elemento Kᵢⱼ es no nulo solo si los nodos i y j comparten algún elemento; como cada nodo tiene pocos vecinos, casi todo es cero: la matriz es rala. Con una numeración adecuada de los nodos (que los programas comerciales generan solos), los no nulos quedan en una banda angosta alrededor de la diagonal, lo que ahorra memoria y acelera la solución.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.3.3.1, p. 42",
  },
  {
    id: "col-fem-amortiguamiento",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 3,
    q: "La matriz de amortiguamiento C del modelo acústico aparece por…",
    opts: [
      "las condiciones de impedancia en la frontera del dominio.",
      "la viscosidad interna del aire dentro del volumen fluido.",
      "el sorteo aleatorio de las direcciones de propagación.",
      "el redondeo numérico al ensamblar las demás matrices.",
    ],
    ans: 0,
    why: "La matriz de amortiguamiento C proviene de las condiciones de contorno de impedancia (admitancia) sobre la superficie. Como esa impedancia suele ser una función compleja de la frecuencia, C es a la vez compleja y dependiente de la frecuencia, a diferencia de K y M. Es la que introduce las pérdidas (absorción de las paredes) en el modelo.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.3.3.4, p. 45",
  },
  {
    id: "col-fem-sistema",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 2,
    q: "El sistema de ecuaciones del modelo acústico tiene la forma…",
    opts: [
      "(K + jωC − ω²M)·p = F, para las presiones nodales.",
      "(K + C + M)·p = F, sin depender de la frecuencia ω.",
      "(M − K)·p = 0, o sea un problema puramente estático.",
      "K·p = ω·F, con dependencia lineal en la frecuencia.",
    ],
    ans: 0,
    why: "Sustituyendo las expansiones en la forma débil se llega a ([K] + jω[C] − ω²[M])·{p} = {F}, con {p} las presiones nodales incógnitas y {F} el vector de excitación (fuentes, velocidad y presión impuestas). La rigidez entra directa, el amortiguamiento con jω y la masa con −ω²: es la forma armónica típica del FEM.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.3.3.5, p. 46",
  },
  {
    id: "col-fem-presion-impuesta",
    seccion: "2.2-2.3 Formulación", cat: "2.2-2.3 Formulación", dif: 3,
    q: "La condición de presión impuesta se incorpora al sistema…",
    opts: [
      "asignando su valor al nodo y eliminando esa ecuación.",
      "sumando una matriz de impedancia extra en la frontera.",
      "como término fuente en el vector del lado derecho solo.",
      "iterando hasta que la presión converja sola en el nodo.",
    ],
    ans: 0,
    why: "A diferencia de la velocidad y la impedancia (que entran vía la integral de superficie), la presión impuesta se incorpora asignando directamente su valor a la presión nodal correspondiente y eliminando esa fila de la ecuación. Los términos con esos valores conocidos se pasan al lado derecho. Queda un sistema reducido con solo las presiones aún desconocidas.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.3.3.5, p. 46",
  },

  // ─── 2.4 Convergencia ───
  {
    id: "col-fem-completitud",
    seccion: "2.4 Convergencia", cat: "2.4 Convergencia", dif: 3,
    q: "La condición de «completitud» exige que dentro de cada elemento…",
    opts: [
      "la presión y su gradiente puedan tomar valores constantes.",
      "la presión valga cero en el centro exacto del elemento.",
      "haya al menos diez nodos por cada longitud de onda dada.",
      "las funciones de forma sean ortogonales entre sí siempre.",
    ],
    ans: 0,
    why: "La completitud es condición necesaria de convergencia: como en la solución exacta la presión y su gradiente tienden a valores constantes en una región infinitesimal, la aproximación debe poder representar esos estados constantes dentro de cada elemento. Con formas polinómicas, basta que sean completas al menos hasta el primer orden.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.4.1, p. 47",
  },
  {
    id: "col-fem-compatibilidad",
    seccion: "2.4 Convergencia", cat: "2.4 Convergencia", dif: 3,
    q: "La «compatibilidad» (continuidad C0) de los elementos pide que…",
    opts: [
      "la presión sea continua a través del borde entre elementos.",
      "el gradiente sea continuo en el borde, pero no la presión.",
      "cada elemento tenga siempre ocho nodos en sus vértices.",
      "la malla sea regular, con todas las celdas del mismo tamaño.",
    ],
    ans: 0,
    why: "La compatibilidad exige que la presión sea continua a lo largo de los bordes entre elementos (continuidad C0), aunque sus primeras derivadas puedan saltar ahí. Es lo que permite evaluar sin infinitos las integrales de la forma débil, donde la máxima derivada es de primer orden. Un elemento lineal cumple C0 porque en cada borde la presión queda fijada por los nodos de ese borde.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.4.1, p. 47",
  },
  {
    id: "col-fem-patch-test",
    seccion: "2.4 Convergencia", cat: "2.4 Convergencia", dif: 3,
    q: "Los elementos «conformes» convergen monótonamente; los no conformes…",
    opts: [
      "pueden converger igual si pasan el llamado «patch test».",
      "nunca convergen, por más fina que se haga la malla.",
      "convergen siempre más rápido que los conformes reales.",
      "solo sirven para problemas de una sola dimensión dada.",
    ],
    ans: 0,
    why: "Un elemento conforme cumple completitud y compatibilidad: su discretización converge monótonamente a la solución exacta. Uno no conforme cumple completitud pero no compatibilidad; aun así puede converger (no necesariamente en forma monótona) si el conjunto pasa el «patch test», que es básicamente una prueba de completitud sobre un parche de elementos incompatibles.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.4.1, p. 47",
  },
  {
    id: "col-fem-isoparametrico",
    seccion: "2.4 Convergencia", cat: "2.4 Convergencia", dif: 3,
    q: "Un elemento «isoparamétrico» usa las mismas funciones de forma para…",
    opts: [
      "describir su geometría y su campo de presión a la vez.",
      "la presión y para la temperatura del fluido del recinto.",
      "todos los elementos de la malla, sin distinguir formas.",
      "la fuente y para el receptor dentro del mismo elemento.",
    ],
    ans: 0,
    why: "El mapeo paramétrico deforma un elemento «padre» simple (rectángulo, tetraedro) en uno de geometría distorsionada, con un sistema de coordenadas local curvilíneo. Cuando las mismas funciones de forma describen la geometría y el campo, el elemento es isoparamétrico. El jacobiano del mapeo transforma las integrales al elemento padre, donde los límites son constantes y el cálculo es simple.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.4.2, p. 50",
  },

  // ─── 2.5 Propiedades del modelo ───
  {
    id: "col-fem-frec-independiente",
    seccion: "2.5 Propiedades del modelo", cat: "2.5 Propiedades del modelo", dif: 3,
    q: "Respecto de la frecuencia, las matrices K y M del modelo son…",
    opts: [
      "reales e independientes de ω; permiten un solver modal.",
      "complejas y dependientes de ω, como la de amortiguamiento.",
      "distintas en cada frecuencia y hay que rearmarlas siempre.",
      "nulas salvo en la diagonal, sin acople entre nodos vecinos.",
    ],
    ans: 0,
    why: "Como las funciones de forma no dependen de la frecuencia, las matrices de rigidez K y masa M son reales e independientes de ω: se arman una sola vez y permiten usar solvers estándar de autovalores para las frecuencias y modos propios. La de amortiguamiento C, en cambio, suele ser compleja y dependiente de ω por la impedancia de la frontera.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.5, p. 52",
  },
  {
    id: "col-fem-diez-por-lambda",
    seccion: "2.5 Propiedades del modelo", cat: "2.5 Propiedades del modelo", dif: 2,
    q: "La regla práctica para mallar exige, por longitud de onda, al menos…",
    opts: [
      "diez elementos, así que el modelo crece con la frecuencia.",
      "un solo elemento, sin importar cuál sea la frecuencia.",
      "dos elementos fijos, iguales en graves que en agudos.",
      "elementos solo en la frontera, nunca dentro del volumen.",
    ],
    ans: 0,
    why: "Las formas polinómicas de bajo orden solo representan una variación espacial limitada, así que hace falta una malla fina para capturar la ondulación del campo: la regla de oro pide al menos 10 elementos por longitud de onda. Como λ = c/f baja con la frecuencia, el número de elementos crece con ella, y por eso el FEM queda restringido en la práctica a un rango de baja frecuencia.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.5, p. 53",
  },
  {
    id: "col-fem-secundarias",
    seccion: "2.5 Propiedades del modelo", cat: "2.5 Propiedades del modelo", dif: 3,
    q: "En el FEM, la velocidad del fluido se predice…",
    opts: [
      "peor que la presión, y salta en los bordes entre elementos.",
      "mejor que la presión, por ser una variable derivada del campo.",
      "con la misma exactitud exacta que la presión en cada nodo.",
      "solo en la frontera, nunca en el interior del volumen dado.",
    ],
    ans: 0,
    why: "La velocidad es una variable secundaria: se obtiene derivando la presión (variable primaria). Si la presión se expande con un polinomio completo hasta cierto orden, su gradiente queda completo hasta un orden menor, así que representa peor la variación espacial. Además suele resultar discontinua en los bordes entre elementos, pese a que físicamente presión y velocidad tienen la misma variación.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.5, p. 53",
  },

  // ─── 2.6-2.7 Solución y dominio ───
  {
    id: "col-fem-modal",
    seccion: "2.6-2.7 Solución y dominio", cat: "2.6-2.7 Solución y dominio", dif: 3,
    q: "En el método modal, los modos acústicos no amortiguados salen de…",
    opts: [
      "un problema de autovalores con paredes tomadas como rígidas.",
      "resolver el sistema completo en cada frecuencia de interés.",
      "medir la respuesta de la sala y ajustar una curva modal.",
      "sortear fuentes al azar y promediar la presión resultante.",
    ],
    ans: 0,
    why: "El método modal descarta la matriz de amortiguamiento y la excitación (paredes rígidas) y resuelve el problema de autovalores [Ka]{φ} = ωₘ²[Ma]{φ}, obteniendo los modos y sus frecuencias propias. Luego proyecta el sistema sobre una base truncada de modos. Como regla, se incluyen los modos con frecuencia menor al doble del límite superior del rango de interés, reduciendo mucho el tamaño del modelo.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.6.2, p. 54",
  },
  {
    id: "col-fem-exterior",
    seccion: "2.6-2.7 Solución y dominio", cat: "2.6-2.7 Solución y dominio", dif: 3,
    q: "Para usar el FEM en problemas exteriores (dominio no acotado) se…",
    opts: [
      "corta con una frontera artificial y la condición de Sommerfeld.",
      "aumenta sin más el paso de malla hasta cubrir todo el espacio.",
      "ignora la radiación y se trata como un problema interior común.",
      "reemplaza la onda por rayos que se pierden en el infinito real.",
    ],
    ans: 0,
    why: "El FEM solo maneja dominios acotados, así que para un problema exterior se introduce una frontera artificial a cierta distancia y allí se impone la condición de radiación de Sommerfeld (que las ondas salgan libremente al infinito, sin reflejarse). Se aproxima con impedancia de onda plana, elementos absorbentes, el método Dirichlet-to-Neumann o elementos infinitos.",
    src: "Desmet y Vandepitte, FEM for Acoustics (LMS, 2005), sec. 2.7, p. 56",
  },

].map((q) => ({ ...q, fuente: "fem-desmet" }));
