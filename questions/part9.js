const part9Questions = [
    // --- CHAPTER 1: INTRODUCTION TO CELIGO PLATFORM API ---
    {
        id: "p9_q1",
        type: "multiple-choice",
        question: "What formatting does the Celigo platform API use?",
        options: ["XML", "HTML", "JSON", "SQL"],
        correctAnswer: "JSON",
        explanation: "The Celigo API uses JSON (JavaScript Object Notation) formatting for all data requests and responses.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q2",
        type: "multiple-choice",
        question: "Which HTTP method is typically used to retrieve information?",
        options: ["POST", "GET", "PUT", "DELETE"],
        correctAnswer: "GET",
        explanation: "The GET method is used to retrieve or read data from a specific resource.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q3",
        type: "multiple-choice",
        question: "What type of authentication does the Celigo platform API use?",
        options: ["Basic", "Bearer token", "Custom", "WSSE"],
        correctAnswer: "Bearer token",
        explanation: "Authentication is handled via a Bearer token in the HTTP Authorization header.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q4",
        type: "multiple-choice",
        question: "Which is a valid reason to use the API?",
        options: ["To change the UI theme", "To trigger flows externally", "To create a new Celigo account", "To browse the marketplace"],
        correctAnswer: "To trigger flows externally",
        explanation: "The API allows external systems to programmatically trigger flows, run exports, or process imports.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q5",
        type: "multiple-choice",
        question: "Which HTTP method is used to remove a resource?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "DELETE",
        explanation: "The DELETE method is used to remove an existing resource from the platform.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q6",
        type: "multiple-choice",
        question: "What is the Base URI for an external system using North America servers?",
        options: ["https://integrator.io/api/", "https://api.integrator.io/v1/", "https://api.eu.integrator.io/v1/", "https://eu.integrator.io/api/"],
        correctAnswer: "https://api.integrator.io/v1/",
        explanation: "External systems in North America must use the 'api.' subdomain and 'v1' path.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q7",
        type: "short-answer",
        question: "In JSON, what specific character type is used to contain name/value pairs?",
        options: [],
        correctAnswer: ["curly brackets", "{}", "curly braces"],
        explanation: "JSON objects are wrapped in curly brackets {}.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q8",
        type: "multiple-select",
        question: "Which of these can be accessed via the API? Select all that apply.",
        options: ["Connections", "Flows", "Exports", "External UI Themes"],
        correctAnswer: ["Connections", "Flows", "Exports"],
        explanation: "Connections, Flows, and Exports are all accessible resources via endpoints. UI themes are not.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q9",
        type: "yes-no",
        question: "Does every API endpoint support all four HTTP methods (GET, POST, PUT, DELETE)?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Not every endpoint supports every method; some may only support GET or POST.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q10",
        type: "short-answer",
        question: "What does the 'R' in REST stand for?",
        options: [],
        correctAnswer: "Representational",
        explanation: "REST stands for Representational State Transfer.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },

    // --- CHAPTER 2: USING THE API ---
    {
        id: "p9_q11",
        type: "multiple-choice",
        question: "Who can access the Celigo platform API from a web browser?",
        options: ["Administrators", "Account Owners", "All Users", "External Partners only"],
        correctAnswer: "Account Owners",
        explanation: "Only Account Owners have the necessary permissions to access API endpoints directly via a browser.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q12",
        type: "multiple-choice",
        question: "Where is the Resource ID located in the Celigo platform?",
        options: ["In the user profile", "At the end of the URL in the browser", "In the Settings menu", "On the dashboard"],
        correctAnswer: "At the end of the URL in the browser",
        explanation: "The Resource ID is the string of characters at the end of the URL when viewing a resource in the UI.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q13",
        type: "multiple-choice",
        question: "What three items are needed for a browser-based API call?",
        options: ["Base URI, Relative URI, Resource ID", "Username, Password, API Token", "Base URI, Resource ID, JSON format", "Relative URI, Bearer Token, Scope"],
        correctAnswer: "Base URI, Relative URI, Resource ID",
        explanation: "The combination of the browser Base URI, the specific Relative URI, and the Resource ID forms the complete request URL.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q14",
        type: "multiple-choice",
        question: "Who can create API tokens?",
        options: ["All users", "Only Account Owners", "Account Owners and Administrators", "Only External Systems"],
        correctAnswer: "Account Owners and Administrators",
        explanation: "Both Account Owners and users with Administrative roles can manage API tokens.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q15",
        type: "short-answer",
        question: "What is the maximum number of days for an 'Auto-purge token' setting?",
        options: [],
        correctAnswer: "30",
        explanation: "Auto-purge settings range from 'never' up to a maximum of 30 days.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q16",
        type: "multiple-choice",
        question: "Which Base URI is correct for a browser in the EU region?",
        options: ["https://eu.integrator.io/api/", "https://api.eu.integrator.io/v1/", "https://integrator.io/api/", "https://api.integrator.io/v1/"],
        correctAnswer: "https://eu.integrator.io/api/",
        explanation: "Browser-based calls in the EU use the 'eu.' prefix and end in '/api/'.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q17",
        type: "yes-no",
        question: "If an API token has 'Custom scope', can it perform CRUD operations for connections?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Custom scope restricts CRUD operations for connections, exports, and imports.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q18",
        type: "multiple-choice",
        question: "When making an API request from an external system, when does the call execute?",
        options: ["After 24 hours", "Only after admin approval", "Immediately (as per queue)", "Every Monday morning"],
        correctAnswer: "Immediately (as per queue)",
        explanation: "API calls are placed in a queue and executed as quickly as possible.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q19",
        type: "matching",
        question: "Match the API call components to their definitions:",
        rows: [
            { id: 1, text: "Base URI", correct: "Starts the URL (e.g., integrator.io/api/)" },
            { id: 2, text: "Relative URI", correct: "Identifies resource type (e.g., /flows)" },
            { id: 3, text: "Resource ID", correct: "Identifies specific instance (e.g., 6046...)" }
        ],
        options: ["Starts the URL (e.g., integrator.io/api/)", "Identifies resource type (e.g., /flows)", "Identifies specific instance (e.g., 6046...)", "Security key"],
        explanation: "Base URI is the foundation, Relative URI is the type, and Resource ID is the specific item.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q20",
        type: "multiple-choice",
        question: "What tool is mentioned as an example for making external API calls?",
        options: ["Excel", "Postman", "Slack", "Salesforce"],
        correctAnswer: "Postman",
        explanation: "Postman is specifically highlighted as a tool used to test and execute API calls to Celigo.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    // CHAPTER 1: PLAYGROUND
    {
        id: "p9_q21",
        type: "multiple-choice",
        question: "Where is the Playground located in the Celigo platform?",
        options: ["Home", "Dashboard", "Tools", "Marketplace"],
        correctAnswer: "Tools",
        explanation: "Playground is located under the 'Tools' menu in the main navigation.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q22",
        type: "multiple-choice",
        question: "What is the primary purpose of the Playground?",
        options: [
            "To run production flows",
            "To experiment outside of an active flow",
            "To store historical data",
            "To manage user permissions"
        ],
        correctAnswer: "To experiment outside of an active flow",
        explanation: "Playground provides a safe environment to test queries and transformations without affecting live flows.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q23",
        type: "yes-no",
        question: "Does Playground automatically save your work?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Data in Playground is NOT saved; you must copy it elsewhere for future use.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q24",
        type: "multiple-choice",
        question: "Which section lists the various Advanced Field Editors?",
        options: ["Integration explorer", "Flow builder", "Editor examples", "Dashboard"],
        correctAnswer: "Editor examples",
        explanation: "The 'Editor examples' section contains a list of the 9 different Advanced Field Editors.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q25",
        type: "multiple-choice",
        question: "What is the main function of the Integration explorer in Playground?",
        options: [
            "To delete integrations",
            "To access and copy data from existing flows",
            "To create new connections",
            "To schedule flows"
        ],
        correctAnswer: "To access and copy data from existing flows",
        explanation: "Integration explorer allows you to quickly pull data from live integrations to use as test data.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q26",
        type: "multiple-choice",
        question: "Which of these functions CANNOT be tested in Playground?",
        options: [
            "SQL queries",
            "Handlebars expressions",
            "Deleting a live database",
            "JavaScript Scripting"
        ],
        correctAnswer: "Deleting a live database",
        explanation: "Playground is for testing templates and logic, not for direct database management or production execution.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q27",
        type: "multiple-choice",
        question: "In the context of Celigo, what is a 'payload'?",
        options: [
            "A type of error",
            "Structured data moving through a flow",
            "A license type",
            "A user role"
        ],
        correctAnswer: "Structured data moving through a flow",
        explanation: "A payload is the structured data (usually JSON) that is processed at each step of a flow.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q28",
        type: "yes-no",
        question: "True or False: You can ONLY use sample data in Playground.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "While sample data is provided, you can use Integration explorer to bring in your own data from real flows.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q29",
        type: "multiple-choice",
        question: "Where can AFEs be found besides the Playground?",
        options: [
            "Nowhere",
            "In specific fields within exports or lookups",
            "Only in the Error folder",
            "In the Billing section"
        ],
        correctAnswer: "In specific fields within exports or lookups",
        explanation: "AFEs are integrated throughout the platform where dynamic data mapping is required.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q30",
        type: "multiple-choice",
        question: "How do line numbers in Playground editors help users?",
        options: [
            "They show the price",
            "They help identify precise parts of complex payloads",
            "They count the number of flows",
            "They indicate the time"
        ],
        correctAnswer: "They help identify precise parts of complex payloads",
        explanation: "Line numbers allow developers to pinpoint exactly where data or errors exist in a large JSON structure.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },

    // CHAPTER 2: ADVANCED FIELD EDITORS (AFEs)
    {
        id: "p9_q31",
        type: "multiple-choice",
        question: "Which AFE converts CSV files into JSON?",
        options: ["XML parser helper", "CSV parser helper", "Form builder", "Filter editor"],
        correctAnswer: "CSV parser helper",
        explanation: "The CSV parser is used to transform flat CSV data into the JSON format required by Celigo.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q32",
        type: "multiple-choice",
        question: "How do you trigger the auto-suggestion menu in a Handlebars editor?",
        options: ["Typing $$", "Pressing Alt + F4", "Typing {{ or Ctrl + Space", "Right-clicking"],
        correctAnswer: "Typing {{ or Ctrl + Space",
        explanation: "Typing double curly braces or using Ctrl+Space brings up the dynamic field selection menu.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q33",
        type: "multiple-choice",
        question: "Which layout option is NOT available for most AFEs?",
        options: ["One-column", "Two-column", "Three-column", "Four-column"],
        correctAnswer: "Four-column",
        explanation: "AFEs support 1, 2, or 3 column layouts for side-by-side comparison/editing.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q34",
        type: "multiple-choice",
        question: "The Transform 2.0 editor is specifically useful for:",
        options: [
            "Simple CSV parsing",
            "Complex transformations and nested arrays",
            "Creating SQL tables",
            "Sending emails"
        ],
        correctAnswer: "Complex transformations and nested arrays",
        explanation: "Transform 2.0 is designed for advanced JSON manipulation, especially with arrays and objects.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q35",
        type: "multiple-choice",
        question: "Which AFE allows you to run JavaScript in a secure environment?",
        options: ["Handlebars editor", "Script editor", "SQL query builder", "Filter editor"],
        correctAnswer: "Script editor",
        explanation: "The Script editor provides a secure runtime to execute custom JavaScript logic.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q36",
        type: "multiple-choice",
        question: "In the Filter editor, how many conditional operators are typically available?",
        options: ["5", "10", "13", "20"],
        correctAnswer: "13",
        explanation: "There are 13 operators such as 'equals', 'contains', 'is empty', etc.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q37",
        type: "multiple-choice",
        question: "What is the 'extract-generate pair' used for?",
        options: [
            "To delete data",
            "To map a source field to a new output field name",
            "To encrypt files",
            "To merge two flows"
        ],
        correctAnswer: "To map a source field to a new output field name",
        explanation: "Extract defines the source field; Generate defines the destination field name in the output.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q38",
        type: "multiple-choice",
        question: "Which helper would you use to calculate the average of numeric values?",
        options: ["{{add}}", "{{avg}}", "{{sum}}", "{{count}}"],
        correctAnswer: "{{avg}}",
        explanation: "The {{avg}} helper is specifically designed to calculate the mathematical average.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q39",
        type: "multiple-choice",
        question: "What does the 'Expand/Collapse' toggle do in a JSON payload?",
        options: [
            "It deletes the data",
            "It hides or shows nested objects to reduce visual clutter",
            "It changes the data format",
            "It sends the data to a server"
        ],
        correctAnswer: "It hides or shows nested objects to reduce visual clutter",
        explanation: "This feature helps navigate complex JSON structures by folding parts you don't need to see.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q40",
        type: "multiple-choice",
        question: "Where is the CSV generator helper found?",
        options: [
            "In the Playground",
            "Under the FTP transfer import step",
            "In the Dashboard",
            "Only in Level 1 courses"
        ],
        correctAnswer: "Under the FTP transfer import step",
        explanation: "The CSV generator is an exception and is located within the FTP import process, not the general Playground.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    // --- CHAPTER: HOOKS ---
    {
        id: "p9_q41",
        type: "multiple-choice",
        question: "What is the primary purpose of a Hook in Celigo?",
        options: [
            "To connect to a database",
            "To run custom code at specific points in a flow",
            "To schedule a flow",
            "To delete mapping records"
        ],
        correctAnswer: "To run custom code at specific points in a flow",
        explanation: "Hooks allow developers to extend the platform's functionality by executing JavaScript at predefined stages.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q42",
        type: "multiple-choice",
        question: "Which Hook type is best suited for formatting data specifically needed for mapping?",
        options: ["postSubmit", "postMap", "preMap", "postResponseMap"],
        correctAnswer: "preMap",
        explanation: "preMap runs before the mapping logic, allowing you to prepare or clean data.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q43",
        type: "multiple-choice",
        question: "Which window in the Script Editor contains the example data for testing?",
        options: ["Script body", "Function output", "Function input", "Mapping window"],
        correctAnswer: "Function input",
        explanation: "The Function Input window provides the mock data context to test your script.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q44",
        type: "yes-no",
        question: "True or False: JavaScript hooks can be used to perform data comparisons and calculations.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Hooks are ideal for logic that requires calculations or complex transformations.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q45",
        type: "multiple-choice",
        question: "Which Hook is commonly used to provide more clear error messages from the target system?",
        options: ["preSave", "postSubmit", "postMap", "preMap"],
        correctAnswer: "postSubmit",
        explanation: "postSubmit intercepts the response from the target, making it perfect for error handling.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q46",
        type: "multiple-choice",
        question: "What does the 'Function Output' window show?",
        options: [
            "The original source data",
            "Error logs only",
            "The newly transformed data after preview",
            "The target system API documentation"
        ],
        correctAnswer: "The newly transformed data after preview",
        explanation: "It shows the result of your code applied to the input data.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q47",
        type: "multiple-choice",
        question: "Which Hook would you use to sum up discounts after data has been mapped?",
        options: ["preMap", "postMap", "postSubmit", "preSave"],
        correctAnswer: "postMap",
        explanation: "postMap is used when you need to act on data that has already gone through the mapping rules.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q48",
        type: "multiple-choice",
        question: "In the Script Editor, what is the 'Script/Function body'?",
        options: [
            "The place to view the final output",
            "The area where you enter custom code to manipulate data",
            "The section for selecting API endpoints",
            "The documentation section"
        ],
        correctAnswer: "The area where you enter custom code to manipulate data",
        explanation: "This is the main coding area where JavaScript is written.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q49",
        type: "multiple-choice",
        question: "Which of the following is NOT a valid JavaScript Hook type?",
        options: ["postMap", "preSavePage", "postDeleteFlow", "postAggregate"],
        correctAnswer: "postDeleteFlow",
        explanation: "postDeleteFlow is not a standard integration hook in integrator.io.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q50",
        type: "multiple-choice",
        question: "What is a 'Function Stub' in the context of Hooks?",
        options: [
            "A type of error",
            "Starter code provided by integrator.io to help you begin",
            "A completed integration template",
            "A mapping rule"
        ],
        correctAnswer: "Starter code provided by integrator.io to help you begin",
        explanation: "Stubs provide the function signature and boilerplate code.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- CHAPTER: HANDLEBARS ---
    {
        id: "p9_q51",
        type: "multiple-choice",
        question: "Where can Handlebars be used within the Celigo platform?",
        options: [
            "Only in Export",
            "Only in Import",
            "Mappings, Request Bodies, and Request Parameters",
            "Global Settings"
        ],
        correctAnswer: "Mappings, Request Bodies, and Request Parameters",
        explanation: "Handlebars are versatile and used across various flow configurations.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q52",
        type: "short-answer",
        question: "Which symbol precedes a Block Helper? (Answer with the symbol)",
        options: [],
        correctAnswer: "#",
        explanation: "Block helpers like #each or #if always start with a hash.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q53",
        type: "multiple-choice",
        question: "Which Handlebar helper type is commonly used for data manipulation like adding or multiplying values?",
        options: ["Block Helper", "Data Variable", "Custom Helper", "Function Helper"],
        correctAnswer: "Custom Helper",
        explanation: "Custom helpers perform logic on data values directly.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q54",
        type: "multiple-choice",
        question: "What is the purpose of the {{#each}} helper?",
        options: [
            "To count characters",
            "To iterate over a list/array",
            "To capitalize every word",
            "To delete duplicate records"
        ],
        correctAnswer: "To iterate over a list/array",
        explanation: "The #each helper loops through an array and renders the block for each item.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q55",
        type: "short-answer",
        question: "Which symbol is used for Data Variables (like accessing the first element of an array)?",
        options: [],
        correctAnswer: "@",
        explanation: "Variables like @first or @index use the @ prefix.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q56",
        type: "multiple-choice",
        question: "How can you test a Handlebar statement in Celigo?",
        options: [
            "By running the full integration flow",
            "By using the Developer Playground",
            "By contacting support",
            "It cannot be tested before running"
        ],
        correctAnswer: "By using the Developer Playground",
        explanation: "The Playground allows real-time testing of Handlebar syntax.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q57",
        type: "multiple-choice",
        question: "What does the {{multiply '5' '2'}} helper return?",
        options: ["52", "7", "10", "3"],
        correctAnswer: "10",
        explanation: "The multiply helper calculates the product of two numbers.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q58",
        type: "multiple-choice",
        question: "Which helper would you use to check if multiple parameters are true?",
        options: ["#each", "#and", "@first", "join"],
        correctAnswer: "#and",
        explanation: "#and is a logical block helper for conjunctions.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q59",
        type: "yes-no",
        question: "True or False: Block Helpers can be used to implement functionality that is NOT part of the standard Handlebars language.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Celigo provides custom block helpers beyond standard Handlebars.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q60",
        type: "short-answer",
        question: "Which Data Variable returns true for the first element of an array?",
        options: [],
        correctAnswer: ["@first"],
        explanation: "@first is a boolean variable that is true for the first item in an iteration.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q61",
        type: "multiple-choice",
        question: "What was the JavaScript API tool formerly named?",
        options: ["My API", "Custom Connector", "Script Builder", "Webhook Pro"],
        correctAnswer: "My API",
        explanation: "As noted in the course introduction, the tool was previously referred to as 'My API'.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q62",
        type: "multiple-choice",
        question: "Which resource supports returning a response in XML format?",
        options: ["Celigo Platform API", "Webhooks", "JavaScript API", "All of the above"],
        correctAnswer: "JavaScript API",
        explanation: "JavaScript APIs support any data format (JSON, XML, etc.), while the Platform API is limited to JSON.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q63",
        type: "multiple-choice",
        question: "What is the primary difference between a Script and a Stack in Celigo?",
        options: [
            "Scripts are only for flows; Stacks are for exports.",
            "Scripts are hosted on Celigo servers; Stacks are hosted on your own server or AWS.",
            "Scripts support any language; Stacks only support JavaScript.",
            "There is no difference."
        ],
        correctAnswer: "Scripts are hosted on Celigo servers; Stacks are hosted on your own server or AWS.",
        explanation: "Scripts run internally on Celigo infra, while Stacks allow you to host code externally.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q64",
        type: "multiple-choice",
        question: "To create a JavaScript API resource, what user permission is required?",
        options: ["Any user with a login", "Only external developers", "Account owner or administrator", "Read-only access"],
        correctAnswer: "Account owner or administrator",
        explanation: "Developer tools require high-level administrative privileges.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q65",
        type: "multiple-choice",
        question: "Which of the following is NOT required to be selected when creating a JavaScript API resource?",
        options: ["Name", "Script", "Function", "Connection"],
        correctAnswer: "Connection",
        explanation: "Creating a JS API requires a name, script, and function stub, but not a specific Connection resource.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q66",
        type: "multiple-choice",
        question: "Where is the unique URL for a JavaScript API resource found?",
        options: ["In the user's Profile", "In the Edit API window (Invoke field)", "On the Celigo homepage", "In the Connections menu"],
        correctAnswer: "In the Edit API window (Invoke field)",
        explanation: "The 'Invoke' field displays the endpoint URL once the resource is saved.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q67",
        type: "multiple-choice",
        question: "Why are JavaScript API calls described as being 'outside' the platform regarding error management?",
        options: [
            "They don't update the dashboard or logs automatically.",
            "They run on a separate physical server.",
            "They cannot be seen by admins.",
            "They bypass all security."
        ],
        correctAnswer: "They don't update the dashboard or logs automatically.",
        explanation: "Because these are custom endpoints, errors must be handled within the script; they don't automatically populate standard flow error logs.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q68",
        type: "multiple-choice",
        question: "What two items are needed for an external application to call a JavaScript API?",
        options: [
            "Password and Username",
            "Script ID and Function Name",
            "Endpoint URL and Authentication Token",
            "IP Address and Port Number"
        ],
        correctAnswer: "Endpoint URL and Authentication Token",
        explanation: "You need the specific address (URL) and the permission key (Token).",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q69",
        type: "yes-no",
        question: "Does a virtual export/import appear in your Celigo account as a reusable resource?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Virtual resources only exist in memory during execution and cannot be reused or viewed in the standard UI.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q70",
        type: "multiple-choice",
        question: "What type of request does a JavaScript API use?",
        options: ["Asynchronous", "Synchronous", "One-way only", "Periodic"],
        correctAnswer: "Synchronous",
        explanation: "JavaScript APIs wait for a response after being called, making them synchronous.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q71",
        type: "multiple-choice",
        question: "Which FTP protocol is considered the most secure and recommended by Celigo?",
        options: ["FTP", "SFTP", "FTPS", "HTTP"],
        correctAnswer: "SFTP",
        explanation: "SFTP is the most secure version because it uses SSH for data transfer.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q72",
        type: "multiple-choice",
        question: "Which port is typically used for SFTP connections?",
        options: ["21", "22", "80", "443"],
        correctAnswer: "22",
        explanation: "SFTP typically uses port 22 by default.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q73",
        type: "multiple-choice",
        question: "What happens by default after a file is successfully transferred through a Celigo FTP export?",
        options: ["It is renamed", "It is moved to a backup folder", "It is automatically deleted from the server", "It remains on the server unchanged"],
        correctAnswer: "It is automatically deleted from the server",
        explanation: "Default behavior is to automatically delete files after export unless specified otherwise.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q74",
        type: "yes-no",
        question: "PGP encryption keys can be generated directly within the Celigo platform.",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "PGP keys must be generated using 3rd-party tools outside of Celigo.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q75",
        type: "multiple-choice",
        question: "Which setting should be used if a file needs to be transferred without any changes to its format?",
        options: ["Parse file", "Do not parse file", "Use Handlebars", "Convert to JSON"],
        correctAnswer: "Do not parse file",
        explanation: "Selecting 'No' for parsing (Do not parse) keeps the file 'as-is'.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q76",
        type: "multiple-choice",
        question: "What is the benefit of using 'Passive Mode' in FTP connections?",
        options: ["It is faster", "It is more secure as all connections originate from the client", "It allows for larger file sizes", "It does not require a username"],
        correctAnswer: "It is more secure as all connections originate from the client",
        explanation: "Passive mode is more secure because both data and control connections are initiated by the client.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q77",
        type: "multiple-choice",
        question: "When is whitelisting Celigo's IP addresses required?",
        options: ["Always", "Only for SFTP", "When the FTP server is behind a firewall", "Only when using PGP encryption"],
        correctAnswer: "When the FTP server is behind a firewall",
        explanation: "Whitelisting is required to allow Celigo traffic through the server's firewall.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q78",
        type: "multiple-choice",
        question: "Which field determines if an export retrieves the whole file or individual records?",
        options: ["FileType", "Connection", "Parse files being transferred", "Directory path"],
        correctAnswer: "Parse files being transferred",
        explanation: "'Parse files' determines if Celigo breaks the file into individual records.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q79",
        type: "multiple-choice",
        question: "How can you dynamically name a file in an FTP Import?",
        options: ["Using the SQL editor", "Using Handlebars expressions", "It is not possible to rename files", "By uploading a sample file"],
        correctAnswer: "Using Handlebars expressions",
        explanation: "Handlebars allow for dynamic naming, such as adding timestamps.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors", "Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q80",
        type: "multiple-choice",
        question: "What is the maximum size for 'Mock Output' data in an FTP export?",
        options: ["1 MB", "5 MB", "10 MB", "Unlimited"],
        correctAnswer: "1 MB",
        explanation: "Mock data in the preview cannot exceed 1 MB.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q81",
        type: "multiple-choice",
        question: "What is required to connect to a database that is NOT publicly accessible?",
        options: ["A dedicated URI", "An On-premise Agent or whitelisting", "A SELECT query", "PGP encryption"],
        correctAnswer: "An On-premise Agent or whitelisting",
        explanation: "An On-premise Agent or IP whitelisting is needed for private databases.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q82",
        type: "multiple-choice",
        question: "Which SQL command is primarily used for Database Exports?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correctAnswer: "SELECT",
        explanation: "SELECT is used to retrieve data from the database.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q83",
        type: "multiple-choice",
        question: "Which export type requires an additional SQL query to mark records as 'exported'?",
        options: ["All", "Delta", "Once", "Limit"],
        correctAnswer: "Once",
        explanation: "'Once' export needs a query to update a flag to prevent re-exporting.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q84",
        type: "multiple-choice",
        question: "What is the recommended query type for importing data quickly into a database?",
        options: ["SQL query per record", "Bulk insert SQL query", "Delta query", "SQL query per page"],
        correctAnswer: "Bulk insert SQL query",
        explanation: "Bulk insert is the fastest method for importing large volumes of data.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q85",
        type: "multiple-choice",
        question: "What does the 'Concurrency ID lock template' prevent?",
        options: ["SQL syntax errors", "Unauthorized access", "Duplicate records during simultaneous requests", "Connection timeouts"],
        correctAnswer: "Duplicate records during simultaneous requests",
        explanation: "It prevents duplicates when multiple requests hit the server at the same time.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q86",
        type: "yes-no",
        question: "All database connections require both a username and a password.",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Some databases may use other authentication methods.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q87",
        type: "multiple-choice",
        question: "The 'Delta' export type retrieves records based on what?",
        options: ["All records in the table", "A fixed limit of 100 records", "Changes since the last export run", "Records marked with a 'Once' flag"],
        correctAnswer: "Changes since the last export run",
        explanation: "Delta exports only modified or new data since the last execution.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q88",
        type: "multiple-choice",
        question: "Which setting allows a connection to share concurrency limits with another connection?",
        options: ["Auto-recover rate limit errors", "Borrow concurrency from", "Batch size", "Concurrency level"],
        correctAnswer: "Borrow concurrency from",
        explanation: "This setting allows sharing concurrency limits between connections.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q89",
        type: "multiple-choice",
        question: "What happens during 'Auto-recover rate limit errors'?",
        options: ["The connection is closed immediately", "Celigo retries with a delay that doubles after each try", "An error email is sent to the admin", "The concurrency is reduced to zero"],
        correctAnswer: "Celigo retries with a delay that doubles after each try",
        explanation: "Celigo uses exponential backoff to retry connections.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q90",
        type: "multiple-choice",
        question: "Which SQL query type in an Import checks for an existing record before deciding to create or change it?",
        options: ["Insert", "Update", "Insert or Update", "Bulk Insert"],
        correctAnswer: "Insert or Update",
        explanation: "Insert or Update checks for presence before acting.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    }
];