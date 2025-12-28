const part7Questions = [
    // --- CHAPTER 1: SOURCE (10 Questions) ---
    {
        id: "p7_q1",
        type: "multiple-choice",
        question: "Which source type is considered 'Event-driven' and triggers as soon as data is updated in the source app? / Source ประเภทใดที่เป็นแบบ 'Event-driven' และจะเริ่มทำงานทันทีที่มีการอัปเดตข้อมูล?",
        options: ["Standard Export", "Webhook Listener", "FTP Export", "Delta Export"],
        correctAnswer: "Webhook Listener",
        explanation: "Webhook Listeners are real-time and trigger immediately upon data changes. / Webhook Listener ทำงานแบบเรียลไทม์และถูกกระตุ้นทันทีเมื่อข้อมูลเปลี่ยน",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q2",
        type: "yes-no",
        question: "Does a Delta Export retrieve all records every time the flow runs? / Delta Export จะดึงข้อมูลทุกเรคคอร์ดทุกครั้งที่ Flow ทำงานใช่หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Delta Export only retrieves records modified since the last successful run. / Delta Export ดึงเฉพาะข้อมูลที่มีการเปลี่ยนแปลงนับจากการทำงานครั้งล่าสุดที่สำเร็จ",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q3",
        type: "matching",
        question: "Match the Export Type to its behavior: / จับคู่ประเภทการ Export กับพฤติกรรมการทำงาน:",
        rows: [
            { id: 1, text: "All", correct: "Fetches everything" },
            { id: 2, text: "Delta", correct: "Fetches modified only" },
            { id: 3, text: "Once", correct: "Fetches unique records once" }
        ],
        options: ["Fetches everything", "Fetches modified only", "Fetches unique records once", "Fetches 10 records"],
        explanation: "All = everything, Delta = changes, Once = non-processed records. / All=ทั้งหมด, Delta=เฉพาะที่เปลี่ยน, Once=เรคคอร์ดที่ยังไม่เคยถูกดึง",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q4",
        type: "short-answer",
        question: "What is the name of the process that verifies a Webhook is legitimate before processing? / กระบวนการตรวจสอบว่า Webhook ถูกส่งมาจากแหล่งที่ถูกต้องเรียกว่าอะไร?",
        options: [],
        correctAnswer: "Verification",
        explanation: "Verification ensures the webhook is from a trusted source. / Verification คือการตรวจสอบว่า Webhook มาจากแหล่งที่เชื่อถือได้",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q5",
        type: "multiple-select",
        question: "Which of the following are valid authentication types for connections? (Select 2) / ข้อใดคือประเภทการยืนยันตัวตน (Authentication) ที่ถูกต้องสำหรับ Connection? (เลือก 2 ข้อ)",
        options: ["OAuth 2.0", "Basic", "Delta", "Cron"],
        correctAnswer: ["OAuth 2.0", "Basic"],
        explanation: "OAuth 2.0 and Basic are common authentication methods. / OAuth 2.0 และ Basic เป็นวิธีการยืนยันตัวตนที่พบบ่อย",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q6",
        type: "multiple-choice",
        question: "Where do you configure the API credentials for a Source? / คุณต้องกำหนดค่าข้อมูล API สำหรับ Source ที่ส่วนใด?",
        options: ["Transformation", "Connection", "Mapping", "Filter"],
        correctAnswer: "Connection",
        explanation: "Connections store the credentials needed to access applications. / Connection เก็บข้อมูลบัญชีผู้ใช้ที่จำเป็นในการเข้าถึงแอปพลิเคชัน",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q7",
        type: "yes-no",
        question: "Is it possible to limit the number of records retrieved in a Test run? / เป็นไปได้ไหมที่จะจำกัดจำนวนเรคคอร์ดที่ดึงมาในการรันแบบทดสอบ (Test run)?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "You can use the 'Limit' field to restrict records for testing. / คุณสามารถใช้ฟิลด์ 'Limit' เพื่อจำกัดจำนวนเรคคอร์ดในการทดสอบ",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q8",
        type: "short-answer",
        question: "A source that runs on a schedule or manual trigger is called a ______ Export. / Source ที่ทำงานตามตารางเวลาหรือการกดด้วยตนเองเรียกว่า ______ Export",
        options: [],
        correctAnswer: "Standard",
        explanation: "Standard Exports are batch-based and non-real-time. / Standard Export เป็นการทำงานแบบ Batch และไม่ใช่เรียลไทม์",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q9",
        type: "multiple-choice",
        question: "Which field in the Export configuration allows you to filter data at the source application level? / ฟิลด์ใดในการตั้งค่า Export ที่ช่วยให้คุณกรองข้อมูลที่ระดับแอปพลิเคชันต้นทาง?",
        options: ["Post-submit filter", "Where clause / Query", "Mapping", "Response mapping"],
        correctAnswer: "Where clause / Query",
        explanation: "A query or 'where' clause filters data before it enters Celigo. / Query หรือ Where clause ใช้กรองข้อมูลก่อนที่จะเข้ามายัง Celigo",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },
    {
        id: "p7_q10",
        type: "yes-no",
        question: "Can one flow have multiple Source exports? / หนึ่ง Flow สามารถมี Source export ได้หลายอันใช่หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "A flow can contain multiple exports acting as independent sources. / หนึ่ง Flow สามารถมีหลาย export ที่ทำหน้าที่เป็นแหล่งข้อมูลแยกกันได้",
        chapter: ["Level 2 - Exploring Flow Builder|Source"]
    },

    // --- CHAPTER 2: DATA FLOW (10 Questions) ---
    {
        id: "p7_q11",
        type: "short-answer",
        question: "What is the default page size (number of records) in Celigo? / Page size (จำนวนเรคคอร์ด) พื้นฐานใน Celigo คือเท่าใด?",
        options: [],
        correctAnswer: "20",
        explanation: "Celigo processes records in chunks of 20 by default. / Celigo ประมวลผลข้อมูลเป็นชุดละ 20 เรคคอร์ดตามค่าเริ่มต้น",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q12",
        type: "multiple-choice",
        question: "What is the maximum file size per page allowed in Celigo? / ขนาดไฟล์สูงสุดต่อหนึ่งหน้า (page) ที่ Celigo อนุญาตคือเท่าใด?",
        options: ["1 MB", "5 MB", "10 MB", "100 MB"],
        correctAnswer: "5 MB",
        explanation: "Each page is capped at 5 MB to ensure stability. / แต่ละหน้าถูกจำกัดไว้ที่ 5 MB เพื่อความเสถียรของระบบ",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q13",
        type: "yes-no",
        question: "If an export has multiple pages, do they process sequentially by default? / หาก Export มีหลายหน้า ระบบจะประมวลผลตามลำดับทีละหน้าโดยอัตโนมัติใช่หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Celigo can process pages in parallel for speed. / Celigo สามารถประมวลผลหน้าข้อมูลแบบขนานเพื่อความรวดเร็ว",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q14",
        type: "short-answer",
        question: "What is the term for breaking large data sets into smaller 'pages'? / คำศัพท์ที่ใช้เรียกการแบ่งข้อมูลชุดใหญ่เป็น 'หน้า' เล็กๆ คืออะไร?",
        options: [],
        correctAnswer: "Chunking",
        explanation: "Chunking makes data manageable for the platform. / Chunking ทำให้ข้อมูลจัดการได้ง่ายขึ้นสำหรับแพลตฟอร์ม",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q15",
        type: "multiple-select",
        question: "Which factors affect data flow performance? (Select 2) / ปัจจัยใดส่งผลต่อประสิทธิภาพการไหลของข้อมูล? (เลือก 2 ข้อ)",
        options: ["Page Size", "Concurrency Level", "Handlebars Color", "Flow Name"],
        correctAnswer: ["Page Size", "Concurrency Level"],
        explanation: "Page size and concurrency determine how much data is handled at once. / Page size และ Concurrency กำหนดปริมาณข้อมูลที่ประมวลผลพร้อมกัน",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q16",
        type: "multiple-choice",
        question: "In which format does Celigo internally process most data? / Celigo ประมวลผลข้อมูลภายในส่วนใหญ่ในรูปแบบใด?",
        options: ["XML", "JSON", "CSV", "Excel"],
        correctAnswer: "JSON",
        explanation: "Celigo uses JSON (JavaScript Object Notation) for internal processing. / Celigo ใช้ JSON ในการประมวลผลภายใน",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q17",
        type: "yes-no",
        question: "Can you change the Page Size to 100? / คุณสามารถเปลี่ยน Page Size เป็น 100 ได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Page size is configurable depending on the API limits. / Page size สามารถปรับแต่งได้ตามข้อจำกัดของ API",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q18",
        type: "matching",
        question: "Match the concept to the limit: / จับคู่แนวคิดกับข้อจำกัด:",
        rows: [
            { id: 1, text: "Default Page Records", correct: "20" },
            { id: 2, text: "Max Page Size (MB)", correct: "5" }
        ],
        options: ["20", "5", "10", "100"],
        explanation: "Default records is 20, max size is 5MB. / ค่าเริ่มต้นคือ 20 เรคคอร์ด, ขนาดสูงสุดคือ 5MB",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q19",
        type: "short-answer",
        question: "What do you call the process of sending data from Celigo to an external application? / กระบวนการส่งข้อมูลจาก Celigo ไปยังแแอปพลิเคชันภายนอกเรียกว่าอะไร?",
        options: [],
        correctAnswer: "Import",
        explanation: "Imports write data to a destination. / Import คือการเขียนข้อมูลไปยังปลายทาง",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },
    {
        id: "p7_q20",
        type: "multiple-choice",
        question: "If a record fails in a page, what happens to other records in the same page? / หากเรคคอร์ดหนึ่งในหน้าล้มเหลว จะเกิดอะไรขึ้นกับเรคคอร์ดอื่นๆ ในหน้าเดียวกัน?",
        options: ["All fail", "Others continue", "Flow stops", "Celigo deletes them"],
        correctAnswer: "Others continue",
        explanation: "Failures are usually record-level; others finish processing. / ความล้มเหลวมักเกิดที่ระดับเรคคอร์ด ส่วนเรคคอร์ดอื่นจะประมวลผลต่อ",
        chapter: ["Level 2 - Exploring Flow Builder|Data Flow"]
    },

    // --- CHAPTER 3: DESTINATION & LOOKUP (10 Questions) ---
    {
        id: "p7_q21",
        type: "yes-no",
        question: "Can a Lookup step be used to add data to an existing record in the flow? / ขั้นตอน Lookup สามารถใช้เพื่อเพิ่มข้อมูลให้กับเรคคอร์ดที่มีอยู่ใน Flow ได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Lookups fetch additional data to enrich the flow records. / Lookup ดึงข้อมูลเพิ่มเติมเพื่อเสริมข้อมูลใน Flow",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q22",
        type: "multiple-choice",
        question: "Which of these CANNOT be the final step of a flow? / ข้อใดต่อไปนี้ 'ไม่สามารถ' เป็นขั้นตอนสุดท้ายของ Flow ได้?",
        options: ["Import", "Lookup", "Script Hook", "File Export"],
        correctAnswer: "Lookup",
        explanation: "A flow must end with a destination (Import/Export). / Flow ต้องจบด้วยปลายทาง (Import/Export)",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q23",
        type: "short-answer",
        question: "What is the mapping called that tells Celigo what to do with data returned from a lookup? / การ Mapping ที่บอก Celigo ว่าจะทำอย่างไรกับข้อมูลที่ได้จาก Lookup เรียกว่าอะไร?",
        options: [],
        correctAnswer: "Results Mapping",
        explanation: "Results mapping maps lookup data into the record. / Results mapping จับคู่ข้อมูลจาก lookup เข้าสู่เรคคอร์ด",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q24",
        type: "multiple-select",
        question: "Which actions can an Import step perform? (Select 2) / ขั้นตอน Import สามารถทำกิจกรรมใดได้บ้าง? (เลือก 2 ข้อ)",
        options: ["Add record", "Update record", "Run a filter", "Delete source data"],
        correctAnswer: ["Add record", "Update record"],
        explanation: "Imports primarily add or update destination data. / Import ส่วนใหญ่ใช้เพิ่มหรืออัปเดตข้อมูลปลายทาง",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q25",
        type: "yes-no",
        question: "Is 'Transfer Files' a type of Import? / 'Transfer Files' เป็นประเภทหนึ่งของ Import ใช่หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Transferring files from source to destination is an Import action. / การโอนย้ายไฟล์จากต้นทางไปปลายทางเป็นกิจกรรมของ Import",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q26",
        type: "multiple-choice",
        question: "What happens if a Dynamic Lookup finds multiple matches? / จะเกิดอะไรขึ้นหาก Dynamic Lookup พบข้อมูลที่ตรงกันมากกว่าหนึ่งชุด?",
        options: ["Error", "Picks first match", "Picks all matches", "Deletes data"],
        correctAnswer: "Picks first match",
        explanation: "By default, Lookups return the first matching record. / โดยปกติ Lookup จะส่งคืนเรคคอร์ดแรกที่ตรงเงื่อนไข",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q27",
        type: "short-answer",
        question: "What mapping handles the ID or status returned by a destination application AFTER an import? / Mapping ใดที่จัดการ ID หรือสถานะที่ส่งกลับมาจากแอปปลายทาง 'หลังจาก' มีการ Import?",
        options: [],
        correctAnswer: "Response Mapping",
        explanation: "Response mapping processes destination feedback. / Response mapping ประมวลผลข้อมูลตอบกลับจากปลายทาง",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q28",
        type: "matching",
        question: "Match the component to its purpose: / จับคู่คอมโพเนนต์กับวัตถุประสงค์:",
        rows: [
            { id: 1, text: "Import", correct: "Writes data" },
            { id: 2, text: "Lookup", correct: "Enriches data" }
        ],
        options: ["Writes data", "Enriches data", "Filters data", "Deletes flow"],
        explanation: "Import writes; Lookup adds more info. / Import ใช้เขียนข้อมูล; Lookup ใช้เพิ่มข้อมูล",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q29",
        type: "multiple-choice",
        question: "Where do you configure 'Ignore existing records'? / คุณสามารถกำหนดค่า 'Ignore existing records' (เพิกเฉยต่อเรคคอร์ดที่มีอยู่) ได้ที่ใด?",
        options: ["Export", "Import Configuration", "Connection", "Scheduling"],
        correctAnswer: "Import Configuration",
        explanation: "This is a setting within the destination/import step. / นี่คือการตั้งค่าภายในขั้นตอน destination/import",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },
    {
        id: "p7_q30",
        type: "yes-no",
        question: "Can a lookup be used to retrieve data from a Google Sheet? / สามารถใช้ lookup เพื่อดึงข้อมูลจาก Google Sheet ได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Lookups can connect to any application supported by a connector. / Lookup สามารถเชื่อมต่อกับแอปใดก็ได้ที่รองรับ",
        chapter: ["Level 2 - Exploring Flow Builder|Destination & Lookup"]
    },

    // --- CHAPTER 4: MAPPING & FIELD MAPPING (10 Questions) ---
    {
        id: "p7_q31",
        type: "multiple-choice",
        question: "Which index refers to the first item in a Celigo array? / Index ใดที่อ้างถึงรายการแรกใน Array ของ Celigo?",
        options: ["1", "0", "-1", "First"],
        correctAnswer: "0",
        explanation: "Arrays are zero-indexed. / Array เริ่มต้นนับที่ 0",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q32",
        type: "short-answer",
        question: "What is the name of the expression language used for complex mappings (e.g., {{field}})? / ชื่อของภาษา Expression ที่ใช้สำหรับการจับคู่ที่ซับซ้อน (เช่น {{field}}) คืออะไร?",
        options: [],
        correctAnswer: "Handlebars",
        explanation: "Handlebars are used for dynamic field mapping. / Handlebars ใช้สำหรับการจับคู่ฟิลด์แบบไดนามิก",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q33",
        type: "matching",
        question: "Match the mapping type: / จับคู่ประเภทการ Mapping:",
        rows: [
            { id: 1, text: "Standard", correct: "Field to Field" },
            { id: 2, text: "Hard-coded", correct: "Constant Value" }
        ],
        options: ["Field to Field", "Constant Value", "Script", "Lookup"],
        explanation: "Standard maps source to destination; Hard-coded is a fixed value. / Standard จับคู่ฟิลด์ต่อฟิลด์; Hard-coded คือค่าคงที่",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q34",
        type: "yes-no",
        question: "Is 'Lookup Cache' available in Mapper 1.0? / 'Lookup Cache' มีให้ใช้งานใน Mapper 1.0 หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Lookup Cache is a feature of Mapper 2.0. / Lookup Cache เป็นฟีเจอร์ของ Mapper 2.0 เท่านั้น",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q35",
        type: "multiple-choice",
        question: "Which mapping type is best for converting 'US' to 'United States' using a fixed table? / การ Mapping ประเภทใดดีที่สุดสำหรับการแปลง 'US' เป็น 'United States' โดยใช้ตารางที่กำหนดไว้?",
        options: ["Dynamic Lookup", "Static Lookup", "Hard-coded", "JSON Path"],
        correctAnswer: "Static Lookup",
        explanation: "Static lookups use a predefined mapping table. / Static lookup ใช้ตารางการจับคู่ที่กำหนดไว้ล่วงหน้า",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q36",
        type: "short-answer",
        question: "What symbol is used to represent the root of a JSON object in JSON Path? / สัญลักษณ์ใดที่ใช้แทนจุดเริ่มต้น (root) ของ JSON object ใน JSON Path?",
        options: [],
        correctAnswer: "$",
        explanation: "The dollar sign represents the root in JSON Path. / เครื่องหมาย $ แทนค่า root ใน JSON Path",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q37",
        type: "yes-no",
        question: "Does dynamic lookup search the destination application in real-time? / Dynamic lookup ค้นหาข้อมูลในแอปปลายทางแบบเรียลไทม์ใช่หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Dynamic lookups query the app during the flow run. / Dynamic lookup สอบถามข้อมูลจากแอปขณะที่ Flow กำลังรัน",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q38",
        type: "multiple-select",
        question: "Which of the following can be done in field mapping? (Select 2) / ข้อใดต่อไปนี้สามารถทำได้ใน Field mapping? (เลือก 2 ข้อ)",
        options: ["Rename fields", "Discard fields", "Schedule flows", "Change passwords"],
        correctAnswer: ["Rename fields", "Discard fields"],
        explanation: "Mapping allows renaming or excluding data fields. / Mapping ช่วยให้เปลี่ยนชื่อหรือคัดฟิลด์ข้อมูลออกได้",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q39",
        type: "multiple-choice",
        question: "If you want to send the current date in every record, which mapping is best? / หากคุณต้องการส่งวันที่ปัจจุบันไปในทุกเรคคอร์ด การ Mapping แบบใดดีที่สุด?",
        options: ["Standard", "Hard-coded", "Handlebars with Date helper", "Dynamic Lookup"],
        correctAnswer: "Handlebars with Date helper",
        explanation: "Handlebars helpers can generate dynamic values like dates. / Handlebars helpers สามารถสร้างค่าไดนามิกเช่นวันที่ได้",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },
    {
        id: "p7_q40",
        type: "short-answer",
        question: "In Mapper 2.0, what feature allows you to store a lookup table in memory for reuse? / ใน Mapper 2.0 ฟีเจอร์ใดที่ช่วยให้คุณเก็บตาราง lookup ไว้ในหน่วยความจำเพื่อนำกลับมาใช้ใหม่?",
        options: [],
        correctAnswer: "Lookup Cache",
        explanation: "Lookup Cache improves performance by storing data in-memory. / Lookup Cache ช่วยเพิ่มประสิทธิภาพโดยการเก็บข้อมูลในหน่วยความจำ",
        chapter: ["Level 2 - Exploring Flow Builder|Mapping & Field Mapping"]
    },

    // --- CHAPTER 5: ADVANCED FLOW CONFIGURATIONS (10 Questions) ---
    {
        id: "p7_q41",
        type: "multiple-choice",
        question: "Which branching mode sends a record ONLY to the first branch that meets criteria? / โหมด Branching ใดที่ส่งเรคคอร์ดไปยัง 'สาขาแรก' ที่ตรงตามเงื่อนไขเท่านั้น?",
        options: ["All Matching", "First Matching", "Round Robin", "Random"],
        correctAnswer: "First Matching",
        explanation: "First Matching stops evaluation after the first match. / First Matching จะหยุดตรวจสอบหลังจากเจอสาขาแรกที่ตรงเงื่อนไข",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q42",
        type: "yes-no",
        question: "Can an output filter be applied to an Export step? / สามารถใช้ Output filter กับขั้นตอน Export ได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Output filters filter data as it leaves the step. / Output filter กรองข้อมูลขณะที่ข้อมูลกำลังออกจากขั้นตอนนั้น",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q43",
        type: "matching",
        question: "Match the Transformation 2.0 mode: / จับคู่โหมดของ Transformation 2.0:",
        rows: [
            { id: 1, text: "Modify Input record", correct: "Default mode" },
            { id: 2, text: "Create output rows", correct: "CSV preparation" }
        ],
        options: ["Default mode", "CSV preparation", "Delete records", "Schedule"],
        explanation: "Modify input is standard; Output rows is for flat files like CSV. / Modify input เป็นโหมดมาตรฐาน; Output rows สำหรับไฟล์ CSV",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q44",
        type: "short-answer",
        question: "What is the JavaScript-based tool used for complex custom logic in Celigo? / เครื่องมือที่ใช้ JavaScript สำหรับเขียนตรรกะที่ซับซ้อนใน Celigo เรียกว่าอะไร?",
        options: [],
        correctAnswer: "Hooks",
        explanation: "Hooks allow custom JS code to run in the flow. / Hook ช่วยให้รันโค้ด JavaScript ใน Flow ได้",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q45",
        type: "multiple-select",
        question: "Which of the following are valid filter types? (Select 2) / ข้อใดคือประเภทของ Filter ที่ถูกต้อง? (เลือก 2 ข้อ)",
        options: ["Input Filter", "Output Filter", "Cron Filter", "Hook Filter"],
        correctAnswer: ["Input Filter", "Output Filter"],
        explanation: "Filters can be applied to input or output of a step. / Filter สามารถใช้กับขาเข้าหรือขาออกของขั้นตอนได้",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q46",
        type: "multiple-choice",
        question: "What icon represents a filter in the Flow Builder? / ไอคอนใดที่แทนสัญลักษณ์ของ Filter ใน Flow Builder?",
        options: ["Gear", "Funnel", "Lightning Bolt", "Pencil"],
        correctAnswer: "Funnel",
        explanation: "The funnel icon is used for filters. / ไอคอนรูปกรวยใช้แทน Filter",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q47",
        type: "yes-no",
        question: "Does branching allow you to send data to two different applications? / Branching ช่วยให้ส่งข้อมูลไปยังแอปพลิเคชันที่แตกต่างกันสองแอปได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Branching creates multiple paths for data. / Branching สร้างเส้นทางได้หลายทางสำหรับข้อมูล",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q48",
        type: "short-answer",
        question: "What branching mode should you use if you want one record to potentially go down three paths? / โหมด Branching ใดที่ควรใช้หากต้องการให้หนึ่งเรคคอร์ดมีโอกาสไปได้ทั้ง 3 เส้นทาง?",
        options: [],
        correctAnswer: "All Matching",
        explanation: "All Matching evaluates every branch. / All Matching จะตรวจสอบและส่งข้อมูลไปยังทุกสาขาที่ตรงเงื่อนไข",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q49",
        type: "multiple-choice",
        question: "Which tool is best for renaming multiple fields without a full mapping? / เครื่องมือใดดีที่สุดสำหรับการเปลี่ยนชื่อหลายฟิลด์โดยไม่ต้องทำการ Mapping เต็มรูปแบบ?",
        options: ["Filter", "Transformation 2.0", "Lookup Cache", "Response Mapping"],
        correctAnswer: "Transformation 2.0",
        explanation: "Transformation 2.0 is designed for structural changes. / Transformation 2.0 ออกแบบมาเพื่อเปลี่ยนโครงสร้างข้อมูล",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },
    {
        id: "p7_q50",
        type: "yes-no",
        question: "Can filters use Handlebars expressions? / Filter สามารถใช้นิพจน์ Handlebars ได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Handlebars can be used within filter criteria for dynamic logic. / Handlebars สามารถใช้ในเงื่อนไขการกรองได้",
        chapter: ["Level 2 - Exploring Flow Builder|Advanced Flow Configurations"]
    },

    // --- CHAPTER 6: FLOW SCHEDULING (10 Questions) ---
    {
        id: "p7_q51",
        type: "short-answer",
        question: "In a Cron expression, how many positions are used? / ในนิพจน์ Cron มีตำแหน่งทั้งหมดกี่ตำแหน่ง?",
        options: [],
        correctAnswer: "5",
        explanation: "Celigo uses a 5-position Cron (Minute, Hour, Day of Month, Month, Day of Week). / Celigo ใช้ Cron 5 ตำแหน่ง (นาที, ชม., วันที่, เดือน, วันในสัปดาห์)",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q52",
        type: "multiple-choice",
        question: "What is the lowest frequency for a preset schedule? / ความถี่ที่ต่ำที่สุดสำหรับ Preset schedule (กำหนดการที่มีให้เลือก) คือเท่าใด?",
        options: ["Every 1 minute", "Every 15 minutes", "Every 1 hour", "Every 1 day"],
        correctAnswer: "Every 15 minutes",
        explanation: "Preset schedules go down to 15 minutes. / Preset schedule ต่ำสุดคือทุก 15 นาที",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q53",
        type: "yes-no",
        question: "Can a flow be triggered to run immediately after another flow finishes? / สามารถตั้งให้ Flow หนึ่งทำงานทันทีหลังจากอีก Flow หนึ่งจบลงได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "This is called 'Flow Sequencing'. / สิ่งนี้เรียกว่า Flow Sequencing",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q54",
        type: "multiple-select",
        question: "Which are valid Cron positions? (Select 2) / ข้อใดคือตำแหน่ง Cron ที่ถูกต้อง? (เลือก 2 ข้อ)",
        options: ["Minute", "Year", "Day of Week", "Seconds"],
        correctAnswer: ["Minute", "Day of Week"],
        explanation: "Year and Seconds are not used in Celigo's 5-position Cron. / ปีและวินาทีไม่ถูกใช้ใน Cron 5 ตำแหน่งของ Celigo",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q55",
        type: "matching",
        question: "Match the Cron symbol to its meaning: / จับคู่สัญลักษณ์ Cron กับความหมาย:",
        rows: [
            { id: 1, text: "*", correct: "Every value" },
            { id: 2, text: "?", correct: "No specific value" }
        ],
        options: ["Every value", "No specific value", "Range", "Interval"],
        explanation: "Asterisk means every; Question mark is used when a field is not specified. / * หมายถึงทุกค่า; ? ใช้เมื่อไม่ได้ระบุเจาะจง",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q56",
        type: "multiple-choice",
        question: "If a Cron expression is '0 0 * * *', when does it run? / หากนิพจน์ Cron คือ '0 0 * * *' มันจะทำงานตอนไหน?",
        options: ["Every minute", "Every hour", "Every day at midnight", "Every Monday"],
        correctAnswer: "Every day at midnight",
        explanation: "0 minute, 0 hour, every day. / นาทีที่ 0 ชั่วโมงที่ 0 ของทุกวัน",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q57",
        type: "short-answer",
        question: "What is the term for setting one flow to run after another? / คำศัพท์ที่ใช้เรียกการตั้งให้ Flow หนึ่งรันต่อจากอีกอันหนึ่งคืออะไร?",
        options: [],
        correctAnswer: "Flow Sequencing",
        explanation: "Flow sequencing links flows together. / Flow sequencing คือการเชื่อมต่อ Flow เข้าด้วยกัน",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q58",
        type: "yes-no",
        question: "Can you schedule a flow to run every 1 minute using Cron? / คุณสามารถตั้งตารางให้ Flow รันทุกๆ 1 นาทีโดยใช้ Cron ได้หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Cron allows custom intervals like every minute. / Cron อนุญาตให้ตั้งช่วงเวลาเองได้เช่นทุกนาที",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q59",
        type: "multiple-choice",
        question: "Where do you set the Timezone for a flow? / คุณสามารถตั้งค่า Timezone ของ Flow ได้ที่ใด?",
        options: ["In Connection settings", "In Flow settings", "In User profile only", "In Destination settings"],
        correctAnswer: "In Flow settings",
        explanation: "Timezone is defined at the flow level. / Timezone ถูกกำหนดที่ระดับ Flow",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },
    {
        id: "p7_q60",
        type: "short-answer",
        question: "The '5th' position in a Cron expression refers to what? / ตำแหน่งที่ 5 ในนิพจน์ Cron อ้างถึงอะไร?",
        options: [],
        correctAnswer: "Day of Week",
        explanation: "Positions: Minute, Hour, Day, Month, Day of Week. / ลำดับคือ: นาที, ชั่วโมง, วัน, เดือน, วันในสัปดาห์",
        chapter: ["Level 2 - Exploring Flow Builder|Flow Scheduling"]
    },

    // --- CHAPTER 7: ERROR MANAGEMENT (10 Questions) ---
    {
        id: "p7_q61",
        type: "multiple-choice",
        question: "Which error classification is marked with a 'lightning bolt'? / การจัดหมวดหมู่ข้อผิดพลาดใดที่มีสัญลักษณ์ 'สายฟ้า'?",
        options: ["Value", "Missing", "Intermittent", "Connection"],
        correctAnswer: "Intermittent",
        explanation: "Intermittent errors are temporary and get retried. / Intermittent error คือข้อผิดพลาดชั่วคราวและจะมีการลองใหม่",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q62",
        type: "short-answer",
        question: "How many times does Celigo automatically retry an 'Intermittent' error? / Celigo จะลองใหม่อัตโนมัติกี่ครั้งสำหรับ 'Intermittent' error?",
        options: [],
        correctAnswer: "4",
        explanation: "Celigo retries up to 4 times for intermittent issues. / Celigo จะลองใหม่สูงสุด 4 ครั้ง",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q63",
        type: "yes-no",
        question: "Can you manually retry a 'Data' error after fixing the mapping? / คุณสามารถกดลองใหม่ (Retry) ด้วยตนเองได้หรือไม่หลังจากแก้ไขการ Mapping?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Fixed errors can be retried manually from the error dashboard. / ข้อผิดพลาดที่แก้แล้วสามารถกด Retry ได้จากหน้าแดชบอร์ด",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q64",
        type: "multiple-select",
        question: "Which of the following are valid error categories? (Select 2) / ข้อใดคือหมวดหมู่ข้อผิดพลาดที่ถูกต้อง? (เลือก 2 ข้อ)",
        options: ["Connection Error", "Data Error", "Color Error", "Mapping Success"],
        correctAnswer: ["Connection Error", "Data Error"],
        explanation: "Errors are usually categorized by Connection, Data, or Permissions. / ข้อผิดพลาดมักถูกแบ่งเป็นด้าน Connection, ข้อมูล หรือสิทธิ์การเข้าถึง",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q65",
        type: "matching",
        question: "Match the error to its cause: / จับคู่ข้อผิดพลาดกับสาเหตุ:",
        rows: [
            { id: 1, text: "Connection", correct: "Invalid Password" },
            { id: 2, text: "Value", correct: "Wrong Data Format" }
        ],
        options: ["Invalid Password", "Wrong Data Format", "Flow Paused", "Missing Internet"],
        explanation: "Connection errors relate to access; Value relates to data format. / Connection เกี่ยวกับสิทธิ์เข้าถึง; Value เกี่ยวกับรูปแบบข้อมูล",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q66",
        type: "multiple-choice",
        question: "Which error type occurs when the API limit is exceeded? / ข้อผิดพลาดประเภทใดเกิดขึ้นเมื่อมีการใช้งาน API เกินขีดจำกัด?",
        options: ["Missing", "Rate limit", "Too large", "Duplicate"],
        correctAnswer: "Rate limit",
        explanation: "Rate limits occur when you send too many requests too fast. / Rate limit เกิดจากการส่งคำขอมากเกินไปในช่วงเวลาสั้นๆ",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q67",
        type: "yes-no",
        question: "Is 'Missing' an error classification? / 'Missing' เป็นหนึ่งในการจัดหมวดหมู่ข้อผิดพลาดใช่หรือไม่?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Missing classification occurs when required data is not found. / Missing เกิดขึ้นเมื่อไม่พบข้อมูลที่จำเป็นต้องใช้",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q68",
        type: "short-answer",
        question: "What is the first step in the recommended troubleshooting process? / ขั้นตอนแรกในกระบวนการแก้ไขปัญหาที่แนะนำคืออะไร?",
        options: [],
        correctAnswer: "Identify Source",
        explanation: "First, find out where the error originated. / ขั้นแรกต้องหาให้ได้ว่าข้อผิดพลาดมาจากจุดไหน",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q69",
        type: "multiple-choice",
        question: "An error caused by a temporary network outage is classified as: / ข้อผิดพลาดที่เกิดจากเครือข่ายขัดข้องชั่วคราวจัดอยู่ในประเภท:",
        options: ["Value", "Connection", "Intermittent", "Parse"],
        correctAnswer: "Intermittent",
        explanation: "Temporary network issues are intermittent. / ปัญหาเครือข่ายชั่วคราวถือเป็น Intermittent",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    },
    {
        id: "p7_q70",
        type: "short-answer",
        question: "If a record fails because it already exists in the destination, it is a ______ error. / หากเรคคอร์ดล้มเหลวเพราะมีอยู่ในปลายทางแล้ว จะเรียกว่าเป็น ______ error",
        options: [],
        correctAnswer: "Duplicate",
        explanation: "Duplicate errors occur when the system identifies the record already exists. / Duplicate error เกิดขึ้นเมื่อระบบพบว่ามีข้อมูลนั้นอยู่แล้ว",
        chapter: ["Level 2 - Exploring Flow Builder|Error Management"]
    }
];