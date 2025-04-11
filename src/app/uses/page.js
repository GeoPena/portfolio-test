import "./uses.css";
export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

const UseCard = ({ title, description }) => {
  return (
    <div className="uses-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const UsesSection = ({ items }) => {
  return (
    <section className="uses-section">
      <div className="uses-section__content">
        {items.map((group, index) => (
          <div className="uses-section__group" key={index}>
            <h2>{group.groupName}</h2>
            <div className="uses-section__group-content">
              {group.items.map((item, idx) => (
                <UseCard key={idx} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const items = [
  {
    groupName: "Workstation",
    items: [
      {
        title: "Linux (Ubuntu)",
        description:
          "I use Ubuntu for most of my development work. I love its stability, open-source power, and how customizable it is for coding, scripting, and teaching.",
      },
    ],
  },
  {
    groupName: "Development tools",
    items: [
      {
        title: "Java",
        description:
          "I use Java for object-oriented programming, and it's a key language in my academic training. I'm currently using it for data structures and algorithm challenges.",
      },
      {
        title: "SQL",
        description:
          "Essential for querying databases. I use it for organizing and analyzing educational data, and for database design.",
      },
      {
        title: "Tableau",
        description:
          "One of my favorite tools for data visualization. I use it to make sense of student performance data and create visual dashboards.",
      },
      {
        title: "GAP",
        description:
          "Powerful software for computational group theory. I used it in my master’s thesis to explore algebraic structures.",
      },
    ],
  },
  {
    groupName: "Design",
    items: [
      {
        title: "Figma",
        description:
          "Great for designing UI components and collaborating on visual ideas. I use it for educational platform interfaces.",
      },
      {
        title: "Whimsical",
        description:
          "Perfect for building diagrams and wireframes. I use it to plan lesson flow, site architecture, and project concepts.",
      },
    ],
  },
  {
    groupName: "Productivity",
    items: [
      {
        title: "Trello",
        description:
          "My go-to task management tool. I use it to organize my study plans, course deadlines, and project steps.",
      },
      {
        title: "Slack",
        description:
          "I use Slack to communicate with coworkers and teams in educational projects, like at BYU or Ensign College.",
      },
    ],
  },
  {
    groupName: "Math Teaching Tools",
    items: [
      {
        title: "Desmos",
        description:
          "One of my favorite tools to teach algebra and graphing interactively. I use it in class and for creating visual resources.",
      },
      {
        title: "GeoGebra",
        description:
          "Excellent for geometry, algebra, and calculus. I’ve used it to train teachers and create interactive lessons.",
      },
      {
        title: "Derivita",
        description:
          "BYU’s online platform for calculus and algebra exercises. I helped create content using it as an Instructional Designer Assistant.",
      },
    ],
  },
];

export default function Uses() {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center px-6 md:px-0 mx-auto mb-16">
        <h1 className="uses-header text-4xl font-bold mb-4">
          Tools I use to teach, build, and stay inspired.
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Over the years, I've discovered a set of tools that empower both my teaching and my work as a developer.
          From visualizing math concepts to organizing my learning and coding projects, these are the platforms and technologies
          I trust to get things done with clarity and creativity.
        </p>
      </div>

      <UsesSection items={items} />
    </>
  );
}
