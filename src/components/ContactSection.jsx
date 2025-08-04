import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
    return (<section id = "contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                If you have any questions, want to collaborate on a project, or just want to say hi, feel free to reach out!
                I'm always open to new opportunities and connections.
            </p>

            <div className="">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        {" "}
                        Contact <span className="text-primary">Information</span>
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3  rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:stefvisentin@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    stefvisentin@outlook.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+18137505334" className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (813) 750-5334
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">
                                        Tampa, Florida, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};