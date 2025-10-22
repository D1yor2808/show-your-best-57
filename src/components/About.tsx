import { Code2, Palette, Zap } from "lucide-react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Tailwind CSS",
  "Git",
  "Responsive Design",
  "UI/UX",
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that follows best practices",
  },
  {
    icon: Palette,
    title: "Design-Focused",
    description: "Creating beautiful interfaces with attention to detail",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Building fast, optimized web applications",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          I'm a passionate front-end developer who loves turning ideas into beautiful, functional web experiences. 
          I focus on creating intuitive interfaces and writing clean, efficient code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <highlight.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
