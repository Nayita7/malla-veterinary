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
  { id: 'fdo_i', nombre: 'Función y Disfunción Orgánica I', requisitos: ['cuerpo_animal_i'], desbloquea: ['fdo_ii'] }
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
