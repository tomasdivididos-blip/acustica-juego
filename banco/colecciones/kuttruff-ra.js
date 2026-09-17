// COLECCIÓN: Kuttruff, Room Acoustics (referencias/Room Acoustics - Kuttruf.pdf).
//
// Colección atada a un documento y sus secciones (capítulos). Cada ítem lleva
// `seccion` + `cat`; `fuente` se aplica con .map() al final. NO lleva `area`.
// Misma regla de oro: 4 opciones del mismo largo (±5). Validar con check_banco.py.
// Páginas: impresa = pág. PDF − 18 (offset verificado). Ver plan_pdf_secciones.md.

export const KUTTRUFF_RA = [

  // ─── Cap. 3: Ondas en la sala ───
  {
    id: "col-ku-schroeder",
    seccion: "Cap. 3: Ondas en la sala", cat: "Cap. 3: Ondas en la sala", dif: 2,
    q: "¿Dónde sitúa Kuttruff la frecuencia de Schroeder?",
    opts: [
      "fs ≈ 2000·√(T/V), con T el RT y V el volumen.",
      "fs ≈ 2000·√(V/T), con V el volumen y T el RT.",
      "fs ≈ c/(2L), con L la dimensión más larga real.",
      "fs ≈ 0,161·V/A, con A el área de absorción.",
    ],
    ans: 0,
    why: "Kuttruff define la frecuencia de Schroeder como fs ≈ 2000·√(T/V) (SI): por encima de ella hay solapamiento fuerte de resonancias (≳3 modos por ancho de banda) y vale la acústica estadística; por debajo, el campo es modal y depende de la posición. Es el límite entre el tratamiento de onda y el estadístico.",
    src: "Kuttruff, Room Acoustics, cap. 3, p. 71",
  },
  {
    id: "col-ku-densidad-modal",
    seccion: "Cap. 3: Ondas en la sala", cat: "Cap. 3: Ondas en la sala", dif: 3,
    q: "La densidad de frecuencias propias dN/df de una sala crece con…",
    opts: [
      "f², como 4πV·f²/c³ (término de volumen).",
      "f, de forma lineal con la frecuencia dada.",
      "f³, igual que el total de modos bajo f real.",
      "1/f, decrece al subir en frecuencia siempre.",
    ],
    ans: 0,
    why: "El número de modos por debajo de f va como (4π/3)·V·(f/c)³, así que su derivada (la densidad modal) crece con f². Por eso los modos se agolpan cada vez más rápido y a partir de la frecuencia de Schroeder ya no tiene sentido contarlos de a uno. Es la base del cruce entre régimen modal y difuso.",
    src: "Kuttruff, Room Acoustics, cap. 3, p. 70",
  },
  {
    id: "col-ku-T-delta",
    seccion: "Cap. 3: Ondas en la sala", cat: "Cap. 3: Ondas en la sala", dif: 3,
    q: "Kuttruff escribe el RT como T = 6,91/δ, donde δ es…",
    opts: [
      "La constante de amortiguamiento del decaimiento.",
      "El coeficiente de absorción medio de la sala.",
      "La densidad de energía en estado estacionario.",
      "La frecuencia propia más baja del recinto dado.",
    ],
    ans: 0,
    why: "La energía decae como e^(−2δt). Una caída de 60 dB equivale a e^(−2δT) = 10⁻⁶, o sea 2δT = 6·ln(10) = 13,8, de donde T = 6,91/δ. El δ (constante de amortiguamiento) resume las pérdidas por absorción, y liga el decaimiento temporal con el ancho de banda de cada modo (Q). Es la forma «de onda» del tiempo de reverberación.",
    src: "Kuttruff, Room Acoustics, cap. 3 (Ec. 3.44), p. 74",
  },

  // ─── Cap. 4: Acústica geométrica ───
  {
    id: "col-ku-lambert",
    seccion: "Cap. 4: Acústica geométrica", cat: "Cap. 4: Acústica geométrica", dif: 2,
    q: "La ley del coseno de Lambert describe una reflexión…",
    opts: [
      "Difusa: la intensidad radiada varía con el cos θ.",
      "Especular: la salida iguala el ángulo de entrada.",
      "Nula: la superficie absorbe toda la energía dada.",
      "Focalizada: concentra la energía en un punto real.",
    ],
    ans: 0,
    why: "En una reflexión difusa ideal, la energía se re-irradia según la ley de Lambert: la intensidad en una dirección va con el coseno del ángulo respecto de la normal, independientemente de por dónde llegó el sonido. Es el modelo opuesto a la reflexión especular (ángulo igual al de incidencia) y el que usan los métodos de radiosidad acústica.",
    src: "Kuttruff, Room Acoustics, cap. 4, p. 99",
  },
  {
    id: "col-ku-imagenes",
    seccion: "Cap. 4: Acústica geométrica", cat: "Cap. 4: Acústica geométrica", dif: 3,
    q: "El método de fuentes imagen es exacto y ordenado para…",
    opts: [
      "Recintos rectangulares; formas irregulares lo enredan.",
      "Cualquier forma de sala, sin límite de orden alguno.",
      "Sólo el campo difuso por encima de la f de Schroeder.",
      "Salas con paredes totalmente absorbentes únicamente.",
    ],
    ans: 0,
    why: "En una caja rectangular las imágenes forman una retícula regular que llena el espacio sin huecos ni solapamientos. En salas de forma irregular las imágenes se multiplican de manera desordenada y sus «espacios imagen» se solapan, así que el método pierde exactitud y se vuelve impracticable a orden alto: ahí entran los métodos híbridos con rayos.",
    src: "Kuttruff, Room Acoustics, cap. 4, p. 88",
  },

  // ─── Cap. 5: Reverberación ───
  {
    id: "col-ku-mfp",
    seccion: "Cap. 5: Reverberación", cat: "Cap. 5: Reverberación", dif: 2,
    q: "El camino libre medio de una sala difusa vale…",
    opts: [
      "4V/S: distancia media entre dos reflexiones.",
      "V/S: la razón simple entre volumen y área.",
      "S/4V: el inverso del volumen sobre el área.",
      "c·T: la distancia recorrida en un RT dado.",
    ],
    ans: 0,
    why: "En campo difuso, un rayo recorre en promedio 4V/S entre rebote y rebote. Dividiendo por c da el tiempo medio entre reflexiones, y contando cuántas hacen falta para caer 60 dB se llega a la fórmula de reverberación. Es la bisagra entre la visión de rayos y la acústica estadística, y de donde sale la constante de Sabine.",
    src: "Kuttruff, Room Acoustics, cap. 5, p. 104",
  },
  {
    id: "col-ku-eyring",
    seccion: "Cap. 5: Reverberación", cat: "Cap. 5: Reverberación", dif: 3,
    q: "La fórmula de Eyring, frente a la de Sabine, usa en el denominador…",
    opts: [
      "−ln(1−ᾱ) en lugar de ᾱ: mejor con ᾱ alto.",
      "ᾱ² en lugar de ᾱ: peor con absorción baja.",
      "el volumen V en lugar del área S del recinto.",
      "la superficie S sola, sin el coeficiente ᾱ.",
    ],
    ans: 0,
    why: "Eyring reemplaza S·ᾱ por −S·ln(1−ᾱ). Como −ln(1−ᾱ) ≈ ᾱ para ᾱ chico, coincide con Sabine en salas poco absorbentes; con ᾱ alto, Sabine sobrestima el RT (supone absorción continua, cuando cada reflexión se come una fracción grande). En el límite ᾱ = 1, Eyring da RT cero (correcto) y Sabine un valor finito absurdo.",
    src: "Kuttruff, Room Acoustics, cap. 5, p. 112",
  },

  // ─── Cap. 6: Absorción ───
  {
    id: "col-ku-poroso",
    seccion: "Cap. 6: Absorción", cat: "Cap. 6: Absorción", dif: 2,
    q: "En Kuttruff, un absorbente poroso disipa energía por…",
    opts: [
      "Fricción viscosa del aire en sus poros internos.",
      "Resonancia masa-resorte de una membrana tensa.",
      "Reflexión en contrafase que cancela la onda real.",
      "Difracción en los bordes de la muestra colocada.",
    ],
    ans: 0,
    why: "El poroso convierte en calor la velocidad de partícula del aire que atraviesa sus poros, por fricción viscosa. Por eso trabaja donde la velocidad es alta (a λ/4 de una pared rígida) y necesita espesor comparable a la longitud de onda para actuar en graves. Es un mecanismo distinto del resonador (masa-resorte), que es de banda angosta.",
    src: "Kuttruff, Room Acoustics, cap. 6, p. 128",
  },
  {
    id: "col-ku-resonador",
    seccion: "Cap. 6: Absorción", cat: "Cap. 6: Absorción", dif: 2,
    q: "La frecuencia de un resonador de Helmholtz depende de…",
    opts: [
      "El volumen de la cavidad y la geometría del cuello.",
      "Sólo del espesor de la placa perforada utilizada.",
      "La resistividad al flujo del relleno poroso dado.",
      "El área total que expone al campo sonoro real.",
    ],
    ans: 0,
    why: "El resonador de Helmholtz es un sistema masa-resorte: la masa es el tapón de aire del cuello y el resorte, el aire de la cavidad, con f₀ = (c/2π)·√(A/(V·L_eff)). Es de banda angosta y muy eficiente en su frecuencia, ideal para un modo puntual en graves. El relleno poroso amortigua y ensancha la banda, a costa del pico de absorción.",
    src: "Kuttruff, Room Acoustics, cap. 6, p. 135",
  },

].map((q) => ({ ...q, fuente: "kuttruff-ra" }));
