import {
  ChevronRight,
} from "lucide-react";
import TaskVideo from '../assets/TaskManager.mp4'
import CarVideo from '../assets/CarRental.mp4'

import { useState } from 'react';
import VideoModal from './VideoModal';

const projects = [
  {
    title: "TaskMaster",
    description:
      "Kanban task management platform with drag & drop, real-time collaboration, filtering, and subtasks.",
    tech: ["React", "TypeScript", ".NET", "SQL", "Storybook"],
    impact: [
      "Optimized UI with React & TypeScript",
      "Built scalable REST API with .NET ",
      "Scalable modular architecture",
    ],
    live: TaskVideo,
    github: "https://github.com/DzhansuMyumyun/TaskManager",
  },
  {
    title: "Car Rental Platform",
    description:
      "Full-stack booking system with authentication, admin dashboard, reservations, and validation.",
    tech: ["Angular", ".NET", "SQL"],
    impact: [
      "Robust N-Tier Architecture & SOLID Design",
      "Secure End-to-End Authentication Flow",
      "Optimized Data Management & UX",
    ],
    live:CarVideo,
    github: "https://github.com/DzhansuMyumyun/Car_Rental",
  },
];

export default function ProjectsSection () {

const [selectedVideo, setSelectedVideo] = useState<string | null>(null);


  return (
    <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto" id="projects">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-4xl font-bold">Projects</h2>
        <p className="text-zinc-700 mt-3 text-base md:text-lg">
          Real products focused on performance, UX, and scalability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-zinc-200 rounded-3xl p-7 hover:shadow-xl transition-all bg-white"
          >
            <h3 className="text-2xl text-zinc-700 font-semibold mb-3">{project.title}</h3>

            <p className="text-zinc-700 mb-5 ">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-5 mt-5 justify-center">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-zinc-100 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <ul className="space-y-2 mb-6">
              {project.impact.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-sm text-zinc-600"
                >
                  <ChevronRight size={16} className="mt-0.5 text-green-500" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedVideo(project.live);
                }}
                href={project.live}
                className="px-4 py-2 bg-black text-white rounded-xl hover:opacity-90"
              >
                Live Demo
              </a>

              <a
                href={project.github} target="_blank"
                className="px-4 py-2 border content-center rounded-xl hover:bg-zinc-50"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoUrl={selectedVideo || ''} 
      />
    </section>
  );
};