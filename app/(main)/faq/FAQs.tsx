import Expandable from "@/app/components/Generics/Expandable";
import Text from "@/app/components/Generics/Text";
import React from "react";

const questions = [
  {
    question: "What’s the difference between a cover letter and a resume?",
    answer:
      "A resume is a formal summary of your work experience, education, and skills, divided into sections. It shows your career history in a structured way and provides the recruiter with crucial information about your professional background while a cover letter is a detailed document that shows hiring managers your desire for a particular job. It is an opportunity to demonstrate more of your personality than you can on your resume. Throughout the letter, you can discuss specific items listed in the job description and how your skills and experience match those requirements.",
  },
  {
    question: "How Can I Safely Browse The Internet?",
    answer:
      "You can safely browse the internet by following a few key practices. First, keep your operating system, browser, and antivirus software up to date to ensure you have the latest security patches. Use strong, unique passwords for your accounts and consider a reputable password manager to help you manage them. Be cautious when clicking on links or downloading files, and only do so from trusted sources. Avoid sharing personal or sensitive information on unsecured websites, and use encrypted connections (look for 'https' in the URL) when submitting sensitive data. Lastly, be mindful of phishing attempts and scams, and educate yourself about online privacy and security best practices to stay safe while exploring the digital world.",
  },
];
const FAQs = () => {
  return (
    <ul>
      {questions.map(({ question, answer }) => (
        <li key={question} className="my-6">
          <Expandable heading={question}>
            <Text>{answer}</Text>
          </Expandable>
        </li>
      ))}
    </ul>
  );
};

export default FAQs;
