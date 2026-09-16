# Hospital Management System

## 1. Project Overview

The **Hospital Management System** is a simple web-based application developed to manage patient records efficiently. It allows users to add, view, update, delete, and search patient information through an easy-to-use interface.

This project demonstrates the basic concepts of **CRUD (Create, Read, Update, Delete)** operations using HTML, CSS, and JavaScript.

---

## 2. Objective

The main objective of this project is to develop a simple Hospital Management System that can:

* Store patient information
* Display patient records
* Update patient details
* Delete patient records
* Search for patients
* Validate user input
* Store data using browser LocalStorage

---

## 3. Features

### Patient Management

* Add new patient records
* View all patient records
* Edit existing patient information
* Delete patient records
* Search patients

### Patient Information

The system stores:

* Patient ID
* Patient Name
* Age
* Gender
* Phone Number
* Doctor Name
* Department
* Admission Date
* Address

### Dashboard

The application displays:

* Total number of patients
* Number of male patients
* Number of female patients

---

## 4. Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Data Storage

* Browser LocalStorage

### Development Tool

* Visual Studio Code

### Testing

* Web Browser
* Live Server

---

## 5. CRUD Operations

### Create

Users can enter patient details through the registration form and add a new patient.

### Read

All saved patient records are displayed in the Patient Records table.

### Update

Users can click the **Edit** button to modify an existing patient's information.

### Delete

Users can click the **Delete** button to remove a patient record after confirmation.

---

## 6. Project Structure

```text
hospital-management-system/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Contains the structure and user interface of the Hospital Management System.

### style.css

Contains the styling, layout, buttons, forms, tables, and responsive design.

### script.js

Contains the CRUD operations, validation, search functionality, statistics, and LocalStorage operations.

### README.md

Contains the project documentation and instructions.

---

## 7. How to Run the Project

### Step 1

Download or create the project folder.

### Step 2

Open the project folder in **Visual Studio Code**.

### Step 3

Make sure the following files are present:

```text
index.html
style.css
script.js
```

### Step 4

Open `index.html`.

### Step 5

Right-click inside the HTML file.

### Step 6

Select:

**Open with Live Server**

### Step 7

The Hospital Management System will open in your web browser.

---

## 8. How to Use the Application

### Add Patient

1. Enter the patient's name.
2. Enter age.
3. Select gender.
4. Enter phone number.
5. Enter doctor name.
6. Select department.
7. Select admission date.
8. Enter address.
9. Click **Add Patient**.

### Edit Patient

1. Find the patient in the Patient Records table.
2. Click **Edit**.
3. Modify the required information.
4. Click **Update Patient**.

### Delete Patient

1. Find the patient record.
2. Click **Delete**.
3. Confirm the deletion.

### Search Patient

Enter the patient's:

* Name
* Phone number
* Doctor name
* Department

in the search box.

---

## 9. Data Storage

This project uses **Browser LocalStorage** to store patient records.

This means the data can remain available after refreshing the page in the same browser.

No separate database server is required for this simple version.

---

## 10. Validation

The application performs basic input validation.

Examples:

* Patient name must be entered.
* Age must be between 0 and 120.
* Phone number must contain 10 digits.
* Gender must be selected.
* Department must be selected.
* Admission date must be entered.
* Address must be entered.

---

## 11. Testing

The following functions can be tested:

| Test Case                  | Expected Result                |
| -------------------------- | ------------------------------ |
| Add valid patient          | Patient is added               |
| Submit empty form          | Validation message appears     |
| Enter invalid phone number | Error message appears          |
| Edit patient               | Patient details are updated    |
| Delete patient             | Patient record is removed      |
| Search patient             | Matching records are displayed |
| Refresh page               | Saved records remain available |

---

## 12. Advantages

* Simple and easy to use
* Beginner-friendly project
* No server installation required
* Fast patient record management
* Responsive design
* Demonstrates CRUD operations
* Uses LocalStorage for data persistence

---

## 13. Limitations

* Data is stored only in the browser.
* It does not use a real hospital database.
* There is no user login system.
* It is intended for educational purposes.
* It is not designed for handling real patient medical information.

---

## 14. Future Enhancements

The project can be extended by adding:

* User login and authentication
* Doctor management
* Appointment scheduling
* Patient medical history
* Billing management
* Prescription management
* Real database integration
* Backend REST API
* Admin dashboard
* Cloud deployment

---

## 15. Conclusion

The **Hospital Management System** is a simple CRUD-based web application that demonstrates how HTML, CSS, and JavaScript can be used to build a functional patient management system.

The project provides basic patient record management through Create, Read, Update, and Delete operations and stores the records using browser LocalStorage.

It is suitable as a beginner-level academic mini project for understanding the fundamentals of web application development.

link:https://karishma305.github.io/hospital-management-system/
