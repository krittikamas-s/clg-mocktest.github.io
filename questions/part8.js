const part8Questions = [
    {
        id: "p8_q1",
        type: "multiple-choice",
        question: "Which connector type is described as the most flexible on the Celigo platform?",
        options: ["NetSuite Connector", "Salesforce Connector", "HTTP Universal Connector", "FTP Connector"],
        correctAnswer: "HTTP Universal Connector",
        explanation: "The material explicitly states that the HTTP universal connector is the most flexible type available.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q2",
        type: "multiple-choice",
        question: "A 'Base URI' is best compared to which of the following?",
        options: ["A specific room number in a hotel", "The main street address of a hotel", "The guest's name", "The hotel's checkout time"],
        correctAnswer: "The main street address of a hotel",
        explanation: "The Base URI represents the primary location or main address of the web application.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q3",
        type: "multiple-choice",
        question: "In a URL, the part that points to a specific resource relative to the main address is the:",
        options: ["Base URI", "Protocol", "Relative URI", "Status Code"],
        correctAnswer: "Relative URI",
        explanation: "The Relative URI points to a specific part of the application and is dependent on the Base URI.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q4",
        type: "multiple-choice",
        question: "Which part of an HTTP message contains the 'Method' (e.g., GET, POST)?",
        options: ["Headers", "Body", "Start Line", "Blank Line"],
        correctAnswer: "Start Line",
        explanation: "For a request, the Start Line (or Request Line) includes the Method, Relative URI, and HTTP version.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q5",
        type: "multiple-choice",
        question: "What does an HTTP Status Code of '200' typically mean?",
        options: ["Not Found", "Unauthorized", "OK / Success", "Internal Server Error"],
        correctAnswer: "OK / Success",
        explanation: "A 200 status code indicates that the request was successful.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q6",
        type: "multiple-choice",
        question: "Where is metadata, such as authentication tokens or media types, stored in an HTTP message?",
        options: ["Start Line", "Headers", "Body", "Blank Line"],
        correctAnswer: "Headers",
        explanation: "Headers provide metadata about the communication, such as Authentication and Media type.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q7",
        type: "multiple-choice",
        question: "Which component acts as a mandatory separator between Headers and the Body?",
        options: ["Colon", "Semicolon", "Blank Line", "Relative URI"],
        correctAnswer: "Blank Line",
        explanation: "The Blank Line is necessary to indicate that headers have ended and separate them from the body.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q8",
        type: "yes-no",
        question: "Does every HTTP request necessarily include a Body?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "The Body is optional; for example, a GET request often has an empty body.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q9",
        type: "multiple-choice",
        question: "REST APIs are considered a ______ of HTTP.",
        options: ["Replacement", "Subset", "Opposite", "Parent"],
        correctAnswer: "Subset",
        explanation: "The course mentions that the connector can be used for any application using HTTP, including REST APIs which are a subset of HTTP.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q10",
        type: "multiple-choice",
        question: "When creating a request, where would you usually find the specific record ID or resource path in a standard URL?",
        options: ["Base URI", "Relative URI", "Headers", "Status Line"],
        correctAnswer: "Relative URI",
        explanation: "The Relative URI is used to point to specific records or endpoints (like /api/v1/customers/123).",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
    },
    {
        id: "p8_q11",
        type: "multiple-choice",
        question: "Which part of an HTTP message is considered optional and may not be present in every request?",
        options: ["Start Line", "Headers", "Blank Line", "Body"],
        correctAnswer: "Body",
        explanation: "The body is optional; for example, a standard GET request often does not include a body.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q12",
        type: "multiple-choice",
        question: "When a system is located behind a firewall (on-premise), which connection mode is required in Celigo?",
        options: ["Cloud", "Agent", "Proxy", "Direct tunneling"],
        correctAnswer: "Agent",
        explanation: "The Agent mode uses a local application to establish a secure connection from behind a firewall to Celigo.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q13",
        type: "multiple-choice",
        question: "If you are connecting to a SOAP API, which Media Type must be selected in the connection settings?",
        options: ["JSON", "XML", "Multipart/form-data", "Plain text"],
        correctAnswer: "XML",
        explanation: "SOAP APIs use XML for their message format, unlike most modern REST APIs which use JSON.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q14",
        type: "short-answer",
        question: "What is the maximum concurrency level allowed for a single HTTP connection in Celigo? (Answer with a number)",
        options: [], 
        correctAnswer: "25",
        explanation: "Celigo limits concurrency to a maximum of 25 simultaneous requests per connection to prevent overloading APIs.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q15",
        type: "multiple-choice",
        question: "Which term describes the number of data requests sent at the exact same time?",
        options: ["Rate Limit", "Throughput", "Concurrency", "Bandwidth"],
        correctAnswer: "Concurrency",
        explanation: "Concurrency refers to simultaneous requests, while Rate Limit refers to total requests over a time period.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q16",
        type: "yes-no",
        question: "Can the 'Wait time between HTTP requests' field be utilized if the concurrency level is set to a value higher than 1?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "The wait time field is only active when concurrency is set to 1 to ensure a specific delay between sequential requests.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q17",
        type: "multiple-choice",
        question: "Which export type uses the handlebar expression {{lastExportDateTime}} to fetch only new records?",
        options: ["All", "Delta", "Once", "Limit"],
        correctAnswer: "Delta",
        explanation: "Delta exports use the timestamp of the last successful run to filter and retrieve only updated or new data.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q18",
        type: "multiple-choice",
        question: "To prevent a record from being exported more than once, which field type does the 'Once' export type update upon success?",
        options: ["String field", "Date field", "Boolean field", "Integer field"],
        correctAnswer: "Boolean field",
        explanation: "The 'Once' export looks for a Boolean field (e.g., 'Exported') and sets it to true after a successful export.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q19",
        type: "matching",
        question: "Match the Pagination method to its correct description:",
        rows: [
            { id: 1, text: "Page number", correct: "Uses an incrementing digit (1, 2, 3...)" },
            { id: 2, text: "Skip number", correct: "Offsets the result by a specific number of records" },
            { id: 3, text: "Next page token", correct: "Uses a unique string/path provided in the API response" }
        ],
        options: [
            "Uses an incrementing digit (1, 2, 3...)", 
            "Offsets the result by a specific number of records", 
            "Uses a unique string/path provided in the API response",
            "Calculates total records divided by page size"
        ],
        explanation: "Page numbers increment, Skip numbers offset by count, and Tokens use dynamic strings from the response.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p8_q20",
        type: "multiple-select",
        question: "Which of the following are common Media Types supported by the Celigo HTTP Connector? (Select 3)",
        options: ["JSON", "XML", "Multipart/form-data", "MP4 Video", "SQL Script"],
        correctAnswer: ["JSON", "XML", "Multipart/form-data"],
        explanation: "JSON, XML, and Multipart/form-data are standard web formats supported for data exchange in Celigo.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    // CHAPTER 1: FTP CONNECTORS
    {
        id: "p8_q21",
        type: "multiple-choice",
        question: "Which FTP protocol is considered the most secure and recommended by Celigo?",
        options: ["FTP", "SFTP", "FTPS", "HTTP"],
        correctAnswer: "SFTP",
        explanation: "SFTP (SSH File Transfer Protocol) is the most secure version because it uses SSH for data transfer, typically on Port 22.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q22",
        type: "short-answer",
        question: "Which port is typically used for SFTP connections? (Answer with a number)",
        options: [],
        correctAnswer: "22",
        explanation: "SFTP traditionally uses Port 22 for secure communication.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q23",
        type: "multiple-choice",
        question: "What happens by default after a file is successfully transferred through a Celigo FTP export?",
        options: ["It is renamed", "It is moved to a backup folder", "It is automatically deleted from the server", "It remains on the server unchanged"],
        correctAnswer: "It is automatically deleted from the server",
        explanation: "By default, Celigo deletes the file from the FTP server after a successful export to prevent duplicate processing. This can be disabled by checking 'Leave file on server'.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q24",
        type: "yes-no",
        question: "Can PGP encryption keys be generated directly within the Celigo platform?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "PGP keys must be generated using third-party tools (like GPG) and then uploaded to Celigo.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q25",
        type: "multiple-choice",
        question: "Which setting should be used if a file needs to be transferred without any changes to its format (Blob transfer)?",
        options: ["Parse file", "Do not parse file", "Use Handlebars", "Convert to JSON"],
        correctAnswer: "Do not parse file",
        explanation: "Setting 'Parse files being transferred' to 'No' ensures the file is moved 'as-is' (Blob) without Celigo trying to read its contents.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q26",
        type: "multiple-choice",
        question: "What is the primary benefit of using 'Passive Mode' in FTP connections?",
        options: ["It is faster", "It is more secure as all connections originate from the client", "It allows for larger file sizes", "It does not require a username"],
        correctAnswer: "It is more secure as all connections originate from the client",
        explanation: "In Passive mode, the client initiates both the command and data connections, making it more firewall-friendly and secure.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q27",
        type: "yes-no",
        question: "Is whitelisting Celigo's IP addresses required if the FTP server is behind a firewall?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "If a firewall is present, you must whitelist Celigo's specific static IP addresses to allow the connection to be established.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q28",
        type: "multiple-choice",
        question: "Which field determines if an export retrieves the whole file as a single record or breaks it into individual records?",
        options: ["FileType", "Connection", "Parse files being transferred", "Directory path"],
        correctAnswer: "Parse files being transferred",
        explanation: "Enabling 'Parse files' tells Celigo to look inside the file and create separate data records based on the file content.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q29",
        type: "multiple-choice",
        question: "How can you dynamically name a file in an FTP Import?",
        options: ["Using the SQL editor", "Using Handlebars expressions", "It is not possible", "By uploading a sample file"],
        correctAnswer: "Using Handlebars expressions",
        explanation: "Handlebars (e.g., {{timestamp}}) is used to dynamically generate file names or paths during the import process.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p8_q30",
        type: "short-answer",
        question: "What is the maximum size (in MB) for 'Mock Output' data in an FTP export? (Answer with a number)",
        options: [],
        correctAnswer: "1",
        explanation: "Celigo limits the Mock Output for testing purposes to 1 MB.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },

    // CHAPTER 2: DATABASE CONNECTORS
    {
        id: "p8_q31",
        type: "multiple-select",
        question: "What are the two ways to connect to a database that is NOT publicly accessible? (Select 2)",
        options: ["Dedicated URI", "On-premise Agent", "Whitelisting Celigo IPs", "SQL SELECT query"],
        correctAnswer: ["On-premise Agent", "Whitelisting Celigo IPs"],
        explanation: "To reach a private database, you must either install an On-premise Agent or whitelist Celigo's IPs in your network's firewall.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q32",
        type: "multiple-choice",
        question: "Which SQL command is primarily used for Database Exports?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correctAnswer: "SELECT",
        explanation: "The SELECT statement is the standard SQL command used to retrieve data from a database table for an export.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q33",
        type: "multiple-choice",
        question: "Which export type requires an 'Export Completion' SQL query to mark records as processed?",
        options: ["All", "Delta", "Once", "Limit"],
        correctAnswer: "Once",
        explanation: "The 'Once' strategy requires an update query to change a status field (like 'is_exported = true') so those records aren't picked up again.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q34",
        type: "multiple-choice",
        question: "What is the recommended query type for importing data quickly into a database to avoid multiple round-trips?",
        options: ["SQL query per record", "Bulk insert SQL query", "Delta query", "SQL query per page"],
        correctAnswer: "Bulk insert SQL query",
        explanation: "Bulk Insert allows you to send a large set of records in a single request, which is significantly faster than record-by-record processing.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q35",
        type: "multiple-choice",
        question: "What does the 'Concurrency ID lock template' prevent?",
        options: ["SQL syntax errors", "Unauthorized access", "Duplicate records during simultaneous requests", "Connection timeouts"],
        correctAnswer: "Duplicate records during simultaneous requests",
        explanation: "The Concurrency ID lock ensures that only one request processes a specific ID at a time, preventing race conditions and duplicates.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q36",
        type: "yes-no",
        question: "Do all database connections (e.g., MySQL, PostgreSQL) require both a username and a password?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "While most do, some database configurations or specific connector types might allow for alternative authentication or may not require a password in specific local environments.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q37",
        type: "multiple-choice",
        question: "The 'Delta' export type retrieves records based on what logic?",
        options: ["All records in the table", "A fixed limit of 100 records", "Changes since the last successful export run", "Records marked with a 'Once' flag"],
        correctAnswer: "Changes since the last successful export run",
        explanation: "Delta exports look for data that has been created or updated since the last time the flow was executed successfully.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q38",
        type: "multiple-choice",
        question: "Which setting allows a database connection to share its resource limits with another connection?",
        options: ["Auto-recover rate limit errors", "Borrow concurrency from", "Batch size", "Concurrency level"],
        correctAnswer: "Borrow concurrency from",
        explanation: "This setting allows multiple connections to the same database to stay within the server's maximum connection limit by sharing a pool.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q39",
        type: "multiple-choice",
        question: "What happens when 'Auto-recover rate limit errors' is enabled?",
        options: ["The connection closes", "Celigo retries with exponential backoff (doubling delay)", "An error email is sent immediately", "The concurrency is reduced to zero"],
        correctAnswer: "Celigo retries with exponential backoff (doubling delay)",
        explanation: "If a rate limit error occurs, Celigo will wait and retry, increasing the wait time with each attempt until it succeeds or hits a limit.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p8_q40",
        type: "multiple-choice",
        question: "Which SQL query type in an Import checks for an existing record before deciding to create or change it?",
        options: ["Insert", "Update", "Insert or Update", "Bulk Insert"],
        correctAnswer: "Insert or Update",
        explanation: "The 'Insert or Update' (often known as Upsert) logic checks for a unique identifier to decide whether to create a new row or modify an existing one.",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    }
];