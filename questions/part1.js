const part1Questions = [
	{
		id: "p1_q1",
		type: "matching",
		question: "Match the term with its definition.",
		rows: [
			{ id: 1, text: "Connection", correct: "How the Celigo platform communicates with an application" },
			{ id: 2, text: "Integration", correct: "Folder containing flows" },
			{ id: 3, text: "Endpoint", correct: "Application, database, or other data source used in a flow" },
			{ id: 4, text: "Flow", correct: "Stream of data between two or more systems" }
		],
		options: [
			"How the Celigo platform communicates with an application",
			"Folder containing flows",
			"Application, database, or other data source used in a flow",
			"Stream of data between two or more systems"
		],
		explanation: "Match each term on the left with its definition on the right.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components", "Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
	},
	{
		id: "p1_q2",
		type: "matching",
		question: "Sort the cards below in the correct category.",
		rows: [
			{ id: 1, text: "Criteria/Setting", correct: "Export/ Import" },
			{ id: 2, text: "Endpoint", correct: "Source/Destination" }
		],
		options: ["Export/ Import", "Source/Destination"],
		explanation: "Assign each card to the correct category.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder", "Level 1 - Understanding Celigo Fundamentals|Flow Components"]
	},
	{
		id: "p1_q3",
		type: "multiple-choice",
		question: "Which of the following components can be included in a flow more than once?",
		options: ["Exports", "Imports", "Lookups", "All of these answers"],
		correctAnswer: "All of these answers",
		explanation: "Exports, imports, and lookups can each be included multiple times in a flow.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
	},
	{
		id: "p1_q4",
		type: "yes-no",
		question: "A lookup exports data from an endpoint.",
		options: ["True", "False"],
		correctAnswer: "True",
		explanation: "A lookup typically retrieves (exports) data from an endpoint for use in mappings.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
	},
	{
		id: "p1_q5",
		type: "multiple-choice",
		question: "A flow component is used in two flows. In Flow B, the component was changed. What will happen to the component in Flow A?",
		image: "images/p1_q1.png",
		options: [
			"Nothing.",
			"It changed when the component changed in Flow B.",
			"Nothing, unless the component was added to Flow A after it was added to Flow B."
		],
		correctAnswer: "It changed when the component changed in Flow B.",
		explanation: "Shared components are updated across flows when modified.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components", "Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
	},
	{
		id: "p1_q6",
		type: "multiple-choice",
		question: "Which of these does NOT appear on an integration tile?",
		options: [
			"Integration name",
			"Number of total flows",
			"Number of errors (if applicable)",
			"Connection down (if applicable)"
		],
		correctAnswer: "Number of total flows",
		explanation: "Integration tiles do not display the total number of flows.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
	},
	{
		id: "p1_q7",
		type: "multiple-select",
		question: "What ways can you filter flows in the Dashboard?",
		options: ["By account user", "By application", "By environment", "By integration"],
		correctAnswer: ["By application", "By integration"],
		explanation: "Filters include application and integration among the listed options.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Celigo Platform User Interface"]
	},
	{
		id: "p1_q8",
		type: "short-answer",
		question: "In addition to a CSV file (or any delimited text file), what is one other file type the Data Loader can import into an application?",
		options: [],
		correctAnswer: ["JSON", "XML", "XLSX","XLSX"],
		explanation: "The Data Loader can import JSON, XML, or XLSX files in addition to CSV.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
	},
	{
		id: "p1_q9",
		type: "yes-no",
		question: "Information you enter in the Playground is automatically saved in the integration.",
		options: ["True", "False"],
		correctAnswer: "False",
		explanation: "Playground changes are not automatically saved to the integration.",
		chapter: ["Level 4 - Introducing Developer Tools|Playground"]
	},
	{
		id: "p1_q10",
		type: "multiple-select",
		question: "Which options are found in the Resources menu? Select all that apply.",
		options: ["Account/Profile", "Agents", "Connections", "Exports", "iClients"],
		correctAnswer: ["Agents", "Connections", "Exports", "iClients"],
		explanation: "Agents, Connections, Exports, and iClients are listed in Resources.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
	},
	{
		id: "p1_q11",
		type: "multiple-select",
		question: "What are the two options available when selecting the lookup mapping type?",
		options: ["Dynamic", "Table", "Complex", "Static"],
		correctAnswer: ["Dynamic", "Static"],
		explanation: "Lookup mapping types include Dynamic and Static.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Mapping Types"]
	},
	{
		id: "p1_q12",
		type: "yes-no",
		question: "Data Loader is the name of the built-in Celigo FTP tool.",
		options: ["True", "False"],
		correctAnswer: "False",
		explanation: "Data Loader is a built-in import tool, not the Celigo FTP tool.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Tools & Resources"]
	},
	{
		id: "p1_q13",
		type: "multiple-choice",
		question: "Dana wants to integrate Amazon Pay with Oracle but has no active Amazon Pay subscription. Which statement is true?",
		options: [
			"Dana will be able to access Amazon Pay without a subscription by using the integration app in Marketplace.",
			"Dana can use the integration app to connect both services if she pays an additional fee for the premium version of the integration app.",
			"Dana won't be able to use the integration app, since she doesn't have an active Amazon Pay subscription.",
			"Dana will be able to use the integration app to connect to both applications as long as she previously had an active subscription to Amazon Pay within the last year."
		],
		correctAnswer: "Dana won't be able to use the integration app, since she doesn't have an active Amazon Pay subscription.",
		explanation: "An active subscription to the application is required to use the integration app for that service.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
	},
	{
		id: "p1_q14",
		type: "multiple-choice",
		question: "Helena is an account owner and Jacob is an admin. Which statement is true?",
		options: [
			"Helena's permissions are limited to adjusting user roles and monitoring integrations.",
			"Jacob has a higher permission level than Helena.",
			"Unlike Helena, Jacob can't create new admins for the account.",
			"Helena has a higher permission level than Jacob."
		],
		correctAnswer: "Helena has a higher permission level than Jacob.",
		explanation: "Account owners typically have higher permissions than admins.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Account Settings"]
	},
	{
		id: "p1_q15",
		type: "multiple-choice",
		question: "Louis asked a coworker why the company wasn't using Celigo for integrations with the HR software they use. The coworker said it was because the application didn't appear in the list of connectors on the Celigo platform. Is this a valid reason?",
		options: [
			"No. Universal connectors in the Celigo platform can support applications that don't have pre-built connectors listed.",
			"Yes. But they can contact support to request a pre-built connector for the HR software.",
			"Yes. But they can purchase a Celigo FTP service as a workaround.",
			"No. They can use a pre-built connector for any HR software listed."
		],
		correctAnswer: "No. Universal connectors in the Celigo platform can support applications that don't have pre-built connectors listed.",
		explanation: "Universal connectors can often handle apps not listed as pre-built.",
		chapter: ["Level 3 - Using Universal Connectors & Databases|Universal Connectors"]
	},
	{
		id: "p1_q16",
		type: "multiple-choice",
		question: "What is the exception where a hard-coded mapping value will not appear as the destination record field value?",
		options: [
			"The value entered includes curly brackets.",
			"The value entered is a date in the future.",
			"There is no exception. It will always appear.",
			"The value entered is less than five characters."
		],
		correctAnswer: "There is no exception. It will always appear.",
		explanation: "Hard-coded mapping values are used as-is in the destination field.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Mapping Types"]
	},
	{
		id: "p1_q17",
		type: "multiple-choice",
		question: "Jaime, who considers himself a non-technical user, was recently tasked with adding another integration to his company's Celigo account. His supervisor was surprised when Jaime suggested using an integration app, instead of a template for connecting two applications, like they usually do. What could be Jaime's reasoning?",
		options: [
			"There's an annual fee for templates.",
			"An integration app provides a solid starting point, which can be heavily modified with manual customization.",
			"Unlike a template, an integration app also includes field mappings needed.",
			"An integration app is managed by an app developer and modified with bug fixes and new settings."
		],
		correctAnswer: "An integration app is managed by an app developer and modified with bug fixes and new settings.",
		explanation: "Integration apps are maintained by developers and updated over time.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Marketplace"]
	},
	{
		id: "p1_q18",
		type: "multiple-choice",
		question: "Which of the following happens when you enable a flow but forget to run it?",
		options: [
			"No data will be processed.",
			"Only part of the flow will run, completing partially.",
			"The system will send you a reminder to run the flow.",
			"The flow will automatically run at the end of the day."
		],
		correctAnswer: "No data will be processed.",
		explanation: "Enabling a flow does not process data until it is run.",
		chapter: ["Level 1 - Understanding Celigo Fundamentals|Basic Flow Builder"]
	},
	{
		id: "p1_q19",
		type: "multiple-choice",
		question: "When consulting a connection guide on the Celigo Help Center, Devin sees the connection media type is JSON but prefers XML. Can he switch the accepted media type to XML?",
		options: [
			"No. Celigo doesn't determine the information needed to connect to an application.",
			"Yes. This can be switched under a connection's Custom settings.",
			"No. But he can submit a request to Celigo support for the change.",
			"Yes. Contact Celigo support to access this advanced option."
		],
		correctAnswer: "No. Celigo doesn't determine the information needed to connect to an application.",
		explanation: "The connection guide specifies the expected media type; you cannot arbitrarily switch it without appropriate support or settings.",
		chapter: ["Level 3 - Using Universal Connectors & Databases|HTTP Connectors"]
	}
];

// Export or expose the array if needed elsewhere
// module.exports = { part1Questions };