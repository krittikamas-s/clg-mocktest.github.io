const allQuestions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
        explanation: "Paris is the capital and most populous city of France.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "q2",
        type: "yes-no",
        question: "Is the sky blue on a clear day?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Rayleigh scattering of sunlight causes the blue color.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "q3",
        type: "short-answer",
        question: "How many legs does a spider have? (Answer with a number)",
        options: [], // Empty for short answer
        correctAnswer: "8",
        explanation: "All arachnids, including spiders, have 8 legs.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    // Example Matching Question
    {
        id: "q4",
        type: "matching",
        question: "Match the items to their correct Groups (Case 1 Example):",
        // The items on the Left side
        rows: [
            { id: 1, text: "Value 1", correct: "A" },
            { id: 2, text: "Value 2", correct: "B" },
            { id: 3, text: "Value 3", correct: "B" },
            { id: 4, text: "Value 4", correct: "A" }
        ],
        // The options inside the Dropdown
        options: ["A", "B", "C"],
        explanation: "Group A contains 1 & 4. Group B contains 2 & 3.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "q5",
        type: "matching",
        question: "Match the unique pairs (Case 2 Example):",
        rows: [
            { id: 1, text: "Item A", correct: "Value 2" },
            { id: 2, text: "Item B", correct: "Value 3" },
            { id: 3, text: "Item C", correct: "Value 1" }
        ],
        options: ["Value 1", "Value 2", "Value 3", "Value 4"],
        explanation: "A=2, B=3, C=1.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "q6",
        type: "multiple-select",
        question: "Which of the following are fruits? (Select 2)",
        options: ["Carrot", "Apple", "Banana", "Potato"],
        correctAnswer: ["Apple", "Banana"], // Must match exactly
        explanation: "Apple and Banana are fruits. Carrot and Potato are vegetables.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
    {
        id: "q6",
        type: "short-answer",
        question: "Example of anumber between 1 to 3",
        options: [], // Empty for short answer
        correctAnswer: ["1","2", "3"], // Acceptable answers
        explanation: "All arachnids, including spiders, have 8 legs.",
        chapter: ["Level 1 - Understanding Celigo Fundamentals|Flow Components", "Level 1 - Understanding Celigo Fundamentals|Flow Components"]
    },
];