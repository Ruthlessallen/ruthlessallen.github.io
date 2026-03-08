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
    {id: "hab-excel", nombre: "Excel", logo: 'Logos/excel.png'}
];

// Tarjetas de proyectos de github
const proyectos = [
    { 
        id: "proyecto-1-EDA", 
        nombre: "Proyecto EDA sobre compra en Barcelona a través de Idealista (2024)", 
        institucion: "GitHub", 
        fecha: "Enero 2026", 
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/Project-Data-Cleaning",
        descripcion: "En este trabajo limpié las columnas de nulos para poder trabajar con ellos. Además, hice busquedas en cascada de ciertos datos (como los metros útiles, o precios) en diversas columnas. \n" +
        "Una de estas columnas es 'description', la cual es texto plano, lo que fue un reto para mí ya que tuve que realizar búsquedas a través de diccionarios y sacar la información que realmente importaba. \n"+
        "Dentro de los descubrimientos obtenidos tenemos que la información de la inmobiliaria en la descripción algunas veces no casa con los datos de las otras columnas, como etiquetar en buen estado casas ocupadas.",        logo: 'Logos/github.png', 
        habilidades: ["hab-python","hab-seaborn", "hab-pandas", "hab-jupyter","hab-vsc","hab-git",],
        captura: 'Capturas-proyectos/proyecto_1.png'
    },
    { 
        id: "proyecto-Python-HotelApi", 
        nombre: "Aplicación CRUD de hotel", 
        institucion: "GitHub", 
        fecha: "Diciembre 2025", 
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/primer-proyecto-hotel",
        descripcion: "Este fue mi primer poyecto con Python. Todo lo que había aprendido desde octubre quería ponerlo en práctica, así que hice este pequeño proyecto"+
        " en el que usé el sistema CRUD y TKinter para el frontend. Además fue la primera vez que usé SQLite sin haber tocado practicamente nada de base de datos anteriormente."+
        "El objetivo también era usar funciones y la programación orientada a objetos. Mi idea es darle una vuelta próximamente: abstraer funciones y separar responsabilidades."+
        "También me interesa seguir usando este proyecto para poder poner en la práctica todo lo que estoy aprendiendo en programación y darle un toque estético moderno.",
        habilidades: ["hab-python","hab-vsc","hab-sql"],
        captura: 'Capturas-proyectos/proyecto_2_hotel.png'
    },
    {
        id: "proyecto-dioramantra", 
        nombre: "Web estática Dioramantra", 
        institucion: "GitHub", 
        fecha: "Enero 2026", 
        logo: 'Logos/github.png',
        link: "https://github.com/Ruthlessallen/proyecto-dioramantra", 
        descripcion: "Este es un trabajo de la asignatura de lenguaje de marcas en mi FP de DAM. Una de las cosas que más me han ayudado a trabajar la paciencia ha sido hacer dioramas."+
        "Los dioramas son maquetas que se construyen poco a poco, y pueden ser diy o prehechas para que solo se tenga que montar."+
        "En este caso, quería hacer una web alegre y que cumpliesen con los requisitos de la asignatura. En esta web estática la idea es simular la página principal de una tienda online.", 
        habilidades: ["hab-css", "hab-html", "hab-vsc"], 
        captura: "Capturas-proyectos/proyecto_3_dioramantra.png"
    }
];

//tarjeta bio 
const infoPersonal = {
    id: "perfil-ruth",
    nombre: "Ruth López Pellicer",
    foto: "Logos/foto.jpg",
    bio: "Tras años trabajando en hostelería en mi trabajo de recepcionista de hotel me di cuenta de que me era más mentalmente estimulante y divertido solucionar problemas tecnológicos.\n"+
    "Siempre he tenido una mente curiosa y con capacidad de resolución ante cualquier situación problemática, una mente organizativa, buscando la eficacia ante una tarea. \n"+
    "Mis años trabajando en un hotel o en restaurantes me han dado la visión que tengo hoy en día de trabajo en equipo y manejo de la frustración, así que lo uso en mi favor en este nuevo rumbo hacia la programación.\n",
    curiosidades: ["Me encantan los escape rooms, los puzzles y acertijos, cuanto más me haga estrujar el cerebro, mejor.", 
        "He pasado muchas horas jugando a videojuegos y mis favoritos siempre tienen que ver con la gestión de recursos", 
        "Mi circulo cercano siempre me dicen que no paro de buscar soluciones a problematicas, aunque no sea necesario en ese momento"
    ],
    proyectoRelacionado: ["proyecto-Python-HotelApi"],
    idiomas: ["Español (Nativo)", 
        "Inglés (B2 - Profesional)", 
        "Valenciano (C1)"]
};
//Tarjetas de cursos
const cursos = [
    { 
        id: "curso-evolve", 
        nombre: "Máster de Data Science e IA", 
        institucion: "Evolve Academy", 
        fechas: "2026", 
        descripcion: "Cursando actualmente máster de data science e IA. En este curso estoy aprendiendo: Python, arquitectura de software, control de versiones, SQL y bases de datos, data science stadistics, análisis y visualizacion de datos, Machine Learning, Deep Learning, IA generativa y MLOps.", 
        logo : 'Logos/evolve.png',
        habilidades: ["hab-python","hab-sql","hab-git", "hab-jupyter", "hab-pandas","hab-mlp",  "hab-seaborn","hab-beaver","hab-powerbi"],
        proyectoRelacionado: "proyecto-1-EDA"
    },
    { 
        id: "curso-ucademy", 
        nombre: "FP Desarrollo de aplicaciones multiplataforma", 
        institucion: "Ucademy", 
        fechas: "2025-2027",
        descripcion: "Formación superior de Desarrollo de Aplicaciones Multiplataforma. Cursando actualmente el primer curso, donde además de lenguajes estoy estudiando testeo con JUNIT, uso de Virtual Box"+
        "así como uso de diagramas de flujo, entornos de sistemas y aprendizaje sobre hardware y redes.", 
        logo : 'Logos/ucademy.png',
        habilidades: ["hab-java","hab-js","hab-html","hab-css","hab-idea"],
        proyectoRelacionado: "proyecto-dioramantra"
    },
        { 
        id: "curso-mislata", 
        nombre: "FP Gestión de alojamientos turísticos", 
        institucion: "CIPFP Mislata", 
        fechas: "2019-2023", 
        descripcion: "FP de Gestión de alojamientos turísticos. Mi base en hostelería, me saqué el curso mientras trabajaba de camarera en diversos bares y restaurantes. De esta FP me llevo la gestión y el análisis del marketing y profundización del mercado turístico." , 
        logo : 'Logos/mislata.jpg', 
        habilidades: ["hab-excel"],
        proyectoRelacionado: "proyecto-Python-HotelApi"
    }
    
];


// Tarjetas de experiencia laboral
const laboral = [
    { 
        id: "Byb", 
        nombre: "Recepcionista de hotel", 
        empresa: "B&B Ciudad de las Ciencias",
        fecha: "2023-2025", 
        descripcion: "Trabajo de recepcionista de hotel en importante cadena europea. Aquí trabajé con Lean, una web de gestión de reservas.",
        logo: 'Logos/byb.png',
        habilidades: ["hab-excel"],
        proyectoRelacionado: "proyecto-Python-HotelApi"
    }, 
    {
        id: "camarera", 
        nombre: "Camarera de sala", 
        empresa: "Diversos restaurantes y bares", 
        fecha: "2019-2025", 
        logo: 'Logos/camarera.jpg',
        descripcion: "Ser camarera me ha ayudado muchísimo a entender cómo funciona la gente y anticiparme a sus deseos. Una de las cosas que más me gusta es hacer feliz a la gente aún cuando no hay un motivo para estarlo."+
        "En estos años he trabajado en diversos restaurantes, aunque recalco El Cauce Bar y Tapas en Valencia y Hotel Catalonia del Mar en Cala Bona, donde me demostraron que también se puede disfrutar trabajando de camarera"
    }
];

//Conexion JS-HTML
const contenedorHabilidades = document.getElementById("contenedor-habilidades-globales");
const contenedorCursos = document.getElementById("contenedor-cursos");
const contenedorProyectos = document.getElementById("contenedor-proyectos");
const contenedorLaboral = document.getElementById("contenedor-experiencias");


function listarHabilidades() {
    contenedorHabilidades.innerHTML = "";
    habilidades.forEach(h => {
        const div = document.createElement("div");
        div.className = "item-habilidad";
        div.innerHTML = `<img src="${h.logo}"><span>${h.nombre}</span>`;
        contenedorHabilidades.appendChild(div);
    });
}

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

function inyectarListas() {
    cursos.forEach(c => contenedorCursos.appendChild(crearBoton(c, 'cursos')));
    proyectos.forEach(p => contenedorProyectos.appendChild(crearBoton(p, 'proyecto')));
    laboral.forEach(l => contenedorLaboral.appendChild(crearBoton(l, 'laboral')));
}

function manejarDrop(e) {
    e.preventDefault();
    const [id, tipo] = e.dataTransfer.getData("text/plain").split('|');
    mostrarDetalle(id, tipo);
}

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
    if (d.proyectoRelacionado) document.getElementById(d.proyectoRelacionado)?.classList.add("brillo-github");
    if (tipo === 'perfil') {
        contenedor.innerHTML += `
            <article class="tarjeta-detalle tarjeta-perfil-especial">
                <div class="detalle-izq">
                    <h4>Sobre mí</h4>
                    <img src="${d.foto}" class="logo-detalle-centrado">
                    <h3>${d.nombre}</h3>
                </div>
                <div class="detalle-der">
                    <p><strong>Bio:</strong> ${d.bio}</p>
                    <p><strong>Idiomas:</strong> ${d.idiomas.join(", ")}</p>
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
        contenedor.innerHTML += `
            <article class="tarjeta-detalle">
                <div class="detalle-izq">
                    <h4>${d.institucion || d.empresa || "GitHub"}</h4>
                    <img src="${d.logo || 'Logos/github.png'}" class="logo-detalle-centrado">
                    <h3>${d.nombre}</h3>
                    <p>${d.fechas || d.fecha}</p>
                    ${d.link ? `<a href="${d.link}" target="_blank" class="link-proyecto">Ver en GitHub</a>` : ''}
                </div>
                <div class="detalle-der">
                    <div class="mini-habilidades">
                        <strong class="tit-habilidades">Habilidades:</strong> <div>${iconsHtml || 'N/A'}</div>
                    </div>
                    ${tipo === 'proyecto' ? `<img src="${d.captura}" class="imagen-captura-proyecto">` : ''}
                    <p>${d.descripcion}</p>
                </div>
            </article>
        `;
    }
}
function quitarBrillos() {
    document.querySelectorAll(".item_proyecto").forEach(p => p.classList.remove("brillo-github"));
}

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
checkCarruselBio()