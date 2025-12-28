const part5Questions = [
    // --- SECTION 1: CELIGO BASICS ---
    {
        id: "p5_q1",
        type: "multiple-choice",
        question: "In the context of Celigo, what is the definition of a 'flow'?",
        options: ["A static database of records", "A stream of data moving between two or more endpoints", "A folder that holds multiple integrations", "A type of JavaScript API"],
        correctAnswer: "A stream of data moving between two or more endpoints",
        explanation: "A flow is defined as a stream of data between two or more endpoints (Source Application to Destination Application).",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components", "Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
    },
    {
        id: "p5_q2",
        type: "multiple-choice",
        question: "What must you create first to legally authenticate and authorize access to an endpoint in a flow?",
        options: ["An export", "A lookup", "A connection", "A script"],
        correctAnswer: "A connection",
        explanation: "To use an endpoint in a flow, you need to create a connection to it, which handles authentication and authorization.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs", "Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p5_q3",
        type: "matching",
        question: "Match the term to its correct definition:",
        rows: [
            { id: 1, text: "Criteria for pulling data FROM a source", correct: "Export" },
            { id: 2, text: "Criteria for pushing data INTO a destination", correct: "Import" },
            { id: 3, text: "Retrieves data to attach to an existing record", correct: "Lookup" },
            { id: 4, text: "Holds one or more flows", correct: "Integration" }
        ],
        options: ["Export", "Import", "Lookup", "Integration"],
        explanation: "Exports pull data, Imports push data, Lookups retrieve auxiliary data, and Integrations are containers for flows.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder", "Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p5_q4",
        type: "yes-no",
        question: "If you modify a reusable component (like a Connection or Export) that is used in multiple flows, does that change apply to all flows using it?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "When a component is used in multiple flows, making a change to that object in any of its uses updates it everywhere. It is recommended to create new components for each flow to avoid side effects.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p5_q5",
        type: "multiple-select",
        question: "Which of the following are considered basic flow components? (Select 2)",
        options: ["Exports", "Browsers", "Lookups", "Variables"],
        correctAnswer: ["Exports", "Lookups"],
        explanation: "The list of basic flow components includes Connections, Exports, Imports, and Lookups.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },

    // --- SECTION 2: INTRO TO APIs ---
    {
        id: "p5_q6",
        type: "short-answer",
        question: "What does the acronym API stand for?",
        options: [], 
        correctAnswer: "Application Programming Interface",
        explanation: "API stands for Application Programming Interface. It is the method used to communicate with systems.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p5_q7",
        type: "matching",
        question: "Match the HTTP Method to its action:",
        rows: [
            { id: 1, text: "Retrieve information", correct: "GET" },
            { id: 2, text: "Create a new resource", correct: "POST" },
            { id: 3, text: "Update/Replace a resource completely", correct: "PUT" },
            { id: 4, text: "Modify a resource without replacing the whole entry", correct: "PATCH" }
        ],
        options: ["GET", "POST", "PUT", "PATCH"],
        explanation: "GET retrieves, POST creates, PUT replaces/updates, and PATCH modifies specific fields.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
     {
        id: "p5_q8",
        type: "multiple-choice",
        question: "Which HTTP method is used to remove a resource or record?",
        options: ["REMOVE", "DELETE", "discard", "UNLINK"],
        correctAnswer: "DELETE",
        explanation: "The DELETE method removes a resource/record from the server.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },

    // --- SECTION 3: TOOLS & RESOURCES ---
    {
        id: "p5_q9",
        type: "multiple-choice",
        question: "Which tool in the Tools menu allows you to import CSV, JSON, or XML files directly into a REST application without creating a permanent flow source?",
        options: ["Playground", "Data Loader", "API Builder", "Reports"],
        correctAnswer: "Data Loader",
        explanation: "Data Loader is used for importing CSV, JSON, XLSX, and XML files into applications like NetSuite or Salesforce.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p5_q10",
        type: "yes-no",
        question: "Is data entered into the Playground tool saved permanently in your integration?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Information entered in the Playground is for testing and is not saved in the integration.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p5_q11",
        type: "multiple-choice",
        question: "How long are generated reports available for download in the Reports tool?",
        options: ["24 hours", "7 days", "30 days", "Indefinitely"],
        correctAnswer: "30 days",
        explanation: "Generated reports are available to download for 30 days.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p5_q12",
        type: "short-answer",
        question: "Where do deleted resources (like connections or flows) go before they are permanently removed?",
        options: [],
        correctAnswer: "Recycle bin",
        explanation: "Any resource deleted moves to the Recycle bin. They are permanently deleted after 30 days.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },

    // --- SECTION 4: FLOW BUILDER (Source & Destination) ---
    {
        id: "p5_q13",
        type: "multiple-choice",
        question: "What are the four main steps in creating a flow in Flow Builder?",
        options: [
            "1. Add Source, 2. Add Destination, 3. Map Fields, 4. Run Flow",
            "1. Create API, 2. Write Script, 3. Debug, 4. Launch",
            "1. Define Lookup, 2. Export Data, 3. Filter, 4. Save",
            "1. Login, 2. Dashboard, 3. Settings, 4. Logout"
        ],
        correctAnswer: "1. Add Source, 2. Add Destination, 3. Map Fields, 4. Run Flow",
        explanation: "The standard process is adding a source, adding a destination, mapping the fields, and running the flow.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
    },
    {
        id: "p5_q14",
        type: "multiple-choice",
        question: "When would you use a 'Universal Connector' instead of a 'Pre-built Connector'?",
        options: [
            "When the application is very popular (like Salesforce).",
            "When you want to use the Data Loader.",
            "When the specific application is not listed or you need custom control over settings.",
            "When you want to use a template."
        ],
        correctAnswer: "When the specific application is not listed or you need custom control over settings.",
        explanation: "Universal connectors (HTTP, FTP, etc.) are used when a pre-built connector doesn't exist or when the pre-built option doesn't offer enough custom control.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p5_q15",
        type: "matching",
        question: "Match the Flow Builder component to its description:",
        rows: [
            { id: 1, text: "Where you configure the export", correct: "Source Step" },
            { id: 2, text: "Where you configure the import", correct: "Destination Step" },
            { id: 3, text: "Connects specific source fields to destination fields", correct: "Mapper" },
            { id: 4, text: "Uploads a file instead of connecting to a live app", correct: "Data Loader" }
        ],
        options: ["Source Step", "Destination Step", "Mapper", "Data Loader"],
        explanation: "Source handles exports, Destination handles imports, Mapper links fields, and Data Loader handles file uploads.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder", "Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p5_q16",
        type: "yes-no",
        question: "In Mapper 2.0, must the Destination field be included in the row mapping?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "The destination field must be included so the platform knows where to send the data.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q17",
        type: "multiple-choice",
        question: "What is the default status of a new flow upon creation?",
        options: ["Enabled/Active", "Disabled", "Testing", "Deleted"],
        correctAnswer: "Disabled",
        explanation: "The default status of new flows is disabled (except for flows using Data Loader).",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
    },

    // --- SECTION 5: MAPPING TYPES ---
    {
        id: "p5_q18",
        type: "multiple-choice",
        question: "Which mapping type assigns a fixed, constant value (e.g., 'Paid') to a destination field regardless of the source data?",
        options: ["Standard", "Hard-Coded", "Lookup", "Handlebars"],
        correctAnswer: "Hard-Coded",
        explanation: "Hard-Coded mapping assigns a specific string or value directly to the destination field.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Mapping Types"]
    },
    {
        id: "p5_q19",
        type: "multiple-choice",
        question: "Which mapping type would you use to translate a value like '007' from the source to 'Bond' in the destination using a cross-reference list?",
        options: ["Standard", "Hard-Coded", "Lookup", "Handlebars"],
        correctAnswer: "Lookup",
        explanation: "Lookups are used to translate values (Value to Value) or search for data.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Mapping Types"]
    },
    {
        id: "p5_q20",
        type: "matching",
        question: "Match the Lookup type to its behavior:",
        rows: [
            { id: 1, text: "Uses a static table (Value A -> Value B)", correct: "Static Lookup" },
            { id: 2, text: "Performs a real-time search in the destination application", correct: "Dynamic Lookup" }
        ],
        options: ["Static Lookup", "Dynamic Lookup"],
        explanation: "Static lookups use a pre-defined table. Dynamic lookups search the destination application dynamically.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup", "Level 1 - Understanding Celigo Fundamentals|Mapping Types"]
    },
    {
        id: "p5_q21",
        type: "multiple-choice",
        question: "In Mapper 2.0, what expression language is used to combine multiple source fields (e.g., First Name + Last Name)?",
        options: ["Python", "SQL", "Handlebars", "Regex"],
        correctAnswer: "Handlebars",
        explanation: "Mapper 2.0 uses Handlebars expressions for multi-field mapping and data transformation.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- SECTION 6: MARKETPLACE ---
    {
        id: "p5_q22",
        type: "multiple-choice",
        question: "What is the key difference between a Template and an Integration App (IA)?",
        options: [
            "Templates are managed by the developer and locked; IAs are fully editable.",
            "Templates can be modified after installation; IAs are managed/locked by the developer.",
            "Templates cost money; IAs are free.",
            "There is no difference."
        ],
        correctAnswer: "Templates can be modified after installation; IAs are managed/locked by the developer.",
        explanation: "Templates give you a starting point that you can fully customize. Integration Apps are managed products where core components are locked to ensure reliability and updates.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
    },
    {
        id: "p5_q23",
        type: "yes-no",
        question: "Do you need special additional permissions to view the options available in the Marketplace?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You do not need special access or additional permissions to simply see the options in the Marketplace.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
    },

    // --- SECTION 7: ACCOUNT SETTINGS ---
    {
        id: "p5_q24",
        type: "multiple-choice",
        question: "Which user role has the highest permission level and can transfer account ownership?",
        options: ["Administrator", "Account User", "Account Owner", "Developer"],
        correctAnswer: "Account Owner",
        explanation: "The Account Owner holds the highest permission level and is the only one who can transfer account ownership.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p5_q25",
        type: "multiple-choice",
        question: "What happens if you are an Administrator (not Owner)?",
        options: [
            "You can transfer ownership.",
            "You cannot manage flows.",
            "You can manage flows and settings but cannot transfer ownership.",
            "You have read-only access."
        ],
        correctAnswer: "You can manage flows and settings but cannot transfer ownership.",
        explanation: "Administrators have the same abilities as Owners regarding flows/settings but cannot transfer ownership or change the Owner's permissions.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },

    // --- SECTION 9: SOURCE (Advanced) ---
    {
        id: "p5_q26",
        type: "matching",
        question: "Match the Source Type to its trigger mechanism:",
        rows: [
            { id: 1, text: "Runs on a set timer or manually", correct: "Scheduled Source" },
            { id: 2, text: "Runs in real-time when records update in the app", correct: "Webhook/Listener Source" }
        ],
        options: ["Scheduled Source", "Webhook/Listener Source"],
        explanation: "Scheduled sources run based on time settings (or manual trigger). Webhook/Listeners wait for the application to push data in real-time.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p5_q27",
        type: "multiple-choice",
        question: "Which security method is used for Webhook/Listener verification?",
        options: ["Authentication (Basic, Custom)", "Verification (HMAC, Token, Secret URL)", "Oauth 2.0 only", "Captcha"],
        correctAnswer: "Verification (HMAC, Token, Secret URL)",
        explanation: "Webhooks use Verification (like HMAC or Secret URL) to ensure the data is coming from a trusted source, whereas Exports use Authentication.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p5_q28",
        type: "multiple-select",
        question: "Which of the following are valid Export Types? (Select 3)",
        options: ["All", "Delta", "Random", "Limit"],
        correctAnswer: ["All", "Delta", "Limit"],
        explanation: "The export types are All, Delta (changes only), Once, and Limit.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p5_q29",
        type: "multiple-choice",
        question: "What is a 'Delta' export?",
        options: [
            "Exports all records every time.",
            "Exports only new or updated records since the last run.",
            "Exports records based on a random sample.",
            "Exports records to a delta file format."
        ],
        correctAnswer: "Exports only new or updated records since the last run.",
        explanation: "Delta exports use date/time parameters to pull only data that has changed since the last successful export.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },

    // --- SECTION 10: DATA FLOW ---
    {
        id: "p5_q30",
        type: "short-answer",
        question: "What is the default number of records per page when Celigo chunks data?",
        options: [],
        correctAnswer: "20",
        explanation: "The default is 20 records per page, though there is no limit on records per page as long as the page size is under 5MB.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q31",
        type: "multiple-choice",
        question: "What is the maximum file size limit for a single page of data in a flow?",
        options: ["1 MB", "5 MB", "10 MB", "1 GB"],
        correctAnswer: "5 MB",
        explanation: "A single page size is limited up to 5 MB.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },

    // --- SECTION 11: DESTINATION & LOOKUP (Advanced) ---
    {
        id: "p5_q32",
        type: "multiple-choice",
        question: "Which Import Operation should you use if you want to update a record if it exists, or create a new one if it doesn't, using an external ID for speed?",
        options: ["Insert", "Update", "Insert/Update", "Upsert"],
        correctAnswer: "Upsert",
        explanation: "Upsert works like Insert/Update but uses an External ID to check existence, making it faster than a standard lookup-based Insert/Update.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p5_q33",
        type: "multiple-choice",
        question: "What is the difference between 'Insert/Update' and 'Upsert'?",
        options: [
            "Upsert is slower.",
            "Insert/Update performs a lookup to check existence (slower); Upsert uses an External ID (faster).",
            "Upsert deletes records first.",
            "There is no difference."
        ],
        correctAnswer: "Insert/Update performs a lookup to check existence (slower); Upsert uses an External ID (faster).",
        explanation: "Insert/Update usually requires a lookup step to see if the record exists. Upsert relies on a unique key (External ID) to handle this natively in one step.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p5_q34",
        type: "yes-no",
        question: "Can a Lookup component be placed as the very last step of a flow (after the final destination)?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "A lookup cannot be placed at the last step of the flow. It must be used to retrieve data for a subsequent step.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },

    // --- SECTION 12: MAPPING (Detailed) ---
    {
        id: "p5_q35",
        type: "multiple-choice",
        question: "In a Lookup Mapping, what is the difference between Static and Dynamic?",
        options: [
            "Static is for known values; Dynamic searches destination records.",
            "Static is faster; Dynamic is slower.",
            "Static uses API; Dynamic uses CSV.",
            "Static is deprecated."
        ],
        correctAnswer: "Static is for known values; Dynamic searches destination records.",
        explanation: "Static mapping uses a fixed table (Source <-> Dest). Dynamic mapping uses search filters to find a value in the destination system at runtime.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q36",
        type: "multiple-choice",
        question: "How do you access the first item in an array using Celigo mapping syntax?",
        options: ["Array[1]", "Array[0]", "Array.First", "Array{1}"],
        correctAnswer: "Array[0]",
        explanation: "In Celigo (and JS), array indexing starts at 0. So Array[0] is the first item.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q37",
        type: "matching",
        question: "Match the array syntax to its result:",
        rows: [
            { id: 1, text: "Selects the first item", correct: "Array[0]" },
            { id: 2, text: "Selects all items (iterates)", correct: "Array[*]" },
            { id: 3, text: "Selects the third item", correct: "Array[2]" }
        ],
        options: ["Array[0]", "Array[*]", "Array[2]"],
        explanation: "0 is first, 2 is third, and [*] indicates a loop/all items.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q38",
        type: "multiple-choice",
        question: "Where do you configure 'Response Mapping'?",
        options: [
            "Between Source and Import",
            "Between Import/Lookup and the next step",
            "In the Connection settings",
            "In the Export filter"
        ],
        correctAnswer: "Between Import/Lookup and the next step",
        explanation: "Response mapping maps the API response from an Import or Lookup to the next endpoint or flow data.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p5_q39",
        type: "multiple-choice",
        question: "What is a 'Lookup Cache' used for?",
        options: [
            "To store errors.",
            "To store lookup data temporarily so it doesn't need to be fetched repeatedly.",
            "To delete old flows.",
            "To encrypt passwords."
        ],
        correctAnswer: "To store lookup data temporarily so it doesn't need to be fetched repeatedly.",
        explanation: "Lookup Cache is reusable data (from CSV or manual entry) that avoids repeated API calls for static data.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },

    // --- SECTION 13: ADVANCED CONFIGURATIONS ---
    {
        id: "p5_q40",
        type: "multiple-choice",
        question: "What is the difference between an Input Filter and an Output Filter?",
        options: [
            "Input filters remove records from specific steps; Output filters remove records from the entire flow.",
            "Input filters are for exports; Output filters are for imports.",
            "Input filters use JSON; Output filters use XML.",
            "There is no difference."
        ],
        correctAnswer: "Input filters remove records from specific steps; Output filters remove records from the entire flow.",
        explanation: "Output/Export filters remove records from the flow entirely. Input/Import filters skip specific steps for that record but allow it to continue to others.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q41",
        type: "matching",
        question: "Match the Flow Branching type to its logic:",
        rows: [
            { id: 1, text: "Proceeds through ONLY the first branch that meets criteria", correct: "First Matching" },
            { id: 2, text: "Proceeds through ALL branches that meet criteria", correct: "All Matching" }
        ],
        options: ["First Matching", "All Matching"],
        explanation: "First Matching stops after the first success. All Matching executes every branch where the condition is true (creating duplicates).",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder", "Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q42",
        type: "multiple-choice",
        question: "What does the 'Transformation' tool allow you to do?",
        options: [
            "Connect to a database.",
            "Change source data structure (rename, remove, reorganize) before processing.",
            "Delete the account.",
            "Send an email."
        ],
        correctAnswer: "Change source data structure (rename, remove, reorganize) before processing.",
        explanation: "Transformation is used to shape the JSON data (rename fields, restructure arrays) before it enters the mapping or import steps.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components", "Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q43",
        type: "multiple-select",
        question: "Which of the following functions can a 'Hook' (custom script) perform? (Select 2)",
        options: ["Perform complex calculations", "Create a new visual flow", "Trigger functions/logic", "Restart the server"],
        correctAnswer: ["Perform complex calculations", "Trigger functions/logic"],
        explanation: "Hooks allow custom JavaScript to perform calculations, comparisons, transformations, or trigger functions at specific points in the flow.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- SECTION 15: ERROR MANAGEMENT ---
    {
        id: "p5_q44",
        type: "yes-no",
        question: "Does running a flow in 'Test Mode' process real data uploads to the destination application?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Test Mode uses mock output/response data. It validates configuration logic without writing data to the destination (unless explicitly configured to use live data, but default is mock).",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q45",
        type: "multiple-choice",
        question: "How can you identify if a flow is in Test Mode?",
        options: [
            "The screen turns red.",
            "An 'Encircled T' icon appears on steps and the 'Run Now' button says 'Run Test'.",
            "You cannot see the flow.",
            "The text becomes bold."
        ],
        correctAnswer: "An 'Encircled T' icon appears on steps and the 'Run Now' button says 'Run Test'.",
        explanation: "Visual indicators include the Encircled T on flow steps and the Run Test button.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p5_q46",
        type: "matching",
        question: "Match the Error Source to its definition:",
        rows: [
            { id: 1, text: "Error inside Celigo (Lookup, mapping, filter)", correct: "Internal" },
            { id: 2, text: "Error from the Application (Mailchimp, Shopify, etc.)", correct: "External" }
        ],
        options: ["Internal", "External"],
        explanation: "Internal errors originate from Celigo configuration. External errors come from the endpoint application's response.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q47",
        type: "multiple-choice",
        question: "What does a '429' status code typically indicate in an error classification?",
        options: ["Connection Error", "Rate Limit (Too many requests)", "Not Found", "Unauthorized"],
        correctAnswer: "Rate Limit (Too many requests)",
        explanation: "429 is the standard HTTP status code for Rate Limiting (exceeding the allowed number of requests).",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q48",
        type: "multiple-choice",
        question: "What is a 'Trace Key'?",
        options: [
            "A password for login.",
            "A unique identifier for a record used to track it through flow events and errors.",
            "A key to unlock the playground.",
            "A deleted record."
        ],
        correctAnswer: "A unique identifier for a record used to track it through flow events and errors.",
        explanation: "Trace Keys uniquely identify a record (usually an ID) to help you find it in logs and error lists.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },

    // --- SECTION 18: HTTP CONNECTORS (Basics) ---
    {
        id: "p5_q49",
        type: "multiple-choice",
        question: "What is the difference between Base URI and Relative URI?",
        options: [
            "Base URI is the primary location; Relative URI is the specific resource location.",
            "Base URI is optional; Relative URI is required.",
            "Base URI is for imports; Relative URI is for exports.",
            "There is no difference."
        ],
        correctAnswer: "Base URI is the primary location; Relative URI is the specific resource location.",
        explanation: "Base URI (e.g., https://api.site.com) is the root. Relative URI (e.g., /v1/users) points to the specific resource.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q50",
        type: "multiple-choice",
        question: "Which Media Type is primarily used in the Celigo platform (JavaScript Object Notation)?",
        options: ["XML", "JSON", "Plain Text", "Binary"],
        correctAnswer: "JSON",
        explanation: "JSON is the primary media type used in Celigo.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q51",
        type: "multiple-choice",
        question: "Which authentication type is considered the most secure (highest level) for HTTP connections?",
        options: ["Basic Auth", "No Auth", "OAuth 2.0", "Token"],
        correctAnswer: "OAuth 2.0",
        explanation: "OAuth 2.0 is the most secure standard for authentication.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q52",
        type: "short-answer",
        question: "What unit of time is used to measure the 'Wait time between HTTP requests' field?",
        options: [],
        correctAnswer: "milliseconds",
        explanation: "Wait time is measured in milliseconds.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q53",
        type: "multiple-choice",
        question: "What does 'Concurrency' mean in the context of Celigo connections?",
        options: [
            "The number of errors allowed.",
            "The number of data requests Celigo can send to a server at the same time.",
            "The number of users logged in.",
            "The speed of the internet."
        ],
        correctAnswer: "The number of data requests Celigo can send to a server at the same time.",
        explanation: "Concurrency is the number of simultaneous requests. Celigo max is 25.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },

    // --- SECTION 19: FTP CONNECTORS ---
    {
        id: "p5_q54",
        type: "matching",
        question: "Match the FTP Protocol to its security level:",
        rows: [
            { id: 1, text: "Not recommended, unsecure (Port 21)", correct: "FTP" },
            { id: 2, text: "Recommended, uses SSH (Port 22)", correct: "SFTP" },
            { id: 3, text: "Recommended, uses SSL/TLS", correct: "FTPS" }
        ],
        options: ["FTP", "SFTP", "FTPS"],
        explanation: "FTP is unsecure. SFTP (SSH) and FTPS (SSL) are recommended secure protocols.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q55",
        type: "multiple-choice",
        question: "By default, what does Celigo do with exported files on the FTP server after the transfer is complete?",
        options: ["Archives them", "Deletes them", "Renames them", "Duplicates them"],
        correctAnswer: "Deletes them",
        explanation: "Celigo deletes exported files from the FTP location by default to prevent reprocessing.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q56",
        type: "multiple-choice",
        question: "Which FTP mode is more secure because the client starts the connection?",
        options: ["Active Mode", "Passive Mode", "Hyper Mode", "Silent Mode"],
        correctAnswer: "Passive Mode",
        explanation: "Passive Mode (default) is more secure as the client starts the connection.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },

    // --- SECTION 20: DATABASE ---
    {
        id: "p5_q57",
        type: "multiple-choice",
        question: "What language is used to retrieve data from a Database export?",
        options: ["HTML", "SQL", "Java", "Python"],
        correctAnswer: "SQL",
        explanation: "SQL (Structured Query Language) is used to Create, Read, Update, and Delete records in a database.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p5_q58",
        type: "multiple-choice",
        question: "If connecting to an On-Premise database behind a firewall, what are the two common security solutions?",
        options: [
            "Whitelist Celigo IP or use an Agent",
            "Disable the firewall or use public WiFi",
            "Use a different database or rename it",
            "There is no solution"
        ],
        correctAnswer: "Whitelist Celigo IP or use an Agent",
        explanation: "You must either Whitelist the Celigo IP address or install an Agent behind the firewall.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },

    // --- SECTION 22: PLATFORM API ---
    {
        id: "p5_q59",
        type: "short-answer",
        question: "What type of token is used for Celigo Platform API authentication?",
        options: [],
        correctAnswer: "Bearer token",
        explanation: "The Celigo platform API uses a Bearer token for authentication.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p5_q60",
        type: "multiple-choice",
        question: "Who can create API tokens in the Celigo platform?",
        options: ["Any user", "Account Owners and Administrators", "Only Developers", "Support Staff"],
        correctAnswer: "Account Owners and Administrators",
        explanation: "Only Account Owners or Administrators can create Celigo API Tokens.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    // --- SECTION 12: MAPPING & FIELD MAPPING (Continued) ---
    {
        id: "p5_q61",
        type: "multiple-choice",
        question: "In Mapper 2.0, what symbol is used to represent the 'Root' object in JSON path expressions?",
        options: ["@", "#", "$", "&"],
        correctAnswer: "$",
        explanation: "In JSON path expressions (often used in Transformations), '$' represents the root object.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q62",
        type: "matching",
        question: "Match the array index to the correct syntax for accessing it:",
        rows: [
            { id: 1, text: "The very first item in the array", correct: "Array[0]" },
            { id: 2, text: "The third item in the array", correct: "Array[2]" },
            { id: 3, text: "Iterate through ALL items in the array", correct: "Array[*]" }
        ],
        options: ["Array[0]", "Array[2]", "Array[*]"],
        explanation: "Index 0 is the first item. Index 2 is the third item. [*] is the wildcard for all items.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q63",
        type: "yes-no",
        question: "Can a 'Lookup Cache' be shared across multiple flows?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Yes, Lookup Caches are resources that can be shared across multiple flows if the 'flow specific' checkbox is unchecked.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p5_q64",
        type: "multiple-choice",
        question: "What is the maximum file size for a shared Lookup Cache?",
        options: ["1 MB", "5 MB", "10 MB", "100 MB"],
        correctAnswer: "5 MB",
        explanation: "Lookup cache data used across multiple flows is limited to 5 MB.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p5_q65",
        type: "multiple-choice",
        question: "Which mapping feature defines how to handle the data returned from a Lookup step (e.g., storing the result in a specific field)?",
        options: ["Response Mapping", "Results Mapping", "Input Filter", "Flow Branching"],
        correctAnswer: "Results Mapping",
        explanation: "Results mapping defines which fields will store the lookup values (data, error, ignored, statusCode) returned from the lookup endpoint.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q66",
        type: "multiple-choice",
        question: "What is the key difference between 'Results Mapping' and 'Response Mapping'?",
        options: [
            "Results Mapping is for Lookups; Response Mapping is for Imports.",
            "Results Mapping is optional; Response Mapping is required.",
            "Results Mapping uses SQL; Response Mapping uses Java.",
            "There is no difference."
        ],
        correctAnswer: "Results Mapping is for Lookups; Response Mapping is for Imports.",
        explanation: "Results mapping handles data returned from a Lookup step. Response mapping handles the response from the destination application after an Import step.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q67",
        type: "multiple-select",
        question: "Which of the following are valid ways to populate a Lookup Cache? (Select 2)",
        options: ["Upload a CSV file", "Manual entry", "Telepathy", "Direct SQL injection"],
        correctAnswer: ["Upload a CSV file", "Manual entry"],
        explanation: "You can populate a cache by uploading a CSV file, manually entering rows, or using an API flow.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p5_q68",
        type: "short-answer",
        question: "In Mapper 2.0, the 'Multi-Field' mapping type was replaced by which feature?",
        options: [],
        correctAnswer: "Handlebars expression",
        explanation: "Mapper 2.0 replaces the specific 'Multi-field' option with the more flexible 'Handlebars expression' type.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- SECTION 13: ADVANCED CONFIGURATIONS (Filters, Branching, Transformation) ---
    {
        id: "p5_q69",
        type: "multiple-choice",
        question: "If a record fails an 'Input Filter' (Import Filter), what happens to it?",
        options: [
            "It is permanently deleted from the flow.",
            "It skips that specific step but can proceed to later endpoints.",
            "It causes the entire flow to error out.",
            "It is sent to the recycle bin."
        ],
        correctAnswer: "It skips that specific step but can proceed to later endpoints.",
        explanation: "Input filters (Import filters) skip the specific step they are attached to, but the record continues to subsequent steps in the flow.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q70",
        type: "multiple-choice",
        question: "If a record fails an 'Output Filter' (Export Filter), what happens to it?",
        options: [
            "It never reaches any later endpoints (removed from flow).",
            "It skips only the first step.",
            "It is retried 3 times.",
            "It is marked as 'Success'."
        ],
        correctAnswer: "It never reaches any later endpoints (removed from flow).",
        explanation: "Output filters (Export filters) remove the record from the data flow entirely; it never reaches any destination.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q71",
        type: "matching",
        question: "Match the Branching Type to its execution logic:",
        rows: [
            { id: 1, text: "Checks branches sequentially; stops after the first match.", correct: "First Matching" },
            { id: 2, text: "Checks all branches; executes every matching branch (can duplicate records).", correct: "All Matching" }
        ],
        options: ["First Matching", "All Matching"],
        explanation: "First Matching is an 'OR' logic (Branch A OR B). All Matching is an 'AND' logic (Branch A AND B if both match).",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q72",
        type: "yes-no",
        question: "Can you use a JavaScript script to define branching logic instead of using the visual rule builder?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "You can write a custom script to define complex branching logic if the visual rules are insufficient.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q73",
        type: "multiple-choice",
        question: "What is the default 'Error Handling' setting for a step in a flow?",
        options: [
            "Proceed to next step regardless",
            "Pause until someone can fix the error",
            "Delete the integration",
            "Retry indefinitely"
        ],
        correctAnswer: "Pause until someone can fix the error",
        explanation: "The default behavior is to pause the record at the failed step, stopping it from continuing until resolved.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q74",
        type: "multiple-choice",
        question: "When would you use a 'Transformation' (Transformation 2.0)?",
        options: [
            "To connect to a new application.",
            "To standardize data format from different sources before processing.",
            "To schedule the flow.",
            "To create a dashboard."
        ],
        correctAnswer: "To standardize data format from different sources before processing.",
        explanation: "Transformations are used to normalize, rename, or restructure data (e.g., one source -> multiple steps) before it hits the import mapping.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q75",
        type: "multiple-choice",
        question: "Which two languages/syntaxes are primarily used in Transformation 2.0?",
        options: [
            "Python and C++",
            "Handlebars and JSON path",
            "HTML and CSS",
            "SQL and PHP"
        ],
        correctAnswer: "Handlebars and JSON path",
        explanation: "Transformation 2.0 relies on Handlebars (for logic/references) and JSON path (for selecting elements).",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations","Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q76",
        type: "matching",
        question: "Match the Hook type to its timing:",
        rows: [
            { id: 1, text: "Runs before the import mapping occurs", correct: "PreMap" },
            { id: 2, text: "Runs after mapping but before submission", correct: "PostMap" },
            { id: 3, text: "Runs after the record is submitted to the application", correct: "PostSubmit" }
        ],
        options: ["PreMap", "PostMap", "PostSubmit"],
        explanation: "PreMap prepares data before mapping. PostMap modifies mapped data (e.g., complex calcs). PostSubmit processes the response.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q77",
        type: "short-answer",
        question: "In Transformation 1.0 (Deprecated), what does the 'Rules' column represent?",
        options: [],
        correctAnswer: "Create/modify available fields",
        explanation: "The Rules column allows you to define the new structure or field names.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },

    // --- SECTION 14: FLOW SCHEDULING ---
    {
        id: "p5_q78",
        type: "multiple-choice",
        question: "Which type of source CANNOT be scheduled using the standard scheduler?",
        options: ["Standard HTTP Export", "Database Export", "Real-time Webhook Listener", "FTP Export"],
        correctAnswer: "Real-time Webhook Listener",
        explanation: "Webhooks listen for data in real-time; they cannot be scheduled to 'run' at a specific time like an export.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p5_q79",
        type: "multiple-choice",
        question: "What is a 'Cron expression' used for?",
        options: [
            "Writing JavaScript code.",
            "Defining a customizable schedule (e.g., 'Every 1st and 15th of the month').",
            "Encrypting passwords.",
            "Calculating math."
        ],
        correctAnswer: "Defining a customizable schedule (e.g., 'Every 1st and 15th of the month').",
        explanation: "Cron expressions allow for complex, custom scheduling beyond simple presets.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p5_q80",
        type: "short-answer",
        question: "In a Cron expression, how many positions (fields) are there for time/date?",
        options: [],
        correctAnswer: "5",
        explanation: "The positions are: Minute, Hour, Day of Month, Month, Day of Week.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p5_q81",
        type: "yes-no",
        question: "Can you set one flow to run immediately after another flow finishes?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "You can configure flow settings to trigger another integration flow upon completion.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },

    // --- SECTION 15: ERROR MANAGEMENT (Test Mode & Debugging) ---
    {
        id: "p5_q82",
        type: "multiple-choice",
        question: "What is the primary purpose of 'Test Mode'?",
        options: [
            "To validate configuration logic without affecting real data.",
            "To run the flow faster.",
            "To bypass authentication.",
            "To create a backup."
        ],
        correctAnswer: "To validate configuration logic without affecting real data.",
        explanation: "Test Mode uses mock data to ensure your mappings and logic are correct without writing to the destination.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q83",
        type: "multiple-choice",
        question: "What visual indicator shows that a flow step is in Test Mode?",
        options: [
            "A green checkmark.",
            "An 'Encircled T' icon on the step.",
            "The step turns blue.",
            "A flashing warning light."
        ],
        correctAnswer: "An 'Encircled T' icon on the step.",
        explanation: "The 'Encircled T' is the UI indicator for Test Mode.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p5_q84",
        type: "multiple-choice",
        question: "When adding manual Mock Data for testing, what is the maximum number of records allowed?",
        options: ["1 record", "10 records", "100 records", "Unlimited"],
        correctAnswer: "10 records",
        explanation: "Manual mock data is limited to 10 records (or rows).",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q85",
        type: "multiple-choice",
        question: "What is the file size limit for manual Mock Data?",
        options: ["1 MB", "5 MB", "10 MB", "20 MB"],
        correctAnswer: "1 MB",
        explanation: "Manual mock data cannot exceed 1 MB.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q86",
        type: "matching",
        question: "Match the Test Mode data type to its use:",
        rows: [
            { id: 1, text: "Data used to simulate an Export or Lookup result", correct: "Mock Output" },
            { id: 2, text: "Data used to simulate an Import response", correct: "Mock Response" }
        ],
        options: ["Mock Output", "Mock Response"],
        explanation: "Mock Output simulates what comes FROM a source/lookup. Mock Response simulates what the destination replies.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q87",
        type: "yes-no",
        question: "Is Test Mode data (and debug logs) automatically deleted after the session expires or the window closes?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Test data is temporary and is cleared when the session expires, the URL changes, or the next test run starts.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q88",
        type: "multiple-choice",
        question: "Where can you view a graph of flow errors over the last year?",
        options: ["Dashboard", "Analytics", "Marketplace", "Playground"],
        correctAnswer: "Analytics",
        explanation: "The Analytics section provides long-term error trends and graphs.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q89",
        type: "multiple-select",
        question: "Which of the following are valid Error Classifications? (Select 3)",
        options: ["Connection", "Missing", "Value", "Sunny"],
        correctAnswer: ["Connection", "Missing", "Value"],
        explanation: "Common error classifications include Value, Missing, Connection, Intermittent, Rate Limit, etc.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q90",
        type: "multiple-choice",
        question: "What does the error classification 'Duplicate' mean?",
        options: [
            "The record is too large.",
            "The record already exists in the destination or a lookup found >1 match.",
            "The connection failed.",
            "The API key is missing."
        ],
        correctAnswer: "The record already exists in the destination or a lookup found >1 match.",
        explanation: "Duplicate errors occur when the destination rejects a record because it already exists, or a lookup returns ambiguous results.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },

    // --- SECTION 15 continued: TROUBLESHOOTING ---
    {
        id: "p5_q91",
        type: "multiple-choice",
        question: "If you encounter a 'Connection' error, what is the first troubleshooting step?",
        options: [
            "Delete the flow.",
            "Retry the flow or check the Connector Status on Celigo.",
            "Rewrite the API.",
            "Call the CEO."
        ],
        correctAnswer: "Retry the flow or check the Connector Status on Celigo.",
        explanation: "Connection errors are often temporary (intermittent). Retrying or checking if the connection is 'Online' is the first step.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q92",
        type: "multiple-choice",
        question: "What is 'Auto-Resolve'?",
        options: [
            "A feature that automatically retries errors using AI/Rules.",
            "A feature that deletes all errors.",
            "A feature that emails support.",
            "A feature that ignores errors."
        ],
        correctAnswer: "A feature that automatically retries errors using AI/Rules.",
        explanation: "Auto-resolve (often AI-driven) attempts to retry specific error types automatically.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q93",
        type: "short-answer",
        question: "What uniquely identifies a record to help manage errors and examine flow data?",
        options: [],
        correctAnswer: "Trace Key",
        explanation: "The Trace Key (usually an ID) follows the record through the flow events.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q94",
        type: "multiple-choice",
        question: "How far back does the 'Run History' list previous runs?",
        options: ["24 hours", "7 days", "30 days", "1 year"],
        correctAnswer: "30 days",
        explanation: "Run history typically lists runs for the last 30 days.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q95",
        type: "multiple-choice",
        question: "What is the 'Integration Lifecycle Management' feature used for?",
        options: [
            "Managing subscription payments.",
            "Saving versions of integrations (Snapshots) to revert changes if needed.",
            "Deleting old accounts.",
            "Creating new users."
        ],
        correctAnswer: "Saving versions of integrations (Snapshots) to revert changes if needed.",
        explanation: "It allows you to create snapshots, clone, and revert to previous versions of an integration.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q96",
        type: "yes-no",
        question: "Can an Account Owner grant Celigo Support temporary access to their environment for troubleshooting?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Owners/Admins can enable the 'Celigo Support User Profile' to grant temporary access.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },

    // --- SECTION 18: HTTP CONNECTORS (Advanced) ---
    {
        id: "p5_q97",
        type: "matching",
        question: "Match the HTTP content type to its description:",
        rows: [
            { id: 1, text: "For transferring multiple data types (files + text) in one request", correct: "Multipart/form-data" },
            { id: 2, text: "For large URL query strings", correct: "URL encoded" },
            { id: 3, text: "Standard text format", correct: "Plain text" }
        ],
        options: ["Multipart/form-data", "URL encoded", "Plain text"],
        explanation: "Multipart is for attachments/files. URL encoded is for queries. Plain text is raw string data.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q98",
        type: "multiple-choice",
        question: "When configuring a Non-Standard API Response, what does 'Override HTTP Status Code' allow you to do?",
        options: [
            "Change the API documentation.",
            "Tell Celigo that a specific status code (e.g., 200) actually means an error (e.g., Auth Failed).",
            "Speed up the connection.",
            "Ignore all errors."
        ],
        correctAnswer: "Tell Celigo that a specific status code (e.g., 200) actually means an error (e.g., Auth Failed).",
        explanation: "Some APIs return '200 OK' even when they fail. This setting lets you map that response to an error.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q99",
        type: "multiple-choice",
        question: "What is a 'Ping Request' in the connection settings?",
        options: [
            "A game of table tennis.",
            "A test request to verify the connection is working properly.",
            "A request to delete data.",
            "A request to download all files."
        ],
        correctAnswer: "A test request to verify the connection is working properly.",
        explanation: "A ping request tests connectivity to ensure the flow can run.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q100",
        type: "multiple-choice",
        question: "What is 'FIFO' in the context of Concurrency?",
        options: ["First In, First Out", "Fast Input, Fast Output", "File Input, File Output", "First In, Fast Out"],
        correctAnswer: "First In, First Out",
        explanation: "Data requests sharing a connection are handled as First In, First Out.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q101",
        type: "multiple-select",
        question: "Which parameters can be added to a Relative URI? (Select 2)",
        options: ["Path Parameter", "Query Parameter", "Hyper Parameter", "Mega Parameter"],
        correctAnswer: ["Path Parameter", "Query Parameter"],
        explanation: "Path parameters point to resources (e.g., /id). Query parameters filter results (e.g., ?type=active).",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs", "Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q102",
        type: "multiple-choice",
        question: "In a 'Once' export type, what two data requests are performed?",
        options: [
            "1. Export Data, 2. Update Record (mark as exported)",
            "1. Export Data, 2. Delete Record",
            "1. Export Data, 2. Email User",
            "1. Export Data, 2. Export Data Again"
        ],
        correctAnswer: "1. Export Data, 2. Update Record (mark as exported)",
        explanation: "Once exports pull the data and then immediately send a request back to update the record (e.g., set 'Exported' = true).",
        chapter: ["Level 2 - Exploring Flow Builder|Source", "Level 2 - Exploring Flow Builder|Data Flow"]        
    },
    {
        id: "p5_q103",
        type: "multiple-choice",
        question: "What is 'Pagination'?",
        options: [
            "Writing on paper.",
            "Breaking large datasets into smaller pages/chunks for manageable transfer.",
            "Sorting data alphabetically.",
            "Filtering data."
        ],
        correctAnswer: "Breaking large datasets into smaller pages/chunks for manageable transfer.",
        explanation: "Pagination splits large API responses into multiple pages to avoid timeouts and memory issues.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q104",
        type: "matching",
        question: "Match the Pagination Method to its logic:",
        rows: [
            { id: 1, text: "Uses 'page size' and 'start index'", correct: "Page number parameter" },
            { id: 2, text: "Uses 'limit' and 'offset'", correct: "Skip number parameter" },
            { id: 3, text: "Uses a 'next' URL provided in the header", correct: "Link header" }
        ],
        options: ["Page number parameter", "Skip number parameter", "Link header"],
        explanation: "Page number counts pages. Skip number counts records (offset). Link header follows a URL provided by the API.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },

    // --- SECTION 19: FTP CONNECTORS (Advanced) ---
    {
        id: "p5_q105",
        type: "multiple-choice",
        question: "Which FTP protocol uses Port 22 and SSH?",
        options: ["FTP", "SFTP", "FTPS", "HTTP"],
        correctAnswer: "SFTP",
        explanation: "SFTP (Secure File Transfer Protocol) runs over SSH on port 22.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q106",
        type: "yes-no",
        question: "Does SFTP support 'Passive Mode'?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Passive mode is an FTP/FTPS concept. SFTP uses a single SSH connection.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q107",
        type: "multiple-choice",
        question: "What does the 'Entry Parser' field do in FTP settings?",
        options: [
            "Parses the file content.",
            "Identifies how to handle FTP server responses if they aren't standard Windows/Linux.",
            "Logs the user in.",
            "Decrypts the password."
        ],
        correctAnswer: "Identifies how to handle FTP server responses if they aren't standard Windows/Linux.",
        explanation: "The entry parser helps Celigo understand the directory listing format returned by the FTP server.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q108",
        type: "multiple-choice",
        question: "What does enabling 'PGP Cryptographic' allow you to do?",
        options: [
            "Compress files.",
            "Encrypt/Decrypt data using PGP keys for high security.",
            "Speed up transfer.",
            "Rename files."
        ],
        correctAnswer: "Encrypt/Decrypt data using PGP keys for high security.",
        explanation: "PGP (Pretty Good Privacy) adds a layer of encryption to the files themselves.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q109",
        type: "multiple-choice",
        question: "In an FTP Export, if you select 'Parse files being transferred', what output formats are available?",
        options: ["MP3 and MP4", "CSV or XML", "PDF and DOCX", "EXE and DLL"],
        correctAnswer: "CSV or XML",
        explanation: "When parsing is enabled, Celigo can read and structure data as CSV or XML.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q110",
        type: "multiple-choice",
        question: "What does the 'Skip Aggregation' option do in an FTP Import?",
        options: [
            "It skips the import.",
            "Instead of combining all pages into one file, it creates separate files for each page.",
            "It ignores errors.",
            "It speeds up the internet."
        ],
        correctAnswer: "Instead of combining all pages into one file, it creates separate files for each page.",
        explanation: "Default behavior aggregates 10 pages into 1 file. Skip aggregation keeps them separate (10 pages -> 10 files).",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },

    // --- SECTION 20: DATABASE ---
    {
        id: "p5_q111",
        type: "multiple-choice",
        question: "Which database import query type is faster because it uses 'Bulk Insert'?",
        options: ["Insert", "Update", "Merge", "Select"],
        correctAnswer: "Insert",
        explanation: "Insert operations often support bulk insert SQL queries, making them faster than row-by-row updates.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p5_q112",
        type: "short-answer",
        question: "What is the name of the template used to prevent errors when multiple requests try to process the same record ID simultaneously?",
        options: [],
        correctAnswer: "Concurrency ID Lock Template",
        explanation: "This template locks the processing ID to prevent duplicate processing gaps.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },

    // --- SECTION 22: PLATFORM API ---
    {
        id: "p5_q113",
        type: "multiple-choice",
        question: "Can you use the Celigo Platform API to trigger a flow externally?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Yes, triggering flows is a common use case for the Platform API.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p5_q114",
        type: "multiple-choice",
        question: "What happens if you set an 'Auto-purge' time for an API token?",
        options: [
            "The token is deleted after the set time (e.g., 1 hour).",
            "The token renews automatically.",
            "The account is locked.",
            "The token becomes permanent."
        ],
        correctAnswer: "The token is deleted after the set time (e.g., 1 hour).",
        explanation: "Auto-purge removes the token after a specific duration for security.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },

    // --- SECTION 23: PLAYGROUND & AFEs ---
    {
        id: "p5_q115",
        type: "multiple-choice",
        question: "What does 'AFE' stand for in Celigo?",
        options: ["Advanced Field Editor", "Automated Flow Engine", "API Field Entry", "Apple Fruit Eater"],
        correctAnswer: "Advanced Field Editor",
        explanation: "AFEs are tools like the Handlebars editor, SQL builder, or Script editor.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p5_q116",
        type: "multiple-choice",
        question: "How do you trigger the Auto-Suggestion menu in a Handlebars editor?",
        options: ["Alt + F4", "Ctrl + Space (or {{ )", "Shift + Enter", "Click the mouse 3 times"],
        correctAnswer: "Ctrl + Space (or {{ )",
        explanation: "Typing '{{' or pressing Ctrl+Space opens the suggestion dropdown.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- SECTION 24: HOOKS & HANDLEBARS ---
    {
        id: "p5_q117",
        type: "multiple-choice",
        question: "What is a 'Block Helper' in Handlebars?",
        options: [
            "A helper that blocks data.",
            "A helper that iterates or creates logic blocks (starting with #, like #if, #each).",
            "A helper for standard math.",
            "A helper for connection settings."
        ],
        correctAnswer: "A helper that iterates or creates logic blocks (starting with #, like #if, #each).",
        explanation: "Block helpers (e.g., {{#if}}, {{#each}}) wrap a block of code to apply logic or iteration.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q118",
        type: "short-answer",
        question: "Which symbol is used for Handlebars Data Variables (like root or index)?",
        options: [],
        correctAnswer: "@",
        explanation: "Data variables are prefixed with @ (e.g., @root, @index).",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- SECTION 25: JAVASCRIPT APIs ---
    {
        id: "p5_q119",
        type: "multiple-choice",
        question: "What is the main difference between a Celigo Platform API and a JavaScript API?",
        options: [
            "Platform API is standard; JS API is a custom endpoint executing your script.",
            "Platform API is slow; JS API is fast.",
            "Platform API uses XML; JS API uses JSON.",
            "There is no difference."
        ],
        correctAnswer: "Platform API is standard; JS API is a custom endpoint executing your script.",
        explanation: "JavaScript APIs allow you to create your own custom endpoints that trigger scripts, whereas Platform APIs interact with standard Celigo resources.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p5_q120",
        type: "matching",
        question: "Match the JavaScript API term to its definition:",
        rows: [
            { id: 1, text: "A resource hosted on the server containing reusable functions", correct: "Script" },
            { id: 2, text: "Extension code hosted on Amazon Lambda or external server", correct: "Stack" }
        ],
        options: ["Script", "Stack"],
        explanation: "Scripts are internal Celigo resources. Stacks are extensions hosted externally (like Lambda).",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    // --- SECTION 18: HTTP CONNECTORS (Pagination & Delta) ---
    {
        id: "p5_q121",
        type: "multiple-choice",
        question: "Which Pagination method should you use if the API returns a 'next_page_token' in the JSON response body?",
        options: ["Link header", "Next page token", "Page number parameter", "Skip number parameter"],
        correctAnswer: "Next page token",
        explanation: "This method is specifically designed for APIs that provide a token (string) in the response body to access the subsequent page.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q122",
        type: "multiple-choice",
        question: "In a 'Skip number parameter' pagination setup, what does the 'Limit' field usually represent?",
        options: [
            "The maximum number of pages to fetch.",
            "The number of records to fetch per page (page size).",
            "The number of errors allowed.",
            "The time to wait between requests."
        ],
        correctAnswer: "The number of records to fetch per page (page size).",
        explanation: "In limit/offset pagination, 'Limit' defines the page size (how many records), while 'Offset' defines where to start.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q123",
        type: "multiple-choice",
        question: "If an API uses the standard 'Link' header for pagination, which method should you select?",
        options: ["Link header", "Next page URL", "Custom relative URI", "Page number"],
        correctAnswer: "Link header",
        explanation: "The 'Link header' method parses the standard HTTP Link header to find the URL for the next page.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs", "Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q124",
        type: "yes-no",
        question: "Do all APIs support 'Delta' exports (changes only)?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Only APIs that accept a date/time parameter (like 'updated_at') or a specific state field support Delta exports.",
        chapter: ["Level 2 - Exploring Flow Builder|Source", "Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q125",
        type: "short-answer",
        question: "Which Handlebars variable represents the date/time of the LAST successful export run?",
        options: [],
        correctAnswer: "{{lastExportDateTime}}",
        explanation: "This variable is crucial for Delta exports to fetch only data modified after the last run.",
        chapter: ["Level 2 - Exploring Flow Builder|Source", "Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q126",
        type: "multiple-choice",
        question: "What is the 'Delta date lag offset' used for?",
        options: [
            "To speed up the export.",
            "To account for the time gap between when a record is modified and when it becomes available via the API.",
            "To delete old records.",
            "To change the timezone."
        ],
        correctAnswer: "To account for the time gap between when a record is modified and when it becomes available via the API.",
        explanation: "It subtracts a buffer time (e.g., 5 mins) from the request to ensure recent records aren't missed due to server indexing lag.",
        chapter: ["Level 2 - Exploring Flow Builder|Source", "Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },

    // --- SECTION 19: FTP & SECURITY ---
    {
        id: "p5_q127",
        type: "multiple-choice",
        question: "Which FTP Import setting allows you to hide a file from the destination system until the upload is completely finished?",
        options: [
            "Encrypt files",
            "Use temp file while upload in progress",
            "Compress files",
            "Batch size"
        ],
        correctAnswer: "Use temp file while upload in progress",
        explanation: "This uploads the file with a temporary name (e.g., .tmp) and renames it only after the upload is 100% complete.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q128",
        type: "matching",
        question: "Match the Encryption term to its function in Celigo:",
        rows: [
            { id: 1, text: "Encrypts the connection channel (Data in transit)", correct: "SSL/TLS (FTPS)" },
            { id: 2, text: "Encrypts the file content itself (Data at rest)", correct: "PGP" }
        ],
        options: ["SSL/TLS (FTPS)", "PGP"],
        explanation: "FTPS/SFTP protects the tunnel. PGP protects the actual file payload.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q129",
        type: "yes-no",
        question: "Can Celigo decompress (unzip) a file pulled from an FTP server before processing it?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Yes, the 'Decompress Files' option allows Celigo to unzip files automatically upon export.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q130",
        type: "multiple-choice",
        question: "If you want to Group records by a specific field (e.g., Order ID) during an FTP export, where do you configure this?",
        options: [
            "In the 'How would you like to group and sort records?' section.",
            "In the Connection settings.",
            "In the Dashboard.",
            "You cannot group records."
        ],
        correctAnswer: "In the 'How would you like to group and sort records?' section.",
        explanation: "This specific section allows you to define sorting and grouping logic for the exported file.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },

    // --- SECTION 20: DATABASE & SQL ---
    {
        id: "p5_q131",
        type: "multiple-choice",
        question: "When creating a Database Import, which Query Type allows you to 'Ignore missing records' (i.e., do nothing if the record doesn't exist)?",
        options: ["Insert", "Update", "Select", "Create"],
        correctAnswer: "Update",
        explanation: "When using 'Update', you can choose to ignore records that are not found in the database.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p5_q132",
        type: "multiple-choice",
        question: "What is an 'Agent' in the context of Database connections?",
        options: [
            "A support representative.",
            "A software program installed on a local server to facilitate On-Premise connections.",
            "A type of virus.",
            "A secret mode."
        ],
        correctAnswer: "A software program installed on a local server to facilitate On-Premise connections.",
        explanation: "The Agent acts as a bridge, sitting behind the firewall to communicate securely with Celigo.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p5_q133",
        type: "multiple-select",
        question: "Which of the following are valid SQL actions for a Database Import? (Select 2)",
        options: ["Insert", "Update", "Print", "Format"],
        correctAnswer: ["Insert", "Update"],
        explanation: "Standard database import operations are Insert, Update, and Insert/Update (Merge).",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },

    // --- SECTION 13 & 24: TRANSFORMATION & LOGIC ---
    {
        id: "p5_q134",
        type: "multiple-choice",
        question: "Which Handlebars helper would you use to iterate through a list of items (e.g., line items in an order)?",
        options: ["{{#if}}", "{{#each}}", "{{#unless}}", "{{#with}}"],
        correctAnswer: "{{#each}}",
        explanation: "{{#each}} is the block helper used to loop through arrays or lists.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q135",
        type: "multiple-choice",
        question: "In a Transformation, how would you reference the 'email' field of the FIRST item in an 'employees' array?",
        options: [
            "employees[0].email",
            "employees[*].email",
            "employees.email",
            "employees(1).email"
        ],
        correctAnswer: "employees[0].email",
        explanation: "Array index [0] targets the first element specifically.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q136",
        type: "yes-no",
        question: "Can you use a Transformation to calculate a mathematical sum (e.g., Price * Quantity)?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Yes, using Handlebars math helpers (like {{multiply price quantity}}) or JavaScript hooks within the transformation.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q137",
        type: "matching",
        question: "Match the Logic Helper to its description:",
        rows: [
            { id: 1, text: "Executes block if values are equal", correct: "compare / eq" },
            { id: 2, text: "Executes block if the value exists/is true", correct: "if" },
            { id: 3, text: "Executes block if the value is FALSE", correct: "unless" }
        ],
        options: ["compare / eq", "if", "unless"],
        explanation: "Compare checks equality. If checks truthiness. Unless checks falsiness (opposite of if).",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- SECTION 10: DATA FLOW ARCHITECTURE ---
    {
        id: "p5_q138",
        type: "multiple-choice",
        question: "What is the maximum concurrency level (number of simultaneous requests) for a single connection in Celigo?",
        options: ["5", "10", "25", "100"],
        correctAnswer: "25",
        explanation: "The platform limit is 25 concurrent requests per connection.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q139",
        type: "multiple-choice",
        question: "If you need more than 25 concurrent requests, what is a valid workaround?",
        options: [
            "Upgrade your internet plan.",
            "Create a second Connection to the same endpoint.",
            "It is impossible.",
            "Call support to unlock 'God Mode'."
        ],
        correctAnswer: "Create a second Connection to the same endpoint.",
        explanation: "Concurrency is per connection. Creating multiple connections allows you to scale beyond the single-connection limit (up to the app's own API limits).",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q140",
        type: "multiple-choice",
        question: "What happens to data if the 'Page Size' exceeds 5 MB?",
        options: [
            "It is automatically compressed.",
            "The flow will likely fail or require chunking adjustment.",
            "It is split into 1 KB files.",
            "Nothing happens."
        ],
        correctAnswer: "The flow will likely fail or require chunking adjustment.",
        explanation: "5 MB is the hard limit for a single page. Exceeding this usually triggers an error requiring smaller page sizes.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },

    // --- SECTION 22 & 25: API & SCRIPTS ---
    {
        id: "p5_q141",
        type: "multiple-choice",
        question: "Which HTTP method is typically NOT used when testing a Connection in the 'How to test this connection?' section?",
        options: ["GET", "POST", "PATCH", "PUT"],
        correctAnswer: "PATCH",
        explanation: "The connection tester supports GET, POST, and PUT, but typically excludes PATCH.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q142",
        type: "multiple-choice",
        question: "What is a 'Virtual Export'?",
        options: [
            "An export that only exists when being executed (often via API).",
            "A simulation of an export.",
            "A deleted export.",
            "An export to a VR headset."
        ],
        correctAnswer: "An export that only exists when being executed (often via API).",
        explanation: "Virtual exports/imports are resources defined at runtime via the API, rather than saved permanently in the UI.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p5_q143",
        type: "yes-no",
        question: "Do 'Stacks' allow you to host integration code on your own server?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Stacks allow extension code to run on AWS Lambda or your own hosted server.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p5_q144",
        type: "multiple-choice",
        question: "When creating a JavaScript API, what two items are absolutely necessary?",
        options: [
            "A Script and a Function name.",
            "A Database and a Table.",
            "An Export and an Import.",
            "A Username and Password."
        ],
        correctAnswer: "A Script and a Function name.",
        explanation: "You need the script file (resource) and the specific entry point function name within that script.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },

    // --- SECTION 6 & 7: MARKETPLACE & ACCOUNTS ---
    {
        id: "p5_q145",
        type: "multiple-choice",
        question: "How do you request a demo for an Integration App?",
        options: [
            "Click the 'Request demo' button on the app tile.",
            "Send a fax.",
            "Post on Twitter.",
            "Wait for them to call you."
        ],
        correctAnswer: "Click the 'Request demo' button on the app tile.",
        explanation: "The Marketplace tile provides a direct button to request a demo.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
    },
    {
        id: "p5_q146",
        type: "multiple-choice",
        question: "What information is needed to invite a new user to your Celigo account?",
        options: [
            "Their Phone Number and Address.",
            "Their Email Address and Role/Permissions.",
            "Their Social Security Number.",
            "Their favorite color."
        ],
        correctAnswer: "Their Email Address and Role/Permissions.",
        explanation: "You need the email to send the invite and the role to define their access level.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p5_q147",
        type: "multiple-choice",
        question: "Which user role can 'Monitor All' flows but typically cannot edit them?",
        options: ["Administrator", "Account User (Monitor All)", "Developer", "Manager"],
        correctAnswer: "Account User (Monitor All)",
        explanation: "The 'Monitor All' permission grants read-only access to view flows and errors without editing rights.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings", "Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },

    // --- SECTION 12: MAPPING NUANCES ---
    {
        id: "p5_q148",
        type: "multiple-choice",
        question: "What does the 'Auto-Preview' feature in the Mapping tool do?",
        options: [
            "Automatically runs the flow.",
            "Shows you how sample data will look after mapping is applied.",
            "Deletes the mapping.",
            "Maps fields automatically."
        ],
        correctAnswer: "Shows you how sample data will look after mapping is applied.",
        explanation: "The preview pane updates in real-time to show the result of your mapping logic on the sample input.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q149",
        type: "multiple-choice",
        question: "If you want to map a hardcoded boolean value 'true', how should you enter it?",
        options: [
            "\"true\" (with quotes)",
            "true (without quotes, checking the boolean box)",
            "YES",
            "1"
        ],
        correctAnswer: "true (without quotes, checking the boolean box)",
        explanation: "Boolean values should typically be entered as true/false booleans, not strings, depending on the destination API requirement.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q150",
        type: "short-answer",
        question: "What symbol allows you to reference a field name that contains spaces (e.g., 'First Name') in Handlebars?",
        options: [],
        correctAnswer: "[] (Square Brackets)",
        explanation: "Syntax: {{[First Name]}}",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },

    // --- SECTION 15: ERROR RESOLUTION ---
    {
        id: "p5_q151",
        type: "multiple-choice",
        question: "When an error is marked as 'Resolved' in the error list, what happens?",
        options: [
            "It is deleted immediately.",
            "It moves to the 'Resolved errors' tab.",
            "It is retried automatically.",
            "It is sent to the source."
        ],
        correctAnswer: "It moves to the 'Resolved errors' tab.",
        explanation: "Resolving an error clears it from the active error queue and archives it in the Resolved tab.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q152",
        type: "multiple-choice",
        question: "What is the difference between 'Retry' and 'Re-run'?",
        options: [
            "Retry processes the single failed record; Re-run executes the entire flow again.",
            "Retry is for imports; Re-run is for exports.",
            "There is no difference.",
            "Retry creates a duplicate."
        ],
        correctAnswer: "Retry processes the single failed record; Re-run executes the entire flow again.",
        explanation: "Retrying handles specific failed items. Re-running starts the whole job from the beginning (Source).",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q153",
        type: "multiple-choice",
        question: "Which of the following is a common cause of 'Governance' or 'Rate Limit' errors?",
        options: [
            "Sending too many requests too quickly.",
            "Wrong password.",
            "File too large.",
            "Invalid JSON."
        ],
        correctAnswer: "Sending too many requests too quickly.",
        explanation: "Rate limits are imposed by APIs to prevent abuse by limiting requests per minute/hour.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },

    // --- MIXED ADVANCED TOPICS ---
    {
        id: "p5_q154",
        type: "multiple-choice",
        question: "What is 'Integrator.io'?",
        options: [
            "The name of the Celigo platform.",
            "A calculator.",
            "A database.",
            "A coding language."
        ],
        correctAnswer: "The name of the Celigo platform.",
        explanation: "integrator.io is the product name for Celigo's iPaaS (Integration Platform as a Service).",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p5_q155",
        type: "yes-no",
        question: "Can you use a 'Custom Setting' (form) to allow end-users to input variables (like a date or email) before running a flow?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Integration settings/forms allow users to input dynamic values that can be referenced in the flow.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q156",
        type: "matching",
        question: "Match the API Authentication term to its description:",
        rows: [
            { id: 1, text: "Uses a username and password encoded in Base64", correct: "Basic Auth" },
            { id: 2, text: "Uses a long string generated by the server", correct: "Bearer Token" }
        ],
        options: ["Basic Auth", "Bearer Token"],
        explanation: "Basic Auth is User/Pass. Bearer Token is a token string included in the header.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p5_q157",
        type: "multiple-choice",
        question: "What does the 'Debug Log' provide?",
        options: [
            "Detailed request/response data for troubleshooting.",
            "A list of all users.",
            "A map of the world.",
            "The price of the integration."
        ],
        correctAnswer: "Detailed request/response data for troubleshooting.",
        explanation: "Debug logs show the exact payload sent and the response received, crucial for fixing errors.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q158",
        type: "multiple-choice",
        question: "Which feature allows you to revert an integration to a previous state?",
        options: ["Snapshots / Revisions", "Undo button", "Recycle Bin", "Time Machine"],
        correctAnswer: "Snapshots / Revisions",
        explanation: "The Revisions tab allows you to create snapshots and revert to them.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q159",
        type: "short-answer",
        question: "What is the HTTP Status Code for 'Not Found'?",
        options: [],
        correctAnswer: "404",
        explanation: "404 is the standard code for resource not found.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q160",
        type: "short-answer",
        question: "What is the HTTP Status Code for 'Internal Server Error'?",
        options: [],
        correctAnswer: "500",
        explanation: "500 indicates a server-side error.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },

    // --- SECTION 9 & 10 REVISITED: SOURCE & FLOW ---
    {
        id: "p5_q161",
        type: "multiple-choice",
        question: "When adding a source, if you cannot find your specific application in the list, which option should you choose?",
        options: ["HTTP / Universal Connector", "Cancel", "Email Celigo", "Use Salesforce"],
        correctAnswer: "HTTP / Universal Connector",
        explanation: "Universal connectors (HTTP, FTP, REST) are the fallback for any app not in the pre-built library.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p5_q162",
        type: "multiple-choice",
        question: "What acts as the trigger for a 'Real-time' flow?",
        options: ["A scheduler", "A webhook from the source application", "A manual button press", "A random number"],
        correctAnswer: "A webhook from the source application",
        explanation: "Real-time flows wait for the source app to send a message (webhook) indicating a change occurred.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q163",
        type: "yes-no",
        question: "Can a single flow have multiple sources?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Yes, you can add multiple exports/sources to a single flow to merge data.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q164",
        type: "multiple-choice",
        question: "What is the purpose of 'Group records by fields' in an export?",
        options: [
            "To aggregate multiple records into a single parent structure.",
            "To delete duplicates.",
            "To sort alphabetically.",
            "To filter data."
        ],
        correctAnswer: "To aggregate multiple records into a single parent structure.",
        explanation: "Grouping allows you to combine flat rows (e.g., Line Items) into a hierarchical structure (e.g., Order Header with children).",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },

    // --- SECTION 12: ARRAY MAPPING ---
    {
        id: "p5_q165",
        type: "multiple-choice",
        question: "If you have an array `items: [{id:1}, {id:2}]`, what does `items[*].id` return?",
        options: [
            "1",
            "2",
            "[1, 2] (An array of IDs)",
            "Error"
        ],
        correctAnswer: "[1, 2] (An array of IDs)",
        explanation: "The [*] wildcard maps the specific field from *every* object in the array, resulting in a new array of values.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q166",
        type: "multiple-choice",
        question: "When mapping to a destination array, what happens if you don't use the `[*]` syntax?",
        options: [
            "It will map only the first item or fail.",
            "It maps all items automatically.",
            "It deletes the array.",
            "It works perfectly."
        ],
        correctAnswer: "It will map only the first item or fail.",
        explanation: "Without `[*]`, Celigo typically treats the input as a single object, processing only index 0.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },

    // --- SECTION 23: PLAYGROUND ---
    {
        id: "p5_q167",
        type: "multiple-choice",
        question: "Which Playground tool helps you verify if your JSON path selector is correct?",
        options: ["Transform 2.0 / JSON Path tester", "SQL Builder", "CSV Parser", "Filter Editor"],
        correctAnswer: "Transform 2.0 / JSON Path tester",
        explanation: "This tool allows you to input JSON and test your path expression to see what it selects.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p5_q168",
        type: "yes-no",
        question: "Can you generate a 'CSV Parser' template in the Playground?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "The CSV parser helper in Playground lets you test parsing logic on sample text.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },

    // --- SECTION 25: JS API ---
    {
        id: "p5_q169",
        type: "multiple-choice",
        question: "What format must the data returned by a JavaScript API script be in?",
        options: ["JSON", "XML", "HTML", "Binary"],
        correctAnswer: "JSON",
        explanation: "Celigo expects a JSON object as the response payload.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p5_q170",
        type: "multiple-choice",
        question: "Where can you find the specific URL to invoke your JavaScript API?",
        options: [
            "In the 'Invoke URL' field of the API settings.",
            "On the homepage.",
            "In the connection settings.",
            "You have to guess."
        ],
        correctAnswer: "In the 'Invoke URL' field of the API settings.",
        explanation: "The unique endpoint URL is provided in the API resource configuration panel.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },

    // --- FINAL GENERAL KNOWLEDGE ---
    {
        id: "p5_q171",
        type: "multiple-choice",
        question: "What is an 'iClient'?",
        options: [
            "A tailored integration client for specific partners.",
            "An iPhone app.",
            "A customer support bot.",
            "A type of error."
        ],
        correctAnswer: "A tailored integration client for specific partners.",
        explanation: "iClients are specialized resources often used by partners or specific setups.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p5_q172",
        type: "multiple-choice",
        question: "Where do you go to view the 'Audit Log' of a flow (who changed what)?",
        options: ["Revisions / Audit Log tab", "Dashboard", "Marketplace", "Help Center"],
        correctAnswer: "Revisions / Audit Log tab",
        explanation: "The audit log tracks configuration changes and user actions.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q173",
        type: "multiple-choice",
        question: "What is 'Borrow Concurrency'?",
        options: [
            "Using connection capacity from another connection to speed up a flow.",
            "Stealing data.",
            "Using free wifi.",
            "Running flows offline."
        ],
        correctAnswer: "Using connection capacity from another connection to speed up a flow.",
        explanation: "It allows a connection to utilize unused concurrency slots from another connection to optimize performance.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q174",
        type: "multiple-choice",
        question: "If you need to connect to a SOAP API, which content type is usually required?",
        options: ["XML", "JSON", "YAML", "CSV"],
        correctAnswer: "XML",
        explanation: "SOAP APIs almost exclusively use XML for their message body.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q175",
        type: "short-answer",
        question: "What is the default HTTP method for a SOAP request?",
        options: [],
        correctAnswer: "POST",
        explanation: "SOAP requests are sent via POST.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q176",
        type: "matching",
        question: "Match the error category to a potential cause:",
        rows: [
            { id: 1, text: "Credentials invalid / Expired token", correct: "Connection / Auth Error" },
            { id: 2, text: "JSON syntax is wrong", correct: "Data / Parse Error" },
            { id: 3, text: "Server is down temporarily", correct: "Intermittent Error" }
        ],
        options: ["Connection / Auth Error", "Data / Parse Error", "Intermittent Error"],
        explanation: "Auth is connection. Syntax is data parsing. Temporary downtime is intermittent.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q177",
        type: "yes-no",
        question: "Can you customize the notification email settings for errors?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "You can subscribe to error notifications and customize who receives them.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q178",
        type: "multiple-choice",
        question: "What does the 'Pin' feature on the homepage do?",
        options: [
            "Keeps an integration at the top of your list for easy access.",
            "Locks the integration.",
            "Deletes the integration.",
            "Shares the integration."
        ],
        correctAnswer: "Keeps an integration at the top of your list for easy access.",
        explanation: "Pinning saves the integration to the top of your dashboard.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p5_q179",
        type: "multiple-choice",
        question: "What is the main function of the 'Copilot AI'?",
        options: [
            "To help build flows, write regex/handlebars, and answer questions.",
            "To run the flows for you.",
            "To sell data.",
            "To play games."
        ],
        correctAnswer: "To help build flows, write regex/handlebars, and answer questions.",
        explanation: "Copilot is the AI assistant for configuration help.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p5_q180",
        type: "multiple-choice",
        question: "If you want to 'Split' a single record into multiple records (e.g., one order -> multiple line items), which option do you check?",
        options: ["One to Many", "Many to One", "Merge", "Filter"],
        correctAnswer: "One to Many",
        explanation: "The 'One to Many' setting allows an import to iterate over a child array and create a record for each item.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    // --- SECTION 18 & 22: DEEP API & AUTH ---
    {
        id: "p5_q181",
        type: "multiple-choice",
        question: "What is the primary function of an 'API Gateway' in the context of Celigo connections?",
        options: [
            "It acts as the entry point that accepts API requests and routes them to the correct service.",
            "It acts as a database.",
            "It encrypts the internet.",
            "It generates passwords."
        ],
        correctAnswer: "It acts as the entry point that accepts API requests and routes them to the correct service.",
        explanation: "The API Gateway manages traffic, routing, and throttling for API requests.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p5_q182",
        type: "matching",
        question: "Match the Status Code to its general category:",
        rows: [
            { id: 1, text: "Success (e.g., OK, Created)", correct: "2xx" },
            { id: 2, text: "Client Error (e.g., Bad Request, Unauthorized)", correct: "4xx" },
            { id: 3, text: "Server Error (e.g., Internal Server Error)", correct: "5xx" }
        ],
        options: ["2xx", "4xx", "5xx"],
        explanation: "200s are success, 400s are client errors (my fault), 500s are server errors (their fault).",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q183",
        type: "multiple-choice",
        question: "If an API requires a 'Custom Header' for authentication (e.g., `x-api-key`), where do you configure this?",
        options: [
            "In the Connection settings under 'Configure HTTP Headers'.",
            "In the Export filter.",
            "In the Mapping.",
            "In the Dashboard."
        ],
        correctAnswer: "In the Connection settings under 'Configure HTTP Headers'.",
        explanation: "Custom headers are typically defined in the connection configuration to apply to all requests.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q184",
        type: "yes-no",
        question: "Does the Celigo platform support 'GraphQL' connections?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Yes, Celigo has Universal connectors for GraphQL.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p5_q185",
        type: "multiple-choice",
        question: "What is the maximum life span of an Auto-purge API token?",
        options: ["30 days", "1 year", "24 hours", "Forever"],
        correctAnswer: "30 days",
        explanation: "For security, auto-purge tokens max out at 30 days.",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },

    // --- SECTION 24: ADVANCED HANDLEBARS & LOGIC ---
    {
        id: "p5_q186",
        type: "multiple-choice",
        question: "Which Handlebars helper converts a string to all lowercase?",
        options: ["{{lowercase value}}", "{{down value}}", "{{small value}}", "{{min value}}"],
        correctAnswer: "{{lowercase value}}",
        explanation: "The {{lowercase}} helper converts text to lowercase.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q187",
        type: "multiple-choice",
        question: "How do you 'Trim' whitespace from a string using Handlebars?",
        options: ["{{trim value}}", "{{cut value}}", "{{clean value}}", "{{strip value}}"],
        correctAnswer: "{{trim value}}",
        explanation: "The {{trim}} helper removes leading and trailing whitespace.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q188",
        type: "multiple-choice",
        question: "Which helper is used to format a date string (e.g., changing '2023-01-01' to '01/01/2023')?",
        options: ["{{dateFormat}}", "{{dateFix}}", "{{timeChange}}", "{{calendar}}"],
        correctAnswer: "{{dateFormat}}",
        explanation: "{{dateFormat}} is the standard helper for date manipulation.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q189",
        type: "multiple-choice",
        question: "If you need to perform complex logic that standard Handlebars cannot handle, what should you use?",
        options: [
            "A Custom JavaScript Hook.",
            "A bigger font.",
            "A different browser.",
            "Standard mapping."
        ],
        correctAnswer: "A Custom JavaScript Hook.",
        explanation: "Hooks allow full JavaScript capabilities when templating isn't enough.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- SECTION 15: SCENARIO-BASED TROUBLESHOOTING ---
    {
        id: "p5_q190",
        type: "multiple-choice",
        question: "Scenario: You see a '502 Bad Gateway' error. Is this typically an issue with your JSON data or the destination server?",
        options: [
            "Destination Server / Network.",
            "Your JSON Data.",
            "Your Celigo Password.",
            "Your Mapping."
        ],
        correctAnswer: "Destination Server / Network.",
        explanation: "502 is a server-side networking error, usually indicating the upstream server is down or unreachable.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q191",
        type: "multiple-choice",
        question: "Scenario: A flow fails with 'Invalid JSON'. What is the most likely cause?",
        options: [
            "A syntax error in your Handlebars template (e.g., missing a quote or comma).",
            "The internet is down.",
            "The API key is expired.",
            "The file is too large."
        ],
        correctAnswer: "A syntax error in your Handlebars template (e.g., missing a quote or comma).",
        explanation: "Invalid JSON usually means the generated payload has broken syntax (extra commas, unclosed braces).",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q192",
        type: "yes-no",
        question: "If an error is 'Intermittent' (e.g., timeout), is it safe to retry it?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Intermittent errors are temporary; retrying is the standard resolution.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q193",
        type: "multiple-choice",
        question: "What does 'Purge' do in the context of Lookup Caches or Data?",
        options: [
            "Permanently deletes the data immediately.",
            "Archives it.",
            "Compresses it.",
            "Encrypts it."
        ],
        correctAnswer: "Permanently deletes the data immediately.",
        explanation: "Purging permanently removes the resource or data.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },

    // --- SECTION 10 & 13: FLOW ARCHITECTURE ---
    {
        id: "p5_q194",
        type: "multiple-choice",
        question: "What is the 'Recycle Bin' retention period?",
        options: ["30 days", "60 days", "90 days", "7 days"],
        correctAnswer: "30 days",
        explanation: "Items in the recycle bin are permanently deleted after 30 days.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q195",
        type: "multiple-choice",
        question: "Can you 'Clone' an entire Integration?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Cloning an integration copies all its flows and settings (useful for moving between environments).",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q196",
        type: "multiple-choice",
        question: "What is a 'Pre-built Connector'?",
        options: [
            "A connector optimized for a specific app (e.g., Shopify) with preset settings.",
            "A universal HTTP connector.",
            "A custom script.",
            "A database."
        ],
        correctAnswer: "A connector optimized for a specific app (e.g., Shopify) with preset settings.",
        explanation: "Pre-built connectors are named after the app (Salesforce, NetSuite) and handle specific auth/API nuances automatically.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },

    // --- SECTION 19: FTP DETAILS ---
    {
        id: "p5_q197",
        type: "multiple-choice",
        question: "In FTP, what does 'Row Delimiter' define?",
        options: [
            "The character that separates one record from another (usually a new line).",
            "The character that separates fields (commas).",
            "The password.",
            "The file name."
        ],
        correctAnswer: "The character that separates one record from another (usually a new line).",
        explanation: "Row delimiters (like `\n`) tell the parser where one record ends and the next begins.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q198",
        type: "multiple-choice",
        question: "Which 'File Encoding' is the default for most FTP transfers in Celigo?",
        options: ["UTF-8", "ASCII", "Binary", "ISO-8859-1"],
        correctAnswer: "UTF-8",
        explanation: "UTF-8 is the standard default encoding.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p5_q199",
        type: "multiple-choice",
        question: "If you want to ensure an FTP file is NOT deleted after export (e.g., for backup), which setting do you check?",
        options: [
            "Leave file on server",
            "Delete file",
            "Archive file",
            "Ignore file"
        ],
        correctAnswer: "Leave file on server",
        explanation: "Checking 'Leave file on server' overrides the default deletion behavior.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },

    // --- SECTION 7: USER ROLES ---
    {
        id: "p5_q200",
        type: "multiple-choice",
        question: "Can a 'Monitor All' user edit a flow mapping?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Monitor All is a read-only role; they cannot change configurations.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p5_q201",
        type: "multiple-choice",
        question: "Who receives the email notification for a failed flow by default?",
        options: [
            "The user(s) subscribed to notifications for that flow/integration.",
            "Everyone in the company.",
            "Only the CEO.",
            "No one."
        ],
        correctAnswer: "The user(s) subscribed to notifications for that flow/integration.",
        explanation: "Notifications are subscription-based.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },

    // --- SECTION 23: ADVANCED TOOLS ---
    {
        id: "p5_q202",
        type: "multiple-choice",
        question: "What does the 'XML Parser Helper' in the Playground do?",
        options: [
            "Converts XML to JSON for testing.",
            "Converts JSON to XML.",
            "Validates XML syntax.",
            "Deletes XML."
        ],
        correctAnswer: "Converts XML to JSON for testing.",
        explanation: "It helps you visualize how XML data will be parsed into JSON objects.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p5_q203",
        type: "multiple-choice",
        question: "Which tool allows you to build a visual form for 'User Settings'?",
        options: ["Form Builder", "Script Editor", "SQL Editor", "Paint"],
        correctAnswer: "Form Builder",
        explanation: "Form Builder is an AFE used to create the UI for custom integration settings.",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },

    // --- SECTION 18: HTTP & REST ---
    {
        id: "p5_q204",
        type: "multiple-choice",
        question: "What is a 'Bearer Token' typically used for?",
        options: [
            "OAuth 2.0 / Token-based Authentication.",
            "Basic Auth.",
            "FTP Login.",
            "Database Query."
        ],
        correctAnswer: "OAuth 2.0 / Token-based Authentication.",
        explanation: "Bearer tokens are the standard credential string used in modern API auth headers.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q205",
        type: "multiple-choice",
        question: "If an API Rate Limit is exceeded, what header does the server often send to tell you when to try again?",
        options: ["Retry-After", "Wait-Time", "Stop-Now", "Go-Away"],
        correctAnswer: "Retry-After",
        explanation: "The `Retry-After` header specifies the seconds to wait before making a new request.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q206",
        type: "yes-no",
        question: "Can you use 'Borrow Concurrency' from a connection that is currently offline?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "The connection must be active and valid to manage concurrency queues.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },

    // --- SECTION 25: JS & STACKS ---
    {
        id: "p5_q207",
        type: "multiple-choice",
        question: "What is the main benefit of using a 'Stack'?",
        options: [
            "It allows you to run custom code in a serverless environment (Lambda) extended from Celigo.",
            "It is cheaper.",
            "It is faster.",
            "It has no benefit."
        ],
        correctAnswer: "It allows you to run custom code in a serverless environment (Lambda) extended from Celigo.",
        explanation: "Stacks provide a bridge to external compute power for heavy custom logic.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p5_q208",
        type: "multiple-choice",
        question: "When editing a Script in Celigo, what does the 'Function Stub' provide?",
        options: [
            "The basic code structure/template required for that specific hook type.",
            "A virus.",
            "A full tutorial.",
            "Nothing."
        ],
        correctAnswer: "The basic code structure/template required for that specific hook type.",
        explanation: "The stub gives you the `function run(options) { ... }` boilerplate.",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },

    // --- SECTION 12: MAPPING WRAP-UP ---
    {
        id: "p5_q209",
        type: "multiple-choice",
        question: "What allows you to map a field based on a 'Regular Expression' (Regex)?",
        options: [
            "Transformation / Handlebars Helper (regex match/replace).",
            "Basic Mapping.",
            "Lookup.",
            "Filter."
        ],
        correctAnswer: "Transformation / Handlebars Helper (regex match/replace).",
        explanation: "Regex operations are typically handled via transformation helpers.",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p5_q210",
        type: "short-answer",
        question: "In Mapper 2.0, what icon represents a 'Handlebars Expression' mapping type?",
        options: [],
        correctAnswer: "E",
        explanation: "The interface typically uses an 'E' or specific icon to denote Expression mode.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },

    // --- GENERAL BEST PRACTICES ---
    {
        id: "p5_q211",
        type: "multiple-choice",
        question: "Why is it recommended to create a NEW connection for a new flow rather than reusing one indiscriminately?",
        options: [
            "To avoid 'Side Effects' where changing settings for one flow breaks another.",
            "It costs more money.",
            "It is required by law.",
            "It looks better."
        ],
        correctAnswer: "To avoid 'Side Effects' where changing settings for one flow breaks another.",
        explanation: "Isolating connections prevents accidental breakage when modifying settings for a specific use case.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q212",
        type: "multiple-choice",
        question: "What is the 'Help Center' best used for?",
        options: [
            "Finding documentation, guides, and submitting support tickets.",
            "Chatting with friends.",
            "Watching movies.",
            "Buying products."
        ],
        correctAnswer: "Finding documentation, guides, and submitting support tickets.",
        explanation: "The Help Center is the repository for all technical documentation and support.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p5_q213",
        type: "multiple-choice",
        question: "What is the 'Community' (Celigo Connective) used for?",
        options: [
            "Asking other users for help/advice and sharing solutions.",
            "Submitting official bugs.",
            "Resetting passwords.",
            "Hosting files."
        ],
        correctAnswer: "Asking other users for help/advice and sharing solutions.",
        explanation: "The community forum is for peer-to-peer assistance.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p5_q214",
        type: "multiple-choice",
        question: "If you have a 'Time-out' error, what is a potential fix?",
        options: [
            "Reduce the Page Size or Concurrency.",
            "Increase the data volume.",
            "Run it faster.",
            "Delete the connection."
        ],
        correctAnswer: "Reduce the Page Size or Concurrency.",
        explanation: "Timeouts often happen when the server takes too long to process a large batch. Reducing batch/page size helps.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q215",
        type: "yes-no",
        question: "Can you 'Pause' a flow that is currently running?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "You can stop/cancel a running job from the dashboard.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },

    // --- FINAL MIXED REVIEW ---
    {
        id: "p5_q216",
        type: "multiple-choice",
        question: "What is a 'Webhook'?",
        options: [
            "A mechanism for an app to provide real-time information to other apps.",
            "A type of spider.",
            "A database query.",
            "A login form."
        ],
        correctAnswer: "A mechanism for an app to provide real-time information to other apps.",
        explanation: "Webhooks are automated messages sent from apps when something happens.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p5_q217",
        type: "multiple-choice",
        question: "What does 'HMAC' stand for?",
        options: [
            "Hash-Based Message Authentication Code.",
            "Hyper Text Markup Access Code.",
            "High Memory Access Control.",
            "Home Made Apple Cider."
        ],
        correctAnswer: "Hash-Based Message Authentication Code.",
        explanation: "HMAC is a cryptographic method used for verifying webhooks.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q218",
        type: "multiple-choice",
        question: "Which of these is NOT a standard HTTP method?",
        options: ["GET", "POST", "JUMP", "DELETE"],
        correctAnswer: "JUMP",
        explanation: "JUMP is not a valid HTTP verb.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q219",
        type: "multiple-choice",
        question: "In a 'One-to-Many' import, what is the 'Path to Many'?",
        options: [
            "The JSON path to the array containing the child records.",
            "The path to the API.",
            "The login URL.",
            "The error file."
        ],
        correctAnswer: "The JSON path to the array containing the child records.",
        explanation: "This path tells Celigo which array in the source data contains the items to iterate over.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q220",
        type: "multiple-choice",
        question: "What does the 'Run Console' show?",
        options: [
            "The real-time status and logs of the current or most recent execution.",
            "A list of all users.",
            "The billing info.",
            "The marketplace."
        ],
        correctAnswer: "The real-time status and logs of the current or most recent execution.",
        explanation: "The Run Console provides immediate feedback on the active job.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q221",
        type: "multiple-choice",
        question: "Which feature allows you to 'Ignore' specific errors so they don't clutter your dashboard?",
        options: ["Ignore Error", "Delete Flow", "Hide Dashboard", "Filter View"],
        correctAnswer: "Ignore Error",
        explanation: "You can mark specific errors as ignored if they are not actionable.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p5_q222",
        type: "yes-no",
        question: "Does Celigo support 'EDI' (Electronic Data Interchange)?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Celigo supports EDI integrations (X12, EDIFACT) via specific connectors/apps.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p5_q223",
        type: "short-answer",
        question: "What is the term for a pre-packaged integration solution managed by Celigo?",
        options: [],
        correctAnswer: "Integration App (IA)",
        explanation: "IAs are fully managed, turnkey solutions.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
    },
    {
        id: "p5_q224",
        type: "multiple-choice",
        question: "What is the 'Sandbox' environment used for?",
        options: [
            "End-to-end development and testing without affecting production.",
            "Playing games.",
            "Storing archived data.",
            "Running production flows."
        ],
        correctAnswer: "End-to-end development and testing without affecting production.",
        explanation: "Sandboxes are isolated environments for safe testing.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p5_q225",
        type: "multiple-choice",
        question: "Which 'Export Type' requires a boolean field to track status?",
        options: ["Once", "All", "Delta", "Limit"],
        correctAnswer: "Once",
        explanation: "The 'Once' export needs a field to write back 'true' to indicate the record has been processed.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p5_q226",
        type: "multiple-choice",
        question: "What is the 'Base URI'?",
        options: [
            "The root URL common to all API endpoints (e.g., https://api.service.com).",
            "The username.",
            "The password.",
            "The file path."
        ],
        correctAnswer: "The root URL common to all API endpoints (e.g., https://api.service.com).",
        explanation: "Base URI is the foundation of the API address.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q227",
        type: "multiple-choice",
        question: "What is 'Form-Data'?",
        options: [
            "A way to encode key-value pairs, often used for file uploads.",
            "A database.",
            "A paper form.",
            "A type of cheese."
        ],
        correctAnswer: "A way to encode key-value pairs, often used for file uploads.",
        explanation: "Multipart/form-data is the standard encoding for forms that include files.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q228",
        type: "multiple-choice",
        question: "What is a 'Relative URI'?",
        options: [
            "The specific path appended to the Base URI (e.g., /v1/customers).",
            "A relative's address.",
            "The login page.",
            "The error page."
        ],
        correctAnswer: "The specific path appended to the Base URI (e.g., /v1/customers).",
        explanation: "Relative URI points to the specific resource resource.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q229",
        type: "multiple-choice",
        question: "What does 'CRUD' stand for?",
        options: [
            "Create, Read, Update, Delete",
            "Copy, Run, Undo, Do",
            "Call, Return, Update, Dial",
            "Code, Run, Use, Debug"
        ],
        correctAnswer: "Create, Read, Update, Delete",
        explanation: "CRUD represents the four basic functions of persistent storage.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p5_q230",
        type: "multiple-choice",
        question: "Which HTTP method corresponds to the 'Read' in CRUD?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "GET",
        explanation: "GET is used to Read/Retrieve data.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q231",
        type: "multiple-choice",
        question: "Which HTTP method corresponds to the 'Create' in CRUD?",
        options: ["POST", "GET", "PUT", "DELETE"],
        correctAnswer: "POST",
        explanation: "POST is typically used to Create new records.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p5_q232",
        type: "multiple-choice",
        question: "What is the 'Audit Log' useful for?",
        options: [
            "Tracking who made changes to an integration and when.",
            "Viewing errors.",
            "Seeing the data payload.",
            "Checking API limits."
        ],
        correctAnswer: "Tracking who made changes to an integration and when.",
        explanation: "Audit logs provide governance and history of configuration changes.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q233",
        type: "multiple-choice",
        question: "If you want to 'Unmerge' a branch, what icon do you click?",
        options: [
            "The broken link icon next to the branch.",
            "The trash can.",
            "The plus sign.",
            "The save button."
        ],
        correctAnswer: "The broken link icon next to the branch.",
        explanation: "This icon disconnects the merged path.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q234",
        type: "multiple-choice",
        question: "What does 'Parsing' mean?",
        options: [
            "Analyzing a string of symbols (like a file) and converting it into a structured format (like JSON).",
            "Deleting data.",
            "Sending an email.",
            "Encrypting data."
        ],
        correctAnswer: "Analyzing a string of symbols (like a file) and converting it into a structured format (like JSON).",
        explanation: "Parsing is the process of turning raw text (CSV, XML) into usable data objects.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p5_q235",
        type: "multiple-choice",
        question: "What is a 'Composite' import?",
        options: [
            "An import that performs multiple actions (e.g., Create OR Update) based on logic.",
            "A single file import.",
            "A failed import.",
            "A slow import."
        ],
        correctAnswer: "An import that performs multiple actions (e.g., Create OR Update) based on logic.",
        explanation: "Composite operations handle complex logic like 'Create if new, Update if exists' or handling dependent records.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q236",
        type: "multiple-choice",
        question: "What is the 'Tools' menu used for?",
        options: [
            "Accessing utilities like Data Loader, Playground, and API Builder.",
            "Logging out.",
            "Changing passwords.",
            "Viewing billing."
        ],
        correctAnswer: "Accessing utilities like Data Loader, Playground, and API Builder.",
        explanation: "The Tools menu houses the utility apps.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p5_q237",
        type: "multiple-choice",
        question: "What is 'AS2'?",
        options: [
            "A secure protocol for transferring data (often EDI) over the internet.",
            "A robot.",
            "A coding language.",
            "A database."
        ],
        correctAnswer: "A secure protocol for transferring data (often EDI) over the internet.",
        explanation: "AS2 is a common B2B messaging protocol supported by Celigo.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p5_q238",
        type: "multiple-choice",
        question: "What is the 'Subscription' page for?",
        options: [
            "Managing licenses, limits, and billing.",
            "Subscribing to newsletters.",
            "Watching videos.",
            "Chatting."
        ],
        correctAnswer: "Managing licenses, limits, and billing.",
        explanation: "This is where admins manage plan details.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p5_q239",
        type: "multiple-choice",
        question: "What is 'Environment' in Celigo?",
        options: [
            "The workspace (e.g., Production, Sandbox) you are currently working in.",
            "The weather.",
            "The office.",
            "The internet."
        ],
        correctAnswer: "The workspace (e.g., Production, Sandbox) you are currently working in.",
        explanation: "You can toggle between different environments (Prod vs Sandbox) via the top menu.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p5_q240",
        type: "multiple-choice",
        question: "If you delete a flow, can you restore it?",
        options: [
            "Yes, from the Recycle Bin (within 30 days).",
            "No, it is gone forever immediately.",
            "Yes, anytime forever.",
            "Only if you pay."
        ],
        correctAnswer: "Yes, from the Recycle Bin (within 30 days).",
        explanation: "The Recycle Bin provides a 30-day safety net.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p5_q241",
        type: "multiple-choice",
        question: "You need to schedule a flow to run exactly on the 1st and 15th day of every month at 8:00 AM. Which schedule type must you select to define this specific pattern?",
        options: ["Preset", "Cron expression", "On-demand", "Webhook"],
        correctAnswer: "Cron expression",
        explanation: "Standard 'Preset' options (like Daily or Weekly) cannot handle specific dates like '1st and 15th'. You must use a Cron expression (e.g., '0 8 1,15 * *') for this custom logic.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p5_q242",
        type: "multiple-choice",
        question: "You want to quickly set up a flow to run simply 'Every 15 minutes' without writing any code or complex syntax. Which schedule type should you choose?",
        options: ["Preset", "Cron expression", "Manual", "Real-time"],
        correctAnswer: "Preset",
        explanation: "The 'Preset' option provides a dropdown list of common, ready-to-use intervals like 'Every 15 mins', 'Hourly', or 'Daily'.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p5_q243",
        type: "matching",
        question: "Match the scenario to the correct Schedule Type:",
        rows: [
            { id: 1, text: "Run every Monday at 9:00 AM", correct: "Preset" },
            { id: 2, text: "Run every weekday (Mon-Fri) but not weekends", correct: "Cron expression" }
        ],
        options: ["Preset", "Cron expression"],
        explanation: "Simple weekly schedules are available in Presets. Complex logic like 'Weekdays only' requires a Cron expression (e.g., '* * * * 1-5').",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p5_q244",
        type: "multiple-choice",
        question: "In the Flow Schedule window, if you select 'Cron expression', how many fields (positions) must you define to set the time and date?",
        options: ["3 fields", "5 fields", "10 fields", "2 fields"],
        correctAnswer: "5 fields",
        explanation: "A standard Cron expression in Celigo uses 5 fields: Minute, Hour, Day of Month, Month, and Day of Week.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    }
];