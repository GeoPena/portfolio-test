import Image from 'next/image';
import PropTypes from 'prop-types';

const ProjectCard = ({ imageSrc, title, description, tags, projectUrl }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={imageSrc} alt={title} width={400} height={225} />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex flex-wrap mt-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <a href={projectUrl} className="text-blue-500 hover:underline mt-4 inline-block">
          See project →
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default ProjectCard;