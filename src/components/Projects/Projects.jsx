import './Projects.css';

const Projects = () => {
  return (  
    <>
    <section className='projects container' id='projects'>
      <div className="projects-header">
        <h2>
          Репродукции
        </h2>
        <div className="projects-btns">
          <button className='projects-btn'>Франция</button>
          <button className='projects-btn'>Германия</button>
          <button className='projects-btn'>Англия</button>
        </div>
      </div>
    </section>
    </>
  )
}
 
export default Projects;