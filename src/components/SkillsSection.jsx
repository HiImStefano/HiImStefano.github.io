import { useState } from "react";

const skills = [
    //Front-End
    {name: "HTML/CSS", level: 75, category: "frontend"},
    {name: "JavaScript", level: 85, category: "frontend"},
    {name: "React", level: 87, category: "frontend"},
    //Back-End
    {name: "Java", level: 90, category: "backend"},
    {name: "Python", level: 85, category: "backend"},
    {name: "Oracle SQL", level: 95, category: "backend"},
    {name: "Ruby", level: 60, category: "backend"},
    //Tools
    {name: "Linux", level: 75, category: "tools"},
    {name: "Apache Kafka", level: 70, category: "tools"},
    {name: "Restful APIs", level: 80, category: "tools"},
    {name: "Git", level: 95, category: "tools"},
]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary">Skills</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, key) => (
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                    <div className="w-fill bg-secondary/50 h2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                        style={{width: skill.level + "%"} }
                        />
                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                </div>
            ))}
        </div>
    </section>; 
}