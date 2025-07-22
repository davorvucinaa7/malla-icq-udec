const malla = [
    {
        year: "1º Año",
        semesters: [
            {
                semester: "1º Semestre",
                courses: [
                    { code: "FIS101", name: "Física I", credits: 5, prereqs: [] },
                    { code: "ALG101", name: "Álgebra I", credits: 5, prereqs: [] },
                    { code: "CAL101", name: "Cálculo I", credits: 5, prereqs: [] },
                    { code: "QUI101", name: "Química I", credits: 5, prereqs: [] },
                    { code: "COM101", name: "Inglés Comunicativo I", credits: 3, prereqs: [] }
                ]
            },
            {
                semester: "2º Semestre",
                courses: [
                    { code: "FIS102", name: "Física II", credits: 5, prereqs: ["FIS101"] },
                    { code: "ALG102", name: "Álgebra II", credits: 5, prereqs: ["ALG101"] },
                    { code: "CAL102", name: "Cálculo II", credits: 5, prereqs: ["CAL101"] },
                    { code: "QUI102", name: "Química II", credits: 5, prereqs: ["QUI101"] },
                    { code: "ING101", name: "Introducción a la Ingeniería Química", credits: 3, prereqs: [] }
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
                    { code: "CAL201", name: "Cálculo III", credits: 5, prereqs: ["ALG102", "CAL102"] },
                    { code: "EDO201", name: "Ecuaciones Diferenciales Ordinarias", credits: 4, prereqs: ["ALG102", "CAL102"] },
                    { code: "MEC201", name: "Mecánica", credits: 5, prereqs: ["FIS102", "CAL102"], coreqs: ["CAL201"] },
                    { code: "BAL201", name: "Balance de Materia y Energía", credits: 5, prereqs: ["QUI102"] },
                    { code: "COM102", name: "Inglés Comunicativo II", credits: 3, prereqs: ["COM101"] }
                ]
            },
            {
                semester: "4º Semestre",
                courses: [
                    { code: "TER201", name: "Termodinámica", credits: 5, prereqs: ["FIS102", "ALG102", "CAL102", "BAL201"] },
                    { code: "MF201", name: "Mecánica de Fluidos", credits: 5, prereqs: ["CAL201", "EDO201", "MEC201"] },
                    { code: "TIN201", name: "Taller de Integración I", credits: 3, prereqs: ["BAL201"] },
                    { code: "NUM201", name: "Cálculo Numérico", credits: 4, prereqs: ["CAL201", "EDO201", "PRG201"] },
                    { code: "PRG201", name: "Programación", credits: 3, prereqs: [] }
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
                    { code: "QUI301", name: "Química Orgánica", credits: 5, prereqs: ["QUI102"] },
                    { code: "TER301", name: "Termodinámica de Mezclas", credits: 5, prereqs: ["TER201"] },
                    { code: "TC301", name: "Transferencia de Calor", credits: 5, prereqs: ["MF201"] },
                    { code: "EST301", name: "Estadística y Probabilidades", credits: 4, prereqs: ["ALG102", "CAL102"] },
                    { code: "COM103", name: "Inglés Comunicativo III", credits: 3, prereqs: ["COM102"] }
                ]
            },
            {
                semester: "6º Semestre",
                courses: [
                    { code: "TS301", name: "Termodinámica de Superficies", credits: 5, prereqs: ["MF201", "TER301"], coreqs: ["TM301"] },
                    { code: "TM301", name: "Transferencia de Materia", credits: 5, prereqs: ["TER301"] },
                    { code: "TIN302", name: "Taller de Integración II", credits: 3, prereqs: ["TC301"] },
                    { code: "DRQ301", name: "Diseño de Reactores Químicos", credits: 5, prereqs: ["TS301"] }
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
                    { code: "DCP401", name: "Dinámica y Control de Procesos", credits: 5, prereqs: ["TM301"], coreqs: ["DRQ301"] },
                    { code: "LPQ401", name: "Laboratorio de Procesos Químicos", credits: 4, prereqs: ["TM301"], coreqs: ["DRQ301"] },
                    { code: "OS401", name: "Operaciones de Separación", credits: 5, prereqs: ["TM301"] },
                    { code: "SOP401", name: "Síntesis y Optimización de Procesos", credits: 5, prereqs: ["DRQ301"] },
                    { code: "TIN303", name: "Taller de Integración III", credits: 3, prereqs: ["DRQ301"] },
                    { code: "COM104", name: "Inglés Comunicativo IV", credits: 3, prereqs: ["COM103"] }
                ]
            },
            {
                semester: "8º Semestre",
                courses: [
                    { code: "PROJ501", name: "Proyecto I", credits: 5, prereqs: ["SOP401"] },
                    { code: "PROJ502", name: "Proyecto II", credits: 5, prereqs: ["PROJ501"] },
                    { code: "PP501", name: "Práctica Profesional", credits: 5, prereqs: [] },
                    { code: "MEM501", name: "Memoria de Título", credits: 20, prereqs: [{ type: "memoria" }] }
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
                    { code: "ELC901", name: "Electivo Profesional I", credits: 5, prereqs: [] },
                    { code: "ELC902", name: "Electivo Profesional II", credits: 5, prereqs: [] },
                    { code: "ELC903", name: "Electivo Profesional III", credits: 5, prereqs: [] }
                ]
            },
            {
                semester: "10º Semestre",
                courses: [
                    { code: "ELC904", name: "Electivo Profesional IV", credits: 5, prereqs: [] },
                    { code: "ELC905", name: "Electivo Profesional V", credits: 5, prereqs: [] },
                    { code: "ELC906", name: "Electivo Profesional VI", credits: 5, prereqs: [] }
                ]
            }
        ]
    },
    {
        year: "6º Año",
        semesters: [
            {
                semester: "11º Semestre",
                courses: [
                    { code: "MEM601", name: "Memoria de Título Avanzada", credits: 20, prereqs: [{ type: "memoria" }] }
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
        ${approvedCount}/${totalCourses} ramos aprobados<br>
        ${credits} créditos aprobados
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
