const part6Questions = [
    // --- BATCH 1: Basics, Navigation & Flows (Questions 1-10) ---
    {
        id: "p6_q1",
        type: "multiple-choice",
        question: "What is a 'folder' that holds one or more flows called in Celigo?",
        options: ["Connection", "Integration", "Endpoint", "Lookup"],
        correctAnswer: "Integration",
        explanation: "An Integration acts as a container or folder for related flows. / Integration ทำหน้าที่เป็นโฟลเดอร์รวบรวมโฟลว์ที่เกี่ยวข้องกันไว้ด้วยกัน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p6_q2",
        type: "short-answer",
        question: "How many days are deleted resources kept in the Recycle Bin before permanent deletion? (Answer with a number)",
        options: [],
        correctAnswer: "30",
        explanation: "Resources are kept for 30 days. / ทรัพยากรที่ถูกลบจะถูกเก็บไว้ 30 วัน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q3",
        type: "yes-no",
        question: "Is a Connection considered a standalone object that can be used in multiple flows?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Connections are standalone and reusable across different flows. / Connection เป็นวัตถุอิสระที่ใช้ซ้ำได้ในหลายโฟลว์",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p6_q4",
        type: "multiple-choice",
        question: "Which endpoint is responsible for providing or sending data into a flow?",
        options: ["Destination", "Source", "Import", "Mapping"],
        correctAnswer: "Source",
        explanation: "The Source is where data originates. / Source คือต้นทางที่ให้ข้อมูล",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p6_q5",
        type: "multiple-choice",
        question: "If a standalone connection is edited, what happens to all flows using that connection?",
        options: ["Nothing changes", "All flows reflect the change", "Flows are disabled", "A duplicate is created"],
        correctAnswer: "All flows reflect the change",
        explanation: "Since it is a shared resource, updates apply globally. / เนื่องเป็นทรัพยากรที่ใช้ร่วมกัน การแก้ไขจะมีผลกับทุกที่",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p6_q6",
        type: "multiple-choice",
        question: "Which menu lists standalone objects like Connections, Imports, and Exports?",
        options: ["Tools", "Resources", "Dashboard", "Marketplace"],
        correctAnswer: "Resources",
        explanation: "The Resources menu manages independent components. / เมนู Resources ใช้จัดการส่วนประกอบอิสระ",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q7",
        type: "multiple-choice",
        question: "A red dot on an integration tile signifies what?",
        options: ["Success", "Errors", "Active Flow", "Maintenance"],
        correctAnswer: "Errors",
        explanation: "The red dot indicates the presence of errors within the last 30 days. / จุดสีแดงบอกว่ามีข้อผิดพลาดเกิดขึ้นใน 30 วันล่าสุด",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p6_q8",
        type: "multiple-choice",
        question: "Which Dashboard view shows columns like 'last run' and 'open errors'?",
        options: ["Running flows tab", "Completed flows tab", "Tile view", "List view"],
        correctAnswer: "Completed flows tab",
        explanation: "This tab provides a history of flow executions. / แท็บนี้แสดงประวัติการรันโฟลว์ที่ผ่านมา",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p6_q9",
        type: "multiple-choice",
        question: "How does a Lookup differ from an Export?",
        options: ["It uses no connection", "It doesn't start a flow by itself", "It is only for databases", "It is always manual"],
        correctAnswer: "It doesn't start a flow by itself",
        explanation: "Lookups supplement existing records rather than initiating a flow. / Lookup ช่วยเสริมข้อมูลที่มีอยู่แล้ว ไม่ได้เป็นตัวเริ่มโฟลว์",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p6_q10",
        type: "multiple-choice",
        question: "Where is the Recycle Bin located?",
        options: ["Tools Menu", "Resources Menu", "Marketplace", "Admin Settings"],
        correctAnswer: "Resources Menu",
        explanation: "It is found at the bottom of the Resources menu. / อยู่ส่วนล่างของเมนู Resources",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },

    // --- BATCH 2: API & Protocols (Questions 11-20) ---
    
    {
        id: "p6_q11",
        type: "multiple-choice",
        question: "What does API stand for?",
        options: ["Application Protocol Interface", "Application Programming Interface", "Automated Program Integration", "Advanced Programming Interaction"],
        correctAnswer: "Application Programming Interface",
        explanation: "API is the standard interface for software communication. / API คือส่วนต่อประสานการเขียนโปรแกรมประยุกต์",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q12",
        type: "multiple-choice",
        question: "Using the elevator analogy, which part is the API?",
        options: ["The elevator car", "The floor", "The elevator buttons", "The motor"],
        correctAnswer: "The elevator buttons",
        explanation: "Buttons are the interface users interact with to send commands. / ปุ่มกดคืออินเทอร์เฟซที่ใช้ส่งคำสั่งให้ระบบทำงาน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q13",
        type: "multiple-choice",
        question: "Which API method is used to retrieve data from a server?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: "GET",
        explanation: "GET is used for fetching information. / GET ใช้สำหรับดึงข้อมูล",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q14",
        type: "multiple-choice",
        question: "What is the key difference between PUT and PATCH methods?",
        options: ["PUT deletes, PATCH creates", "PUT updates whole records, PATCH modifies parts", "PATCH is faster", "There is no difference"],
        correctAnswer: "PUT updates whole records, PATCH modifies parts",
        explanation: "PUT replaces the entire entity; PATCH applies partial updates. / PUT อัปเดตข้อมูลทั้งหมด; PATCH แก้ไขเฉพาะบางส่วน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q15",
        type: "multiple-choice",
        question: "Which component acts as the entry point to a server for an API request?",
        options: ["Client", "API Gateway", "Browser", "Database"],
        correctAnswer: "API Gateway",
        explanation: "Gateways manage and route API requests. / Gateway ทำหน้าที่จัดการและส่งต่อคำขอ API",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q16",
        type: "multiple-choice",
        question: "Which term describes the rules and standards on how data requests are formatted?",
        options: ["Codes", "Gateways", "Protocols", "Methods"],
        correctAnswer: "Protocols",
        explanation: "Protocols (like HTTP) define how communication is structured. / โปรโตคอลกำหนดโครงสร้างการสื่อสาร",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q17",
        type: "yes-no",
        question: "Does the application developer (not Celigo) determine which API will work with their application?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "API endpoints are built and defined by the application creators. / ผู้พัฒนาแอปเป็นคนสร้างและกำหนด API ของตนเอง",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q18",
        type: "multiple-choice",
        question: "Which method is used to create a brand-new resource or record on a server?",
        options: ["GET", "POST", "PATCH", "HEAD"],
        correctAnswer: "POST",
        explanation: "POST is used to submit data to create a resource. / POST ใช้เพื่อสร้างข้อมูลใหม่",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q19",
        type: "multiple-choice",
        question: "Request formatting rules are determined by which of the following?",
        options: ["The user", "The API", "Operating System", "Hardware"],
        correctAnswer: "The API",
        explanation: "The API specification dictates the required format. / ข้อกำหนดของ API เป็นตัวกำหนดรูปแบบข้อมูลที่ต้องส่ง",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q20",
        type: "multiple-choice",
        question: "Where can a user typically find detailed API documentation for an application?",
        options: ["Celigo Home", "Developer's Website", "Recycle Bin", "Dashboard"],
        correctAnswer: "Developer's Website",
        explanation: "Official documentation is hosted by the app provider. / เอกสารอ้างอิงทางการอยู่ที่เว็บไซต์ของผู้พัฒนาแอป",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },

    // --- BATCH 3: Flow Builder & Mapping (Questions 21-30) ---
    {
        id: "p6_q21",
        type: "multiple-choice",
        question: "What is the standard 4-step process in Flow Builder?",
        options: ["Source, Map, Test, Live", "Source, Destination, Map, Run", "Connect, Export, Import, Audit", "Install, Configure, Run, Report"],
        correctAnswer: "Source, Destination, Map, Run",
        explanation: "The standard flow lifecycle in Celigo. / ขั้นตอนมาตรฐานในการสร้างโฟลว์บน Celigo",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
    },
    {
        id: "p6_q22",
        type: "multiple-choice",
        question: "Which tool provides a visual interface for field matching between source and destination?",
        options: ["API Builder", "Mapper 2.0", "Data Loader", "Dashboard"],
        correctAnswer: "Mapper 2.0",
        explanation: "Mapper 2.0 is the visual mapping interface. / Mapper 2.0 คือหน้าจอสำหรับจับคู่ฟิลด์ข้อมูล",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p6_q23",
        type: "multiple-choice",
        question: "What must every mapping row contain to function?",
        options: ["Description", "Destination field", "Comment", "Red flag"],
        correctAnswer: "Destination field",
        explanation: "Celigo must know where the data is going. / ต้องระบุฟิลด์ปลายทางเพื่อให้ระบบรู้ว่าจะส่งข้อมูลไปที่ไหน",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p6_q24",
        type: "multiple-choice",
        question: "Which mapping type uses double quotes for literal text values?",
        options: ["Standard", "Hard-Coded", "Handlebars", "Lookup"],
        correctAnswer: "Hard-Coded",
        explanation: "Hard-coded values are fixed strings. / ค่าตายตัว (Hard-coded) จะถูกระบุในเครื่องหมายคำพูด",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Mapping Types"]
    },
    {
        id: "p6_q25",
        type: "multiple-choice",
        question: "What does the circled 'H' icon represent in Mapper 2.0?",
        options: ["Handlebars", "Hard-coded", "Hidden", "High-priority"],
        correctAnswer: "Hard-coded",
        explanation: "The icon indicates a fixed value is set. / ไอคอน H วงกลมหมายถึงการระบุค่าตายตัว",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Mapping Types"]
    },
    {
        id: "p6_q26",
        type: "multiple-choice",
        question: "Which mapping feature allows combining multiple source fields (e.g., first and last name)?",
        options: ["Standard Mapping", "Handlebars Expression", "Static Lookup", "Manual Entry"],
        correctAnswer: "Handlebars Expression",
        explanation: "Handlebars can concatenate strings like {{first}} {{last}}. / Handlebars สามารถนำฟิลด์มาผสมกันได้",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p6_q27",
        type: "multiple-choice",
        question: "Handlebars expressions are placed within which symbols?",
        options: ["( )", "[ ]", "{{ }}", "< >"],
        correctAnswer: "{{ }}",
        explanation: "The double curly brace syntax is standard for Handlebars. / Handlebars ใช้เครื่องหมายปีกกาคู่เป็นสัญลักษณ์",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p6_q28",
        type: "yes-no",
        question: "Are new flows disabled by default upon creation?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Most flows start as disabled to prevent accidental runs. / โฟลว์ใหม่จะถูกปิดไว้ก่อนเพื่อความปลอดภัย",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
    },
    {
        id: "p6_q29",
        type: "multiple-choice",
        question: "Which feature verifies flow logic and data accuracy before going live?",
        options: ["Audit Log", "Test Mode", "Playground", "Recycle Bin"],
        correctAnswer: "Test Mode",
        explanation: "Test Mode runs the flow to check for errors. / Test Mode ใช้ตรวจสอบความถูกต้องก่อนเริ่มงานจริง",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
    },
    {
        id: "p6_q30",
        type: "multiple-choice",
        question: "Which icon deletes a specific row in Mapper 2.0?",
        options: ["Gear", "Trash can", "Plus", "Checkmark"],
        correctAnswer: "Trash can",
        explanation: "The trash can icon removes the mapping row. / ไอคอนถังขยะใช้สำหรับลบแถวการ Mapping",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },

    // --- BATCH 4: Marketplace & Administration (Questions 31-40) ---
    {
        id: "p6_q31",
        type: "multiple-choice",
        question: "How do Marketplace Templates differ from Integration Apps (IAs)?",
        options: ["Price", "Templates are modifiable; IAs are locked/managed", "IAs only for DBs", "Templates need no connections"],
        correctAnswer: "Templates are modifiable; IAs are locked/managed",
        explanation: "IAs are fully managed by developers and receive updates. / IA ถูกล็อกไว้และจัดการโดยผู้พัฒนา ส่วน Template แก้ไขได้",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
    },
    {
        id: "p6_q32",
        type: "multiple-choice",
        question: "Which role has the highest level and can transfer account ownership?",
        options: ["Admin", "User", "Account Owner", "Monitor"],
        correctAnswer: "Account Owner",
        explanation: "The Account Owner holds the highest permissions. / เจ้าของบัญชีมีสิทธิ์สูงสุดและโอนสิทธิ์ได้",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q33",
        type: "multiple-choice",
        question: "What is the default data retention period for run history?",
        options: ["7 days", "30 days", "90 days", "Forever"],
        correctAnswer: "30 days",
        explanation: "Celigo stores run data for 30 days. / ข้อมูลประวัติการรันจะถูกเก็บไว้ 30 วัน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q34",
        type: "multiple-choice",
        question: "Which feature allows setting up Sandbox or Production environments?",
        options: ["Multiple Environments", "Flow Builder", "Data Loader", "Marketplace"],
        correctAnswer: "Multiple Environments",
        explanation: "Used to segregate dev/test from production data. / ใช้แยกสภาพแวดล้อมสำหรับการทดสอบและใช้งานจริง",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q35",
        type: "multiple-choice",
        question: "Which log table tracks user login and resource creation activities?",
        options: ["Error Log", "Audit Log", "Activity Log", "System Log"],
        correctAnswer: "Audit Log",
        explanation: "Audit logs track user actions across the platform. / Audit Log บันทึกกิจกรรมของผู้ใช้ทุกคนบนแพลตฟอร์ม",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q36",
        type: "yes-no",
        question: "Can both SSO and MFA be enabled simultaneously for the same account?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "You must choose one or handle MFA through your SSO provider. / ต้องเลือกอย่างใดอย่างหนึ่ง หรือจัดการ MFA ผ่าน SSO",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q37",
        type: "multiple-choice",
        question: "Which setting forces 2-step credentials for login security?",
        options: ["Enable user", "Require MFA", "Reset password", "Admin access"],
        correctAnswer: "Require MFA",
        explanation: "MFA adds an extra layer of security. / การบังคับ MFA ช่วยเพิ่มความปลอดภัยในการเข้าสู่ระบบ",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q38",
        type: "multiple-choice",
        question: "Where can you see your account's current flow and endpoint usage limits?",
        options: ["Dashboard", "Subscription tab", "Marketplace", "Tools"],
        correctAnswer: "Subscription tab",
        explanation: "Usage against entitlements is shown here. / ดูขีดจำกัดการใช้งานได้ที่แท็บ Subscription",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q39",
        type: "multiple-choice",
        question: "What page do non-owner users see instead of the full 'My account' settings?",
        options: ["Home", "My profile", "Security", "Playground"],
        correctAnswer: "My profile",
        explanation: "Regular users access personal settings via 'My profile'. / ผู้ใช้ทั่วไปจะเห็นเมนู My profile แทน My account",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q40",
        type: "multiple-choice",
        question: "Which environment protects production data while testing new flows?",
        options: ["Production", "Non-production (Sandbox)", "Marketplace", "Data Loader"],
        correctAnswer: "Non-production (Sandbox)",
        explanation: "Sandbox environments are for safe testing. / Sandbox ใช้สำหรับการทดสอบที่ปลอดภัยจากข้อมูลจริง",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },

    // --- BATCH 5: Tools & Resources Deep Dive (Questions 41-50) ---
    
    {
        id: "p6_q41",
        type: "multiple-choice",
        question: "Which tool allows you to test code snippets without affecting live integration data?",
        options: ["Flow Builder", "Data Loader", "Playground", "API Builder"],
        correctAnswer: "Playground",
        explanation: "The Playground is a dedicated testing area with Advanced Field Editors (AFEs). / Playground เป็นพื้นที่ทดสอบโดยไม่กระทบต่อข้อมูลจริง",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p6_q42",
        type: "multiple-select",
        question: "In addition to CSV and JSON, which other file types can Data Loader import? (Select 2)",
        options: ["PDF", "XLSX", "XML", "DOCX"],
        correctAnswer: ["XLSX", "XML"],
        explanation: "Data Loader supports CSV, JSON, XLSX, and XML. / Data Loader รองรับไฟล์ CSV, JSON, XLSX และ XML",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q43",
        type: "multiple-choice",
        question: "How long is a generated report available for download in the Reports menu?",
        options: ["7 days", "15 days", "30 days", "60 days"],
        correctAnswer: "30 days",
        explanation: "Reports can be downloaded for activities within the last 30 days. / รายงานสามารถดาวน์โหลดได้สำหรับเหตุการณ์ใน 30 วันล่าสุด",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q44",
        type: "yes-no",
        question: "Is information entered into the Playground automatically saved to your integration?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Playground data is not saved; you must copy/paste it. / ข้อมูลใน Playground จะไม่ถูกบันทึก คุณต้องคัดลอกไปวางเอง",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p6_q45",
        type: "multiple-choice",
        question: "Where would you find and restore a deleted Export component?",
        options: ["Tools > Reports", "Resources > Recycle bin", "Marketplace", "Dashboard"],
        correctAnswer: "Resources > Recycle bin",
        explanation: "Deleted objects are kept in the Recycle bin for 30 days. / ทรัพยากรที่ถูกลบกู้คืนได้ที่ Recycle bin ภายใน 30 วัน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q46",
        type: "multiple-choice",
        question: "Which menu is usually restricted to Account Owners and Admins because it contains standalone objects?",
        options: ["Tools", "Resources", "Marketplace", "Dashboard"],
        correctAnswer: "Resources",
        explanation: "Resources contains shared objects managed by Admins. / เมนู Resources เก็บวัตถุใช้ร่วมกัน จัดการโดย Admin",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q47",
        type: "multiple-choice",
        question: "What is the 'API Builder' primarily used for?",
        options: ["To monitor API traffic", "To visually create your own APIs", "To delete connections", "To import CSVs"],
        correctAnswer: "To visually create your own APIs",
        explanation: "API Builder is a visual tool to create custom APIs. / API Builder เป็นเครื่องมือสร้าง API ของคุณเอง",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p6_q48",
        type: "multiple-choice",
        question: "Which resource connects to applications located behind a firewall?",
        options: ["Scripts", "iClients", "Agents", "EDI profiles"],
        correctAnswer: "Agents",
        explanation: "Agents establish secure connections to on-premise data. / Agents ใช้เชื่อมต่อข้อมูลภายใน Firewall (On-premise)",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q49",
        type: "short-answer",
        question: "How many days are deleted resources kept in the Recycle Bin? (Answer with a number)",
        options: [],
        correctAnswer: "30",
        explanation: "Standard 30-day retention for deleted objects. / ระยะเวลากู้คืนข้อมูลคือ 30 วัน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q50",
        type: "multiple-choice",
        question: "Which tool allows manual XLSX upload to a destination without building a scheduled flow?",
        options: ["API Builder", "Data Loader", "Playground", "Audit Log"],
        correctAnswer: "Data Loader",
        explanation: "Data Loader is for manual file imports. / Data Loader ใช้สำหรับการนำเข้าไฟล์ด้วยตนเอง",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },

    // --- BATCH 6: Advanced Flow Configurations (Questions 51-60) ---
    {
        id: "p6_q51",
        type: "multiple-choice",
        question: "What refers to the data moving from a source to a destination?",
        options: ["Record", "Flow", "Integration", "Mapping"],
        correctAnswer: "Flow",
        explanation: "A flow is the movement of data. / โฟลว์คือการเคลื่อนที่ของข้อมูล",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p6_q52",
        type: "multiple-choice",
        question: "Which component adds supplementary info to a record?",
        options: ["Source", "Lookup", "Export", "Mapping"],
        correctAnswer: "Lookup",
        explanation: "Lookups add info to an existing record. / Lookup ใช้เพิ่มข้อมูลเสริมให้เรคคอร์ดเดิม",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p6_q53",
        type: "multiple-choice",
        question: "Where can you see a list of every action taken in a flow?",
        options: ["Recycle Bin", "Audit Log", "Playground", "Marketplace"],
        correctAnswer: "Audit Log",
        explanation: "Audit logs track every change. / Audit Log บันทึกทุกการเปลี่ยนแปลง",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q54",
        type: "yes-no",
        question: "Can you restore a deleted integration from the Recycle Bin?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Integrations are restorable within 30 days. / Integration สามารถกู้คืนได้ภายใน 30 วัน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q55",
        type: "multiple-choice",
        question: "Which of the following is NOT a standalone resource?",
        options: ["Connection", "Export", "Import", "Flow Step"],
        correctAnswer: "Flow Step",
        explanation: "Flow steps belong to specific flows. / Flow Step เป็นส่วนหนึ่งของโฟลว์ ไม่ใช่วัตถุอิสระ",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p6_q56",
        type: "multiple-choice",
        question: "Which HTTP method is commonly used to partially update a record?",
        options: ["POST", "PUT", "PATCH", "GET"],
        correctAnswer: "PATCH",
        explanation: "PATCH is for partial updates. / PATCH ใช้สำหรับการอัปเดตบางส่วน",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|APIs"]
    },
    {
        id: "p6_q57",
        type: "multiple-choice",
        question: "What is required to allow external systems to access Celigo APIs?",
        options: ["Username", "API Token", "EDI Profile", "Agent"],
        correctAnswer: "API Token",
        explanation: "API Tokens provide secure external access. / API Token ใช้สำหรับการเข้าถึงจากระบบภายนอกอย่างปลอดภัย",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p6_q58",
        type: "multiple-choice",
        question: "Which tool is best for learning and experimenting with Handlebars syntax?",
        options: ["Flow Builder", "Playground", "Reports", "Recycle Bin"],
        correctAnswer: "Playground",
        explanation: "Playground is for testing expressions. / Playground เหมาะกับการทดสอบ Handlebars",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p6_q59",
        type: "yes-no",
        question: "Does an 'Integration App' allow users to modify locked components?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Integration Apps have managed/locked components. / Integration App มีส่วนประกอบที่ถูกล็อกไว้",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
    },
    {
        id: "p6_q60",
        type: "short-answer",
        question: "What syntax is used for a dynamic field in mapping? (e.g. {{field}})",
        options: [],
        correctAnswer: "Handlebars",
        explanation: "Handlebars is the templating language. / Handlebars คือภาษาเทมเพลตที่ใช้",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- BATCH 7: Extended Practice (Questions 61-70) ---
    {
        id: "p6_q61",
        type: "multiple-choice",
        question: "Which Dashboard view is most useful for checking currently active flows?",
        options: ["Running flows tab", "Completed flows tab", "Errors tab", "Settings"],
        correctAnswer: "Running flows tab",
        explanation: "Shows active executions. / แสดงโฟลว์ที่กำลังรันอยู่",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p6_q62",
        type: "multiple-choice",
        question: "Which component is needed to schedule a flow to run every hour?",
        options: ["Mapper", "Scheduler", "Hook", "Filter"],
        correctAnswer: "Scheduler",
        explanation: "Schedulers automate flow timing. / Scheduler ใช้กำหนดเวลาการทำงานของโฟลว์",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p6_q63",
        type: "multiple-choice",
        question: "What indicates a field is required in Mapper 2.0?",
        options: ["Green dot", "Red asterisk (*)", "Yellow gear", "Blue box"],
        correctAnswer: "Red asterisk (*)",
        explanation: "Asterisks indicate mandatory fields. / ดอกจันสีแดงแสดงว่าเป็นฟิลด์ที่จำเป็น",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p6_q64",
        type: "yes-no",
        question: "Can you change the Source of a flow after it has been created?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Flow sources can be swapped/edited. / สามารถแก้ไข Source ของโฟลว์ได้",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p6_q65",
        type: "multiple-choice",
        question: "What is the result of using {{upper first_name}} in Handlebars?",
        options: ["Lowercase name", "Uppercase name", "Reversed name", "First name only"],
        correctAnswer: "Uppercase name",
        explanation: "Upper is a built-in helper. / Upper เป็นฟังก์ชันแปลงเป็นตัวพิมพ์ใหญ่",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p6_q66",
        type: "multiple-choice",
        question: "Which resource type handles B2B standard documents?",
        options: ["API Token", "EDI Profile", "Lookup Cache", "Agent"],
        correctAnswer: "EDI Profile",
        explanation: "EDI Profiles manage B2B standards. / EDI Profile จัดการเอกสารมาตรฐาน B2B",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
    },
    {
        id: "p6_q67",
        type: "multiple-choice",
        question: "Where do you manage user invitations to your Celigo account?",
        options: ["Dashboard", "Users tab", "Resources", "Tools"],
        correctAnswer: "Users tab",
        explanation: "Users are managed in the account settings. / จัดการสมาชิกในแท็บ Users",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q68",
        type: "yes-no",
        question: "Is 'Mapper 2.0' the only way to map fields in Celigo?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Advanced users can use scripts/AFEs. / สามารถใช้ Script หรือ AFE แทนได้",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p6_q69",
        type: "multiple-choice",
        question: "Which tool would you use to create a webhook for an external system?",
        options: ["API Builder", "Data Loader", "Report", "Lookup"],
        correctAnswer: "API Builder",
        explanation: "Webhooks are built using the API Builder. / Webhook สร้างได้โดยใช้ API Builder",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p6_q70",
        type: "short-answer",
        question: "What color is the status dot for a successful flow run?",
        options: [],
        correctAnswer: "Green",
        explanation: "Green indicates success. / สีเขียวหมายถึงรันสำเร็จ",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },

    // --- BATCH 8: Final Review & Troubleshooting (Questions 71-80) ---
    {
        id: "p6_q71",
        type: "multiple-choice",
        question: "If a flow has 'Open Errors', where is the best place to troubleshoot?",
        options: ["Marketplace", "Error Management/Dashboard", "Recycle Bin", "Tools"],
        correctAnswer: "Error Management/Dashboard",
        explanation: "Dashboard lists specific error details. / ดูรายละเอียดข้อผิดพลาดได้ที่ Dashboard",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p6_q72",
        type: "multiple-choice",
        question: "What does 'iPaaS' stand for?",
        options: ["Integrated Platform", "Integration Platform as a Service", "Internal Protocol", "Interface Program"],
        correctAnswer: "Integration Platform as a Service",
        explanation: "Celigo is an iPaaS solution. / Celigo คือแพลตฟอร์มการเชื่อมต่อในรูปแบบบริการ",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "p6_q73",
        type: "multiple-choice",
        question: "Which of these allows custom logic during a flow execution?",
        options: ["Scheduler", "Hook", "Audit Log", "Tile"],
        correctAnswer: "Hook",
        explanation: "Hooks allow running scripts during a flow. / Hook ใช้รันสคริปต์ระหว่างโฟลว์ทำงาน",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p6_q74",
        type: "yes-no",
        question: "Can one integration folder contain flows for different applications?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Integrations are just organizational containers. / Integration คือกล่องเก็บโฟลว์ที่ยืดหยุ่น",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
    },
    {
        id: "p6_q75",
        type: "multiple-choice",
        question: "What tool helps you format complex JSON structures in mapping?",
        options: ["Data Loader", "Advanced Field Editor (AFE)", "Audit Log", "Recycle Bin"],
        correctAnswer: "Advanced Field Editor (AFE)",
        explanation: "AFE provides more room for complex logic. / AFE ช่วยในการเขียนโครงสร้าง JSON ที่ซับซ้อน",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p6_q76",
        type: "multiple-choice",
        question: "Which connection protocol is most commonly used for modern web APIs?",
        options: ["FTP", "REST/HTTP", "SOAP", "AS2"],
        correctAnswer: "REST/HTTP",
        explanation: "REST is the standard for modern APIs. / REST เป็นมาตรฐานสำหรับ API สมัยใหม่",
        chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
    },
    {
        id: "p6_q77",
        type: "multiple-choice",
        question: "To move a file from an FTP server to a folder, which connector would you use?",
        options: ["HTTP", "FTP", "Database", "Marketplace"],
        correctAnswer: "FTP",
        explanation: "FTP connectors handle file transfers. / FTP Connector ใช้สำหรับย้ายไฟล์",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p6_q78",
        type: "multiple-choice",
        question: "What is 'My APIs' in the Resources menu?",
        options: ["Shared logins", "Custom APIs created in API Builder", "A list of help articles", "Standard Templates"],
        correctAnswer: "Custom APIs created in API Builder",
        explanation: "It stores your custom-built API endpoints. / เก็บ API ที่คุณสร้างขึ้นเอง",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p6_q79",
        type: "yes-no",
        question: "Does Celigo allow multi-factor authentication for all users?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "MFA is a core security feature. / MFA เป็นฟีเจอร์ความปลอดภัยหลัก",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    },
    {
        id: "p6_q80",
        type: "multiple-choice",
        question: "Which of the following describes the 'Owner' role in Celigo?",
        options: ["Lowest access", "Full access + manage account billing", "Only view flows", "Temporary access"],
        correctAnswer: "Full access + manage account billing",
        explanation: "The Owner is the top-level account manager. / Owner คือผู้จัดการบัญชีระดับสูงสุด",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
    }
];