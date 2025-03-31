// import React, { useEffect, useState } from "react";

// interface EmailTemplate {
//   _id: string;
//   title: string;
//   subject: string;
//   body: string;
// }

// const StudentColdMail = () => {
//   const [templates, setTemplates] = useState<EmailTemplate[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/email-templates")
//       .then((res) => res.json())
//       .then((data) => setTemplates(data));
//   }, []);

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//     alert("Copied to clipboard!");
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Copy Any Cold Email Format</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {templates.map((template) => (
//           <div key={template._id} className="border p-4 rounded-lg shadow-lg">
//             <h2 className="font-semibold">{template.title}</h2>
//             <p className="text-gray-600 text-sm">{template.subject}</p>
//             <div className="h-32 overflow-hidden text-sm mt-2">
//               {template.body.substring(0, 100)}...
//             </div>
//             <button
//               onClick={() => copyToClipboard(template.body)}
//               className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
//             >
//               Copy
//             </button>
//           </div>
//         ))}
//       </div>
//       <button className="mt-6 block mx-auto text-blue-500 underline">
//         See More
//       </button>
//     </div>
//   );
// };

// export default StudentColdMail;

import React from "react";
import { useState } from "react";
import StakeNavBar from "../../functions/StakeNavBar";
import { MenuItem2 } from "../../types";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/student/dashboard" },
  { id: 1, title: "Resume", link: "/student/resume" },
  { id: 2, title: "ATS Score", link: "/student/ats_score" },
  { id: 3, title: "Templates", link: "/student/coldmail" },
  { id: 4, title: "Company", link: "/student/companylist" },
];

const emailTemplates = [
  {
    id: 1,
    title: "Collaboration Email",
    subject: "Let's Work Together!",
    body: `Hi [Name],\n\nI hope you're doing well. 
  I wanted to reach out regarding a potential collaboration. 
  We admire your work and believe that working together would be mutually beneficial. 
  Let me know if you'd be open to discussing this further.\n\nBest,\n[Your Name]`,
  },
  {
    id: 2,
    title: "Follow-up Email",
    subject: "Just Checking In!",
    body: `Hi [Name],\n\nI wanted to follow up on my previous email. 
  I understand things get busy, and I appreciate your time. 
  Let me know if you’d be interested in moving forward or if you need more details.\n\nThanks,\n[Your Name]`,
  },
  {
    id: 3,
    title: "Cold Outreach Email",
    subject: "Quick Introduction",
    body: `Hello [Name],\n\nI came across your profile and wanted to introduce myself. 
  I believe we can work together on a potential opportunity. 
  Would love to connect and discuss more!\n\nRegards,\n[Your Name]`,
  },
  {
    id: 4,
    title: "Networking Email",
    subject: "Connecting for Opportunities",
    body: `Dear [Name],\n\nI came across your work and was impressed by your expertise in [Industry]. 
  I’d love to connect and explore how we can collaborate or exchange ideas. 
  Looking forward to hearing from you!\n\nBest,\n[Your Name]`,
  },
  {
    id: 5,
    title: "Sales Pitch Email",
    subject: "Helping You Achieve More!",
    body: `Hi [Name],\n\nI wanted to introduce you to our [Product/Service]. 
  We help businesses like yours save time and increase productivity. 
  Let’s set up a quick call to see how we can help!\n\nBest,\n[Your Name]`,
  },
  {
    id: 6,
    title: "Sales Pitch Email",
    subject: "Helping You Achieve More!",
    body: `Hi [Name],\n\nI wanted to introduce you to our [Product/Service]. 
We help businesses like yours save time and increase productivity. 
Let’s set up a quick call to see how we can help!\n\nBest,\n[Your Name]`,
  },
  {
    id: 7,
    title: "Sales Pitch Email",
    subject: "Helping You Achieve More!",
    body: `Hi [Name],\n\nI wanted to introduce you to our [Product/Service]. 
We help businesses like yours save time and increase productivity. 
Let’s set up a quick call to see how we can help!\n\nBest,\n[Your Name]`,
  },
  {
    id: 8,
    title: "Sales Pitch Email",
    subject: "Helping You Achieve More!",
    body: `Hi [Name],\n\nI wanted to introduce you to our [Product/Service]. 
We help businesses like yours save time and increase productivity. 
Let’s set up a quick call to see how we can help!\n\nBest,\n[Your Name]`,
  },
  {
    id: 9,
    title: "Sales Pitch Email",
    subject: "Helping You Achieve More!",
    body: `Hi [Name],\n\nI wanted to introduce you to our [Product/Service]. 
We help businesses like yours save time and increase productivity. 
Let’s set up a quick call to see how we can help!\n\nBest,\n[Your Name]`,
  },
];

const StudentColdMail = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <StakeNavBar menuItems={NavBarMenu}></StakeNavBar>
      <div className="p-8 pt-20 bg-white text-black">
        <h2 className="text-2xl font-bold mb-4">Copy Any Cold Email Format</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {emailTemplates.map((template) => (
            <div
              key={template.id}
              className="border bg-linear-to-t from-purple-100 to-gray-200 p-4 rounded-lg shadow-lg drop-shadow-md"
            >
              <h2 className="font-semibold">{template.title}</h2>
              <p className="text-gray-600 text-sm">{template.subject}</p>
              <div className="h-32 overflow-hidden text-sm mt-2">
                {expandedId === template.id
                  ? template.body
                  : `${template.body.substring(0, 200)}...`}
              </div>
              <button
                onClick={() =>
                  setExpandedId(expandedId === template.id ? null : template.id)
                }
                className="text-blue-500 mt-2"
              >
                {expandedId === template.id ? "Show Less" : "See More"}
              </button>
              <button
                onClick={() => copyToClipboard(template.body)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentColdMail;
