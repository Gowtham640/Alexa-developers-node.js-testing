//Part 1: Complex Data Structure

const university = {          //Declares the root object which is university
    departments: {            //Declaaration of the key
      department1: {          
        id: "d1",   
        name: "Computer Science",
        professors: [
          { id: "p1", name: "Ronaldo" },
          { id: "p2", name: "Messi" }
        ],
        students: [
          { id: "s1", name: "Neymar" },
          { id: "s2", name: "Mbappé" }
        ]
      },
      department2: {         //Individual departments are objects
        id: "d2",
        name: "Mathematics",
        professors: [
          { id: "p3", name: "Iniesta" },
          { id: "p4", name: "Xavi" }
        ],
        students: [
          { id: "s3", name: "Pedri" },
          { id: "s4", name: "Lewandowski" }
        ]
      }
    }
  };
  

//Part 2: CRUD Operations

//Function to add a new entry (department, professor, or student)
function addEntry(type, deptId, entry) {
    console.log(`Adding a new ${type} to ${deptId}`);
  
    if (!university.departments[deptId]) {      //checks if the department exists in the key departments
      console.error("Department not found.");
      return;
    }
  
    if (type === "professor") {
      university.departments[deptId].professors.push(entry);
    } else if (type === "student") {
      university.departments[deptId].students.push(entry);
    } else {
      console.error("Invalid entry type.");
    }
  }
  
  //Function to update an existing entry
  function updateEntry(type, deptId, entryId, newData) {
    console.log(`Updating ${type} ${entryId} in ${deptId}`);
  
    if (!university.departments[deptId]) {
      console.error("Department not found.");
      return;
    }
  
    const list = university.departments[deptId][type + "s"];
    const item = list.find((item) => item.id === entryId);
  
    if (item) {
      Object.assign(item, newData);     //assiggning new data to the item
      console.log("Update successful.");
    } else {
      console.error(`${type} not found.`);
    }
  }
  
  //Function to delete an entry
  function deleteEntry(type, deptId, entryId) {
    console.log(`Deleting ${type} ${entryId} from ${deptId}`);
  
    if (!university.departments[deptId]) {
      console.error("Department not found.");
      return;
    }
  
    const list = university.departments[deptId][type + "s"];
    const index = list.findIndex((item) => item.id === entryId);
  
    if (index > -1) {
      list.splice(index, 1);  //Deleting the item by removing it from the list
      console.log("Deletion successful.");
    } else {
      console.error(`${type} not found.`);
    }
  }
  
  // Function to search for entries
  function searchEntries(type, query) {
    console.log(`Searching for ${type} matching: ${query}`);
  
    const results = [];
  
    for (const dept of Object.values(university.departments)) {
      const list = dept[type + "s"];
      results.push(...list.filter((item) => item.name.includes(query)));  //Searching through departments to find items matching the query
    }
  
    console.log("Search Results:", results);
    return results;
  }
  
  //Part 3: Data Validation
  // Adding simple validation and error handling
  function validateEntry(entry, requiredFields) {
    console.log("Validating entry:", entry);
  
    for (const field of requiredFields) {
      if (!entry[field]) {
        console.error(`Validation failed: Missing field ${field}`);
        return false;
      }
    }
    console.log("Validation successful.");
    return true;
  }
  
  //Part 4: File Operations

  // Reading and writing the university data to a JSON file
  
  const fs = require("fs");  // Importing the file system module to interact with files
const filePath = "university.json";  

// Function to write data to a JSON file
function writeToFile() {
    try {
        fs.writeFileSync(filePath, JSON.stringify(university, null, 2)); 
        console.log("Write successful."); 
    } catch (error) {
        console.error("Error writing to file:", error);  //shows error message if the write operation fails
    }
}
  
  //Function to read data from a JSON file
  function readFromFile() {
    console.log("Reading data from file...");
  
    try {
      const data = fs.readFileSync(filePath, "utf8");
      console.log("Read successful.");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading from file:", error);
      return null;
    }
  }
  
  //Function to create a backup of the file
  function backupFile() {
    console.log("Creating a backup...");
  
    try {
      fs.copyFileSync(filePath, filePath + ".backup");
      console.log("Backup successful.");
    } catch (error) {
      console.error("Error creating backup:", error);
    }
  }
  addEntry("student", "department1", { id: "s5", name: "Hazard" });  //adding
  console.log(university.departments.department1.students); 
  updateEntry("student", "department1", "s5", { name: "Rooney" }); //updating
  console.log(university.departments.department1.students);
  deleteEntry("student", "department1", "s5");
  console.log(university.departments.department1.students); //logging
  searchEntries("professor", "Ronaldo");
  writeToFile();
  backupFile();
