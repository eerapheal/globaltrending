import { FormControlItem, Option } from "./type";

const POSTS: { title: string; href: string; description: string }[] = [
  {
    title: "Lifestyle",
    href: "lifestyle",
    description:
      "Explore the latest lifestyle trends, tips for a balanced life, and insights into health, travel, and personal growth. Stay updated with our engaging lifestyle articles."
  },
  {
    title: "Sport",
    href: "sport",
    description:
      "Stay ahead in the game with the latest sports news, match analyses, and athlete profiles. Dive into comprehensive sports coverage for enthusiasts and professionals alike."
  },
  {
    title: "Business",
    href: "business",
    description:
      "Gain valuable business insights, strategies for success, and updates on market trends. Learn from industry leaders and stay informed with our business blog."
  },
  {
    title: "Tech",
    href: "tech",
    description:
      "Discover the latest in technology, from groundbreaking innovations to practical tech tips. Stay informed about the ever-evolving world of tech with our expert articles."
  },
  {
    title: "Health",
    href: "health",
    description:
      "Prioritize your well-being with our health blog. Find articles on nutrition, fitness, mental health, and medical news to help you lead a healthier life."
  },
  {
    title: "Entertainment",
    href: "entertainment",
    description:
      "Stay entertained with the latest news in movies, TV shows, music, and celebrity gossip. Dive into our entertainment blog for reviews, interviews, and more."
  }
];

export default POSTS;


export const categories: Option[] = [
  {
    value: "sport",
    label: "Sport",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "lifestyle",
    label: "Lifestyle",
  },
  {
    value: "business",
    label: "Business",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  authDomain: process.env.firebase_authDomain,
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.firebase_appId,
  measurementId: process.env.firebase_measurementId,
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}