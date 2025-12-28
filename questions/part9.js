const part9Questions = [
    // --- CHAPTER 1: INTRODUCTION TO CELIGO PLATFORM API ---
    {
        id: "p9_q1",
        type: "multiple-choice",
        question: "What formatting does the Celigo platform API use? (Celigo API ใช้รูปแบบข้อมูลใด?)",
        options: ["XML", "HTML", "JSON", "SQL"],
        correctAnswer: "JSON",
        explanation: "The Celigo API uses JSON (JavaScript Object Notation) formatting for all data requests and responses. / Celigo API ใช้รูปแบบ JSON สำหรับการรับส่งข้อมูลทั้งหมด",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q2",
        type: "multiple-choice",
        question: "Which HTTP method is typically used to retrieve information? (HTTP method ใดที่ใช้เพื่อดึงข้อมูล?)",
        options: ["POST", "GET", "PUT", "DELETE"],
        correctAnswer: "GET",
        explanation: "The GET method is used to retrieve or read data from a specific resource. / GET ใช้สำหรับเรียกดูหรืออ่านข้อมูลจากทรัพยากรที่ระบุ",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q3",
        type: "multiple-choice",
        question: "What type of authentication does the Celigo platform API use? (การยืนยันตัวตนแบบใดที่ Celigo API ใช้?)",
        options: ["Basic", "Bearer token", "Custom", "WSSE"],
        correctAnswer: "Bearer token",
        explanation: "Authentication is handled via a Bearer token in the HTTP Authorization header. / การยืนยันตัวตนทำได้โดยใช้ Bearer token ใน HTTP header",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q4",
        type: "multiple-choice",
        question: "Which is a valid reason to use the API? (ข้อใดคือเหตุผลที่ควรใช้ API?)",
        options: ["To change the UI theme", "To trigger flows externally", "To create a new Celigo account", "To browse the marketplace"],
        correctAnswer: "To trigger flows externally",
        explanation: "The API allows external systems to programmatically trigger flows, run exports, or process imports. / API ช่วยให้ระบบภายนอกสามารถสั่งรัน Flow ได้โดยอัตโนมัติ",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q5",
        type: "multiple-choice",
        question: "Which HTTP method is used to remove a resource? (HTTP method ใดที่ใช้เพื่อลบทรัพยากร?)",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: "DELETE",
        explanation: "The DELETE method is used to remove an existing resource from the platform. / DELETE ใช้สำหรับลบทรัพยากรที่มีอยู่ออกจากแพลตฟอร์ม",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q6",
        type: "multiple-choice",
        question: "What is the Base URI for an external system using North America servers? (Base URI สำหรับระบบภายนอกในโซนอเมริกาเหนือคืออะไร?)",
        options: ["https://integrator.io/api/", "https://api.integrator.io/v1/", "https://api.eu.integrator.io/v1/", "https://eu.integrator.io/api/"],
        correctAnswer: "https://api.integrator.io/v1/",
        explanation: "External systems in North America must use the 'api.' subdomain and 'v1' path. / ระบบภายนอกในอเมริกาเหนือต้องใช้ subdomain 'api.' และ path 'v1'",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q7",
        type: "short-answer",
        question: "In JSON, what specific character type is used to contain name/value pairs? (ใน JSON สิ่งใดใช้บรรจุคู่ชื่อ/ค่า? ตอบเป็นชื่อเรียกหรือสัญลักษณ์)",
        options: [],
        correctAnswer: ["curly brackets", "{}", "curly braces"],
        explanation: "JSON objects are wrapped in curly brackets {}. / อ็อบเจกต์ JSON ถูกห่อหุ้มด้วยเครื่องหมายปีกกา {}",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q8",
        type: "multiple-select",
        question: "Which of these can be accessed via the API? Select all that apply. (สิ่งใดต่อไปนี้สามารถเข้าถึงได้ผ่าน API? เลือกทุกข้อที่ถูก)",
        options: ["Connections", "Flows", "Exports", "External UI Themes"],
        correctAnswer: ["Connections", "Flows", "Exports"],
        explanation: "Connections, Flows, and Exports are all accessible resources via endpoints. UI themes are not. / Connections, Flows และ Exports เป็นทรัพยากรที่เข้าถึงได้ผ่าน endpoint",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q9",
        type: "yes-no",
        question: "Does every API endpoint support all four HTTP methods (GET, POST, PUT, DELETE)? (ทุก Endpoint รองรับทั้ง 4 HTTP methods หรือไม่?)",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Not every endpoint supports every method; some may only support GET or POST. / ไม่ใช่ทุก endpoint ที่จะรองรับครบทุก method",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q10",
        type: "short-answer",
        question: "What does the 'R' in REST stand for? (ตัวอักษร R ในคำว่า REST ย่อมาจากอะไร?)",
        options: [],
        correctAnswer: "Representational",
        explanation: "REST stands for Representational State Transfer. / REST ย่อมาจาก Representational State Transfer",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },

    // --- CHAPTER 2: USING THE API ---
    {
        id: "p9_q11",
        type: "multiple-choice",
        question: "Who can access the Celigo platform API from a web browser? (ใครสามารถเข้าถึง API ผ่านเบราว์เซอร์ได้?)",
        options: ["Administrators", "Account Owners", "All Users", "External Partners only"],
        correctAnswer: "Account Owners",
        explanation: "Only Account Owners have the necessary permissions to access API endpoints directly via a browser. / เฉพาะเจ้าของบัญชีเท่านั้นที่มีสิทธิ์เข้าถึง API ผ่านเบราว์เซอร์โดยตรง",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q12",
        type: "multiple-choice",
        question: "Where is the Resource ID located in the Celigo platform? (Resource ID อยู่ตรงไหนในแพลตฟอร์ม Celigo?)",
        options: ["In the user profile", "At the end of the URL in the browser", "In the Settings menu", "On the dashboard"],
        correctAnswer: "At the end of the URL in the browser",
        explanation: "The Resource ID is the string of characters at the end of the URL when viewing a resource in the UI. / Resource ID คือชุดตัวอักษรที่อยู่ท้าย URL เมื่อดูทรัพยากรในหน้าจอ UI",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q13",
        type: "multiple-choice",
        question: "What three items are needed for a browser-based API call? (3 สิ่งที่จำเป็นสำหรับการเรียก API ผ่านเบราว์เซอร์?)",
        options: ["Base URI, Relative URI, Resource ID", "Username, Password, API Token", "Base URI, Resource ID, JSON format", "Relative URI, Bearer Token, Scope"],
        correctAnswer: "Base URI, Relative URI, Resource ID",
        explanation: "The combination of the browser Base URI, the specific Relative URI, and the Resource ID forms the complete request URL. / การผสมผสานระหว่าง Base URI, Relative URI และ Resource ID จะกลายเป็น URL ที่สมบูรณ์",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q14",
        type: "multiple-choice",
        question: "Who can create API tokens? (ใครสามารถสร้าง API token ได้?)",
        options: ["All users", "Only Account Owners", "Account Owners and Administrators", "Only External Systems"],
        correctAnswer: "Account Owners and Administrators",
        explanation: "Both Account Owners and users with Administrative roles can manage API tokens. / ทั้งเจ้าของบัญชีและผู้ดูแลระบบสามารถจัดการ API tokens ได้",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q15",
        type: "short-answer",
        question: "What is the maximum number of days for an 'Auto-purge token' setting? (ระยะเวลาสูงสุด (จำนวนวัน) สำหรับการตั้งค่า Auto-purge token คือเท่าใด?)",
        options: [],
        correctAnswer: "30",
        explanation: "Auto-purge settings range from 'never' up to a maximum of 30 days. / การตั้งค่า Auto-purge มีตั้งแต่ 'ไม่ลบ' ไปจนถึงสูงสุด 30 วัน",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q16",
        type: "multiple-choice",
        question: "Which Base URI is correct for a browser in the EU region? (Base URI ใดถูกต้องสำหรับเบราว์เซอร์ในโซนยุโรป?)",
        options: ["https://eu.integrator.io/api/", "https://api.eu.integrator.io/v1/", "https://integrator.io/api/", "https://api.integrator.io/v1/"],
        correctAnswer: "https://eu.integrator.io/api/",
        explanation: "Browser-based calls in the EU use the 'eu.' prefix and end in '/api/'. / การเรียกผ่านเบราว์เซอร์ในยุโรปใช้ prefix 'eu.' และลงท้ายด้วย '/api/'",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q17",
        type: "yes-no",
        question: "If an API token has 'Custom scope', can it perform CRUD operations for connections? (ถ้า API token เป็นแบบ Custom scope จะสามารถทำรายการ CRUD สำหรับ Connection ได้หรือไม่?)",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Custom scope restricts CRUD operations for connections, exports, and imports. / Custom scope จะจำกัดการทำรายการ CRUD สำหรับ connection, export และ import",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q18",
        type: "multiple-choice",
        question: "When making an API request from an external system, when does the call execute? (เมื่อเรียก API จากระบบภายนอก คำสั่งจะทำงานเมื่อใด?)",
        options: ["After 24 hours", "Only after admin approval", "Immediately (as per queue)", "Every Monday morning"],
        correctAnswer: "Immediately (as per queue)",
        explanation: "API calls are placed in a queue and executed as quickly as possible. / การเรียก API จะถูกจัดคิวและดำเนินการทันทีที่ทำได้",
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
        explanation: "Base URI is the foundation, Relative URI is the type, and Resource ID is the specific item. / Base URI คือฐาน, Relative URI คือประเภท และ Resource ID คือระบุตัวตนเฉพาะ",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    {
        id: "p9_q20",
        type: "multiple-choice",
        question: "What tool is mentioned as an example for making external API calls? (เครื่องมือใดถูกยกตัวอย่างสำหรับการเรียก API จากภายนอก?)",
        options: ["Excel", "Postman", "Slack", "Salesforce"],
        correctAnswer: "Postman",
        explanation: "Postman is specifically highlighted as a tool used to test and execute API calls to Celigo. / Postman เป็นเครื่องมือที่ใช้ในการทดสอบและเรียกใช้งาน API ของ Celigo",
        chapter: ["Level 4 - Introducing Developer Tools|Celigo Platform API"]
    },
    // CHAPTER 1: PLAYGROUND
    {
        id: "p9_q21",
        type: "multiple-choice",
        question: "Where is the Playground located in the Celigo platform? / Playground ตั้งอยู่ที่ไหนในแพลตฟอร์ม Celigo?",
        options: ["Home", "Dashboard", "Tools", "Marketplace"],
        correctAnswer: "Tools",
        explanation: "Playground is located under the 'Tools' menu in the main navigation. / Playground อยู่ภายใต้เมนู 'Tools' ในแถบเมนูหลัก",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q22",
        type: "multiple-choice",
        question: "What is the primary purpose of the Playground? / วัตถุประสงค์หลักของ Playground คืออะไร?",
        options: [
            "To run production flows / เพื่อรันโฟลว์จริง",
            "To experiment outside of an active flow / เพื่อทดลองนอกโฟลว์ที่ใช้งานอยู่",
            "To store historical data / เพื่อเก็บข้อมูลย้อนหลัง",
            "To manage user permissions / เพื่อจัดการสิทธิ์ผู้ใช้"
        ],
        correctAnswer: "To experiment outside of an active flow / เพื่อทดลองนอกโฟลว์ที่ใช้งานอยู่",
        explanation: "Playground provides a safe environment to test queries and transformations without affecting live flows. / Playground ให้สภาพแวดล้อมที่ปลอดภัยสำหรับทดสอบคิวรีและการแปลงข้อมูลโดยไม่กระทบโฟลว์จริง",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q23",
        type: "yes-no",
        question: "Does Playground automatically save your work? / Playground บันทึกงานของคุณโดยอัตโนมัติหรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Data in Playground is NOT saved; you must copy it elsewhere for future use. / ข้อมูลใน Playground ไม่มีการบันทึกอัตโนมัติ คุณต้องคัดลอกไปไว้ที่อื่นเพื่อใช้งานต่อ",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q24",
        type: "multiple-choice",
        question: "Which section lists the various Advanced Field Editors? / ส่วนใดที่แสดงรายการ AFEs ประเภทต่างๆ?",
        options: ["Integration explorer", "Flow builder", "Editor examples", "Dashboard"],
        correctAnswer: "Editor examples",
        explanation: "The 'Editor examples' section contains a list of the 9 different Advanced Field Editors. / ส่วน 'Editor examples' รวบรวมรายการของ AFEs ทั้ง 9 ประเภท",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q25",
        type: "multiple-choice",
        question: "What is the main function of the Integration explorer in Playground? / หน้าที่หลักของ Integration explorer ใน Playground คืออะไร?",
        options: [
            "To delete integrations / ลบอินทิเกรชัน",
            "To access and copy data from existing flows / เข้าถึงและคัดลอกข้อมูลจากโฟลว์ที่มีอยู่",
            "To create new connections / สร้างการเชื่อมต่อใหม่",
            "To schedule flows / ตั้งเวลาโฟลว์"
        ],
        correctAnswer: "To access and copy data from existing flows / เข้าถึงและคัดลอกข้อมูลจากโฟลว์ที่มีอยู่",
        explanation: "Integration explorer allows you to quickly pull data from live integrations to use as test data. / Integration explorer ช่วยให้คุณดึงข้อมูลจากอินทิเกรชันจริงมาใช้ทดสอบได้อย่างรวดเร็ว",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q26",
        type: "multiple-choice",
        question: "Which of these functions CANNOT be tested in Playground? / ฟังก์ชันใดต่อไปนี้ 'ไม่สามารถ' ทดสอบใน Playground ได้?",
        options: [
            "SQL queries",
            "Handlebars expressions",
            "Deleting a live database / การลบฐานข้อมูลจริง",
            "JavaScript Scripting"
        ],
        correctAnswer: "Deleting a live database / การลบฐานข้อมูลจริง",
        explanation: "Playground is for testing templates and logic, not for direct database management or production execution. / Playground มีไว้สำหรับทดสอบเทมเพลตและตรรกะ ไม่ใช่สำหรับจัดการฐานข้อมูลโดยตรง",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q27",
        type: "multiple-choice",
        question: "In the context of Celigo, what is a 'payload'? / ในบริบทของ Celigo 'payload' คืออะไร?",
        options: [
            "A type of error / ประเภทของข้อผิดพลาด",
            "Structured data moving through a flow / ข้อมูลที่มีโครงสร้างซึ่งส่งผ่านโฟลว์",
            "A license type / ประเภทไลเซนส์",
            "A user role / บทบาทผู้ใช้"
        ],
        correctAnswer: "Structured data moving through a flow / ข้อมูลที่มีโครงสร้างซึ่งส่งผ่านโฟลว์",
        explanation: "A payload is the structured data (usually JSON) that is processed at each step of a flow. / Payload คือข้อมูลที่มีโครงสร้าง (มักเป็น JSON) ที่ถูกประมวลผลในแต่ละขั้นตอนของโฟลว์",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q28",
        type: "yes-no",
        question: "True or False: You can ONLY use sample data in Playground. / จริงหรือเท็จ: คุณสามารถใช้ได้เพียง 'ข้อมูลตัวอย่าง' ใน Playground เท่านั้น",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "While sample data is provided, you can use Integration explorer to bring in your own data from real flows. / แม้จะมีข้อมูลตัวอย่างให้ แต่คุณสามารถใช้ Integration explorer เพื่อนำข้อมูลจริงจากโฟลว์มาใช้ได้",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q29",
        type: "multiple-choice",
        question: "Where can AFEs be found besides the Playground? / นอกจากใน Playground แล้ว จะพบ AFEs ได้ที่ไหนอีก?",
        options: [
            "Nowhere / ไม่มีที่อื่น",
            "In specific fields within exports or lookups / ในฟิลด์เฉพาะภายในการ Export หรือ Lookup",
            "Only in the Error folder / เฉพาะในโฟลเดอร์ Error",
            "In the Billing section / ในส่วนการเรียกเก็บเงิน"
        ],
        correctAnswer: "In specific fields within exports or lookups / ในฟิลด์เฉพาะภายในการ Export หรือ Lookup",
        explanation: "AFEs are integrated throughout the platform where dynamic data mapping is required. / AFEs ถูกรวมไว้ทั่วทั้งแพลตฟอร์มในจุดที่ต้องมีการจับคู่ข้อมูลแบบไดนามิก",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q30",
        type: "multiple-choice",
        question: "How do line numbers in Playground editors help users? / เลขบรรทัดในหน้าแก้ไขของ Playground ช่วยผู้ใช้ได้อย่างไร?",
        options: [
            "They show the price / แสดงราคา",
            "They help identify precise parts of complex payloads / ช่วยระบุส่วนที่แม่นยำของ payload ที่ซับซ้อน",
            "They count the number of flows / นับจำนวนโฟลว์",
            "They indicate the time / ระบุเวลา"
        ],
        correctAnswer: "They help identify precise parts of complex payloads / ช่วยระบุส่วนที่แม่นยำของ payload ที่ซับซ้อน",
        explanation: "Line numbers allow developers to pinpoint exactly where data or errors exist in a large JSON structure. / เลขบรรทัดช่วยให้นักพัฒนาระบุตำแหน่งของข้อมูลหรือข้อผิดพลาดใน JSON ขนาดใหญ่ได้อย่างแม่นยำ",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },

    // CHAPTER 2: ADVANCED FIELD EDITORS (AFEs)
    {
        id: "p9_q31",
        type: "multiple-choice",
        question: "Which AFE converts CSV files into JSON? / AFE ใดทำหน้าที่แปลงไฟล์ CSV เป็น JSON?",
        options: ["XML parser helper", "CSV parser helper", "Form builder", "Filter editor"],
        correctAnswer: "CSV parser helper",
        explanation: "The CSV parser is used to transform flat CSV data into the JSON format required by Celigo. / CSV parser ใช้เพื่อแปลงข้อมูล CSV ให้เป็นรูปแบบ JSON ที่ Celigo ต้องการ",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q32",
        type: "multiple-choice",
        question: "How do you trigger the auto-suggestion menu in a Handlebars editor? / คุณจะเปิดเมนูแนะนำอัตโนมัติใน Handlebars editor ได้อย่างไร?",
        options: ["Typing $$", "Pressing Alt + F4", "Typing {{ or Ctrl + Space", "Right-clicking / คลิกขวา"],
        correctAnswer: "Typing {{ or Ctrl + Space",
        explanation: "Typing double curly braces or using Ctrl+Space brings up the dynamic field selection menu. / การพิมพ์ปีกกาคู่หรือใช้ Ctrl+Space จะแสดงเมนูเลือกฟิลด์แบบไดนามิก",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q33",
        type: "multiple-choice",
        question: "Which layout option is NOT available for most AFEs? / ตัวเลือกเลย์เอาต์ใดที่ 'ไม่มี' ให้สำหรับ AFEs ส่วนใหญ่?",
        options: ["One-column", "Two-column", "Three-column", "Four-column"],
        correctAnswer: "Four-column",
        explanation: "AFEs support 1, 2, or 3 column layouts for side-by-side comparison/editing. / AFEs รองรับเลย์เอาต์แบบ 1, 2 หรือ 3 คอลัมน์เพื่อการเปรียบเทียบและแก้ไข",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q34",
        type: "multiple-choice",
        question: "The Transform 2.0 editor is specifically useful for: / Transform 2.0 editor มีประโยชน์โดยเฉพาะสำหรับ:",
        options: [
            "Simple CSV parsing / การพาร์ส CSV ง่ายๆ",
            "Complex transformations and nested arrays / การแปลงข้อมูลที่ซับซ้อนและอาเรย์ซ้อนเรเยอร์",
            "Creating SQL tables / การสร้างตาราง SQL",
            "Sending emails / การส่งอีเมล"
        ],
        correctAnswer: "Complex transformations and nested arrays / การแปลงข้อมูลที่ซับซ้อนและอาเรย์ซ้อนเรเยอร์",
        explanation: "Transform 2.0 is designed for advanced JSON manipulation, especially with arrays and objects. / Transform 2.0 ออกแบบมาเพื่อจัดการ JSON ขั้นสูง โดยเฉพาะกับข้อมูลที่เป็นอาเรย์และออบเจ็กต์",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q35",
        type: "multiple-choice",
        question: "Which AFE allows you to run JavaScript in a secure environment? / AFE ใดที่อนุญาตให้รัน JavaScript ได้ในสภาพแวดล้อมที่ปลอดภัย?",
        options: ["Handlebars editor", "Script editor", "SQL query builder", "Filter editor"],
        correctAnswer: "Script editor",
        explanation: "The Script editor provides a secure runtime to execute custom JavaScript logic. / Script editor จัดเตรียมสภาพแวดล้อมที่ปลอดภัยเพื่อรันตรรกะ JavaScript ที่กำหนดเอง",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q36",
        type: "multiple-choice",
        question: "In the Filter editor, how many conditional operators are typically available? / ใน Filter editor ปกติจะมีตัวดำเนินการเงื่อนไขกี่ตัว?",
        options: ["5", "10", "13", "20"],
        correctAnswer: "13",
        explanation: "There are 13 operators such as 'equals', 'contains', 'is empty', etc. / มีตัวดำเนินการ 13 แบบ เช่น 'เท่ากับ', 'ประกอบด้วย', 'เป็นค่าว่าง' และอื่นๆ",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q37",
        type: "multiple-choice",
        question: "What is the 'extract-generate pair' used for? / 'extract-generate pair' ใช้ทำอะไร?",
        options: [
            "To delete data / เพื่อลบข้อมูล",
            "To map a source field to a new output field name / เพื่อจับคู่ฟิลด์ต้นทางกับชื่อฟิลด์ขาออกใหม่",
            "To encrypt files / เพื่อเข้ารหัสไฟล์",
            "To merge two flows / เพื่อรวมสองโฟลว์เข้าด้วยกัน"
        ],
        correctAnswer: "To map a source field to a new output field name / เพื่อจับคู่ฟิลด์ต้นทางกับชื่อฟิลด์ขาออกใหม่",
        explanation: "Extract defines the source field; Generate defines the destination field name in the output. / Extract กำหนดฟิลด์ต้นทาง; Generate กำหนดชื่อฟิลด์ปลายทางในข้อมูลขาออก",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q38",
        type: "multiple-choice",
        question: "Which helper would you use to calculate the average of numeric values? / คุณจะใช้ Helper ใดเพื่อคำนวณค่าเฉลี่ยของตัวเลข?",
        options: ["{{add}}", "{{avg}}", "{{sum}}", "{{count}}"],
        correctAnswer: "{{avg}}",
        explanation: "The {{avg}} helper is specifically designed to calculate the mathematical average. / {{avg}} helper ถูกออกแบบมาเพื่อคำนวณค่าเฉลี่ยทางคณิตศาสตร์โดยเฉพาะ",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q39",
        type: "multiple-choice",
        question: "What does the 'Expand/Collapse' toggle do in a JSON payload? / ปุ่ม 'Expand/Collapse' ทำหน้าที่อะไรใน JSON payload?",
        options: [
            "It deletes the data / มันลบข้อมูล",
            "It hides or shows nested objects to reduce visual clutter / ซ่อนหรือแสดงออบเจ็กต์ที่ซ้อนกันเพื่อลดความสับสนทางสายตา",
            "It changes the data format / มันเปลี่ยนรูปแบบข้อมูล",
            "It sends the data to a server / มันส่งข้อมูลไปยังเซิร์ฟเวอร์"
        ],
        correctAnswer: "It hides or shows nested objects to reduce visual clutter / ซ่อนหรือแสดงออบเจ็กต์ที่ซ้อนกันเพื่อลดความสับสนทางสายตา",
        explanation: "This feature helps navigate complex JSON structures by folding parts you don't need to see. / ฟีเจอร์นี้ช่วยในการดูโครงสร้าง JSON ที่ซ้อนกันหลายชั้นโดยการย่อส่วนที่ไม่จำเป็นต้องดูไว้",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    {
        id: "p9_q40",
        type: "multiple-choice",
        question: "Where is the CSV generator helper found? / จะพบ CSV generator helper ได้ที่ไหน?",
        options: [
            "In the Playground / ใน Playground",
            "Under the FTP transfer import step / ภายใต้ขั้นตอน FTP transfer import",
            "In the Dashboard / ใน Dashboard",
            "Only in Level 1 courses / เฉพาะในหลักสูตร Level 1"
        ],
        correctAnswer: "Under the FTP transfer import step / ภายใต้ขั้นตอน FTP transfer import",
        explanation: "The CSV generator is an exception and is located within the FTP import process, not the general Playground. / CSV generator เป็นข้อยกเว้น โดยตั้งอยู่ในกระบวนการ FTP import ไม่ใช่ใน Playground ทั่วไป",
        chapter: ["Level 4 - Introducing Developer Tools|Playground"]
    },
    // --- CHAPTER: HOOKS ---
    {
        id: "p9_q41",
        type: "multiple-choice",
        question: "What is the primary purpose of a Hook in Celigo? / จุดประสงค์หลักของ Hook ใน Celigo คืออะไร?",
        options: [
            "To connect to a database / เพื่อเชื่อมต่อกับฐานข้อมูล",
            "To run custom code at specific points in a flow / เพื่อรันโค้ดที่กำหนดเองในจุดที่เฉพาะเจาะจงใน Flow",
            "To schedule a flow / เพื่อกำหนดเวลาการทำงานของ Flow",
            "To delete mapping records / เพื่อลบข้อมูลการ Mapping"
        ],
        correctAnswer: "To run custom code at specific points in a flow / เพื่อรันโค้ดที่กำหนดเองในจุดที่เฉพาะเจาะจงใน Flow",
        explanation: "Hooks allow developers to extend the platform's functionality by executing JavaScript at predefined stages. / Hooks ช่วยให้นักพัฒนาสามารถขยายความสามารถของแพลตฟอร์มโดยการรัน JavaScript ในขั้นตอนที่กำหนดไว้",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q42",
        type: "multiple-choice",
        question: "Which Hook type is best suited for formatting data specifically needed for mapping? / Hook ประเภทใดเหมาะที่สุดสำหรับการจัดรูปแบบข้อมูลที่จำเป็นสำหรับการทำ Mapping โดยเฉพาะ?",
        options: ["postSubmit", "postMap", "preMap", "postResponseMap"],
        correctAnswer: "preMap",
        explanation: "preMap runs before the mapping logic, allowing you to prepare or clean data. / preMap จะทำงานก่อนขั้นตอนการ Mapping ทำให้คุณสามารถเตรียมหรือคลีนข้อมูลก่อนได้",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q43",
        type: "multiple-choice",
        question: "Which window in the Script Editor contains the example data for testing? / หน้าต่างใดใน Script Editor ที่บรรจุข้อมูลตัวอย่างสำหรับการทดสอบ?",
        options: ["Script body", "Function output", "Function input", "Mapping window"],
        correctAnswer: "Function input",
        explanation: "The Function Input window provides the mock data context to test your script. / หน้าต่าง Function Input ให้ข้อมูลจำลองเพื่อใช้ทดสอบสคริปต์ของคุณ",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q44",
        type: "yes-no",
        question: "True or False: JavaScript hooks can be used to perform data comparisons and calculations. / จริงหรือเท็จ: JavaScript hooks สามารถใช้ในการเปรียบเทียบข้อมูลและการคำนวณได้",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Hooks are ideal for logic that requires calculations or complex transformations. / Hooks เหมาะสำหรับตรรกะที่ต้องการการคำนวณหรือการแปลงข้อมูลที่ซับซ้อน",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q45",
        type: "multiple-choice",
        question: "Which Hook is commonly used to provide more clear error messages from the target system? / Hook ใดมักถูกใช้เพื่อให้ข้อความแจ้งเตือนข้อผิดพลาดจากระบบปลายทางมีความชัดเจนมากขึ้น?",
        options: ["preSave", "postSubmit", "postMap", "preMap"],
        correctAnswer: "postSubmit",
        explanation: "postSubmit intercepts the response from the target, making it perfect for error handling. / postSubmit จะดักรับการตอบกลับจากระบบปลายทาง ทำให้เหมาะสำหรับการจัดการข้อผิดพลาด",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q46",
        type: "multiple-choice",
        question: "What does the 'Function Output' window show? / หน้าต่าง 'Function Output' แสดงผลอะไร?",
        options: [
            "The original source data / ข้อมูลต้นทางเดิม",
            "Error logs only / บันทึกข้อผิดพลาดเท่านั้น",
            "The newly transformed data after preview / ข้อมูลที่ถูกแปลงใหม่หลังจากกด Preview",
            "The target system API documentation / เอกสาร API ของระบบปลายทาง"
        ],
        correctAnswer: "The newly transformed data after preview / ข้อมูลที่ถูกแปลงใหม่หลังจากกด Preview",
        explanation: "It shows the result of your code applied to the input data. / มันแสดงผลลัพธ์ของโค้ดที่คุณเขียนซึ่งถูกนำไปใช้กับข้อมูลขาเข้า",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q47",
        type: "multiple-choice",
        question: "Which Hook would you use to sum up discounts after data has been mapped? / Hook ใดที่คุณจะใช้เพื่อรวมยอดส่วนลดหลังจากข้อมูลถูก Mapping แล้ว?",
        options: ["preMap", "postMap", "postSubmit", "preSave"],
        correctAnswer: "postMap",
        explanation: "postMap is used when you need to act on data that has already gone through the mapping rules. / postMap ใช้เมื่อคุณต้องการจัดการข้อมูลที่ผ่านกฎการ Mapping เรียบร้อยแล้ว",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q48",
        type: "multiple-choice",
        question: "In the Script Editor, what is the 'Script/Function body'? / ใน Script Editor 'Script/Function body' คือส่วนใด?",
        options: [
            "The place to view the final output / พื้นที่ดูผลลัพธ์สุดท้าย",
            "The area where you enter custom code to manipulate data / พื้นที่สำหรับกรอกโค้ดเพื่อจัดการข้อมูล",
            "The section for selecting API endpoints / ส่วนสำหรับเลือก API endpoints",
            "The documentation section / ส่วนของเอกสารคู่มือ"
        ],
        correctAnswer: "The area where you enter custom code to manipulate data / พื้นที่สำหรับกรอกโค้ดเพื่อจัดการข้อมูล",
        explanation: "This is the main coding area where JavaScript is written. / นี่คือพื้นที่หลักสำหรับเขียนโค้ด JavaScript",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q49",
        type: "multiple-choice",
        question: "Which of the following is NOT a valid JavaScript Hook type? / ข้อใดต่อไปนี้ไม่ใช่ประเภทของ JavaScript Hook ที่ถูกต้อง?",
        options: ["postMap", "preSavePage", "postDeleteFlow", "postAggregate"],
        correctAnswer: "postDeleteFlow",
        explanation: "postDeleteFlow is not a standard integration hook in integrator.io. / postDeleteFlow ไม่ใช่ hook มาตรฐานใน integrator.io",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q50",
        type: "multiple-choice",
        question: "What is a 'Function Stub' in the context of Hooks? / 'Function Stub' คืออะไรในบริบทของ Hooks?",
        options: [
            "A type of error / ประเภทของข้อผิดพลาด",
            "Starter code provided by integrator.io to help you begin / โค้ดเริ่มต้นที่ integrator.io เตรียมไว้ให้เพื่อช่วยในการเริ่มต้น",
            "A completed integration template / เทมเพลตการเชื่อมต่อที่เสร็จสมบูรณ์แล้ว",
            "A mapping rule / กฎการ Mapping"
        ],
        correctAnswer: "Starter code provided by integrator.io to help you begin / โค้ดเริ่มต้นที่ integrator.io เตรียมไว้ให้เพื่อช่วยในการเริ่มต้น",
        explanation: "Stubs provide the function signature and boilerplate code. / Stubs ให้โครงสร้างฟังก์ชันและโค้ดพื้นฐานที่จำเป็น",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },

    // --- CHAPTER: HANDLEBARS ---
    {
        id: "p9_q51",
        type: "multiple-choice",
        question: "Where can Handlebars be used within the Celigo platform? / Handlebars สามารถใช้งานในส่วนใดของแพลตฟอร์ม Celigo ได้บ้าง?",
        options: [
            "Only in Export / เฉพาะใน Export เท่านั้น",
            "Only in Import / เฉพาะใน Import เท่านั้น",
            "Mappings, Request Bodies, and Request Parameters / Mapping, Request Bodies และ Request Parameters",
            "Global Settings / การตั้งค่าส่วนกลาง"
        ],
        correctAnswer: "Mappings, Request Bodies, and Request Parameters / Mapping, Request Bodies และ Request Parameters",
        explanation: "Handlebars are versatile and used across various flow configurations. / Handlebars มีความยืดหยุ่นและใช้ได้ในหลายการตั้งค่าของ Flow",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q52",
        type: "short-answer",
        question: "Which symbol precedes a Block Helper? (Answer with the symbol) / สัญลักษณ์ใดที่ใช้นำหน้า Block Helper? (ตอบเป็นสัญลักษณ์)",
        options: [],
        correctAnswer: "#",
        explanation: "Block helpers like #each or #if always start with a hash. / Block helpers เช่น #each หรือ #if จะเริ่มต้นด้วยเครื่องหมาย hash เสมอ",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q53",
        type: "multiple-choice",
        question: "Which Handlebar helper type is commonly used for data manipulation like adding or multiplying values? / Handlebar helper ประเภทใดที่มักใช้สำหรับการจัดการข้อมูล เช่น การบวกหรือการคูณ?",
        options: ["Block Helper", "Data Variable", "Custom Helper", "Function Helper"],
        correctAnswer: "Custom Helper",
        explanation: "Custom helpers perform logic on data values directly. / Custom helpers ใช้จัดการตรรกะกับค่าข้อมูลโดยตรง",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q54",
        type: "multiple-choice",
        question: "What is the purpose of the {{#each}} helper? / จุดประสงค์ของ helper {{#each}} คืออะไร?",
        options: [
            "To count characters / เพื่อนับจำนวนตัวอักษร",
            "To iterate over a list/array / เพื่อวนลูปในรายการหรือ Array",
            "To capitalize every word / เพื่อทำตัวอักษรพิมพ์ใหญ่ทุกคำ",
            "To delete duplicate records / เพื่อลบรายการที่ซ้ำกัน"
        ],
        correctAnswer: "To iterate over a list/array / เพื่อวนลูปในรายการหรือ Array",
        explanation: "The #each helper loops through an array and renders the block for each item. / helper #each จะวนลูปผ่าน array และแสดงผล block สำหรับแต่ละรายการ",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q55",
        type: "short-answer",
        question: "Which symbol is used for Data Variables (like accessing the first element of an array)? / สัญลักษณ์ใดที่ใช้สำหรับ Data Variables (เช่น การเข้าถึงลำดับแรกของ array)?",
        options: [],
        correctAnswer: "@",
        explanation: "Variables like @first or @index use the @ prefix. / ตัวแปรเช่น @first หรือ @index จะใช้ @ นำหน้า",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q56",
        type: "multiple-choice",
        question: "How can you test a Handlebar statement in Celigo? / คุณจะทดสอบประโยค Handlebar ใน Celigo ได้อย่างไร?",
        options: [
            "By running the full integration flow / โดยการรัน Flow ทั้งหมด",
            "By using the Developer Playground / โดยการใช้ Developer Playground",
            "By contacting support / โดยการติดต่อฝ่ายสนับสนุน",
            "It cannot be tested before running / ไม่สามารถทดสอบก่อนรันได้"
        ],
        correctAnswer: "By using the Developer Playground / โดยการใช้ Developer Playground",
        explanation: "The Playground allows real-time testing of Handlebar syntax. / Playground ช่วยให้ทดสอบไวยากรณ์ Handlebar ได้แบบเรียลไทม์",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q57",
        type: "multiple-choice",
        question: "What does the {{multiply '5' '2'}} helper return? / helper {{multiply '5' '2'}} จะส่งค่ากลับมาเป็นเท่าใด?",
        options: ["52", "7", "10", "3"],
        correctAnswer: "10",
        explanation: "The multiply helper calculates the product of two numbers. / multiply helper คำนวณผลคูณของตัวเลขสองตัว",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q58",
        type: "multiple-choice",
        question: "Which helper would you use to check if multiple parameters are true? / helper ใดที่คุณจะใช้เพื่อตรวจสอบว่าพารามิเตอร์หลายตัวเป็นจริงหรือไม่?",
        options: ["#each", "#and", "@first", "join"],
        correctAnswer: "#and",
        explanation: "#and is a logical block helper for conjunctions. / #and เป็น logical block helper สำหรับการเชื่อมตรรกะแบบ 'และ'",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q59",
        type: "yes-no",
        question: "True or False: Block Helpers can be used to implement functionality that is NOT part of the standard Handlebars language. / จริงหรือเท็จ: Block Helpers สามารถใช้เพื่อเพิ่มความสามารถที่ไม่ได้เป็นส่วนหนึ่งของภาษา Handlebars มาตรฐานได้",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Celigo provides custom block helpers beyond standard Handlebars. / Celigo มี custom block helpers ให้ใช้นอกเหนือจากมาตรฐาน",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q60",
        type: "short-answer",
        question: "Which Data Variable returns true for the first element of an array? / Data Variable ตัวใดที่จะส่งค่า true เมื่อเป็นลำดับแรกของ array?",
        options: [],
        correctAnswer: ["@first"],
        explanation: "@first is a boolean variable that is true for the first item in an iteration. / @first เป็นตัวแปรบูลีนที่จะเป็นจริงสำหรับรายการแรกในการวนลูป",
        chapter: ["Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q61",
        type: "multiple-choice",
        question: "What was the JavaScript API tool formerly named? / เครื่องมือ JavaScript API เดิมมีชื่อว่าอะไร?",
        options: ["My API", "Custom Connector", "Script Builder", "Webhook Pro"],
        correctAnswer: "My API",
        explanation: "As noted in the course introduction, the tool was previously referred to as 'My API'. / ตามที่ระบุในบทนำของหลักสูตร เครื่องมือนี้เดิมเรียกว่า 'My API'",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q62",
        type: "multiple-choice",
        question: "Which resource supports returning a response in XML format? / ทรัพยากรใดรองรับการส่งผลลัพธ์ตอบกลับในรูปแบบ XML?",
        options: ["Celigo Platform API", "Webhooks", "JavaScript API", "All of the above"],
        correctAnswer: "JavaScript API",
        explanation: "JavaScript APIs support any data format (JSON, XML, etc.), while the Platform API is limited to JSON. / JavaScript API รองรับข้อมูลทุกรูปแบบในขณะที่ Platform API จำกัดเฉพาะ JSON",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q63",
        type: "multiple-choice",
        question: "What is the primary difference between a Script and a Stack in Celigo? / ข้อแตกต่างหลักระหว่าง Script และ Stack ใน Celigo คืออะไร?",
        options: [
            "Scripts are only for flows; Stacks are for exports.",
            "Scripts are hosted on Celigo servers; Stacks are hosted on your own server or AWS.",
            "Scripts support any language; Stacks only support JavaScript.",
            "There is no difference."
        ],
        correctAnswer: "Scripts are hosted on Celigo servers; Stacks are hosted on your own server or AWS.",
        explanation: "Scripts run internally on Celigo infra, while Stacks allow you to host code externally. / Script รันบนระบบของ Celigo ส่วน Stack ให้คุณโฮสต์โค้ดจากภายนอกได้",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q64",
        type: "multiple-choice",
        question: "To create a JavaScript API resource, what user permission is required? / ในการสร้างทรัพยากร JavaScript API จำเป็นต้องมีสิทธิ์ผู้ใช้ระดับใด?",
        options: ["Any user with a login", "Only external developers", "Account owner or administrator", "Read-only access"],
        correctAnswer: "Account owner or administrator",
        explanation: "Developer tools require high-level administrative privileges. / เครื่องมือสำหรับนักพัฒนาต้องใช้สิทธิ์ระดับการจัดการสูงสุด",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q65",
        type: "multiple-choice",
        question: "Which of the following is NOT required to be selected when creating a JavaScript API resource? / ข้อใดต่อไปนี้ 'ไม่จำเป็น' ต้องเลือกเมื่อสร้างทรัพยากร JavaScript API?",
        options: ["Name", "Script", "Function", "Connection"],
        correctAnswer: "Connection",
        explanation: "Creating a JS API requires a name, script, and function stub, but not a specific Connection resource. / การสร้าง JS API ต้องมีชื่อ สคริปต์ และฟังก์ชัน แต่ไม่จำเป็นต้องเลือกทรัพยากร Connection",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q66",
        type: "multiple-choice",
        question: "Where is the unique URL for a JavaScript API resource found? / URL เฉพาะสำหรับ JavaScript API resource สามารถหาได้จากที่ไหน?",
        options: ["In the user's Profile", "In the Edit API window (Invoke field)", "On the Celigo homepage", "In the Connections menu"],
        correctAnswer: "In the Edit API window (Invoke field)",
        explanation: "The 'Invoke' field displays the endpoint URL once the resource is saved. / ช่อง 'Invoke' จะแสดง URL เมื่อบันทึกทรัพยากรแล้ว",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q67",
        type: "multiple-choice",
        question: "Why are JavaScript API calls described as being 'outside' the platform regarding error management? / ทำไมการเรียกใช้ JavaScript API ถึงถูกอธิบายว่าอยู่ 'ภายนอก' แพลตฟอร์มในด้านการจัดการข้อผิดพลาด?",
        options: [
            "They don't update the dashboard or logs automatically.",
            "They run on a separate physical server.",
            "They cannot be seen by admins.",
            "They bypass all security."
        ],
        correctAnswer: "They don't update the dashboard or logs automatically.",
        explanation: "Because these are custom endpoints, errors must be handled within the script; they don't automatically populate standard flow error logs. / เนื่องจากเป็น Custom Endpoint ข้อผิดพลาดต้องถูกจัดการในสคริปต์ ไม่ได้บันทึกใน Log ของ Flow ปกติ",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q68",
        type: "multiple-choice",
        question: "What two items are needed for an external application to call a JavaScript API? / สองสิ่งที่จำเป็นสำหรับแอปพลิเคชันภายนอกในการเรียกใช้ JavaScript API คืออะไร?",
        options: [
            "Password and Username",
            "Script ID and Function Name",
            "Endpoint URL and Authentication Token",
            "IP Address and Port Number"
        ],
        correctAnswer: "Endpoint URL and Authentication Token",
        explanation: "You need the specific address (URL) and the permission key (Token). / คุณต้องมีทั้งที่อยู่ (URL) และรหัสผ่านเพื่อเข้าถึง (Token)",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q69",
        type: "yes-no",
        question: "Does a virtual export/import appear in your Celigo account as a reusable resource? / Virtual export/import จะปรากฏในบัญชี Celigo ของคุณเป็นทรัพยากรที่นำกลับมาใช้ใหม่ได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Virtual resources only exist in memory during execution and cannot be reused or viewed in the standard UI. / ทรัพยากรเสมือนมีอยู่เฉพาะในหน่วยความจำขณะทำงานและไม่สามารถนำมาใช้ซ้ำได้",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q70",
        type: "multiple-choice",
        question: "What type of request does a JavaScript API use? / JavaScript API ใช้การส่งคำขอประเภทใด?",
        options: ["Asynchronous", "Synchronous", "One-way only", "Periodic"],
        correctAnswer: "Synchronous",
        explanation: "JavaScript APIs wait for a response after being called, making them synchronous. / JavaScript API จะรอผลลัพธ์ตอบกลับหลังจากถูกเรียก จึงเป็นการทำงานแบบซิงโครนัส",
        chapter: ["Level 4 - Introducing Developer Tools|JavaScript APIs (My APIs)"]
    },
    {
        id: "p9_q71",
        type: "multiple-choice",
        question: "Which FTP protocol is considered the most secure and recommended by Celigo? / โปรโตคอล FTP ใดที่ปลอดภัยที่สุดและ Celigo แนะนำ?",
        options: ["FTP", "SFTP", "FTPS", "HTTP"],
        correctAnswer: "SFTP",
        explanation: "SFTP is the most secure version because it uses SSH for data transfer. / SFTP เป็นเวอร์ชันที่ปลอดภัยที่สุดเนื่องจากใช้ SSH ในการโอนย้ายข้อมูล",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q72",
        type: "multiple-choice",
        question: "Which port is typically used for SFTP connections? / พอร์ตใดที่มักใช้สำหรับการเชื่อมต่อ SFTP?",
        options: ["21", "22", "80", "443"],
        correctAnswer: "22",
        explanation: "SFTP typically uses port 22 by default. / โดยปกติ SFTP จะใช้พอร์ต 22 เป็นค่าเริ่มต้น",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q73",
        type: "multiple-choice",
        question: "What happens by default after a file is successfully transferred through a Celigo FTP export? / ตามปกติแล้ว จะเกิดอะไรขึ้นหลังจากไฟล์ถูกส่งออกผ่าน FTP Export สำเร็จ?",
        options: ["It is renamed", "It is moved to a backup folder", "It is automatically deleted from the server", "It remains on the server unchanged"],
        correctAnswer: "It is automatically deleted from the server",
        explanation: "Default behavior is to automatically delete files after export unless specified otherwise. / พฤติกรรมเริ่มต้นคือการลบไฟล์โดยอัตโนมัติหลังจากส่งออก เว้นแต่จะระบุไว้เป็นอย่างอื่น",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q74",
        type: "yes-no",
        question: "PGP encryption keys can be generated directly within the Celigo platform. / กุญแจเข้ารหัส PGP สามารถสร้างได้โดยตรงใน Celigo",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "PGP keys must be generated using 3rd-party tools outside of Celigo. / กุญแจ PGP ต้องสร้างโดยใช้เครื่องมือภายนอกนอก Celigo",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q75",
        type: "multiple-choice",
        question: "Which setting should be used if a file needs to be transferred without any changes to its format? / ควรใช้การตั้งค่าใดหากต้องการโอนย้ายไฟล์โดยไม่เปลี่ยนแปลงรูปแบบข้อมูล?",
        options: ["Parse file", "Do not parse file", "Use Handlebars", "Convert to JSON"],
        correctAnswer: "Do not parse file",
        explanation: "Selecting 'No' for parsing (Do not parse) keeps the file 'as-is'. / การเลือก 'No' สำหรับการ Parse จะทำให้ไฟล์คงสภาพเดิม",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q76",
        type: "multiple-choice",
        question: "What is the benefit of using 'Passive Mode' in FTP connections? / ประโยชน์ของการใช้ 'Passive Mode' คืออะไร?",
        options: ["It is faster", "It is more secure as all connections originate from the client", "It allows for larger file sizes", "It does not require a username"],
        correctAnswer: "It is more secure as all connections originate from the client",
        explanation: "Passive mode is more secure because both data and control connections are initiated by the client. / Passive mode ปลอดภัยกว่าเนื่องจากการเชื่อมต่อข้อมูลและการควบคุมถูกเริ่มโดย Client",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q77",
        type: "multiple-choice",
        question: "When is whitelisting Celigo's IP addresses required? / เมื่อใดที่จำเป็นต้องทำ Whitelist IP ของ Celigo?",
        options: ["Always", "Only for SFTP", "When the FTP server is behind a firewall", "Only when using PGP encryption"],
        correctAnswer: "When the FTP server is behind a firewall",
        explanation: "Whitelisting is required to allow Celigo traffic through the server's firewall. / จำเป็นต้องทำ Whitelist เพื่ออนุญาตให้ข้อมูลจาก Celigo ผ่าน Firewall ของเซิร์ฟเวอร์ได้",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q78",
        type: "multiple-choice",
        question: "Which field determines if an export retrieves the whole file or individual records? / ฟิลด์ใดเป็นตัวกำหนดว่าการ Export จะดึงทั้งไฟล์หรือแยกเป็นรายการข้อมูล?",
        options: ["FileType", "Connection", "Parse files being transferred", "Directory path"],
        correctAnswer: "Parse files being transferred",
        explanation: "'Parse files' determines if Celigo breaks the file into individual records. / 'Parse files' เป็นตัวกำหนดว่า Celigo จะแยกไฟล์ออกเป็นรายการข้อมูลแต่ละรายการหรือไม่",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q79",
        type: "multiple-choice",
        question: "How can you dynamically name a file in an FTP Import? / คุณจะตั้งชื่อไฟล์แบบไดนามิกใน FTP Import ได้อย่างไร?",
        options: ["Using the SQL editor", "Using Handlebars expressions", "It is not possible to rename files", "By uploading a sample file"],
        correctAnswer: "Using Handlebars expressions",
        explanation: "Handlebars allow for dynamic naming, such as adding timestamps. / Handlebars ช่วยให้ตั้งชื่อแบบไดนามิกได้ เช่น การใส่การประทับเวลา",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors", "Level 4 - Introducing Developer Tools|Hooks & Handlebars"]
    },
    {
        id: "p9_q80",
        type: "multiple-choice",
        question: "What is the maximum size for 'Mock Output' data in an FTP export? / ขนาดสูงสุดสำหรับข้อมูล Mock Output ใน FTP export คือเท่าใด?",
        options: ["1 MB", "5 MB", "10 MB", "Unlimited"],
        correctAnswer: "1 MB",
        explanation: "Mock data in the preview cannot exceed 1 MB. / ข้อมูล Mock ในการแสดงตัวอย่างไม่สามารถเกิน 1 MB",
        chapter: ["Level 3 - Using Universal Connectors & Databases|FTP Connectors"]
    },
    {
        id: "p9_q81",
        type: "multiple-choice",
        question: "What is required to connect to a database that is NOT publicly accessible? / สิ่งใดที่จำเป็นในการเชื่อมต่อกับฐานข้อมูลที่เข้าถึงไม่ได้จากภายนอก?",
        options: ["A dedicated URI", "An On-premise Agent or whitelisting", "A SELECT query", "PGP encryption"],
        correctAnswer: "An On-premise Agent or whitelisting",
        explanation: "An On-premise Agent or IP whitelisting is needed for private databases. / จำเป็นต้องใช้ On-premise Agent หรือการทำ IP Whitelist สำหรับฐานข้อมูลส่วนตัว",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q82",
        type: "multiple-choice",
        question: "Which SQL command is primarily used for Database Exports? / คำสั่ง SQL ใดที่ใช้เป็นหลักสำหรับการ Export ฐานข้อมูล?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        correctAnswer: "SELECT",
        explanation: "SELECT is used to retrieve data from the database. / SELECT ใช้สำหรับดึงข้อมูลจากฐานข้อมูล",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q83",
        type: "multiple-choice",
        question: "Which export type requires an additional SQL query to mark records as 'exported'? / Export ประเภทใดที่ต้องใช้คำสั่ง SQL เพิ่มเติมเพื่อระบุว่าข้อมูลถูกส่งออกไปแล้ว?",
        options: ["All", "Delta", "Once", "Limit"],
        correctAnswer: "Once",
        explanation: "'Once' export needs a query to update a flag to prevent re-exporting. / การส่งออกประเภท 'Once' ต้องการคำสั่งเพื่ออัปเดตสถานะเพื่อป้องกันการส่งออกซ้ำ",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q84",
        type: "multiple-choice",
        question: "What is the recommended query type for importing data quickly into a database? / ประเภทคำสั่งใดที่แนะนำสำหรับการนำเข้าข้อมูลเข้าฐานข้อมูลอย่างรวดเร็ว?",
        options: ["SQL query per record", "Bulk insert SQL query", "Delta query", "SQL query per page"],
        correctAnswer: "Bulk insert SQL query",
        explanation: "Bulk insert is the fastest method for importing large volumes of data. / Bulk insert เป็นวิธีที่เร็วที่สุดในการนำเข้าข้อมูลปริมาณมาก",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q85",
        type: "multiple-choice",
        question: "What does the 'Concurrency ID lock template' prevent? / Concurrency ID lock template ช่วยป้องกันอะไร?",
        options: ["SQL syntax errors", "Unauthorized access", "Duplicate records during simultaneous requests", "Connection timeouts"],
        correctAnswer: "Duplicate records during simultaneous requests",
        explanation: "It prevents duplicates when multiple requests hit the server at the same time. / ช่วยป้องกันข้อมูลซ้ำเมื่อมีการส่งคำขอหลายรายการไปยังเซิร์ฟเวอร์พร้อมกัน",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q86",
        type: "yes-no",
        question: "All database connections require both a username and a password. / ทุกการเชื่อมต่อฐานข้อมูลต้องระบุทั้งชื่อผู้ใช้และรหัสผ่าน",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Some databases may use other authentication methods. / ฐานข้อมูลบางแห่งอาจใช้วิธีการตรวจสอบสิทธิ์แบบอื่น",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q87",
        type: "multiple-choice",
        question: "The 'Delta' export type retrieves records based on what? / การส่งออกประเภท 'Delta' จะดึงข้อมูลโดยอิงจากอะไร?",
        options: ["All records in the table", "A fixed limit of 100 records", "Changes since the last export run", "Records marked with a 'Once' flag"],
        correctAnswer: "Changes since the last export run",
        explanation: "Delta exports only modified or new data since the last execution. / Delta จะส่งออกเฉพาะข้อมูลที่แก้ไขหรือข้อมูลใหม่ตั้งแต่การทำงานครั้งล่าสุด",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q88",
        type: "multiple-choice",
        question: "Which setting allows a connection to share concurrency limits with another connection? / การตั้งค่าใดที่อนุญาตให้การเชื่อมต่อใช้ขีดจำกัด Concurrency ร่วมกับการเชื่อมต่ออื่น?",
        options: ["Auto-recover rate limit errors", "Borrow concurrency from", "Batch size", "Concurrency level"],
        correctAnswer: "Borrow concurrency from",
        explanation: "This setting allows sharing concurrency limits between connections. / การตั้งค่านี้ช่วยให้สามารถแชร์ขีดจำกัด Concurrency ระหว่างการเชื่อมต่อได้",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q89",
        type: "multiple-choice",
        question: "What happens during 'Auto-recover rate limit errors'? / จะเกิดอะไรขึ้นระหว่าง 'Auto-recover rate limit errors'?",
        options: ["The connection is closed immediately", "Celigo retries with a delay that doubles after each try", "An error email is sent to the admin", "The concurrency is reduced to zero"],
        correctAnswer: "Celigo retries with a delay that doubles after each try",
        explanation: "Celigo uses exponential backoff to retry connections. / Celigo ใช้การหน่วงเวลาแบบทวีคูณในการพยายามเชื่อมต่อใหม่",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    },
    {
        id: "p9_q90",
        type: "multiple-choice",
        question: "Which SQL query type in an Import checks for an existing record before deciding to create or change it? / ประเภทคำสั่ง SQL ใน Import ใดที่จะตรวจสอบข้อมูลเดิมก่อนตัดสินใจสร้างหรือแก้ไข?",
        options: ["Insert", "Update", "Insert or Update", "Bulk Insert"],
        correctAnswer: "Insert or Update",
        explanation: "Insert or Update checks for presence before acting. / Insert or Update จะตรวจสอบว่ามีข้อมูลอยู่หรือไม่ก่อนดำเนินการ",
        chapter: ["Level 3 - Using Universal Connectors & Databases|Database Connectors"]
    }
];