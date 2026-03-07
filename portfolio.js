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
    { id: "hab-vsc", nombre: "Visual Studio Code", logo: 'Logos/vsc.png' }

];

//Tarjetas de cursos
const cursos = [
    { 
        id: "curso-evolve", 
        nombre: "Máster de Data Science e IA", 
        institucion: "Evolve Academy", 
        fechas: "2026", 
        descripcion: "Curso", 
        logo : 'Logos/evolve.png',
        habilidades: ["hab-python","hab-sql","hab-git" ],
        proyectoRelacionado: "proyecto-1-EDA"
    },
    { 
        id: "curso-ucademy", 
        nombre: "FP Desarrollo de aplicaciones multiplataforma", 
        institucion: "Ucademy", 
        fechas: "2025-2027",
        descripcion: "Fp" , 
        logo : 'Logos/ucademy.png'
    },
        { 
        id: "curso-mislata", 
        nombre: "FP Gestión de alojamientos turísticos", 
        institucion: "CIPFP Mislata", 
        fechas: "2025-2027", 
        descripcion: "Fp" , 
        logo : 'Logos/mislata.jpg'
    }
];
// Tarjetas de proyectos de github
const proyectos = [
    { 
        id: "proyecto-1-EDA", 
        nombre: "Proyecto EDA sobre compra en 2024 en Barcelona a través de Idealista", 
        institucion: "GitHub", 
        fecha: "Enero 2026", 
        descripcion: "" , 
        logo: '', 
        habilidades: ["hab-python"],
        captura: ''
    },
    { 
        id: "proyecto-Python-HotelApi", 
        nombre: "Aplicación CRUD de hotel", 
        fecha: "Febrero 2026", 
        descripcion: "",
        logo: ''
    }
];

// Tarjetas de experiencia laboral
const laboral = [
    { 
        id: "Byb", 
        nombre: "Recepcionista de hotel", 
        empresa: "B&B Ciudad de las Ciencias",
        fecha: "2023-2025", 
        descripcion: "",
        logo: 'Logos/byb.png'
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
    let d = [...cursos, ...proyectos, ...laboral].find(x => x.id === id);
    if (!d) return;
    quitarBrillos();
    if (d.proyectoRelacionado) document.getElementById(d.proyectoRelacionado)?.classList.add("brillo-github");
    const iconsHtml = (d.habilidades || []).map(hId => {
        const h = habilidades.find(x => x.id === hId);
        return h ? `<img src="${h.logo}" class="icono-detalle-redondo" title="${h.nombre}">` : ''}).join("");
    contenedor.innerHTML += `
        <article class="tarjeta-detalle">
            <div class="detalle-izq">
                <h4>${d.institucion}</h4>
                <img src="${d.logo}" style="width:60px; height:60px; margin-bottom:10px;">
                <h3>${d.nombre}</h3>
                <p>${d.fechas || d.fecha}</p>
            </div>
            <div class="detalle-der">
                <div class="mini-habilidades">
                    <strong>Habilidades:</strong> <div>${iconsHtml || 'N/A'}</div>
                </div>
                ${tipo === 'proyecto' ? `<div style="background:#eee; height:150px; border-radius:8px; display:flex; align-items:center; justify-content:center;">[Captura del Proyecto]</div>` : ''}
                <p>${d.descripcion}</p>
            </div>
        </article>
    `;
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