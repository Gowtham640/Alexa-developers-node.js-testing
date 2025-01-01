# Alexa Developers Node.js Testing

This repository is a demonstration of a simple university management system written in Node.js. The system includes basic functionalities like adding, updating, deleting, and searching for students and professors in different departments. Additionally, it supports file operations such as reading from and writing to a JSON file.

## Features

- **University Management**: A simple data structure representing departments, professors, and students.
- **CRUD Operations**: Functions to add, update, delete, and search for professors and students.
- **File Operations**: Read and write the university data to a JSON file and create backups.
- **Validation**: Basic validation of entries before adding them to the data structure.

## File Structure

/university.json // The file where university data is saved /app.js // Main script for CRUD operations and file management /README.md // Project documentation

bash
## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Gowtham640/Alexa-developers-node.js-testing.git
   cd Alexa-developers-node.js-testing

bash
npm install

## Adding an Entry
You can add a professor or a student to a department with the addEntry function. Example:
addEntry("student", "department1", { id: "s5", name: "Hazard" });

## Updating an Entry
To update an existing entry (like a student's name), use the updateEntry function:
updateEntry("student", "department1", "s5", { name: "Rooney" });

## Deleting an Entry
To delete an entry, use the deleteEntry function:
deleteEntry("student", "department1", "s5");

## Searching for Entries
You can search for entries (professors or students) by their name with the searchEntries function:
searchEntries("professor", "Ronaldo");

## File Operations
You can save and read the university data from a JSON file using writeToFile and readFromFile:
writeToFile(); 
readFromFile(); 
Creating a Backup
A backup of the JSON file can be created with the backupFile function:

backupFile();
