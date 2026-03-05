// LAB-08: CONTACT MANAGER
// Week 2 Thursday - Data Structures Application

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Global data
let contacts = [];
let nextId = 1;

/**
 * Display main menu and get user choice
 */
function showMenu() {
  console.log("\n┌─────────────────────────────┐");
  console.log("│   📇 CONTACT MANAGER 📇     │");
  console.log("└─────────────────────────────┘");
  console.log("1. Add Contact");
  console.log("2. View All Contacts");
  console.log("3. Search by Name");
  console.log("4. Update Contact");
  console.log("5. Delete Contact");
  console.log("6. Exit");
  console.log("───────────────────────────────");
  
  readline.question("\nChoose option (1-6): ", handleMenuChoice);
}

/**
 * Handle user's menu selection
 * @param {string} choice - Menu option chosen
 */
function handleMenuChoice(choice) {
  switch(choice) {
    case '1':
      addContact();
      break;
    case '2':
      viewContacts();
      break;
    case '3':
      searchContacts();
      break;
    case '4':
      updateContact();
      break;
    case '5':
      deleteContact();
      break;
    case '6':
      console.log("\n👋 Goodbye!\n");
      readline.close();
      break;
    default:
      console.log("\n❌ Invalid choice! Please choose 1-6.");
      showMenu();
  }
}

/**
 * Add a new contact
 */
function addContact() {
  console.log("\n=== ADD NEW CONTACT ===");
  
  readline.question("Name: ", (name) => {
    if (!name.trim()) {
      console.log("❌ Name cannot be empty!");
      return showMenu();
    }
    
    readline.question("Email: ", (email) => {
      if (!email.trim()) {
        console.log("❌ Email cannot be empty!");
        return showMenu();
      }
      
      readline.question("Phone: ", (phone) => {
        if (!phone.trim()) {
          console.log("❌ Phone cannot be empty!");
          return showMenu();
        }
        
        // TODO: Create contact object with id, name, email, phone
        const newContact = {
          id: nextId,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim()
        };
        
        // TODO: Add to contacts array
        contacts.push(newContact);
        
        // TODO: Increment nextId
        nextId++;
        
        console.log(`\n✅ Contact added successfully! (ID: ${newContact.id})`);
        showMenu();
      });
    });
  });
}

/**
 * View all contacts
 */
function viewContacts() {
  console.log("\n=== ALL CONTACTS ===");
  
  // TODO: Check if contacts array is empty
  if (contacts.length === 0) {
    console.log("📭 No contacts yet. Add some!");
  } else {
    console.log(`\n📇 Total Contacts: ${contacts.length}\n`);
    
    // TODO: Loop through contacts and display each
    contacts.forEach(contact => {
      console.log(`┌─── Contact #${contact.id} ───┐`);
      console.log(`│ Name:  ${contact.name}`);
      console.log(`│ Email: ${contact.email}`);
      console.log(`│ Phone: ${contact.phone}`);
      console.log(`└─────────────────────┘\n`);
    });
  }
  
  showMenu();
}

/**
 * Search contacts by name
 */
function searchContacts() {
  console.log("\n=== SEARCH CONTACTS ===");
  
  readline.question("Enter name to search: ", (query) => {
    if (!query.trim()) {
      console.log("❌ Search query cannot be empty!");
      return showMenu();
    }
    
    // TODO: Filter contacts by name (case-insensitive partial match)
    const results = contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    
    // TODO: Display results
    if (results.length === 0) {
      console.log(`\n❌ No contacts found matching "${query}"`);
    } else {
      console.log(`\n🔍 Found ${results.length} contact(s):\n`);
      
      results.forEach(contact => {
        console.log(`┌─── Contact #${contact.id} ───┐`);
        console.log(`│ Name:  ${contact.name}`);
        console.log(`│ Email: ${contact.email}`);
        console.log(`│ Phone: ${contact.phone}`);
        console.log(`└─────────────────────┘\n`);
      });
    }
    
    showMenu();
  });
}

/**
 * Update an existing contact
 */
function updateContact() {
  console.log("\n=== UPDATE CONTACT ===");
  
  readline.question("Enter contact ID to update: ", (idStr) => {
    const id = parseInt(idStr);
    
    // TODO: Find contact by ID
    const contactIndex = contacts.findIndex(c => c.id === id);
    
    if (contactIndex === -1) {
      console.log(`\n❌ Contact with ID ${id} not found!`);
      return showMenu();
    }
    
    const contact = contacts[contactIndex];
    console.log(`\nUpdating: ${contact.name} (ID: ${id})`);
    
    // TODO: Get new values (keep old if empty)
    readline.question(`Name (current: ${contact.name}): `, (newName) => {
      readline.question(`Email (current: ${contact.email}): `, (newEmail) => {
        readline.question(`Phone (current: ${contact.phone}): `, (newPhone) => {
          
          // Update only if new value provided
          if (newName.trim()) contact.name = newName.trim();
          if (newEmail.trim()) contact.email = newEmail.trim();
          if (newPhone.trim()) contact.phone = newPhone.trim();
          
          console.log(`\n✅ Contact updated successfully!`);
          showMenu();
        });
      });
    });
  });
}

/**
 * Delete a contact
 */
function deleteContact() {
  console.log("\n=== DELETE CONTACT ===");
  
  readline.question("Enter contact ID to delete: ", (idStr) => {
    const id = parseInt(idStr);
    
    // TODO: Find contact by ID
    const contactIndex = contacts.findIndex(c => c.id === id);
    
    if (contactIndex === -1) {
      console.log(`\n❌ Contact with ID ${id} not found!`);
      return showMenu();
    }
    
    const contact = contacts[contactIndex];
    
    // Confirm deletion
    readline.question(`\n⚠️  Delete "${contact.name}"? (yes/no): `, (confirmation) => {
      if (confirmation.toLowerCase() === 'yes' || confirmation.toLowerCase() === 'y') {
        // TODO: Remove contact from array
        contacts.splice(contactIndex, 1);
        
        console.log(`\n✅ Contact deleted successfully!`);
      } else {
        console.log(`\n❌ Deletion cancelled.`);
      }
      
      showMenu();
    });
  });
}

// Start the application
console.log("\n✨ Welcome to Contact Manager! ✨");
showMenu();
