const STORAGE_KEY = "hospitalPatients";

let patients = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const form = document.getElementById("patientForm");

const patientId = document.getElementById("patientId");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const genderInput = document.getElementById("gender");
const phoneInput = document.getElementById("phone");
const doctorInput = document.getElementById("doctor");
const departmentInput = document.getElementById("department");
const dateInput = document.getElementById("date");
const addressInput = document.getElementById("address");

const tableBody = document.getElementById("patientTableBody");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");


// Form submit
form.addEventListener("submit", savePatient);


// Search
searchInput.addEventListener("input", displayPatients);


// CREATE / UPDATE
function savePatient(event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const gender = genderInput.value;
    const phone = phoneInput.value.trim();
    const doctor = doctorInput.value.trim();
    const department = departmentInput.value;
    const date = dateInput.value;
    const address = addressInput.value.trim();


    // Validation

    if (name.length < 2) {
        showMessage(
            "Please enter a valid patient name.",
            "error"
        );
        return;
    }


    if (age < 0 || age > 120 || !Number.isInteger(age)) {
        showMessage(
            "Please enter a valid age.",
            "error"
        );
        return;
    }


    if (!/^[0-9]{10}$/.test(phone)) {
        showMessage(
            "Phone number must contain exactly 10 digits.",
            "error"
        );
        return;
    }


    if (!date) {
        showMessage(
            "Please select an admission date.",
            "error"
        );
        return;
    }


    // Patient object

    const patientData = {

        name: name,
        age: age,
        gender: gender,
        phone: phone,
        doctor: doctor,
        department: department,
        date: date,
        address: address

    };


    // UPDATE existing patient

    if (patientId.value) {

        const index = patients.findIndex(
            patient => patient.id === Number(patientId.value)
        );


        if (index !== -1) {

            patients[index] = {

                ...patients[index],

                ...patientData

            };

            showMessage(
                "Patient details updated successfully.",
                "success"
            );
        }

    }

    // CREATE new patient

    else {

        const newPatient = {

            id: getNextId(),

            ...patientData

        };


        patients.push(newPatient);


        showMessage(
            "Patient added successfully.",
            "success"
        );

    }


    // Save data

    saveToStorage();

    displayPatients();

    updateStats();


    // Clear form after saving

    setTimeout(() => {

        resetForm();

    }, 700);

}



// Generate next patient ID

function getNextId() {

    if (patients.length === 0) {

        return 1;

    }


    return Math.max(
        ...patients.map(patient => patient.id)
    ) + 1;

}



// READ - Display patients

function displayPatients() {

    const searchTerm =
        searchInput.value.trim().toLowerCase();


    const filteredPatients = patients.filter(patient =>

        patient.name.toLowerCase().includes(searchTerm) ||

        patient.phone.includes(searchTerm) ||

        patient.doctor.toLowerCase().includes(searchTerm) ||

        patient.department.toLowerCase().includes(searchTerm)

    );


    tableBody.innerHTML = "";


    // No records

    if (filteredPatients.length === 0) {

        emptyState.style.display = "block";

        return;

    }


    emptyState.style.display = "none";


    // Display records

    filteredPatients.forEach(patient => {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${patient.id}</td>

            <td>
                <strong>
                    ${escapeHTML(patient.name)}
                </strong>
            </td>

            <td>
                ${patient.age}
            </td>

            <td>
                ${escapeHTML(patient.gender)}
            </td>

            <td>
                ${escapeHTML(patient.phone)}
            </td>

            <td>
                ${escapeHTML(patient.doctor)}
            </td>

            <td>
                ${escapeHTML(patient.department)}
            </td>

            <td>
                ${formatDate(patient.date)}
            </td>

            <td>

                <button
                    class="action-btn edit-btn"
                    onclick="editPatient(${patient.id})"
                >
                    Edit
                </button>


                <button
                    class="action-btn delete-btn"
                    onclick="deletePatient(${patient.id})"
                >
                    Delete
                </button>

            </td>

        `;


        tableBody.appendChild(row);

    });

}



// UPDATE - Edit patient

function editPatient(id) {

    const patient = patients.find(
        patient => patient.id === id
    );


    if (!patient) {

        return;

    }


    patientId.value = patient.id;

    nameInput.value = patient.name;

    ageInput.value = patient.age;

    genderInput.value = patient.gender;

    phoneInput.value = patient.phone;

    doctorInput.value = patient.doctor;

    departmentInput.value = patient.department;

    dateInput.value = patient.date;

    addressInput.value = patient.address;


    formTitle.textContent = "Update Patient";

    submitBtn.textContent = "Update Patient";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



// DELETE - Delete patient

function deletePatient(id) {

    const patient = patients.find(
        patient => patient.id === id
    );


    if (!patient) {

        return;

    }


    const confirmed = confirm(

        `Are you sure you want to delete the record of ${patient.name}?`

    );


    if (!confirmed) {

        return;

    }


    patients = patients.filter(
        patient => patient.id !== id
    );


    saveToStorage();

    displayPatients();

    updateStats();


    // Reset form if deleted patient was being edited

    if (Number(patientId.value) === id) {

        resetForm();

    }

}



// Clear form

function resetForm() {

    form.reset();

    patientId.value = "";

    formTitle.textContent = "Add Patient";

    submitBtn.textContent = "Add Patient";

    message.textContent = "";

    message.className = "message";

}



// Update statistics

function updateStats() {

    document.getElementById("totalPatients").textContent =
        patients.length;


    document.getElementById("malePatients").textContent =

        patients.filter(
            patient => patient.gender === "Male"
        ).length;


    document.getElementById("femalePatients").textContent =

        patients.filter(
            patient => patient.gender === "Female"
        ).length;

}



// Save data to LocalStorage

function saveToStorage() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(patients)
    );

}



// Show success/error message

function showMessage(text, type) {

    message.textContent = text;

    message.className = `message ${type}`;

}



// Format date

function formatDate(dateString) {

    if (!dateString) {

        return "";

    }


    const parts = dateString.split("-");


    return `${parts[2]}-${parts[1]}-${parts[0]}`;

}



// Security function

function escapeHTML(value) {

    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}



// Add sample patients on first launch

if (!localStorage.getItem(STORAGE_KEY)) {

    patients = [

        {

            id: 1,

            name: "Arun Kumar",

            age: 35,

            gender: "Male",

            phone: "9876543210",

            doctor: "Dr. Rajesh",

            department: "General Medicine",

            date: "2026-09-10",

            address: "Chennai, Tamil Nadu"

        },


        {

            id: 2,

            name: "Priya Devi",

            age: 28,

            gender: "Female",

            phone: "9123456780",

            doctor: "Dr. Meena",

            department: "Dermatology",

            date: "2026-09-12",

            address: "Coimbatore, Tamil Nadu"

        }

    ];


    saveToStorage();

}



// Load application

displayPatients();

updateStats();
