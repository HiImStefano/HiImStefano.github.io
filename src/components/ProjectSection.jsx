const projects = [
    {
        title: "Pangea",
        description: "A Full Stack E-Commerce Site created using React, Node.Js, Firebase DB.",
        image: "/src/assets/Pangea.JPG",
        tags: ["React", "Node.js", "Firebase", "JavaScript"],
        link: "https://github.com/HiImStefano/Pangea-Ecommerce-Store"
    },
    {
        title: "Shoe Lagoon",
        description: "A ",
        image: "/src/assets/ShoeLagoonLogo.PNG",
        tags: ["React-Native", "Node.js", "JavaScript"],
        link: "https://github.com/HiImStefano/ShoeLagoon"
    }
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Feature <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foregound mb-12 max-w-2xl mx-auto">
                Heare are some of the projects that I have worked on in the past. Each Project showcase my skills in different technologies and frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}                        
                            </div>    
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}