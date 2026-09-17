// COLECCIÓN: Morse e Ingard, Theoretical Acoustics, cap. 6 «Acoustic Wave Motion».
// PDF en referencias/ (Princeton/McGraw-Hill, 1968). Offset: impresa = PDF − 22
// (verificado; el cap. 6 va de la impresa 227 a la 305).
//
// Ítems atados al documento y sus secciones (6.1 a 6.4). Cada ítem lleva
// `seccion` + `cat`; `fuente` se aplica con .map() al final. NO lleva `area`.
// Regla de oro: 4 opciones del mismo largo (±5). Validar con check_banco.py.

export const MORSE_INGARD_TA = [

  // ─── 6.1 Dinámica del fluido ───
  {
    id: "col-mi-longitudinal",
    seccion: "6.1 Dinámica del fluido", cat: "6.1 Dinámica del fluido", dif: 1,
    q: "El sonido en un fluido, a diferencia de la onda en una cuerda, es…",
    opts: [
      "longitudinal: el aire se mueve en la dirección de avance.",
      "transversal: el aire se mueve perpendicular al avance.",
      "una onda de superficie con crestas y valles bien marcados.",
      "una onda estacionaria que nunca transporta energía neta.",
    ],
    ans: 0,
    why: "En una cuerda o membrana la materia se mueve perpendicular a la propagación (onda transversal). En un fluido las moléculas se mueven en la dirección de avance: no hay crestas y valles sino compresiones y rarefacciones alternadas. La fuerza de restitución es la resistencia del fluido a ser comprimido, y su inercia hace que el movimiento se propague.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.1, p. 227",
  },
  {
    id: "col-mi-adiabatica",
    seccion: "6.1 Dinámica del fluido", cat: "6.1 Dinámica del fluido", dif: 3,
    q: "Para el sonido en gases (bajo ~10⁹ Hz), la compresión se toma…",
    opts: [
      "adiabática: sin tiempo para que el calor se empareje.",
      "isotérmica: la temperatura se mantiene siempre igual.",
      "a entropía creciente en cada ciclo de la onda dada.",
      "a presión constante impuesta por el medio de fondo.",
    ],
    ans: 0,
    why: "Salvo a frecuencias enormes, no hay tiempo para que el calor difunda entre zonas comprimidas y enrarecidas dentro de un período: la compresión es prácticamente adiabática, no isotérmica. Por eso se usa la compresibilidad adiabática Ks = KT/γ, y para un gas perfecto Ks = 1/(γP). Esta es la razón física del factor γ en la velocidad del sonido.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.1 (Ec. 6.1.3), p. 230",
  },
  {
    id: "col-mi-velocidad",
    seccion: "6.1 Dinámica del fluido", cat: "6.1 Dinámica del fluido", dif: 2,
    q: "La velocidad del sonido en un fluido vale c = √(1/ρK); en un gas…",
    opts: [
      "es √(γRT/M): crece con √T y no con la presión.",
      "crece de forma lineal con la presión de fondo P.",
      "baja al subir la temperatura absoluta del gas.",
      "solo depende de la densidad, no de la elasticidad.",
    ],
    ans: 0,
    why: "Combinando masa (densidad ρ) y elasticidad (compresibilidad K) sale c = √(1/ρK). Para un gas perfecto, con Ks = 1/(γP) y MP = RTρ, queda c = √(γRT/M): la velocidad crece con la raíz de la temperatura absoluta y es independiente de la presión o la densidad de fondo (mientras valga la teoría de primer orden).",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.1 (Ec. 6.1.8), p. 233",
  },
  {
    id: "col-mi-energia-densidad",
    seccion: "6.1 Dinámica del fluido", cat: "6.1 Dinámica del fluido", dif: 3,
    q: "En una onda sonora, las densidades de energía potencial y cinética son…",
    opts: [
      "½Kp² la potencial y ½ρu² la cinética, por unidad de volumen.",
      "½ρp² la potencial y ½Ku² la cinética, con los roles al revés.",
      "iguales a la presión p en cada instante del ciclo completo.",
      "nulas mientras la onda no toque una pared del recinto real.",
    ],
    ans: 0,
    why: "La energía por unidad de volumen tiene dos partes: potencial de compresión ½Kp² (análoga a ½kx² de un resorte) y cinética ½ρu² (análoga a ½mv²). Son cantidades de segundo orden en las variables chicas p y u. Su suma es la densidad de energía w de la onda, y su diferencia es la densidad lagrangiana que usa Morse para el formalismo de Hamilton.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.1 (Ec. 6.1.7), p. 233",
  },
  {
    id: "col-mi-lagrange-euler",
    seccion: "6.1 Dinámica del fluido", cat: "6.1 Dinámica del fluido", dif: 3,
    q: "La diferencia entre las descripciones de Lagrange y de Euler es que…",
    opts: [
      "Lagrange sigue a la porción de fluido; Euler fija el punto.",
      "Lagrange fija el punto del espacio y Euler sigue al fluido.",
      "las dos siguen al fluido, solo cambian las unidades usadas.",
      "Euler solo vale en estática y Lagrange solo en dinámica.",
    ],
    ans: 0,
    why: "En la descripción de Lagrange se etiqueta cada porción de fluido por su posición inicial y se la sigue en su movimiento (la derivada total d/dt es su ritmo de cambio). En la de Euler se fija un punto del espacio y se describe el fluido que pasa por ahí (derivada parcial ∂/∂t). Morse advierte que integrar la velocidad euleriana NO da el desplazamiento real salvo a primer orden.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.1, p. 234",
  },
  {
    id: "col-mi-derivada-total",
    seccion: "6.1 Dinámica del fluido", cat: "6.1 Dinámica del fluido", dif: 3,
    q: "La derivada total (material) df/dt se relaciona con la parcial por…",
    opts: [
      "df/dt = ∂f/∂t + u·∂f/∂x: suma un término de convección.",
      "df/dt = ∂f/∂t exactamente, sin ningún término extra.",
      "df/dt = u·∂f/∂x solo, sin la parte temporal local.",
      "df/dt = ∂f/∂t − u·∂f/∂x, restando la convección real.",
    ],
    ans: 0,
    why: "El cambio real que ve una porción de fluido es el cambio local en el punto (∂f/∂t) más el cambio espacial por moverse a velocidad u: df/dt = ∂f/∂t + u·∂f/∂x. El término convectivo u·∂u/∂x es de segundo orden en la velocidad, así que para sonido de amplitud chica df/dt ≈ ∂f/∂t; pero importa en cantidades de energía o con medio en movimiento.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.1 (Ec. 6.1.9), p. 239",
  },

  // ─── 6.2 Onda, energía, momento ───
  {
    id: "col-mi-primer-orden",
    seccion: "6.2 Onda, energía, momento", cat: "6.2 Onda, energía, momento", dif: 3,
    q: "Las dos ecuaciones acústicas de primer orden dicen que…",
    opts: [
      "un gradiente de presión acelera, y uno de velocidad comprime.",
      "un gradiente de presión comprime, y uno de velocidad acelera.",
      "presión y velocidad son siempre proporcionales punto a punto.",
      "la densidad no cambia aunque varíe la velocidad a lo largo de x.",
    ],
    ans: 0,
    why: "Linealizando, quedan ∂p/∂x = −ρ ∂u/∂t y K ∂p/∂t = −∂u/∂x. La primera dice que un gradiente de presión produce aceleración del fluido; la segunda, que un gradiente de velocidad produce compresión (cambio de densidad). Eliminando u entre ambas se obtiene la ecuación de onda; son el par básico de la acústica lineal.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.2 (Ec. 6.2.3), p. 243",
  },
  {
    id: "col-mi-ecuacion-onda",
    seccion: "6.2 Onda, energía, momento", cat: "6.2 Onda, energía, momento", dif: 2,
    q: "La ecuación de onda de primer orden ∂²p/∂x² = (1/c²)·∂²p/∂t² vale…",
    opts: [
      "si p es chica frente a la presión de fondo P del medio.",
      "para cualquier amplitud, por grande que sea la presión.",
      "solo si el medio es viscoso y conduce mucho el calor.",
      "solo por encima de la frecuencia de Schroeder del aire.",
    ],
    ans: 0,
    why: "La ecuación lineal se obtiene despreciando los términos de segundo orden en las cantidades chicas p, δ, u. Vale mientras la presión acústica p sea mucho menor que la presión de equilibrio P (y K se pueda tomar constante). Es lineal, y en eso está su enorme ventaja: para amplitudes altas o medio en movimiento aparecen términos no lineales y hay que empezar de nuevo.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.2 (Ec. 6.2.4), p. 243",
  },
  {
    id: "col-mi-potencial",
    seccion: "6.2 Onda, energía, momento", cat: "6.2 Onda, energía, momento", dif: 2,
    q: "El «potencial de velocidad» Ψ se define de modo que…",
    opts: [
      "la velocidad sea su gradiente: u = −grad Ψ.",
      "la presión sea su gradiente: p = −grad Ψ.",
      "la densidad sea su laplaciano en cada punto.",
      "la intensidad sea su derivada temporal pura.",
    ],
    ans: 0,
    why: "Se introduce un campo escalar Ψ tal que u = −grad Ψ y p = ρ ∂Ψ/∂t. Con un solo escalar se describen a la vez presión y velocidad, lo que simplifica el formalismo de Lagrange-Hamilton (una función en vez de un vector). El potencial de velocidad reaparece en radiación, reflexión y en los métodos variacionales del resto del libro.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.2 (Ec. 6.2.13), p. 248",
  },
  {
    id: "col-mi-intensidad",
    seccion: "6.2 Onda, energía, momento", cat: "6.2 Onda, energía, momento", dif: 3,
    q: "La intensidad de la onda (flujo de energía por unidad de área) es…",
    opts: [
      "I = p·u: el producto de presión por velocidad de partícula.",
      "I = p²·u: presión al cuadrado por velocidad de partícula.",
      "I = ½K·p² sola: la parte potencial de la energía dada.",
      "I = ρ·c constante, sin depender del campo instantáneo.",
    ],
    ans: 0,
    why: "El vector de flujo de energía de la onda es I = p·u (presión por velocidad de partícula): la potencia por unidad de área que transporta la onda. Junto con la densidad de energía w = ½ρ|u|² + ½K|p|², satisface una ecuación de continuidad ∂w/∂t + div I = 0, o sea conservación de energía de la onda cuando no hay pérdidas.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.2 (Ec. 6.2.15), p. 249",
  },
  {
    id: "col-mi-rms",
    seccion: "6.2 Onda, energía, momento", cat: "6.2 Onda, energía, momento", dif: 3,
    q: "Al pasar a notación compleja, para energías Morse usa |x|² porque…",
    opts: [
      "|x|² es real y da directo el promedio temporal de la energía.",
      "el cuadrado x² complejo ya da el promedio sin tomar módulo.",
      "así la energía queda imaginaria, más fácil de manipular.",
      "el módulo elimina la dependencia con la frecuencia real.",
    ],
    ans: 0,
    why: "Con x = A·e^(−iωt), el cuadrado x² es complejo y su promedio temporal no es inmediato. En cambio |x|² = x*·x = a²+b² es real y no negativo, y su valor coincide con el promedio temporal del cuadrado de la cantidad real. Por eso las energías se escriben con |x|², interpretando las amplitudes como valores rms (raíz media cuadrática).",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.2 (Ec. 6.2.18), p. 251",
  },
  {
    id: "col-mi-porosos",
    seccion: "6.2 Onda, energía, momento", cat: "6.2 Onda, energía, momento", dif: 3,
    q: "Para el sonido en un material poroso rígido, Morse usa…",
    opts: [
      "una densidad efectiva ρp mayor y una resistencia al flujo Φ.",
      "la densidad del aire libre y nada de resistencia al flujo.",
      "una velocidad siempre real y mayor que la del aire libre.",
      "una compresibilidad nula, tratando el aire como rígido.",
    ],
    ans: 0,
    why: "En un poroso rígido de porosidad Ω, la inercia del aire aumenta: se usa una densidad efectiva ρp de 1,5 a 5 veces la del aire libre. La fricción se modela con una resistencia al flujo Φ (caída de presión por unidad de flujo). El resultado es una densidad y una velocidad de onda complejas: la parte imaginaria representa la atenuación, base de los absorbentes porosos.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.2 (Ec. 6.2.23), p. 253",
  },

  // ─── 6.3 Ondas en medio infinito ───
  {
    id: "col-mi-impedancia-caracteristica",
    seccion: "6.3 Ondas en medio infinito", cat: "6.3 Ondas en medio infinito", dif: 2,
    q: "En una onda plana progresiva, la razón p/u vale ρc y se llama…",
    opts: [
      "impedancia acústica característica del medio dado.",
      "coeficiente de reflexión de la pared más cercana.",
      "resistencia al flujo del material de las paredes.",
      "número de onda k del medio a esa frecuencia real.",
    ],
    ans: 0,
    why: "En una onda plana la presión está en fase con la velocidad de partícula, y su razón es ρc = √(ρ/K), la impedancia acústica característica del medio (≈ 429 N·s/m³ para aire, ≈ 1,5·10⁶ para agua). Es el análogo de la impedancia de una línea de transmisión: p hace de voltaje y u de corriente, y la intensidad es I = ρc·|u|².",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.3, p. 259",
  },
  {
    id: "col-mi-coef-reflexion",
    seccion: "6.3 Ondas en medio infinito", cat: "6.3 Ondas en medio infinito", dif: 3,
    q: "El coeficiente de reflexión en una superficie de reacción local es…",
    opts: [
      "Cr = (z·cosθ − ρc)/(z·cosθ + ρc), con θ el ángulo dado.",
      "Cr = (z + ρc)/(z − ρc), sin depender del ángulo θ.",
      "Cr = ρc/z, fijo para cualquier ángulo de incidencia.",
      "Cr = z·cosθ, proporcional a la impedancia de pared.",
    ],
    ans: 0,
    why: "Igualando presión y velocidad normal en la superficie, el ángulo de reflexión iguala al de incidencia y sale Cr = (z·cosθ − ρc)/(z·cosθ + ρc). El coeficiente depende de la razón entre la impedancia de superficie z y la característica ρc, y del coseno del ángulo. Con z = ρc y θ = 0 (adaptación), Cr = 0 y no hay reflexión.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.3 (Ec. 6.3.5), p. 262",
  },
  {
    id: "col-mi-reactiva-resistiva",
    seccion: "6.3 Ondas en medio infinito", cat: "6.3 Ondas en medio infinito", dif: 3,
    q: "Si la impedancia z de la superficie es puramente reactiva (imaginaria)…",
    opts: [
      "|Cr| = 1: refleja todo, solo cambia la fase, no absorbe.",
      "|Cr| = 0: absorbe toda la energía que le llega siempre.",
      "absorbe más cuanto mayor sea la parte imaginaria de z.",
      "la onda reflejada cambia de amplitud pero no de fase.",
    ],
    ans: 0,
    why: "Si z es imaginaria pura (reactiva), |Cr| = 1: la onda reflejada solo difiere en fase de la incidente y no se absorbe energía. Solo cuando z tiene parte real (resistiva) el |Cr| baja de 1 y la superficie absorbe la diferencia. La absorción, entonces, vive en la parte real (resistiva) de la impedancia de pared, no en la reactiva.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.3, p. 262",
  },
  {
    id: "col-mi-absorcion-total",
    seccion: "6.3 Ondas en medio infinito", cat: "6.3 Ondas en medio infinito", dif: 3,
    q: "Con z real y mayor que ρc, existe un ángulo de incidencia donde…",
    opts: [
      "no hay reflexión: θ = arccos(ρc/z), se absorbe todo.",
      "la reflexión es total, sin absorber nada de energía.",
      "la onda se refracta y cambia bruscamente de velocidad.",
      "aparece un cero de presión pegado a la superficie real.",
    ],
    ans: 0,
    why: "Si z es real y z > ρc, hay un ángulo θ = arccos(ρc/z) en el que z·cosθ iguala a ρc: entonces Cr = 0 y toda la energía incidente se absorbe (no hay onda reflejada). Es el análogo acústico de la adaptación de impedancias, ahora lograda por el ángulo de incidencia en vez de por igualar z a ρc frontalmente.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.3, p. 263",
  },
  {
    id: "col-mi-reaccion-local",
    seccion: "6.3 Ondas en medio infinito", cat: "6.3 Ondas en medio infinito", dif: 2,
    q: "Una superficie es «de reacción local» cuando su velocidad normal…",
    opts: [
      "depende solo de la presión local, no de la del entorno.",
      "depende de la presión en todos los puntos vecinos a la vez.",
      "es siempre cero, porque la superficie es totalmente rígida.",
      "no guarda relación alguna con la presión de la onda dada.",
    ],
    ans: 0,
    why: "En una superficie de reacción local, el movimiento normal en cada punto depende solo de la presión acústica en ese mismo punto, sin acoplarse con el movimiento de puntos vecinos. Entonces su impedancia z es una función de punto (no depende de la forma de la onda incidente). Es la hipótesis que hace simple el problema de reflexión; lo contrario es la reacción extendida.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.3, p. 260",
  },
  {
    id: "col-mi-snell",
    seccion: "6.3 Ondas en medio infinito", cat: "6.3 Ondas en medio infinito", dif: 3,
    q: "Cuando la onda penetra en un segundo medio, la ley de Snell acústica dice…",
    opts: [
      "sen(θp)/cw = sen(θ)/c: el ángulo cambia con la velocidad.",
      "θp = θ siempre, sin importar la velocidad de cada medio.",
      "sen(θp)·cw = sen(θ)·c, con los dos productos invertidos.",
      "θp depende solo de las densidades, no de las velocidades.",
    ],
    ans: 0,
    why: "Para que las ondas incidente y penetrante coincidan en la superficie, sen(θp)/cw = sen(θ)/c: es la ley de Snell acústica. Si la velocidad en la pared cw es mucho menor que c, cos(θp) casi no depende del ángulo y la superficie se comporta como de reacción local. Si cw > c, pasado cierto ángulo hay reflexión total, igual que en óptica.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.3 (Ec. 6.3.13), p. 267",
  },

  // ─── 6.4 Pérdidas internas ───
  {
    id: "col-mi-perdidas-frecuencia",
    seccion: "6.4 Pérdidas internas", cat: "6.4 Pérdidas internas", dif: 3,
    q: "La pérdida por conducción térmica en el sonido, al subir la frecuencia…",
    opts: [
      "crece: la onda más corta genera gradientes más fuertes.",
      "baja: hay menos tiempo por ciclo para fugar el calor.",
      "no cambia: es igual en graves que en agudos siempre.",
      "desaparece: a alta frecuencia la onda deja de perder.",
    ],
    ans: 0,
    why: "Uno pensaría que a baja frecuencia se pierde más calor (hay más tiempo por ciclo para que fugue). Pero a alta frecuencia la longitud de onda es más corta, así que las zonas caliente y fría están más cerca y el gradiente de temperatura es mayor, lo que más que compensa. El resultado neto es que la pérdida crece con la frecuencia, y la amplitud decae exponencialmente en el espacio.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.4, p. 275",
  },
  {
    id: "col-mi-viscosidad",
    seccion: "6.4 Pérdidas internas", cat: "6.4 Pérdidas internas", dif: 3,
    q: "En un gas, la viscosidad que atenúa el sonido proviene de…",
    opts: [
      "la difusión de momento entre capas con distinta velocidad.",
      "la difusión de carga eléctrica dentro del gas neutro.",
      "la reflexión del sonido en las paredes del recinto real.",
      "la resonancia mecánica del propio gas a cierta frecuencia.",
    ],
    ans: 0,
    why: "La viscosidad nace de la difusión de momento: si una capa de gas se desliza respecto de otra, las moléculas lentas frenan a las rápidas y viceversa, generando un esfuerzo de corte proporcional al gradiente de velocidad (coeficiente μ). Junto con la conducción térmica y la viscosidad de volumen η (que se opone al ritmo de compresión), convierte la energía ordenada de la onda en calor.",
    src: "Morse e Ingard, Theoretical Acoustics, cap. 6.4 (Ec. 6.4.4), p. 272",
  },

].map((q) => ({ ...q, fuente: "morse-ingard-ta" }));
