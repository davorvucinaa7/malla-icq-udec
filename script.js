const malla = [
    {
        year: "1º Año",
        semesters: [
            {
                semester: "1º Semestre",
                courses: [
                    { code: "510140", name: "Física I", credits: 4, prereqs: [] },
                    { code: "525140", name: "Álgebra I", credits: 5, prereqs: [] },
                    { code: "527140", name: "Cálculo I", credits: 5, prereqs: [] },
                    { code: "531140", name: "Química General I", credits: 5, prereqs: [] },
                    { code: "540120", name: "Introducción a la Ingeniería Química", credits: 2, prereqs: [] }
                ]
            },
            {
                semester: "2º Semestre",
                courses: [
                    { code: "510150", name: "Física II", credits: 4, prereqs: ["510140"] },
                    { code: "525150", name: "Álgebra II", credits: 5, prereqs: ["525140"] },
                    { code: "527150", name: "Cálculo II", credits: 5, prereqs: ["527140"] },
                    { code: "531150", name: "Química General II", credits: 4, prereqs: ["531140"] },
                    { code: "500151", name: "Introducción a la Innovación en Ingeniería", credits: 2, prereqs: [] }
                ]
            }
        ]
    },
    {
        year: "2º Año",
        semesters: [
            {
                semester: "3º Semestre",
                courses: [
                    { code: "521227", name: "Cálculo III", credits: 5, prereqs: ["525150", "527150"] },
                    { code: "521218", name: "Ecuaciones Diferenciales Ordinarias", credits: 4, prereqs: ["525150", "527150"] },
                    { code: "541225", name: "Mecánica", credits: 4, prereqs: ["510150", "527150"], coreqs: ["521227"] },
                    { code: "540215", name: "Balance de Materia y Energía", credits: 4, prereqs: ["531150"] },
                    { code: "503202", name: "Programación", credits: 3, prereqs: [] },
                    { code: "201", name: "Complementaria I", credits: 3, prereqs: [] }
                ]
            },
            {
                semester: "4º Semestre",
                courses: [
                    { code: "540264", name: "Termodinámica", credits: 4, prereqs: ["510150", "525150", "527150", "540215"] },
                    { code: "540265", name: "Mecánica de Fluidos", credits: 5, prereqs: ["521227", "521218", "541225"] },
                    { code: "540266", name: "Taller de Integración I", credits: 2, prereqs: ["540215"] },
                    { code: "521230", name: "Cálculo Numérico", credits: 4, prereqs: ["521227", "521218", "503202"] },
                    { code: "202", name: "Complementaria II", credits: 6, prereqs: [] }
                ]
            }
        ]
    },
    {
        year: "3º Año",
        semesters: [
            {
                semester: "5º Semestre",
                courses: [
                    { code: "540331", name: "Química Orgánica", credits: 4, prereqs: ["531150"] },
                    { code: "540332", name: "Termodinámica de Mezclas", credits: 4, prereqs: ["540264"] },
                    { code: "540333", name: "Transferencia de Calor", credits: 4, prereqs: ["540265"] },
                    { code: "540334", name: "Liderazgo y Comunicación", credits: 3, prereqs: [] },
                    { code: "540349", name: "Práctica Laboral", credits: 2, prereqs: [] },
                    { code: "203", name: "Complementaria III", credits: 2, prereqs: [] }
                ]
            },
            {
                semester: "6º Semestre",
                courses: [
                    { code: "540351", name: "Termodinámica de Superficies", credits: 4, prereqs: ["540265", "540332"], coreqs: ["540352"] },
                    { code: "540352", name: "Transferencia de Materia", credits: 4, prereqs: ["540332"] },
                    { code: "540353", name: "Taller de Integración II", credits: 2, prereqs: ["540333"] },
                    { code: "523250", name: "Estadística y Probabilidades", credits: 4, prereqs: ["525150", "527150"] },
                    { code: "580301", name: "Innovación", credits: 3, prereqs: [] },
                    { code: "204", name: "Complementaria IV", credits: 2, prereqs: [] }
                ]
            }
        ]
    },
    {
        year: "4º Año",
        semesters: [
            {
                semester: "7º Semestre",
                courses: [
                    { code: "540361", name: "Diseño de Reactores Químicos", credits: 5, prereqs: ["540351"] },
                    { code: "540362", name: "Dinámica y Control de Procesos", credits: 5, prereqs: ["540352"], coreqs: ["540361"] },
                    { code: "540363", name: "Laboratorio de Procesos Químicos", credits: 4, prereqs: ["540352"], coreqs: ["540361"] },
                    { code: "540364", name: "Operaciones de Separación", credits: 4, prereqs: ["540352"] },
                    { code: "540365", name: "Síntesis y Optimización de Procesos", credits: 5, prereqs: ["540361"] },
                    { code: "540366", name: "Taller de Integración III", credits: 3, prereqs: ["540361"] }
                ]
            },
            {
                semester: "8º Semestre",
                courses: [
                    { code: "540574", name: "Proyecto I", credits: 4, prereqs: ["540365"] },
                    { code: "540575", name: "Proyecto II", credits: 4, prereqs: ["540574"] },
                    { code: "540576", name: "Gestión de Riesgos Químicos", credits: 3, prereqs: [] },
                    { code: "540690", name: "Práctica Profesional", credits: 4, prereqs: [] },
                    { code: "540695", name: "Memoria de Título", credits: 20, prereqs: [{ type: "memoria" }] }
                ]
            }
        ]
    },
    {
        year: "5º Año",
        semesters: [
            {
                semester: "9º Semestre",
                courses: [
                    { code: "580703", name: "Formulación y Evaluación de Proyectos", credits: 4, prereqs: [] },
                    { code: "554150", name: "Introducción a la Sustentabilidad en Ingeniería", credits: 3, prereqs: [] },
                    { code: "500703", name: "Inglés Comunicativo 3 Nivel Básico", credits: 3, prereqs: [] },
                    { code: "102", name: "Electiva II", credits: 6, prereqs: [] }
                ]
            },
            {
                semester: "10º Semestre",
                courses: [
                    { code: "580705", name: "Gestión de Empresas", credits: 3, prereqs: [] },
                    { code: "500704", name: "Inglés Comunicativo 4 Nivel Básico Alto", credits: 3, prereqs: ["500703"] },
                    { code: "103", name: "Electiva III", credits: 6, prereqs: [] }
                ]
            }
        ]
    }
];

const mallaContainer = document.getElementById("malla");
let progress = JSON.parse(localStorage.getItem("mallaProgress")) || {};

function saveProgress() {
    localStorage.setItem("mallaProgress", JSON.stringify(progress));
}

function isInProgress(code) {
    return progress[code] === "inProgress";
}

function isApproved(code) {
    return progress[code] === "approved";
}

function totalCredits() {
    let credits = 0;
    malla.forEach(year =>
        year.semesters.forEach(sem =>
            sem.courses.forEach(course => {
                if (isApproved(course.code)) credits += course.credits;
            })
        )
    );
    return credits;
}

function approvedSemesters() {
    let count = 0;
    malla.forEach(year =>
        year.semesters.forEach(sem => {
            if (sem.courses.every(c => isApproved(c.code))) count++;
        })
    );
    return count;
}

function contarRamosPendientes() {
    let pendientes = 0;
    malla.forEach(year =>
        year.semesters.forEach(sem =>
            sem.courses.forEach(course => {
                if (!isApproved(course.code)) pendientes++;
            })
        )
    );
    return pendientes;
}

function canUnlock(course) {
    if (!course.prereqs || course.prereqs.length === 0) return true;
    return course.prereqs.every(prereq => {
        if (typeof prereq === "string") {
            return isApproved(prereq);
        } else if (prereq.type === "credits") {
            return totalCredits() >= prereq.value;
        } else if (prereq.type === "semester") {
            return approvedSemesters() >= prereq.value;
        } else if (prereq.type === "memoria") {
            return contarRamosPendientes() <= 1 || isInProgress("PP501");
        }
        return false;
    });
}

function toggleCourse(course) {
    if (!canUnlock(course)) {
        alert(listarRequisitosFaltantes(course));
        return;
    }
    if (!progress[course.code]) {
        progress[course.code] = "inProgress";
    } else if (isInProgress(course.code)) {
        progress[course.code] = "approved";
    } else {
        delete progress[course.code];
    }
    saveProgress();
    renderMalla();
    setTimeout(checkGraduation, 100);
}

function listarRequisitosFaltantes(course) {
    let faltanRamos = [];
    let faltanCreditos = null;
    let faltanSemestres = null;

    course.prereqs.forEach(prereq => {
        if (typeof prereq === "string" && !isApproved(prereq)) {
            faltanRamos.push(buscarNombreRamo(prereq));
        } else if (prereq.type === "credits" && totalCredits() < prereq.value) {
            faltanCreditos = prereq.value - totalCredits();
        } else if (prereq.type === "semester" && approvedSemesters() < prereq.value) {
            faltanSemestres = `${prereq.value} semestres`;
        } else if (prereq.type === "memoria" && !(contarRamosPendientes() <= 1 || isInProgress("PP501"))) {
            faltanRamos.push("Práctica Profesional inscrita o todos los ramos aprobados");
        }
    });

    let mensaje = "No puedes inscribir este ramo.";
    if (faltanRamos.length > 0 && faltanCreditos !== null) {
        mensaje += ` Primero debes aprobar: ${faltanRamos.join(", ")} y alcanzar ${faltanCreditos} créditos.`;
    } else if (faltanRamos.length > 0) {
        mensaje += ` Primero debes aprobar: ${faltanRamos.join(", ")}.`;
    } else if (faltanCreditos !== null) {
        mensaje += ` Te faltan ${faltanCreditos} créditos por aprobar.`;
    } else if (faltanSemestres) {
        mensaje += ` Primero debes aprobar ${faltanSemestres}.`;
    }
    return mensaje;
}

function buscarNombreRamo(code) {
    for (let year of malla) {
        for (let sem of year.semesters) {
            for (let course of sem.courses) {
                if (course.code === code) return `${course.name}`;
            }
        }
    }
    return code;
}

function checkGraduation() {
    const total = malla.flatMap(y => y.semesters.flatMap(s => s.courses)).length;
    const aprobados = Object.values(progress).filter(state => state === "approved").length;
    if (aprobados === total) {
        lanzarConfetti();
        mostrarModalFelicitacion();
    }
}

function lanzarConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 }
        }));
    }, 250);
}

function mostrarModalFelicitacion() {
    document.getElementById("felicitacionModal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("felicitacionModal").style.display = "none";
}

function renderMalla() {
    let approvedCount = 0;
    let totalCourses = 0;
    let credits = 0;

    malla.forEach(year =>
        year.semesters.forEach(sem =>
            sem.courses.forEach(course => {
                totalCourses++;
                if (isApproved(course.code)) {
                    approvedCount++;
                    credits += course.credits;
                }
            })
        )
    );

    const headerTitle = document.querySelector("header h1");
    headerTitle.innerHTML = `
        Malla Interactiva - Ingeniería Civil Química<br>
        ${approvedCount}/${totalCourses} Ramos aprobados<br>
        ${credits} Créditos aprobados
    `;

    mallaContainer.innerHTML = "";
    malla.forEach(year => {
        const yearDiv = document.createElement("div");
        yearDiv.className = "year";

        const yearTitle = document.createElement("h2");
        yearTitle.textContent = year.year;
        yearDiv.appendChild(yearTitle);

        year.semesters.forEach(sem => {
            const semDiv = document.createElement("div");
            semDiv.className = "semester";

            const semTitle = document.createElement("h3");
            semTitle.textContent = sem.semester;
            semDiv.appendChild(semTitle);

            const grid = document.createElement("div");
            grid.className = "grid";

            sem.courses.forEach(course => {
                const div = document.createElement("div");
                div.className = "course";
                div.innerHTML = `
                    <div class="course-name">${course.code} - ${course.name}</div>
                    <div class="course-credits">${course.credits} créditos</div>
                `;

                if (isApproved(course.code)) {
                    div.classList.add("approved");
                } else if (isInProgress(course.code)) {
                    div.classList.add("in-progress");
                } else if (!canUnlock(course)) {
                    div.classList.add("locked");
                }

                div.addEventListener("click", () => toggleCourse(course));
                grid.appendChild(div);
            });

            semDiv.appendChild(grid);
            yearDiv.appendChild(semDiv);
        });

        mallaContainer.appendChild(yearDiv);
    });
}

renderMalla();
