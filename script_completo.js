const ramos = [
  { id: 'zoologia', nombre: 'Zoología', requisitos: [], desbloquea: ['cuerpo_animal_i'] },
  { id: 'biologia_celular', nombre: 'Biología Celular', requisitos: [], desbloquea: ['agresion_defensa_i', 'bioquimica', 'cuerpo_animal_i'] },
  { id: 'lab_bio_celular', nombre: 'Lab. Biología Celular', requisitos: [], desbloquea: ['agresion_defensa_i', 'bioquimica', 'cuerpo_animal_i'] },
  { id: 'quimica', nombre: 'Química General y Orgánica', requisitos: [], desbloquea: ['bioquimica'] },
  { id: 'matematicas', nombre: 'Matemáticas', requisitos: [], desbloquea: ['metodos_cuantitativos'] },
  { id: 'introduccion', nombre: 'Introducción a la Medicina Vet.', requisitos: [], desbloquea: [] },

  { id: 'bioquimica', nombre: 'Bioquímica', requisitos: ['biologia_celular', 'lab_bio_celular', 'quimica'], desbloquea: ['agresion_defensa_ii', 'genetica'] },
  { id: 'agresion_defensa_i', nombre: 'Agresión y Defensa Orgánica I', requisitos: ['biologia_celular', 'lab_bio_celular'], desbloquea: ['agresion_defensa_ii'] },
  { id: 'cuerpo_animal_i', nombre: 'Cuerpo Animal I', requisitos: ['zoologia', 'biologia_celular', 'lab_bio_celular'], desbloquea: ['cuerpo_animal_ii', 'fdo_i'] },
  { id: 'habilidades_comunicativas', nombre: 'Habilidades Comunicativas', requisitos: [], desbloquea: ['razonamiento_cientifico'] },
  { id: 'ingles_i', nombre: 'Inglés I', requisitos: [], desbloquea: ['ingles_ii'] },

  { id: 'fdo_i', nombre: 'Función y Disfunción Orgánica I', requisitos: ['cuerpo_animal_i'], desbloquea: ['fdo_ii', 'anatomia_clinica', 'reproduccion', 'manejo_fauna'] },
  { id: 'agresion_defensa_ii', nombre: 'Agresión y Defensa Orgánica II', requisitos: ['agresion_defensa_i', 'bioquimica'], desbloquea: ['fdo_ii', 'enfermedades_acuaticos'] },
  { id: 'cuerpo_animal_ii', nombre: 'Cuerpo Animal II', requisitos: ['cuerpo_animal_i'], desbloquea: ['anatomia_clinica', 'anatomia_patologica', 'reproduccion'] },
  { id: 'metodos_cuantitativos', nombre: 'Métodos Cuantitativos', requisitos: ['matematicas'], desbloquea: ['genetica', 'ecologia_general', 'epidemiologia'] },
  { id: 'ingles_ii', nombre: 'Inglés II', requisitos: ['ingles_i'], desbloquea: ['ingles_iii'] },

  { id: 'fdo_ii', nombre: 'Función y Disfunción Orgánica II', requisitos: ['fdo_i', 'agresion_defensa_ii'], desbloquea: ['farmacologia', 'anatomia_patologica', 'patologia_clinica', 'epidemiologia', 'medicina'] },
  { id: 'genetica', nombre: 'Genética', requisitos: ['bioquimica', 'metodos_cuantitativos'], desbloquea: ['nutricion'] },
  { id: 'ecologia_general', nombre: 'Ecología General', requisitos: ['metodos_cuantitativos'], desbloquea: ['biologia_conservacion', 'legislacion_impacto'] },
  { id: 'anatomia_clinica', nombre: 'Anatomía Clínica', requisitos: ['fdo_i', 'cuerpo_animal_ii'], desbloquea: ['patologia_clinica', 'medicina'] },
  { id: 'ingles_iii', nombre: 'Inglés III', requisitos: ['ingles_ii'], desbloquea: ['ingles_iv'] },

  { id: 'biologia_conservacion', nombre: 'Biología de la Conservación', requisitos: ['ecologia_general'], desbloquea: ['manejo_fauna'] },
  { id: 'anatomia_patologica', nombre: 'Anatomía Patológica', requisitos: ['cuerpo_animal_ii', 'fdo_ii'], desbloquea: ['imagenologia'] },
  { id: 'enfermedades_acuaticos', nombre: 'Enfermedades de Organismos Acuáticos', requisitos: ['agresion_defensa_ii'], desbloquea: ['sistema_produccion'] },
  { id: 'farmacologia', nombre: 'Farmacología', requisitos: ['fdo_ii'], desbloquea: ['medicina'] },
  { id: 'nutricion', nombre: 'Nutrición y Alimentación Animal', requisitos: ['genetica'], desbloquea: ['sistema_produccion'] },

  { id: 'ingles_iv', nombre: 'Inglés IV', requisitos: ['ingles_iii'], desbloquea: [] },
  { id: 'epidemiologia', nombre: 'Epidemiología y Salud Pública', requisitos: ['metodos_cuantitativos', 'fdo_ii'], desbloquea: ['inocuidad'] },
  { id: 'imagenologia', nombre: 'Imagenología', requisitos: ['anatomia_patologica'], desbloquea: ['cirugia', 'integrador_i'] },
  { id: 'patologia_clinica', nombre: 'Patología Clínica', requisitos: ['fdo_ii', 'anatomia_clinica'], desbloquea: ['patologia_molecular', 'clinica'] },
  { id: 'reproduccion', nombre: 'Reproducción', requisitos: ['fdo_i', 'cuerpo_animal_ii'], desbloquea: ['sistema_produccion'] },
  { id: 'razonamiento_cientifico', nombre: 'Razonamiento Científico', requisitos: ['habilidades_comunicativas'], desbloquea: ['pensamiento_critico'] },

  { id: 'inocuidad', nombre: 'Inocuidad de los Alimentos', requisitos: ['epidemiologia'], desbloquea: ['zoonosis'] },
  { id: 'manejo_fauna', nombre: 'Manejo de Fauna Silvestre', requisitos: ['fdo_i', 'biologia_conservacion'], desbloquea: ['etica'] },
  { id: 'legislacion_impacto', nombre: 'Legislación y Evaluación de Impacto Ambiental', requisitos: ['ecologia_general'], desbloquea: ['formulacion_rrnn'] },
  { id: 'medicina', nombre: 'Medicina', requisitos: ['fdo_ii', 'anatomia_clinica', 'farmacologia'], desbloquea: ['cirugia', 'integrador_i'] },
  { id: 'sistema_produccion', nombre: 'Sistema de Producción Animal', requisitos: ['reproduccion', 'nutricion', 'enfermedades_acuaticos'], desbloquea: ['etica'] },

  { id: 'zoonosis', nombre: 'Zoonosis y Enfermedades Emergentes', requisitos: ['inocuidad'], desbloquea: ['proyecto_titulo', 'electivo_i', 'electivo_ii'] },
  { id: 'patologia_molecular', nombre: 'Patología Molecular', requisitos: ['patologia_clinica'], desbloquea: ['proyecto_titulo', 'electivo_i', 'electivo_ii'] },
  { id: 'cirugia', nombre: 'Cirugía', requisitos: ['imagenologia', 'medicina'], desbloquea: ['clinica', 'proyecto_titulo', 'electivo_ii'] },
  { id: 'formulacion_rrnn', nombre: 'Formulación y Evaluación de Proyectos RRNN', requisitos: ['legislacion_impacto'], desbloquea: ['innovacion', 'proyecto_titulo', 'electivo_i', 'electivo_ii'] },
  { id: 'integrador_i', nombre: 'Integrador I: Práctica Profesional', requisitos: ['imagenologia', 'medicina'], desbloquea: ['proyecto_titulo', 'electivo_i', 'electivo_ii'] },

  { id: 'etica', nombre: 'Ética y Bienestar Animal', requisitos: ['sistema_produccion', 'manejo_fauna'], desbloquea: ['internado'] },
  { id: 'innovacion', nombre: 'Innovación y Transferencia Tecnológica', requisitos: ['formulacion_rrnn'], desbloquea: [] },
  { id: 'clinica', nombre: 'Clínica', requisitos: ['patologia_clinica', 'cirugia'], desbloquea: ['electivo_i', 'internado'] },
  { id: 'pensamiento_critico', nombre: 'Pensamiento Crítico', requisitos: ['razonamiento_cientifico'], desbloquea: ['responsabilidad_social'] },
  { id: 'proyecto_titulo', nombre: 'Proyecto de Título', requisitos: ['zoonosis', 'patologia_molecular', 'cirugia', 'formulacion_rrnn', 'integrador_i'], desbloquea: [] },

  { id: 'electivo_i', nombre: 'Electivo Profesional I', requisitos: ['zoonosis', 'patologia_molecular', 'formulacion_rrnn', 'integrador_i', 'clinica'], desbloquea: [] },
  { id: 'electivo_ii', nombre: 'Electivo Profesional II', requisitos: ['zoonosis', 'patologia_molecular', 'formulacion_rrnn', 'integrador_i', 'cirugia'], desbloquea: [] },
  { id: 'responsabilidad_social', nombre: 'Responsabilidad Social', requisitos: ['pensamiento_critico'], desbloquea: [] },
  { id: 'internado', nombre: 'Integrador II: Internado', requisitos: ['etica', 'clinica'], desbloquea: [] }
];

const mallaDiv = document.getElementById('malla');
const estadoRamos = {};

function renderMalla() {
  mallaDiv.innerHTML = '';
  ramos.forEach((ramo) => {
    const div = document.createElement('div');
    div.className = 'ramo';
    div.id = ramo.id;
    div.textContent = ramo.nombre;

    if (ramo.requisitos.every(req => estadoRamos[req])) {
      div.classList.add('activo');
      div.onclick = () => toggleRamo(ramo);
    }

    if (estadoRamos[ramo.id]) {
      div.classList.add('aprobado');
    }

    mallaDiv.appendChild(div);
  });
}

function toggleRamo(ramo) {
  estadoRamos[ramo.id] = !estadoRamos[ramo.id];
  renderMalla();
}

renderMalla();
