import React from 'react';

const AboutSubjects = () => {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">My View Of Subjects</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 divider">Physics</h3>

          <p>
            Physics is the branch of science that deals with the study of matter,
            energy, and the fundamental forces that govern the universe. In class
            nine and ten, students are introduced to classical mechanics,
            thermodynamics, and basic concepts of motion, light, and sound. Physics
            helps students understand the natural phenomena around them and lays
            the foundation for advanced concepts in higher classes.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 divider">Mathematics [Bonus for SSC level]</h3>
          <p>
            Mathematics is the study of numbers, shapes, and patterns. In class
            nine and ten, students learn topics like algebra, geometry, trigonometry,
            and statistics. Mathematics plays a vital role in various fields,
            including physics and ICT. It helps students develop problem-solving
            skills and logical thinking, essential for understanding complex
            concepts in other subjects and everyday life.
          </p>
        </div>
        <div className="mb-6">
          <div className="divider">ICT only for HSC</div>
          <h3 className="text-xl font-bold mb-2">ICT (Information and Communication Technology)</h3>
          <p>
            ICT encompasses technologies that enable the processing, storage, and
            exchange of information. In class nine and ten, students get introduced
            to basic computer hardware, software, and concepts related to the
            internet and communication technologies. ICT plays a crucial role in
            our digital world, facilitating tasks, enhancing communication, and
            driving advancements in various sectors.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Advanced Coding for ICT?</h3>
          <p>
            At the intermediate level, students can explore more advanced topics in ICT, 
            they can learn programming languages,
            databases, and web development frameworks. These advanced concepts are
            essential for aspiring web developers to create dynamic and interactive
            websites and applications, contributing to the rapidly evolving digital
            landscape.
          </p>
          <p>
            Web development, driven by concepts from physics, mathematics, and ICT,
            empowers individuals to build powerful online solutions, communicate
            ideas effectively, and innovate in today's technology-driven world.
          </p>
        </div>
      </div>
    );
  };

export default AboutSubjects;