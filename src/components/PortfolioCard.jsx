import React from 'react';

const PortfolioCard = ({ project }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg">
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default PortfolioCard;
