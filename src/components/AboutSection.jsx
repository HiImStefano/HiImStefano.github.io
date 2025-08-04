import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols1 md:grid-cols-2 gap 12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Backend/Full Software Engineer</h3>
                    <p className="text-muted-foreground">Bachelor's Degree in Computer Science from the University of South Florida (Graduated December 2022)</p>
                    <p className="text-muted-foreground">Certifications: AWS Cloud Practitioner Certification (Est. 2023)</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="galaxy-button">
                            {" "}
                            Contact Information
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Hobbies</h4>
                                <p className="text-muted-foreground">Formula 1, Coding, Computer Hardware, Table-top games</p>
                            </div>
                        </div>
                    </div>    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Current Personal Projects</h4>
                                <p className="text-muted-foreground">A java-based plugin for a popular game Old School Runescape</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">3 Years Work Experience</h4>
                                <p className="text-muted-foreground">Currently working at JPMorganChase as a Software Engineer II working on
                                    the largest payment platform in the world.
                                </p>
                            </div>
                        </div></div>    
                </div>
            </div>
        </div>
    </section>;
}