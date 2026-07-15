import {
  FiFileText,
  FiCpu,
  FiImage,
  FiMinimize2,
  FiGrid,
  FiClock,
} from "react-icons/fi";

export const popularTools = [
  {
    id: 1,
    title: "Merge PDF",
    category: "PDF",
    description: "Combine multiple PDF files into one.",
    icon: FiFileText,
  },
  {
    id: 2,
    title: "AI PDF Summarizer",
    category: "AI",
    description: "Summarize PDF documents using AI.",
    icon: FiCpu,
  },
  {
    id: 3,
    title: "Background Remover",
    category: "Image",
    description: "Remove image backgrounds instantly.",
    icon: FiImage,
  },
  {
    id: 4,
    title: "Image Compressor",
    category: "Image",
    description: "Reduce image size without losing quality.",
    icon: FiMinimize2,
  },
  {
    id: 5,
    title: "QR Code Generator",
    category: "Utility",
    description: "Generate QR codes in seconds.",
    icon: FiGrid,
  },
  {
    id: 6,
    title: "Pomodoro Timer",
    category: "Productivity",
    description: "Stay focused with a Pomodoro timer.",
    icon: FiClock,
  },
];
export const mostUsedTools = [];

export const pdfTools = [
  {
    id: 101,
    title: "Merge PDF",
    description: "Combine PDF files.",
    icon: FiFileText,
  },
  {
    id: 102,
    title: "Split PDF",
    description: "Split PDF pages.",
    icon: FiFileText,
  },
  {
    id: 103,
    title: "Compress PDF",
    description: "Reduce PDF size.",
    icon: FiFileText,
  },
  {
    id: 104,
    title: "PDF to Word",
    description: "Convert PDF to Word.",
    icon: FiFileText,
  },
];

export const imageTools = [
  {
    id: 201,
    title: "Background Remover",
    description: "Remove image backgrounds.",
    icon: FiImage,
  },
  {
    id: 202,
    title: "Image Compressor",
    description: "Compress images without losing quality.",
    icon: FiMinimize2,
  },
  {
    id: 203,
    title: "JPG to PNG",
    description: "Convert JPG images to PNG.",
    icon: FiImage,
  },
  {
    id: 204,
    title: "Resize Image",
    description: "Resize images instantly.",
    icon: FiImage,
  },
];

export const aiTools = [
  {
    id: 401,
    title: "AI PDF Summarizer",
    description: "Summarize PDFs with AI.",
    icon: FiCpu,
  },
  {
    id: 402,
    title: "AI Flashcards",
    description: "Generate flashcards from notes.",
    icon: FiCpu,
  },
  {
    id: 403,
    title: "AI Quiz Generator",
    description: "Create quizzes automatically.",
    icon: FiCpu,
  },
  {
    id: 404,
    title: "AI Notes",
    description: "Generate smart study notes.",
    icon: FiCpu,
  },
];

export const studentTools = [
  {
    id: 301,
    title: "GPA Calculator",
    description: "Calculate your GPA instantly.",
    icon: FiGrid,
  },
  {
    id: 302,
    title: "CGPA Calculator",
    description: "Calculate your cumulative GPA.",
    icon: FiGrid,
  },
  {
    id: 303,
    title: "Attendance Calculator",
    description: "Track your attendance percentage.",
    icon: FiGrid,
  },
  {
    id: 304,
    title: "Grade Calculator",
    description: "Estimate your final grades.",
    icon: FiGrid,
  },
];
export const allTools = [
  ...popularTools,
  ...pdfTools,
  ...imageTools,
  ...aiTools,
  ...studentTools,
];