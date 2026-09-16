// COLECCIÓN: Everest, Master Handbook of Acoustics (muestra).
//
// Colección = preguntas atadas a un documento y sus secciones, para estudiarlo
// aparte del banco por áreas. Cada ítem lleva `fuente` (via .map al final) y
// `seccion` (grupo dentro del documento). NO lleva `area`: no entra al modo áreas.
//
// Misma regla de oro que el banco: 4 opciones del mismo largo (±5). Validar con
// `python check_banco.py`. Ver plan_pdf_secciones.md y CONTENIDO.md.

export const EVEREST_MHA = [

  // ─── Cap. 13: Modos ───
  {
    id: "col-ev-modos-potencia",
    seccion: "Cap. 13: Modos", cat: "Cap. 13: Modos", dif: 2,
    q: "¿Cómo ordena Everest la energía de los tipos de modo?",
    opts: [
      "Oblicuo > tangencial > axial en energía modal.",
      "Axial > tangencial > oblicuo en energía modal.",
      "Los tres tipos aportan igual energía al campo.",
      "Tangencial > axial > oblicuo en energía modal.",
    ],
    ans: 1,
    why: "El axial rebota entre dos paredes enfrentadas: pierde energía en menos reflexiones por ciclo, así que tiene más Q y más nivel. El tangencial toca cuatro superficies y el oblicuo las seis, por eso decaen más rápido y aportan menos. De ahí el orden axial > tangencial > oblicuo, y que los axiales sean el blanco principal del tratamiento de graves.",
    src: "Everest, Master Handbook of Acoustics, p. 140",
  },
  {
    id: "col-ev-modos-nodos",
    seccion: "Cap. 13: Modos", cat: "Cap. 13: Modos", dif: 2,
    q: "El modo axial fundamental de un eje tiene su nodo de presión en…",
    opts: [
      "El centro del eje, entre las dos paredes rígidas.",
      "Las dos paredes, en los extremos del eje largo.",
      "A un tercio de la longitud del eje considerado.",
      "No tiene ningún nodo de presión en su interior.",
    ],
    ans: 0,
    why: "El fundamental (n=1) encaja media onda entre las paredes: antinodos de presión en las paredes rígidas y un único nodo en el centro. Sentarse sobre ese nodo hace que ese modo casi no se excite ni se oiga; por eso ubicar oyente y fuentes respecto de los nodos es el primer tratamiento de graves.",
    src: "Everest, Master Handbook of Acoustics, p. 140",
  },

  // ─── Cap. 8: Reverberación ───
  {
    id: "col-ev-sabine-A",
    seccion: "Cap. 8: Reverberación", cat: "Cap. 8: Reverberación", dif: 2,
    q: "En la ecuación de Sabine, duplicar el área de absorción A…",
    opts: [
      "Reduce el RT60 a la mitad: A va en el denominador.",
      "Duplica el RT60, porque A va en el numerador puro.",
      "No cambia el RT60, sólo depende del volumen dado.",
      "Sube el RT60 por el mayor camino libre medio real.",
    ],
    ans: 0,
    why: "RT60 = 0,161·V/A: A está en el denominador, así que al duplicar la absorción la cola se reduce a la mitad. El volumen está en el numerador (más volumen, más cola). Es lineal en ambos, dentro del rango de validez de campo difuso que supone Sabine.",
    src: "Everest, Master Handbook of Acoustics, p. 159",
  },
  {
    id: "col-ev-eyring",
    seccion: "Cap. 8: Reverberación", cat: "Cap. 8: Reverberación", dif: 3,
    q: "¿Cuándo Sabine y Eyring se separan de forma apreciable?",
    opts: [
      "Con absorción media alta, Sabine sobrestima el RT.",
      "Con absorción media baja, Sabine lo subestima mucho.",
      "Con absorción muy alta las dos fórmulas coinciden.",
      "Eyring da siempre un RT mayor que el de Sabine dado.",
    ],
    ans: 0,
    why: "Comparten el 0,161·V pero difieren en el denominador: Sabine usa S·ᾱ y Eyring −S·ln(1−ᾱ). Como −ln(1−ᾱ) ≈ ᾱ para ᾱ chico, coinciden en salas poco absorbentes. Con ᾱ alto Sabine sobrestima: supone que la energía se absorbe de a poco, cuando cada reflexión se come una fracción grande.",
    src: "Everest, Master Handbook of Acoustics, p. 160",
  },

  // ─── Cap. 15: Frecuencia de Schroeder ───
  {
    id: "col-ev-schroeder-region",
    seccion: "Cap. 15: Schroeder", cat: "Cap. 15: Schroeder", dif: 2,
    q: "Por debajo de la frecuencia de Schroeder, la sala…",
    opts: [
      "Tiene modos separados: campo modal por posición.",
      "Tiene modos solapados: el campo ya es difuso pleno.",
      "No tiene modos: se comporta como una anecoica real.",
      "Tiene un RT60 constante con la frecuencia analizada.",
    ],
    ans: 0,
    why: "Debajo de f_S hay pocos modos por banda y quedan resueltos de a uno: el campo es modal y la respuesta es un peine de picos y valles que depende de dónde midas. Arriba de f_S se solapan (≳3 por ancho de banda) y recién ahí tiene sentido la descripción estadística de campo difuso.",
    src: "Everest, Master Handbook of Acoustics, p. 325",
  },
  {
    id: "col-ev-fs-volumen",
    seccion: "Cap. 15: Schroeder", cat: "Cap. 15: Schroeder", dif: 3,
    q: "Con igual RT60, una sala más grande tiene una f_S…",
    opts: [
      "Más baja: el volumen está en el denominador.",
      "Más alta: el volumen está en el numerador puro.",
      "Igual, sólo depende del RT60 de la sala dada.",
      "Nula, porque desaparecen sus modos propios ya.",
    ],
    ans: 0,
    why: "f_S = 2000·√(RT60/V): el volumen está en el denominador, así que más V baja f_S. Tiene sentido físico, porque más volumen implica más modos y más juntos (Weyl va con V·f²), o sea que la sala entra antes en régimen difuso. Por eso las salas chicas sufren: su f_S alta deja mucha música en régimen modal.",
    src: "Everest, Master Handbook of Acoustics, p. 325",
  },

  // ─── Cap. 19: Sala de escucha ───
  {
    id: "col-ev-lede",
    seccion: "Cap. 19: Sala de escucha", cat: "Cap. 19: Sala de escucha", dif: 2,
    q: "¿Cuál es la idea central de LEDE / RFZ?",
    opts: [
      "Frente sin reflexiones tempranas, fondo difuso.",
      "Toda la sala lo más muerta y absorbente posible.",
      "Difusores cubriendo absolutamente cada superficie.",
      "Eliminar los modos propios por debajo de la f_S.",
    ],
    ans: 0,
    why: "LEDE (Live End Dead End) y RFZ (Reflection Free Zone) atacan las reflexiones tempranas, que se funden con el directo (precedencia) y corrompen timbre e imagen sin oírse como eco. Frente controlado para que la reflexión no vuelva a la escucha, y fondo vivo pero difuso. No es hacer la sala muerta: una anecoica es engañosa para mezclar.",
    src: "Everest, Master Handbook of Acoustics, p. 431",
  },
  {
    id: "col-ev-dist-critica",
    seccion: "Cap. 19: Sala de escucha", cat: "Cap. 19: Sala de escucha", dif: 2,
    q: "La distancia crítica de una sala es…",
    opts: [
      "Donde el campo directo iguala al reverberante.",
      "La distancia máxima para montar un monitor dado.",
      "La separación óptima entre los dos monitores.",
      "Donde arranca el campo lejano de la fuente dada.",
    ],
    ans: 0,
    why: "Más cerca que la distancia crítica domina el directo (y vale la ley inversa del cuadrado); más lejos domina el reverberante y el nivel se aplana. Depende de la absorción y de la directividad de la fuente. Es el argumento físico del near-field monitoring: escuchar dentro de esa distancia hace que la sala pese menos en lo que oís.",
    src: "Everest, Master Handbook of Acoustics, p. 87",
  },

].map((q) => ({ ...q, fuente: "everest-mha" }));
