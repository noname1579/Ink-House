import './Header.css';
import logo from '../../images/logo.svg';
import bird from '../../images/Bird.png';

const Header = () => {
  return (
  	<>
    <div className="header-container">
      <div className="logo">
        <img src={logo} alt='логотип' />
      </div>
      <nav className="nav">
        <a href="#projects" className="nav-btn">Репродукции</a>
        <a href="#new" className="nav-btn">Новинки</a>
        <a href="#about" className="nav-btn">О нас</a>
      </nav>
    </div>
    <div className='main'>
        <div className="main-img">
          <img src={bird} />
        </div>
        <div className="main-text">
          <h1>
            Реплики картин от <div className='green-color'>Ink House</div>
          </h1>
          <p>
            Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
          </p>
          <a href='#projects' className='main-btn'>Продукция</a>
        </div>
    </div>
    </>
  )
}

export default Header;