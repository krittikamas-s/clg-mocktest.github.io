const part7Questions = [
    // --- CHAPTER 1: SOURCE (10 Questions) ---
    {
        id: "p7_q1",
        type: "multiple-choice",
        question: "Which source type is considered 'Event-driven' and triggers as soon as data is updated in the source app?",
        options: ["Standard Export", "Webhook Listener", "FTP Export", "Delta Export"],
        correctAnswer: "Webhook Listener",
        explanation: "Webhook Listeners are real-time and trigger immediately upon data changes.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q2",
        type: "yes-no",
        question: "Does a Delta Export retrieve all records every time the flow runs?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Delta Export only retrieves records modified since the last successful run.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q3",
        type: "matching",
        question: "Match the Export Type to its behavior:",
        rows: [
            { id: 1, text: "All", correct: "Fetches everything" },
            { id: 2, text: "Delta", correct: "Fetches modified only" },
            { id: 3, text: "Once", correct: "Fetches unique records once" }
        ],
        options: ["Fetches everything", "Fetches modified only", "Fetches unique records once", "Fetches 10 records"],
        explanation: "All = everything, Delta = changes, Once = non-processed records.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q4",
        type: "short-answer",
        question: "What is the name of the process that verifies a Webhook is legitimate before processing?",
        options: [],
        correctAnswer: "Verification",
        explanation: "Verification ensures the webhook is from a trusted source.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q5",
        type: "multiple-select",
        question: "Which of the following are valid authentication types for connections? (Select 2)",
        options: ["OAuth 2.0", "Basic", "Delta", "Cron"],
        correctAnswer: ["OAuth 2.0", "Basic"],
        explanation: "OAuth 2.0 and Basic are common authentication methods.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q6",
        type: "multiple-choice",
        question: "Where do you configure the API credentials for a Source?",
        options: ["Transformation", "Connection", "Mapping", "Filter"],
        correctAnswer: "Connection",
        explanation: "Connections store the credentials needed to access applications.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q7",
        type: "yes-no",
        question: "Is it possible to limit the number of records retrieved in a Test run?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "You can use the 'Limit' field to restrict records for testing.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q8",
        type: "short-answer",
        question: "A source that runs on a schedule or manual trigger is called a ______ Export.",
        options: [],
        correctAnswer: "Standard",
        explanation: "Standard Exports are batch-based and non-real-time.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q9",
        type: "multiple-choice",
        question: "Which field in the Export configuration allows you to filter data at the source application level?",
        options: ["Post-submit filter", "Where clause / Query", "Mapping", "Response mapping"],
        correctAnswer: "Where clause / Query",
        explanation: "A query or 'where' clause filters data before it enters Celigo.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q10",
        type: "yes-no",
        question: "Can one flow have multiple Source exports?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "A flow can contain multiple exports acting as independent sources.",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },

    // --- CHAPTER 2: DATA FLOW (10 Questions) ---
    {
        id: "p7_q11",
        type: "short-answer",
        question: "What is the default page size (number of records) in Celigo?",
        options: [],
        correctAnswer: "20",
        explanation: "Celigo processes records in chunks of 20 by default.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q12",
        type: "multiple-choice",
        question: "What is the maximum file size per page allowed in Celigo?",
        options: ["1 MB", "5 MB", "10 MB", "100 MB"],
        correctAnswer: "5 MB",
        explanation: "Each page is capped at 5 MB to ensure stability.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q13",
        type: "yes-no",
        question: "If an export has multiple pages, do they process sequentially by default?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Celigo can process pages in parallel for speed.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q14",
        type: "short-answer",
        question: "What is the term for breaking large data sets into smaller 'pages'?",
        options: [],
        correctAnswer: "Chunking",
        explanation: "Chunking makes data manageable for the platform.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q15",
        type: "multiple-select",
        question: "Which factors affect data flow performance? (Select 2)",
        options: ["Page Size", "Concurrency Level", "Handlebars Color", "Flow Name"],
        correctAnswer: ["Page Size", "Concurrency Level"],
        explanation: "Page size and concurrency determine how much data is handled at once.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q16",
        type: "multiple-choice",
        question: "In which format does Celigo internally process most data?",
        options: ["XML", "JSON", "CSV", "Excel"],
        correctAnswer: "JSON",
        explanation: "Celigo uses JSON (JavaScript Object Notation) for internal processing.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q17",
        type: "yes-no",
        question: "Can you change the Page Size to 100?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Page size is configurable depending on the API limits.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q18",
        type: "matching",
        question: "Match the concept to the limit:",
        rows: [
            { id: 1, text: "Default Page Records", correct: "20" },
            { id: 2, text: "Max Page Size (MB)", correct: "5" }
        ],
        options: ["20", "5", "10", "100"],
        explanation: "Default records is 20, max size is 5MB.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q19",
        type: "short-answer",
        question: "What do you call the process of sending data from Celigo to an external application?",
        options: [],
        correctAnswer: "Import",
        explanation: "Imports write data to a destination.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q20",
        type: "multiple-choice",
        question: "If a record fails in a page, what happens to other records in the same page?",
        options: ["All fail", "Others continue", "Flow stops", "Celigo deletes them"],
        correctAnswer: "Others continue",
        explanation: "Failures are usually record-level; others finish processing.",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },

    // --- CHAPTER 3: DESTINATION & LOOKUP (10 Questions) ---
    {
        id: "p7_q21",
        type: "yes-no",
        question: "Can a Lookup step be used to add data to an existing record in the flow?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Lookups fetch additional data to enrich the flow records.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q22",
        type: "multiple-choice",
        question: "Which of these CANNOT be the final step of a flow?",
        options: ["Import", "Lookup", "Script Hook", "File Export"],
        correctAnswer: "Lookup",
        explanation: "A flow must end with a destination (Import/Export).",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q23",
        type: "short-answer",
        question: "What is the mapping called that tells Celigo what to do with data returned from a lookup?",
        options: [],
        correctAnswer: "Results Mapping",
        explanation: "Results mapping maps lookup data into the record.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q24",
        type: "multiple-select",
        question: "Which actions can an Import step perform? (Select 2)",
        options: ["Add record", "Update record", "Run a filter", "Delete source data"],
        correctAnswer: ["Add record", "Update record"],
        explanation: "Imports primarily add or update destination data.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q25",
        type: "yes-no",
        question: "Is 'Transfer Files' a type of Import?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Transferring files from source to destination is an Import action.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q26",
        type: "multiple-choice",
        question: "What happens if a Dynamic Lookup finds multiple matches?",
        options: ["Error", "Picks first match", "Picks all matches", "Deletes data"],
        correctAnswer: "Picks first match",
        explanation: "By default, Lookups return the first matching record.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q27",
        type: "short-answer",
        question: "What mapping handles the ID or status returned by a destination application AFTER an import?",
        options: [],
        correctAnswer: "Response Mapping",
        explanation: "Response mapping processes destination feedback.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q28",
        type: "matching",
        question: "Match the component to its purpose:",
        rows: [
            { id: 1, text: "Import", correct: "Writes data" },
            { id: 2, text: "Lookup", correct: "Enriches data" }
        ],
        options: ["Writes data", "Enriches data", "Filters data", "Deletes flow"],
        explanation: "Import writes; Lookup adds more info.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q29",
        type: "multiple-choice",
        question: "Where do you configure 'Ignore existing records'?",
        options: ["Export", "Import Configuration", "Connection", "Scheduling"],
        correctAnswer: "Import Configuration",
        explanation: "This is a setting within the destination/import step.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q30",
        type: "yes-no",
        question: "Can a lookup be used to retrieve data from a Google Sheet?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Lookups can connect to any application supported by a connector.",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },

    // --- CHAPTER 4: MAPPING & FIELD MAPPING (10 Questions) ---
    {
        id: "p7_q31",
        type: "multiple-choice",
        question: "Which index refers to the first item in a Celigo array?",
        options: ["1", "0", "-1", "First"],
        correctAnswer: "0",
        explanation: "Arrays are zero-indexed.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q32",
        type: "short-answer",
        question: "What is the name of the expression language used for complex mappings (e.g., {{field}})?",
        options: [],
        correctAnswer: "Handlebars",
        explanation: "Handlebars are used for dynamic field mapping.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q33",
        type: "matching",
        question: "Match the mapping type:",
        rows: [
            { id: 1, text: "Standard", correct: "Field to Field" },
            { id: 2, text: "Hard-coded", correct: "Constant Value" }
        ],
        options: ["Field to Field", "Constant Value", "Script", "Lookup"],
        explanation: "Standard maps source to destination; Hard-coded is a fixed value.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q34",
        type: "yes-no",
        question: "Is 'Lookup Cache' available in Mapper 1.0?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Lookup Cache is a feature of Mapper 2.0.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q35",
        type: "multiple-choice",
        question: "Which mapping type is best for converting 'US' to 'United States' using a fixed table?",
        options: ["Dynamic Lookup", "Static Lookup", "Hard-coded", "JSON Path"],
        correctAnswer: "Static Lookup",
        explanation: "Static lookups use a predefined mapping table.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q36",
        type: "short-answer",
        question: "What symbol is used to represent the root of a JSON object in JSON Path?",
        options: [],
        correctAnswer: "$",
        explanation: "The dollar sign represents the root in JSON Path.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q37",
        type: "yes-no",
        question: "Does dynamic lookup search the destination application in real-time?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Dynamic lookups query the app during the flow run.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q38",
        type: "multiple-select",
        question: "Which of the following can be done in field mapping? (Select 2)",
        options: ["Rename fields", "Discard fields", "Schedule flows", "Change passwords"],
        correctAnswer: ["Rename fields", "Discard fields"],
        explanation: "Mapping allows renaming or excluding data fields.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q39",
        type: "multiple-choice",
        question: "If you want to send the current date in every record, which mapping is best?",
        options: ["Standard", "Hard-coded", "Handlebars with Date helper", "Dynamic Lookup"],
        correctAnswer: "Handlebars with Date helper",
        explanation: "Handlebars helpers can generate dynamic values like dates.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q40",
        type: "short-answer",
        question: "In Mapper 2.0, what feature allows you to store a lookup table in memory for reuse?",
        options: [],
        correctAnswer: "Lookup Cache",
        explanation: "Lookup Cache improves performance by storing data in-memory.",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },

    // --- CHAPTER 5: ADVANCED FLOW CONFIGURATIONS (10 Questions) ---
    {
        id: "p7_q41",
        type: "multiple-choice",
        question: "Which branching mode sends a record ONLY to the first branch that meets criteria?",
        options: ["All Matching", "First Matching", "Round Robin", "Random"],
        correctAnswer: "First Matching",
        explanation: "First Matching stops evaluation after the first match.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q42",
        type: "yes-no",
        question: "Can an output filter be applied to an Export step?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Output filters filter data as it leaves the step.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q43",
        type: "matching",
        question: "Match the Transformation 2.0 mode:",
        rows: [
            { id: 1, text: "Modify Input record", correct: "Default mode" },
            { id: 2, text: "Create output rows", correct: "CSV preparation" }
        ],
        options: ["Default mode", "CSV preparation", "Delete records", "Schedule"],
        explanation: "Modify input is standard; Output rows is for flat files like CSV.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q44",
        type: "short-answer",
        question: "What is the JavaScript-based tool used for complex custom logic in Celigo?",
        options: [],
        correctAnswer: "Hooks",
        explanation: "Hooks allow custom JS code to run in the flow.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q45",
        type: "multiple-select",
        question: "Which of the following are valid filter types? (Select 2)",
        options: ["Input Filter", "Output Filter", "Cron Filter", "Hook Filter"],
        correctAnswer: ["Input Filter", "Output Filter"],
        explanation: "Filters can be applied to input or output of a step.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q46",
        type: "multiple-choice",
        question: "What icon represents a filter in the Flow Builder?",
        options: ["Gear", "Funnel", "Lightning Bolt", "Pencil"],
        correctAnswer: "Funnel",
        explanation: "The funnel icon is used for filters.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q47",
        type: "yes-no",
        question: "Does branching allow you to send data to two different applications?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Branching creates multiple paths for data.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q48",
        type: "short-answer",
        question: "What branching mode should you use if you want one record to potentially go down three paths?",
        options: [],
        correctAnswer: "All Matching",
        explanation: "All Matching evaluates every branch.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q49",
        type: "multiple-choice",
        question: "Which tool is best for renaming multiple fields without a full mapping?",
        options: ["Filter", "Transformation 2.0", "Lookup Cache", "Response Mapping"],
        correctAnswer: "Transformation 2.0",
        explanation: "Transformation 2.0 is designed for structural changes.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q50",
        type: "yes-no",
        question: "Can filters use Handlebars expressions?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Handlebars can be used within filter criteria for dynamic logic.",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },

    // --- CHAPTER 6: FLOW SCHEDULING (10 Questions) ---
    {
        id: "p7_q51",
        type: "short-answer",
        question: "In a Cron expression, how many positions are used?",
        options: [],
        correctAnswer: "5",
        explanation: "Celigo uses a 5-position Cron (Minute, Hour, Day of Month, Month, Day of Week).",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q52",
        type: "multiple-choice",
        question: "What is the lowest frequency for a preset schedule?",
        options: ["Every 1 minute", "Every 15 minutes", "Every 1 hour", "Every 1 day"],
        correctAnswer: "Every 15 minutes",
        explanation: "Preset schedules go down to 15 minutes.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q53",
        type: "yes-no",
        question: "Can a flow be triggered to run immediately after another flow finishes?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "This is called 'Flow Sequencing'.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q54",
        type: "multiple-select",
        question: "Which are valid Cron positions? (Select 2)",
        options: ["Minute", "Year", "Day of Week", "Seconds"],
        correctAnswer: ["Minute", "Day of Week"],
        explanation: "Year and Seconds are not used in Celigo's 5-position Cron.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q55",
        type: "matching",
        question: "Match the Cron symbol to its meaning:",
        rows: [
            { id: 1, text: "*", correct: "Every value" },
            { id: 2, text: "?", correct: "No specific value" }
        ],
        options: ["Every value", "No specific value", "Range", "Interval"],
        explanation: "Asterisk means every; Question mark is used when a field is not specified.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q56",
        type: "multiple-choice",
        question: "If a Cron expression is '0 0 * * *', when does it run?",
        options: ["Every minute", "Every hour", "Every day at midnight", "Every Monday"],
        correctAnswer: "Every day at midnight",
        explanation: "0 minute, 0 hour, every day.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q57",
        type: "short-answer",
        question: "What is the term for setting one flow to run after another?",
        options: [],
        correctAnswer: "Flow Sequencing",
        explanation: "Flow sequencing links flows together.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q58",
        type: "yes-no",
        question: "Can you schedule a flow to run every 1 minute using Cron?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Cron allows custom intervals like every minute.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q59",
        type: "multiple-choice",
        question: "Where do you set the Timezone for a flow?",
        options: ["In Connection settings", "In Flow settings", "In User profile only", "In Destination settings"],
        correctAnswer: "In Flow settings",
        explanation: "Timezone is defined at the flow level.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q60",
        type: "short-answer",
        question: "The '5th' position in a Cron expression refers to what?",
        options: [],
        correctAnswer: "Day of Week",
        explanation: "Positions: Minute, Hour, Day, Month, Day of Week.",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },

    // --- CHAPTER 7: ERROR MANAGEMENT (10 Questions) ---
    {
        id: "p7_q61",
        type: "multiple-choice",
        question: "Which error classification is marked with a 'lightning bolt'?",
        options: ["Value", "Missing", "Intermittent", "Connection"],
        correctAnswer: "Intermittent",
        explanation: "Intermittent errors are temporary and get retried.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q62",
        type: "short-answer",
        question: "How many times does Celigo automatically retry an 'Intermittent' error?",
        options: [],
        correctAnswer: "4",
        explanation: "Celigo retries up to 4 times for intermittent issues.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q63",
        type: "yes-no",
        question: "Can you manually retry a 'Data' error after fixing the mapping?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Fixed errors can be retried manually from the error dashboard.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q64",
        type: "multiple-select",
        question: "Which of the following are valid error categories? (Select 2)",
        options: ["Connection Error", "Data Error", "Color Error", "Mapping Success"],
        correctAnswer: ["Connection Error", "Data Error"],
        explanation: "Errors are usually categorized by Connection, Data, or Permissions.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q65",
        type: "matching",
        question: "Match the error to its cause:",
        rows: [
            { id: 1, text: "Connection", correct: "Invalid Password" },
            { id: 2, text: "Value", correct: "Wrong Data Format" }
        ],
        options: ["Invalid Password", "Wrong Data Format", "Flow Paused", "Missing Internet"],
        explanation: "Connection errors relate to access; Value relates to data format.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q66",
        type: "multiple-choice",
        question: "Which error type occurs when the API limit is exceeded?",
        options: ["Missing", "Rate limit", "Too large", "Duplicate"],
        correctAnswer: "Rate limit",
        explanation: "Rate limits occur when you send too many requests too fast.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q67",
        type: "yes-no",
        question: "Is 'Missing' an error classification?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Missing classification occurs when required data is not found.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q68",
        type: "short-answer",
        question: "What is the first step in the recommended troubleshooting process?",
        options: [],
        correctAnswer: "Identify Source",
        explanation: "First, find out where the error originated.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q69",
        type: "multiple-choice",
        question: "An error caused by a temporary network outage is classified as:",
        options: ["Value", "Connection", "Intermittent", "Parse"],
        correctAnswer: "Intermittent",
        explanation: "Temporary network issues are intermittent.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q70",
        type: "short-answer",
        question: "If a record fails because it already exists in the destination, it is a ______ error.",
        options: [],
        correctAnswer: "Duplicate",
        explanation: "Duplicate errors occur when the system identifies the record already exists.",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    }
];