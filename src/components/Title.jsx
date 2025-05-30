import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SkillsSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="skills-section" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom" data-aos-duration="2000" style={{textAlign:"justify"}}>
      <h1 className='title-font'>My Skills</h1>

      <div className="category">
        <strong className='discription-font'>Front-End Development</strong>
        <ul>
          <li>
            <strong>HTML & CSS:</strong> The foundation of web development, used to create well-structured content and visually appealing designs.
          </li>
          <li>
            <strong>JavaScript:</strong> Powers interactivity and dynamic features on websites, ensuring seamless and engaging user experiences.
          </li>
          <li>
            <strong>React:</strong> A powerful JavaScript library for building scalable, component-based web applications with modern, interactive interfaces.
          </li>
          <li>
            <strong>Vite:</strong> My go-to tool for blazing-fast development and efficient builds, enhancing the development workflow.
          </li>
        </ul>
      </div>

      <div className="category">
        <strong className='discription-font'>Styling Frameworks</strong>
        <ul>
          <li>
            <strong>Bootstrap:</strong> Simplifies responsive design with pre-built components, helping me create clean and professional interfaces quickly.
          </li>
        </ul>
      </div>

      <div className="category">
        <strong className='discription-font'>Design Tools</strong>
        <ul>
          <li>
            <strong>Figma:</strong> My primary design tool for creating UI/UX prototypes and wireframes. It enables collaborative and precise interface designs.
          </li>
          <li>
            <strong>Canva:</strong> Perfect for designing quick, professional-grade graphics for websites, presentations, and branding materials.
          </li>
        </ul>
      </div>
      <div className="category">
        <strong className='discription-font'>Other Tools</strong>
        <ul>
          <li>
            <strong>Git:</strong> A distributed version control system that tracks changes in source code, enabling developers to collaborate, manage, and revert changes efficiently across projects with speed and reliability.
          </li>
          <li>
            <strong>GitHub:</strong>  A powerful platform for version control and collaboration, enabling developers to manage, share, and review code efficiently while fostering teamwork and innovation.
          </li>
        </ul>
      </div>

      <div className="summary" style={{ marginTop: '20px', fontStyle: 'italic' }}>
        <p>
          Combining these technologies and tools, I bring together <strong>modern web development practices</strong> and
          <strong> creative design principles</strong> to build websites that are visually appealing, functional, and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;
