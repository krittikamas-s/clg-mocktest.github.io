const part3Questions = [
  {
    id: "p3_q1",
    type: "matching",
    question: "Identify whether the card below is an example of a base URI or relative URI.",
    rows: [
      { id: 1, text: "https://docs.googleapis.com", correct: "Base URI" },
      { id: 2, text: "https://api.hubapi.com", correct: "Base URI" },
      { id: 3, text: "https://api.nasa.gov", correct: "Base URI" },
      { id: 4, text: "/api/chat.postMessage", correct: "Relative URI" },
      { id: 5, text: "/planetary/apod", correct: "Relative URI" },
      { id: 6, text: "/v1/documents", correct: "Relative URI" }
    ],
    options: ["Base URI", "Relative URI"],
    explanation: "Base URIs are complete URLs with protocol and domain. Relative URIs are paths appended to base URIs.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q2",
    type: "matching",
    question: "Match the parts of an HTTP message with their correct description.",
    rows: [
      { id: 1, text: "Header", correct: "Describes how message is communicated" },
      { id: 2, text: "Body", correct: "Optional section" },
      { id: 3, text: "Blank Line", correct: "Indicates all the information describing the data is above" },
      { id: 4, text: "Start Line", correct: "Can include method and relative URI" }
    ],
    options: [
      "Describes how message is communicated",
      "Optional section",
      "Indicates all the information describing the data is above",
      "Can include method and relative URI"
    ],
    explanation: "HTTP messages consist of a start line, headers, a blank line separator, and an optional body.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
  },
  {
    id: "p3_q3",
    type: "multiple-choice",
    question: "What media types is required for all connections using a SOAP API?",
    options: ["JSON", "Multipart/form-data", "Plain text", "URL encoded", "XML"],
    correctAnswer: "XML",
    explanation: "SOAP APIs require XML as the media type for all communications.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
  },
  {
    id: "p3_q4",
    type: "matching",
    question: "Using the example on the right, match the fields with the correct values.",
    image: "images/p3_q4.png",
    rows: [
        { id: 1, text: "Override HTTP status code for auth errors", correct: "200" },
        { id: 2, text: "Path to auth error field in HTTP response body", correct: "error" },
        { id: 3, text: "Auth error values", correct: "Auth failed" }
    ],
    // The options inside the Dropdown
    options: ["200", "error", "Auth failed"],
    explanation: "The image shows the HTTP response",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q5",
    type: "matching",
    question: "Using the example on the right, match the fields with the correct values.",
    image: "images/p3_q5.png",
    rows: [
        { id: 1, text: "Override HTTP status code for auth errors", correct: "400" },
        { id: 2, text: "Path to auth error field in HTTP response body", correct: "errorMessage" },
        { id: 3, text: "Auth error values", correct: "Request_Failed" }
    ],
    // The options inside the Dropdown
    options: ["400", "errorMessage", "Request_Failed"],
    explanation: "The image shows the HTTP response",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q6",
    type: "multiple-select",
    question: "What are characteristics of the value entered in the \"Wait time between HTTP requests\" field?",
    options: ["It should be a whole number", "It should be at least 100", "It represents seconds", "It represents milliseconds"],
    image: "images/p3_q6.png",
    correctAnswer: ["It should be a whole number", "It represents milliseconds"],
    explanation: "The wait time must be a whole number representing milliseconds between requests.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q7",
    type: "multiple-choice",
    question: "What types of settings for an API's rate limiter are shown in the example?",
    options: ["Standard","Non-standard"],
    image: "images/p3_q7.png",
    correctAnswer: "Non-standard",
    explanation: "These are not default HTTP error responses for rate limiter. The default are code '429' and header 'retry-after'.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q8",
    type: "multiple-choice",
    question: "What types of settings for an API's rate limiter are shown in the example?",
    options: ["Standard","Non-standard"],
    image: "images/p3_q8.png",
    correctAnswer: "Non-standard",
    explanation: "These are not default error responses body for rate limiter. The reponse are code '429' and header 'retry-after'.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q9",
    type: "multiple-choice",
    question: "What types of settings for an API's rate limiter are shown in the example?",
    options: ["Standard","Non-standard"],
    image: "images/p3_q9.png",
    correctAnswer: "Standard",
    explanation: "Code '429' and header 'retry-after' are standard responses.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q10",
    type: "multiple-choice",
    question: "Which of the following HTTP methods is NOT available for testing a connection?",
    options: ["GET", "PUT", "PATCH", "POST"],
    image: "images/p3_q10.png",
    correctAnswer: "PATCH",
    explanation: "PATCH is not available for testing connections; GET, PUT, and POST are supported.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q11",
    type: "yes-no",
    question: "The Relative URI field for testing connections can include handlebar expressions.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Handlebar expressions can be used in the Relative URI field for dynamic values.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p3_q12",
    type: "multiple-choice",
    question: "When should you specify a success path field and values for a connection test?",
    options: [
      "Always",
      "When the response from an API request always indicates success",
      "When you add an error path field and values",
      "When you want error details to appear in the error management dashboard"
    ],
    correctAnswer: "When the response from an API request always indicates success",
    explanation: "Success path is specified when the API consistently returns success indicators.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q13",
    type: "multiple-choice",
    question: "When two connections are sharing concurrency, how are the data requests handled?",
    options: [
      "First-in, first-out order",
      "The concurrencies will be divided equally between the two connections",
      "The connection borrowing concurrency will get lower priority",
      "Connections cannot share concurrency"
    ],
    correctAnswer: "The connection borrowing concurrency will get lower priority",
    explanation: "Borrowed concurrency receives lower priority than the primary connection's concurrency.",
    chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
  },
  {
    id: "p3_q14",
    type: "multiple-select",
    question: "In order to borrow concurrency from another connection, that connection must:",
    options: [
      "have a concurrency level set",
      "be in burst mode",
      "have strict SSL disabled",
      "be connected to the same application"
    ],
    correctAnswer: ["have a concurrency level set", "be connected to the same application"],
    explanation: "To borrow concurrency, the source connection must have concurrency configured and be for the same application.",
    chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
  },
  {
    id: "p3_q15",
    type: "short-answer",
    question: "What format is used in the Encrypted and Unencrypted fields?",
    options: [],
    correctAnswer: "JSON",
    explanation: "Both encrypted and unencrypted fields use JSON format.",
    chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
  },
  {
    id: "p3_q16",
    type: "multiple-choice",
    question: "What is the most common HTTP method for retrieving data?",
    options: ["GET", "POST", "PUT", "PATCH"],
    correctAnswer: "GET",
    explanation: "GET is the standard HTTP method for retrieving data from an API.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
  },
  {
    id: "p3_q17",
    type: "multiple-choice",
    question: "To locate the records to export, what will the relative URI you enter be combined with?",
    options: ["Company's main URL", "Base URI", "HTTP header"],
    correctAnswer: "Base URI",
    explanation: "The relative URI is appended to the base URI to form the complete endpoint URL.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q18",
    type: "matching",
    question: "Match the parameter type with its correct example.",
    rows: [
      { id: 1, text: "Path parameter", correct: "/company/region/{branchID}" },
      { id: 2, text: "Query parameter", correct: "?query=Emma&openning-date=1999-06-01" }
    ],
    options: [
      "/company/region/{branchID}",
      "?query=Emma&openning-date=1999-06-01"
    ],
    explanation: "Path parameters are part of the URL structure; query parameters follow the ? symbol.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q19",
    type: "multiple-select",
    question: "Select all the export types that do NOT require additional configuration.",
    options: ["All", "Delta", "Limit", "Once"],
    correctAnswer: ["All", "Limit"],
    explanation: "All and Limit export types require no additional configuration; Delta and Once require setup.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p3_q20",
    type: "yes-no",
    question: "All APIs support the Delta export type.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Not all APIs support delta exports; it depends on the API's capabilities.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p3_q21",
    type: "multiple-choice",
    question: "What handlebars expression do you need to include in a Delta type export?",
    options: [
      "{{currentExportDateTime}}",
      "{{timeStamp}}",
      "{{currentTime}}",
      "{{lastExportDateTime}}"
    ],
    correctAnswer: "{{lastExportDateTime}}",
    explanation: "The {{lastExportDateTime}} expression tracks the last export time for delta exports.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p3_q22",
    type: "multiple-select",
    question: "Select all the areas below where the handlebars expression needed for a Delta type export can be added.",
    options: [
      "Configure HTTP headers",
      "relative URI",
      "HTTP request body",
      "Override delta date format"
    ],
    correctAnswer: ["relative URI", "HTTP request body"],
    explanation: "Delta expressions can be placed in the relative URI or HTTP request body.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p3_q23",
    type: "multiple-choice",
    question: "What type of field does an API need for the Once export type?",
    options: ["String", "Integer", "Boolean", "Real"],
    correctAnswer: "Boolean",
    explanation: "The Once export type requires a Boolean field to track which records have been exported.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p3_q24",
    type: "multiple-choice",
    question: "Why does the Once export type require additional fields for configuration?",
    options: [
      "The Celigo platform needs to know how to update the Boolean field to mark records as exported.",
      "The API needs to create a new field on the Celigo platform to track exported records.",
      "The Celigo platform needs to add the current date and time to exported records.",
      "The API needs to know what new path to create to move exported records within the API."
    ],
    correctAnswer: "The Celigo platform needs to know how to update the Boolean field to mark records as exported.",
    explanation: "Once exports require configuration to update the Boolean field marking records as processed.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p3_q25",
    type: "multiple-select",
    question: "Select all the answers below which describe pagination.",
    options: [
      "It requires multiple requests/calls to fetch all the data.",
      "It is supported by all APIs.",
      "It breaks up the results of an API request into multiple pages.",
      "It makes the results of a data request more manageable."
    ],
    correctAnswer: ["It requires multiple requests/calls to fetch all the data.", "It breaks up the results of an API request into multiple pages.", "It makes the results of a data request more manageable."],
    explanation: "Pagination splits large result sets into pages requiring multiple requests for manageability.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q26",
    type: "multiple-select",
    question: "In what flow steps can you configure pagination? (Select all that apply.)",
    options: ["Exports", "Imports", "Lookups", "None of these answers"],
    correctAnswer: ["Exports", "Lookups"],
    explanation: "Pagination is configured in export and lookup steps, not import steps.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q27",
    type: "multiple-choice",
    question: "What determines the pagination method for exporting from an API?",
    options: [
      "User preference",
      "Methods the Celigo platform supports",
      "Endpoint application",
      "Number of records exported"
    ],
    correctAnswer: "Endpoint application",
    explanation: "The API's implementation determines which pagination methods are available.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q28",
    type: "multiple-select",
    question: "Select the two most commonly used pagination methods.",
    options: [
      "Page number parameter",
      "Link header",
      "Skip number parameter",
      "Next page URL"
    ],
    correctAnswer: ["Page number parameter", "Skip number parameter"],
    explanation: "Page number and skip number parameters are the most common pagination approaches.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q29",
    type: "matching",
    question: "Match the pagination method with the correct description.",
    rows: [
      { id: 1, text: "Custom Relative URI", correct: "ID or token provided in HTTP response is used as part of the URL to call the next page" },
      { id: 2, text: "Custom Request Body", correct: "A value in the POST request body is used to track paging" },
      { id: 3, text: "Link Header", correct: "A dedicated header link value shows the URL for the next page" },
      { id: 4, text: "Next Page Token", correct: "A token in the HTTP response body is used to call the next page" },
      { id: 5, text: "Next Page URL", correct: "A URL in the HTTP response body is used to call the next page" },
      { id: 6, text: "Page Number Parameter", correct: "A handlebars expression is used to add page numbers to a relative URI or HTTP request body" },
      { id: 7, text: "Skip Number Parameter", correct: "The number of records returned in the first request is used to offset the next request" }
    ],
    options: [
      "ID or token provided in HTTP response is used as part of the URL to call the next page",
      "A value in the POST request body is used to track paging",
      "A dedicated header link value shows the URL for the next page",
      "A token in the HTTP response body is used to call the next page",
      "A URL in the HTTP response body is used to call the next page",
      "A handlebars expression is used to add page numbers to a relative URI or HTTP request body",
      "The number of records returned in the first request is used to offset the next request"
    ],
    explanation: "Each pagination method corresponds to a specific approach for requesting subsequent pages.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
  },
  {
    id: "p3_q30",
    type: "multiple-choice",
    question: "Which flow step is very similar to an HTTP lookup?",
    options: ["HTTP export", "HTTP import"],
    correctAnswer: "HTTP export",
    explanation: "HTTP exports function similarly to lookups in retrieving data from external sources.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p3_q31",
    type: "yes-no",
    question: "True or False: Using handlebars in the HTTP request body is the most common way to map fields within an HTTP import.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "Handlebars expressions in the request body are the standard method for field mapping in HTTP imports.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p3_q32",
    type: "multiple-choice",
    question: "What's the most efficient way to dynamically update the relative URI in an HTTP import?",
    options: ["Query parameters", "Handlebars expressions", "Hard-coded values", "Form builder"],
    correctAnswer: "Handlebars expressions",
    explanation: "Handlebars expressions provide the most flexible and efficient way to dynamically construct URIs.",
    chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p3_q33",
    type: "multiple-select",
    question: "Select the port(s) most commonly used with FTPS.",
    options: ["12", "21", "990", "991"],
    correctAnswer: ["21", "990"],
    explanation: "Port 21 is used for standard FTPS; port 990 is for FTPS implicit mode.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q34",
    type: "short-answer",
    question: "Which FTP protocol uses authentication keys and is the most secure?",
    options: [],
    correctAnswer: "SFTP",
    explanation: "SFTP (SSH File Transfer Protocol) uses public-key cryptography and is the most secure FTP variant.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q35",
    type: "multiple-select",
    question: "Select all the of the following formats FTP host name can be.",
    options: ["IP address", "Serial number", "URI", "SKU"],
    correctAnswer: ["IP address", "URI"],
    explanation: "FTP hostnames can be IP addresses or URIs; serial numbers and SKUs are not valid formats.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q36",
    type: "multiple-choice",
    question: "When do you need to whitelist the IP addresses Celigo provides for FTP protocols?",
    options: [
      "The host provided is an IP address (not a URI).",
      "The FTP server is behind a firewall.",
      "SFTP is the protocol selected.",
      "The FTP is in active mode."
    ],
    image: "images/p3_q36.png",
    correctAnswer: "The FTP server is behind a firewall.",
    explanation: "Whitelisting is required when the FTP server is protected by a firewall.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q37",
    type: "multiple-choice",
    question: "Which mode is more secure?",
    options: ["Active", "Passive"],
    correctAnswer: "Passive",
    explanation: "Passive mode is more secure as it doesn't expose the server to connection attempts.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q38",
    type: "yes-no",
    question: "True or False: PGP encryption keys are NOT generated within the Celigo platform",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "PGP keys are generated externally; Celigo does not generate them internally.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q39",
    type: "multiple-choice",
    question: "Which FTP protocol includes the \"Require socket reuse\" option?",
    options: ["FTP", "FTPS", "SFTP", "FTPS Secure"],
    correctAnswer: "FTPS",
    explanation: "The \"Require socket reuse\" option is specific to FTPS protocol.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q40",
    type: "multiple-choice",
    question: "What option/field in the FTP settings determines if the complete file will be exported or if the content (individual parts) of a file will be exported?",
    options: ["Connection", "Parse files being transferred", "File Type", "None of these. FTP exports can only export the entire file."],
    image: "images/p3_q40.png",
    correctAnswer: "Parse files being transferred",
    explanation: "The \"Parse files being transferred\" option controls whether entire files or individual records are exported.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q41",
    type: "yes-no",
    question: "The Celigo platform's default action is to automatically delete files transferred through an FTP export.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "By default, Celigo automatically deletes files after successful FTP export.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q42",
    type: "multiple-choice",
    question: "What field in the General section for FTP imports isn't seen in other types of imports?",
    options: ["One to Many", "Generate files from records", "Encrypt files", "None of the above. All the fields are similar to those in other types of imports."],
    correctAnswer: "Generate files from records",
    explanation: "\"Generate files from records\" is unique to FTP imports and not found in other import types.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q43",
    type: "multiple-choice",
    question: "When wanting to import files as-is, what setting control would you use?",
    options: [
      "One to Many - Set to No",
      "One to Many - Set to Yes",
      "Generate files from records - Set to No",
      "Generate files from records - Set to Yes",
      "None of the above. You can't import raw files."
    ],
    correctAnswer: "Generate files from records - Set to No",
    explanation: "Setting \"Generate files from records\" to No imports files as-is without transformation.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  },
  {
    id: "p3_q44",
    type: "multiple-select",
    question: "What ways can you dynamically name the file in a FTP import? (Select all the correct answers.)",
    options: [
      "Uploading a sample file with names",
      "CSV generator helper",
      "Handlebars expressions",
      "Advanced field editor"
    ],
    correctAnswer: ["Handlebars expressions", "Advanced field editor"],
    explanation: "Dynamic file naming can be achieved using handlebars expressions or the advanced field editor.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors", "Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
  },
  {
    id: "p3_q45",
    type: "matching",
    question: "Sort the cards below. Determine whether the field listed appears on all database connections or only on some.",
    rows: [
      { id: 1, text: "Mode", correct: "All Database Connections" },
      { id: 2, text: "Agent", correct: "Some Database Connections" },
      { id: 3, text: "Name", correct: "Some Database Connections" }
    ],
    options: ["All Database Connections", "Some Database Connections"],
    explanation: "Mode appears on all database connections; Agent and Name appear only on specific databases.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q46",
    type: "yes-no",
    question: "True or False: All databases connections require usernames and passwords.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Not all database connections require credentials; some support alternative authentication methods.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q47",
    type: "multiple-select",
    question: "What settings appear in the Advanced section for all the database connections, except DynamoDB? Select all that apply.",
    options: [
      "Borrow concurrency from",
      "Concurrency level",
      "Configure properties",
      "Disable strict SSL"
    ],
    correctAnswer: ["Borrow concurrency from", "Concurrency level"],
    explanation: "Borrow concurrency and Concurrency level appear in Advanced settings for all databases except DynamoDB.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q48",
    type: "multiple-choice",
    question: "To get records from a database, you must:",
    options: [
      "use an on-premise agent",
      "write a SQL query",
      "select the Delta export type",
      "set up a database with a hierarchical structure"
    ],
    correctAnswer: "write a SQL query",
    explanation: "SQL queries are required to retrieve records from a database.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q49",
    type: "yes-no",
    question: "You must build a SQL query within the Celigo platform.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "SQL queries can be built externally and pasted into Celigo, or written directly in the platform.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q50",
    type: "multiple-select",
    question: "Which export data type(s) require an addition to the SQL query?",
    options: ["All", "Delta", "Limit", "Once"],
    correctAnswer: ["Delta", "Once"],
    explanation: "Delta and Once export types require additional SQL query modifications for proper functioning.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q51",
    type: "short-answer",
    question: "Enter the query type missing from this list: 1) Insert, 2) ___________, 3)Insert or ____________",
    options: [],
    correctAnswer: "Update",
    explanation: "The complete list is: Insert, Update, Insert or Update.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q52",
    type: "multiple-select",
    question: "What can SQL queries be used for when configuring database imports? Select all that apply.",
    options: ["Inserting records", "Updating records", "Filtering records", "Mapping fields"],
    correctAnswer: ["Inserting records", "Updating records", "Filtering records", "Mapping fields"],
    explanation: "SQL queries handle insertions, updates, filtering, and can be used in conjunction with field mapping.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q53",
    type: "matching",
    question: "Match the setting with its function.",
    rows: [
      { id: 1, text: "Concurrency ID Lock Template", correct: "Prevents duplicate records when multiple requests sent to a database" },
      { id: 2, text: "Data URI Template", correct: "Creates dynamic links to the data imported, where possible" },
      { id: 3, text: "Batch Size", correct: "Controls how many files should be retrieved at a single time" }
    ],
    options: [
      "Prevents duplicate records when multiple requests sent to a database",
      "Creates dynamic links to the data imported, where possible",
      "Controls how many files should be retrieved at a single time"
    ],
    explanation: "Each database setting has a specific function in managing data import operations.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q54",
    type: "multiple-choice",
    question: "Martin is importing records into a database using the \"Import or Update\" query type. He doesn't know how to run a dynamic lookup to identify existing records. Does this mean he has to choose a different query type?",
    options: [
      "No. He can also select the option to use a static lookup to identify existing records.",
      "Yes. Running a dynamic lookup is the only method available in the \"Import or Update\" query type.",
      "He can't use any database query type if he doesn't know how to run a dynamic lookup.",
      "No. He can also select a specific field as a way to identify existing records."
    ],
    correctAnswer: "No. He can also select a specific field as a way to identify existing records.",
    explanation: "The \"Import or Update\" query type can use a field-based approach instead of a dynamic lookup.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
  },
  {
    id: "p3_q55",
    type: "multiple-select",
    question: "Which of the following are available as universal connectors in the Celigo platform? Select all that apply.",
    options: ["HTTP", "Unilink", "Webhook listener", "OmniconnectQL"],
    correctAnswer: ["HTTP", "Webhook listener"],
    explanation: "HTTP and Webhook listener are the primary universal connectors in Celigo.",
    chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
  },
  {
    id: "p3_q56",
    type: "multiple-choice",
    question: "Jim is creating a delta export from an API which doesn't follow the international data standard of YYYY-MM-DD. What options are available to use this API in a flow within Celigo?",
    options: [
      "Enable Developer mode under Account Profile to allow non-standard date formats.",
      "Switch to the All export type, which offers more date format options.",
      "Use the \"Delta date lag offset\" to transform the incoming date format to the standard date format.",
      "Select the non-standard date format the API uses from the \"Override delta date format\" option."
    ],
    correctAnswer: "Select the non-standard date format the API uses from the \"Override delta date format\" option.",
    explanation: "The Override delta date format option allows handling of non-standard date formats.",
    chapter: ["Level 2 - Exploring Flow Builder|Source"]
  },
  {
    id: "p3_q57",
    type: "multiple-choice",
    question: "In terms of pagination, which of the following is a benefit of using a pre-built connector?",
    options: [
      "Pre-built connectors automatically configure the pagination needed.",
      "Pre-built connectors eliminate the need for pagination altogether.",
      "Pre-built connectors allow pagination to work without following API-specific requirements.",
      "Pre-built connectors enhance the speed of data transfer."
    ],
    correctAnswer: "Pre-built connectors automatically configure the pagination needed.",
    explanation: "Pre-built connectors come with pagination already configured for their APIs.",
    chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
  },
  {
    id: "p3_q58",
    type: "multiple-select",
    question: "From the options listed below, how are FTP imports different from other types of imports?",
    options: [
      "FTP imports are limited to importing data from local servers only.",
      "FTP imports can generate files.",
      "FTP imports only need write permissions.",
      "FTP imports require manual initiation."
    ],
    correctAnswer: ["FTP imports can generate files.", "FTP imports only need write permissions."],
    explanation: "FTP imports uniquely support file generation and require only write permissions (not read permissions).",
    chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
  }
];

// Export or expose the array if needed elsewhere
// module.exports = { part3Questions };
