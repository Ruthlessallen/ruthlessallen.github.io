//Creación de carrusel de habilidades principal
const habilidades = [
    { id: "hab-git", nombre: "Git & GitHub", logo: 'Logos/git.png' },
    { id: "hab-python", nombre: "Python", logo: 'Logos/python.png' },
    { id: "hab-java", nombre: "Java", logo: 'Logos/java.png' },
    { id: "hab-sql", nombre: "SQL", logo: 'Logos/sql.png' },
    { id: "hab-js", nombre: "JavaScript", logo: 'Logos/js.png' },
    { id: "hab-html", nombre: "HTML5", logo: 'Logos/html.png' },
    { id: "hab-css", nombre: "CSS3", logo: 'Logos/css.png' },
    { id: "hab-idea", nombre: "IntelliJIdea", logo: 'Logos/idea.png' },
    { id: "hab-beaver", nombre: "DBeaver", logo: 'Logos/beaver.png' },
    { id: "hab-powerbi", nombre: "Power Bi", logo: 'Logos/powerbi.png' },
    { id: "hab-vsc", nombre: "Visual Studio Code", logo: 'Logos/vsc.png' },
    { id: "hab-jupyter", nombre: "Jupyter Notebook", logo: 'Logos/jupyter.png' },
    { id: "hab-pandas", nombre: "Pandas", logo: 'Logos/pandas.png' },
    { id: "hab-mlp", nombre: "Matplotlib", logo: 'Logos/mlp.png' },
    { id: "hab-seaborn", nombre: "Seaborn", logo: 'Logos/seaborn.png' },
    { id: "hab-excel", nombre: "Excel", logo: 'Logos/excel.png' },
    { id: "hab-antigravity", nombre: "Antigravity", logo: 'Logos/antigravity.jpg' },
    { id: "hab-scikit", nombre: "Scikit-learn", logo: 'Logos/scikit.png' },
];

// Tarjetas de proyectos de github
const proyectos = [
    {
        id: "proyecto-carmen-care",
        nombre: "Carmen Care — Copiloto de IA para residencias (TFM)",
        institucion: "Evolve · Trabajo Fin de Máster",
        fecha: "Agosto 2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/Trabajo-Fin-Master",
        descripcion: "Copiloto de inteligencia artificial para técnicos en actividades socioculturales (TASOC) y terapeutas ocupacionales en residencias de personas mayores. " +
            "Grafo de estados agéntico con LangGraph (evaluación meteorológica → razonamiento con Gemini → scoring de afinidad → generación de guías técnicas), integrado con la API pública real de AEMET y con persistencia atómica en disco. " +
            "Incluye gestión de residentes, registro de participación y exportación de guías técnicas a DOCX/PDF. " +
            "El propio repo incluye una autoauditoría técnica en la que detecté y corregí un bug crítico en el grafo de decisión.",
        habilidades: ["hab-python", "hab-git", "hab-jupyter"],
        glowClass: "brillo-python"
    },
    {
        id: "proyecto-1-EDA",
        nombre: "Proyecto EDA sobre compra en Barcelona a través de Idealista (2024)",
        institucion: "GitHub",
        fecha: "Enero 2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/Project-Data-Cleaning",
        descripcion: "En este trabajo limpié las columnas de nulos para poder trabajar con ellos. Además, hice busquedas en cascada de ciertos datos (como los metros útiles, o precios) en diversas columnas. \n" +
            "Una de estas columnas es 'description', la cual es texto plano, lo que fue un reto para mí ya que tuve que realizar búsquedas a través de diccionarios y sacar la información que realmente importaba. \n" +
            "Dentro de los descubrimientos obtenidos tenemos que la información de la inmobiliaria en la descripción algunas veces no casa con los datos de las otras columnas, como etiquetar en buen estado casas ocupadas.",
        habilidades: ["hab-python", "hab-seaborn", "hab-pandas", "hab-jupyter", "hab-vsc", "hab-git"],
        captura: 'Capturas-proyectos/proyecto_1.png',
        glowClass: "brillo-python"
    },
    {
        id: "proyecto-Python-HotelApi",
        nombre: "Aplicación CRUD de hotel",
        institucion: "GitHub",
        fecha: "Diciembre 2025",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/primer-proyecto-hotel",
        descripcion: "Este fue mi primer proyecto con Python. Todo lo que había aprendido desde octubre quería ponerlo en práctica, así que hice este pequeño proyecto" +
            " en el que usé el sistema CRUD y TKinter para el frontend. Además fue la primera vez que usé SQLite sin haber tocado practicamente nada de base de datos anteriormente." +
            "El objetivo también era usar funciones y la programación orientada a objetos. Mi idea es darle una vuelta próximamente: abstraer funciones y separar responsabilidades." +
            "También me interesa seguir usando este proyecto para poder poner en la práctica todo lo que estoy aprendiendo en programación y darle un toque estético moderno.",
        habilidades: ["hab-python", "hab-vsc", "hab-sql"],
        captura: 'Capturas-proyectos/proyecto_2_hotel.png',
        glowClass: "brillo-python"
    },
    {
        id: "proyecto-dioramantra",
        nombre: "Web estática Dioramantra",
        institucion: "GitHub",
        fecha: "Enero 2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/proyecto-dioramantra",
        descripcion: "Este es un trabajo de la asignatura de lenguaje de marcas en mi FP de DAM. Una de las cosas que más me han ayudado a trabajar la paciencia ha sido hacer dioramas." +
            "Los dioramas son maquetas que se construyen poco a poco, y pueden ser diy o prehechas para que solo se tenga que montar." +
            "En este caso, quería hacer una web alegre y que cumpliesen con los requisitos de la asignatura. En esta web estática la idea es simular la página principal de una tienda online.",
        habilidades: ["hab-css", "hab-html", "hab-vsc"],
        captura: "Capturas-proyectos/proyecto_3_dioramantra.png",
        glowClass: "brillo-web"
    },
    {
        id: "proyecto-mini-agenda",
        nombre: "Mini agenda",
        institucion: "GitHub",
        fecha: "Mayo 2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/mini-agenda",
        descripcion: "Desarrollo de una aplicación de mini agenda en JavaScript para la gestión de contactos. Implementación de operaciones CRUD y diseño interactivo con HTML5 y CSS3.",
        habilidades: ["hab-js", "hab-html", "hab-css", "hab-vsc", "hab-git"],
        captura: 'Capturas-proyectos/proyecto_5_miniagenda.png',
        glowClass: "brillo-web"
    },
    {
        id: "proyecto-sephora",
        nombre: "Pipeline SQL sobre productos y reviews de Sephora",
        institucion: "Evolve",
        fecha: "Marzo 2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/Proyecto-Sephora--productos-y-reviews",
        descripcion: "Este proyecto de SQL trata los datos scrappeados de Kaggle, los limpia y genera una base de datos relacional de estrella." +
            "Con estos datos puedo responder a ciertas preguntas de negocio relacionadas con los productos (calidad, consumo, ratings) como con la clientela que comenta.",
        habilidades: ["hab-beaver", "hab-sql"],
        captura: "Capturas-proyectos/proyecto_4_sephora.png",
        glowClass: "brillo-sql"
    },
    {
        id: "proyecto-nlp",
        nombre: "Proyecto NLP",
        institucion: "GitHub",
        fecha: "Junio 2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/Proyecto-de-analisis-y-ML-de-Sephora",
        descripcion: "Análisis exploratorio y modelado predictivo sobre el catálogo de productos y opiniones de Sephora. Aplicación de modelos de procesamiento de lenguaje natural (NLP) para el análisis de sentimiento y clasificación de opiniones.",
        habilidades: ["hab-python", "hab-pandas", "hab-jupyter", "hab-vsc", "hab-git", "hab-scikit"],
        captura: 'Capturas-proyectos/proyecto_6_nlp.png',
        glowClass: "brillo-ml"
    },
    {
        id: "proyecto-ml",
        nombre: "Proyecto Machine Learning",
        institucion: "GitHub",
        fecha: "Junio 2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/Machine-Learning-Project",
        descripcion: "Modelo predictivo supervisado sobre transacciones comerciales para anticipar intenciones de recompra de clientes. Procesamiento y depuración de 1.06 millones de transacciones y entrenamiento de clasificadores optimizados con Optuna.",
        habilidades: ["hab-python", "hab-pandas", "hab-jupyter", "hab-vsc", "hab-git", "hab-scikit"],
        captura: 'Capturas-proyectos/proyecto_7_ml.png',
        glowClass: "brillo-ml"
    },
    {
        id: "proyecto-powerbi-hotel",
        nombre: "Cuadro de mando para análisis y gestión hotelera (Power BI)",
        institucion: "GitHub",
        fecha: "Marzo 2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/Proyecto-PowerBi",
        descripcion: "Diseño y desarrollo de un panel interactivo integrado para el seguimiento de métricas clave de rendimiento (ADR, RevPAR, tasa de ocupación y previsión de demanda) a partir de más de 119.000 reservas. Conexión de fuentes de datos heterogéneas, modelado dimensional eficiente y visualizaciones interactivas de indicadores clave para la toma de decisiones comerciales.",
        habilidades: ["hab-powerbi", "hab-excel"],
        glowClass: "brillo-powerbi"
    },
    {
        id: "proyecto-vadeviajes",
        nombre: "Vadeviajes — landing dinámica de captación",
        institucion: "Cliente real",
        fecha: "2026",
        logo: 'Logos/github.png',
        link: "https://vadeviajes.netlify.app/",
        linkLabel: "Ver la demo",
        descripcion: "Interfaz de entrada que sustituye la experiencia de un CRM de agencia de viajes: mapa interactivo por países, selector de fechas multi-paso, contadores de viajeros y formulario en tres pasos con previsualización. " +
            "Backend sin servidor en Google Apps Script: las solicitudes se guardan en Google Sheets y disparan avisos por correo y WhatsApp. " +
            "Bilingüe completo (ES/EN) con persistencia de idioma, páginas legales en ambos idiomas y gestor de cookies conforme al RGPD.",
        habilidades: ["hab-html", "hab-css", "hab-js", "hab-git"],
        captura: 'Capturas-proyectos/proyecto_8_vadeviajes.png',
        glowClass: "brillo-web"
    },
    {
        id: "proyecto-chatbot-convenios",
        nombre: "Asistente RAG sobre convenios colectivos",
        institucion: "Evolve · Proyecto final IA Generativa",
        fecha: "2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/Chatbot-convenio-despachos-y-oficinas",
        descripcion: "Chatbot experto en convenios y tablas salariales del sector de oficinas y despachos, con arquitectura RAG orquestada mediante LangGraph, base de datos vectorial persistente en ChromaDB y embeddings de HuggingFace. " +
            "Sistema híbrido multiproveedor: Gemini como modelo principal y OpenAI como respaldo automático ante fallo o límite de cuota. " +
            "Desplegado y accesible públicamente en Streamlit: chatbot-convenio-despachos-y-oficinas.streamlit.app",
        habilidades: ["hab-python", "hab-git", "hab-jupyter"],
        glowClass: "brillo-python"
    },
    {
        id: "proyecto-eda-hoteles-valencia",
        nombre: "EDA del alojamiento turístico en Valencia",
        institucion: "GitHub",
        fecha: "2026",
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/eda-hoteles-y-apartamentos-valencia",
        descripcion: "Scraping propio de datos de hoteles y apartamentos turísticos en Valencia, con pipeline modular de limpieza (cleaning, features, viz) y análisis exploratorio del mercado de alojamiento de la ciudad.",
        habilidades: ["hab-python", "hab-pandas", "hab-jupyter", "hab-git"],
        glowClass: "brillo-python"
    }
];

// Tarjeta bio 
const infoPersonal = {
    id: "perfil-ruth",
    nombre: "Ruth López Pellicer",
    foto: "Logos/foto.jpg",
    bio: "Desarrolladora web y Python, con foco en aplicaciones conectadas a bases de datos, automatización y proyectos con IA integrada. Trabajo también como QA de datos en Sewdef y hago proyectos freelance en paralelo.\n" +
        "Tras años trabajando en hostelería en mi trabajo de recepcionista de hotel me di cuenta de que me era más mentalmente estimulante y divertido solucionar problemas tecnológicos.\n" +
        "Siempre he tenido una mente curiosa y con capacidad de resolución ante cualquier situación problemática, una mente organizativa, buscando la eficacia ante una tarea. \n" +
        "Mis años trabajando en un hotel o en restaurantes me han dado la visión que tengo hoy en día de trabajo en equipo y manejo de la frustración, así que lo uso en mi favor en este nuevo rumbo hacia la programación.\n",
    curiosidades: ["Me encantan los escape rooms, los puzzles y acertijos, cuanto más me haga estrujar el cerebro, mejor.",
        "He pasado muchas horas jugando a videojuegos y mis favoritos siempre tienen que ver con la gestión de recursos",
        "Mi circulo cercano siempre me dicen que no paro de buscar soluciones a problematicas, aunque no sea necesario en ese momento"
    ],
    proyectoRelacionado: ["proyecto-Python-HotelApi"],
    idiomas: ["Español (Nativo)",
        "Inglés (B2 - Profesional)",
        "Valenciano (C1)"],
    otros: "carnet de coche y vehículo propio"
};
// Tarjetas de cursos
const cursos = [
    {
        id: "curso-evolve",
        nombre: "Máster de Data Science e IA",
        institucion: "Evolve Academy",
        fechas: "2026 - actualidad",
        descripcion: "Cursando actualmente máster de data science e IA. En este curso estoy aprendiendo: Python, arquitectura de software, control de versiones, SQL y bases de datos, data science stadistics, análisis y visualizacion de datos, Machine Learning, Deep Learning, IA generativa y MLOps.",
        logo: 'Logos/evolve.png',
        habilidades: ["hab-python", "hab-sql", "hab-git", "hab-jupyter", "hab-pandas", "hab-mlp", "hab-seaborn", "hab-beaver", "hab-powerbi", "hab-antigravity", "hab-scikit"],
        proyectoRelacionado: ["proyecto-carmen-care", "proyecto-1-EDA", "proyecto-sephora", "proyecto-nlp", "proyecto-ml", "proyecto-powerbi-hotel", "proyecto-chatbot-convenios", "proyecto-eda-hoteles-valencia"]
    },
    {
        id: "curso-ucademy",
        nombre: "FP Desarrollo de aplicaciones multiplataforma",
        institucion: "Ucademy",
        fechas: "2025-2027",
        descripcion: "Formación superior de Desarrollo de Aplicaciones Multiplataforma. Cursando actualmente el primer curso, donde además de lenguajes estoy estudiando testeo con JUNIT, uso de Virtual Box, así como uso de diagramas de flujo, entornos de sistemas y aprendizaje sobre hardware y redes.",
        logo: 'Logos/ucademy.png',
        habilidades: ["hab-java", "hab-js", "hab-html", "hab-css", "hab-idea"],
        proyectoRelacionado: ["proyecto-dioramantra", "proyecto-mini-agenda"]
    },
    {
        id: "curso-mislata",
        nombre: "FP Gestión de alojamientos turísticos",
        institucion: "CIPFP Mislata",
        fechas: "2019-2023",
        descripcion: "FP de Gestión de alojamientos turísticos. Mi base en hostelería, me saqué el curso mientras trabajaba de camarera en diversos bares y restaurantes. De esta FP me llevo la gestión y el análisis del marketing y profundización del mercado turístico.",
        logo: 'Logos/mislata.jpg',
        habilidades: ["hab-excel"],
        proyectoRelacionado: ["proyecto-Python-HotelApi", "proyecto-powerbi-hotel"]
    }
];

// Tarjetas de experiencia laboral
const laboral = [
    {
        id: "sewdef",
        nombre: "Data QA & Labeling Specialist (visión por computador)",
        empresa: "Sewdef",
        fecha: "Mayo 2026 - actualidad",
        descripcion: "Control de calidad de un motor de IA/ML que detecta defectos en vídeos de inspección de alcantarillado: reviso si las detecciones automáticas del modelo están correctamente identificadas y hago labeling de imágenes para alimentar y reentrenar la propia IA.",
        logo: 'Logos/sewdef.png',
        habilidades: ["hab-python", "hab-sql", "hab-git"]
    },
    {
        id: "Byb",
        nombre: "Recepcionista de hotel",
        empresa: "B&B Ciudad de las Ciencias",
        fecha: "2023-2025",
        descripcion: "Trabajo de recepcionista de hotel en importante cadena europea. Aquí trabajé con Lean, una web de gestión de reservas.",
        logo: 'Logos/byb.png',
        habilidades: ["hab-excel"],
        proyectoRelacionado: ["proyecto-Python-HotelApi", "proyecto-powerbi-hotel"]
    },
    {
        id: "camarera",
        nombre: "Camarera de sala",
        empresa: "Diversos restaurantes y bares",
        fecha: "2019-2025",
        logo: 'Logos/camarera.jpg',
        descripcion: "Ser camarera me ha ayudado muchísimo a entender cómo funciona la gente y anticiparme a sus deseos. Una de las cosas que más me gusta es hacer feliz a la gente aún cuando no hay un motivo para estarlo." +
            "En estos años he trabajado en diversos restaurantes, aunque recalco El Cauce Bar y Tapas en Valencia y Hotel Catalonia del Mar en Cala Bona, donde me demostraron que también se puede disfrutar trabajando de camarera"
    }
];

//Conexion JS-HTML
const contenedorHabilidades = document.getElementById("contenedor-habilidades-globales");
const contenedorCursos = document.getElementById("contenedor-cursos");
const contenedorProyectos = document.getElementById("contenedor-proyectos");
const contenedorLaboral = document.getElementById("contenedor-experiencias");


// Esta función lista las habilidades en el contenedor de habilidades globales agregando su respectivo logo y nombre
function listarHabilidades() {
    contenedorHabilidades.innerHTML = "";
    habilidades.forEach(h => {
        const div = document.createElement("div");
        div.className = "item-habilidad";
        div.innerHTML = `<img src="${h.logo}"><span>${h.nombre}</span>`;
        contenedorHabilidades.appendChild(div);
    });
}

// Crea dinámicamente un botón arrastrable con el logo y el nombre de un elemento (curso, proyecto o experiencia)
function crearBoton(item, tipo) {
    const b = document.createElement("button");
    b.className = `item-${tipo === 'proyecto' ? 'arrastrable item_proyecto' : tipo}`;
    b.id = item.id;
    b.draggable = true;
    b.innerHTML = `<img src="${item.logo}">${item.nombre}`;
    b.onclick = () => mostrarDetalle(item.id, tipo);
    b.ondragstart = (e) => e.dataTransfer.setData("text/plain", `${item.id}|${tipo}`);
    return b;
}

// Inyecta los botones de cursos, proyectos y experiencias en sus correspondientes contenedores del HTML
function inyectarListas() {
    cursos.forEach(c => contenedorCursos.appendChild(crearBoton(c, 'cursos')));
    proyectos.forEach(p => contenedorProyectos.appendChild(crearBoton(p, 'proyecto')));
    laboral.forEach(l => contenedorLaboral.appendChild(crearBoton(l, 'laboral')));
}

// Maneja el evento de soltar (drop) del elemento arrastrado, obteniendo su identificador para mostrar los detalles
function manejarDrop(e) {
    e.preventDefault();
    const [id, tipo] = e.dataTransfer.getData("text/plain").split('|');
    mostrarDetalle(id, tipo);
}

// Busca y visualiza la información de un elemento en el panel central de detalles y añade brillo a proyectos relacionados
// Busca y visualiza la información de un elemento en el panel central de detalles y añade brillo a proyectos relacionados
function mostrarDetalle(id, tipo) {
    const contenedor = document.getElementById("contenedor-tarjeta-activa");
    let d;
    if (tipo === 'perfil') {
        d = infoPersonal;
    } else {
        d = [...cursos, ...proyectos, ...laboral].find(x => x.id === id);
    }
    if (!d) return;
    quitarBrillos();
    if (d.proyectoRelacionado) {
        const listaProyectos = Array.isArray(d.proyectoRelacionado)
            ? d.proyectoRelacionado
            : [d.proyectoRelacionado];
        listaProyectos.forEach(idProyecto => {
            const el = document.getElementById(idProyecto);
            if (el) {
                const projObj = proyectos.find(p => p.id === idProyecto);
                const glowClass = (projObj && projObj.glowClass) ? projObj.glowClass : "brillo-github";
                el.classList.add(glowClass);
            }
        });
    }
    let htmlTarjeta = "";
    if (tipo === 'perfil') {
        htmlTarjeta = `
            <article class="tarjeta-detalle tarjeta-perfil-especial">
                <div class="detalle-izq">
                    <h4>Sobre mí</h4>
                    <img src="${d.foto}" class="logo-detalle-centrado">
                    <h3>${d.nombre}</h3>
                </div>
                <div class="detalle-der">
                    <p><strong>Bio:</strong> ${d.bio}</p>
                    <p><strong>Idiomas:</strong> ${d.idiomas.join(", ")}</p>
                    <p><strong>Otros:</strong> ${d.otros}</p>
                    <div class="curiosidades-box">
                        <strong>Curiosidades:</strong>
                        <ul>
                            ${d.curiosidades.map(c => `<li>${c}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            </article>
        `;
    } else {
        const iconsHtml = (d.habilidades || []).map(hId => {
            const h = habilidades.find(x => x.id === hId);
            return h ? `<img src="${h.logo}" class="icono-detalle-redondo" title="${h.nombre}">` : ''
        }).join("");
        htmlTarjeta = `
            <article class="tarjeta-detalle">
                <div class="detalle-izq">
                    <h4>${d.institucion || d.empresa || "GitHub"}</h4>
                    <img src="${d.logo || 'Logos/github.png'}" class="logo-detalle-centrado">
                    <h3>${d.nombre}</h3>
                    <p>${d.fechas || d.fecha}</p>
                    ${d.link ? `<a href="${d.link}" target="_blank" class="link-proyecto">${d.linkLabel || 'Ver en GitHub'}</a>` : ''}
                </div>
                <div class="detalle-der">
                    <div class="mini-habilidades">
                        <strong class="tit-habilidades">Habilidades:</strong> <div>${iconsHtml || 'N/A'}</div>
                    </div>
                    ${(tipo === 'proyecto' && d.captura) ? `<img src="${d.captura}" class="imagen-captura-proyecto">` : ''}
                    <p>${d.descripcion}</p>
                </div>
            </article>
        `;
    }

    // Inserta la nueva tarjeta de detalles al inicio del contenedor para posicionarla por encima de las anteriores
    contenedor.insertAdjacentHTML('afterbegin', htmlTarjeta);


    // Si la pantalla es de tamaño móvil, realiza un desplazamiento suave automático hacia la zona de detalle
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            const zonaDrop = document.getElementById("zona-drop");
            if (zonaDrop) {
                zonaDrop.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
}

// Elimina la clase de brillo y resplandor de todos los proyectos de GitHub
function quitarBrillos() {
    document.querySelectorAll(".item_proyecto").forEach(p => {
        p.classList.remove("brillo-github", "brillo-python", "brillo-sql", "brillo-ml", "brillo-powerbi", "brillo-web");
    });
}

// Configura e inicia la animación continua del carrusel duplicando los elementos de las habilidades
function checkCarruselBio() {
    const contenidoOriginal = contenedorHabilidades.innerHTML;
    contenedorHabilidades.innerHTML = contenidoOriginal + contenidoOriginal;
    const anchoMitad = contenedorHabilidades.scrollWidth / 2;
    contenedorHabilidades.style.setProperty('--ancho-desplazamiento', `-${anchoMitad}px`);
    contenedorHabilidades.classList.add("animacion-infinita");
}

const btnLimpiar = document.getElementById("btn-limpiar");
const contenedorTarjetas = document.getElementById("contenedor-tarjeta-activa");

btnLimpiar.onclick = () => {
    contenedorTarjetas.innerHTML = "";
    quitarBrillos();
};

listarHabilidades();
inyectarListas();
checkCarruselBio();