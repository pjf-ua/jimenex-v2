const services = {
  fiscal: {
    title: "Asesoramiento fiscal",
    items: [
      "IVA e impuestos especiales",
      "Declaraciones de renta y patrimonio",
      "Declaraciones estimación objetiva de módulos",
      "Declaraciones estimación directa simplificada y directa normal",
      "Resúmenes anuales",
      "Atención inspecciones tributarias",
      "Constitución integral de empresas",
    ],
  },
  laboral: {
    title: "Asesoramiento laboral",
    items: [
      "Confección nóminas y seguros sociales",
      "Altas y bajas de trabajadores ante INSS e INEM",
      "Creación laboral nueva empresa",
      "Contratos de trabajo",
      "Expedientes de regulación de empleo",
      "Altas y bajas de autónomos",
      "Gestión de prestaciones y pensiones",
      "Atención inspecciones laborales",
      "Tramitación expedientes de extranjería",
      "Confección y presentación impuesto mod. 111 y 190",
    ],
  },
  contable: {
    title: "Asesoramiento contable",
    items: [
      "Constitución de sociedades mercantiles",
      "Contabilidades",
      "Impuesto de sociedades, cuentas anuales y libros oficiales",
    ],
  },
  otrostramites: {
    title: "Otros tramites",
    items: [
      "Constitución y disolución de sociedades",
      "Constitución y disolución de comunidades de bienes",
      "Constitución de comunidades de propietarios",
      "Certificados de últimas voluntades",
      "Cualquier gestión ante organismos oficiales",
    ],
  },

  trafico: {
    title: "Gestiones de tráfico",
    items: [
      "Matriculación de vehículos nacionales y de importación",
      "Transferencias de vehículos",
      "Bajas definitivas, temporales y por exportación",
      "Informes de vehículos",
      "Recursos sanciones ante Jef. Trafico",
      "Obtención Permisos Especiales de Transportes",
    ],
  },
  transportes: {
    title: "Gestiones de transportes",
    items: [
      "Obtención y Sustitución de Tarjetas de Transportes",
      "Rehabilitación Tarjetas de Transportes",
      "Visado Tarjetas de Transportes",
      "Obtención de Tarjeta de tacografo empresa y de conductor",
      "Certificado de conductores de países no comunitarios.",
    ],
  },
  mercantil: {
    title: "Registros mercantiles y de la propiedad",
    items: [
      "Tramitación de escrituras",
      "Obtención de notas simples y certificaciones",
      "Impuesto de transmisiones, sucesiones y donaciones",
      "Asesoramiento en liquidaciones hereditarias",
      "Inscripción y cancelación de reservas de dominio",
    ],
  },
};

const modal = document.getElementById("modal");
const title = document.getElementById("modal-title");
const list = document.getElementById("modal-list");
const closeBtn = document.getElementById("close-modal");

document.querySelectorAll("[data-service]").forEach(card => {
  card.addEventListener("click", () => {
    const service = services[card.dataset.service];

    title.textContent = service.title;
    list.innerHTML = "";

    service.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});

const legalModal = document.getElementById("legal-modal");
const closeLegalModal = document.getElementById("close-legal-modal");

document.getElementById("open-legal").addEventListener("click", e => {
  e.preventDefault();
  legalModal.classList.add("active");
});

closeLegalModal.addEventListener("click", () => {
  legalModal.classList.remove("active");
});

legalModal.addEventListener("click", e => {
  if (e.target === legalModal) {
    legalModal.classList.remove("active");
  }
});

const privModal = document.getElementById("priv-modal");
const closeprivModal = document.getElementById("close-priv-modal");

document.getElementById("open-priv").addEventListener("click", e => {
  e.preventDefault();
  privModal.classList.add("active");
});

closeprivModal.addEventListener("click", () => {
  privModal.classList.remove("active");
});

privModal.addEventListener("click", e => {
  if (e.target === privModal) {
    privModal.classList.remove("active");
  }
});

