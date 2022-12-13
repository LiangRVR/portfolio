import React from "react";
import ProjectFormEdit from "../project-form-edit/project-form-edit";

const ProjectsEdit = () => {
  const projects = [
    {
      id: 1,
      title: "Crown clothing",
      skills: [
        "firebase-plain",
        "react-original",
        "redux-original",
        "express-original",
        "nodejs-original",
      ],
      overview:
        "This is a full stack app (MERN stack) working with Firebase, it`s a massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Router, Firebase, Redux-Saga, and a little server using Express to handle Stripe`s payments.",
      githubUrl: "https://github.com/LiangRVR/clothing-ecommerce",
      deployed: "https://github.com/LiangRVR/clothing-ecommerce",
    },
  ];
  return (
    <div className="w-full flex flex-col space-y-5">
      <h1 className="text-4xl text-center mb-6">Edit Projects section</h1>
      <ProjectFormEdit />
    </div>
  );
};

export default ProjectsEdit;
