import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            I'm baby brunch marxism gluten-free chicharrones poke cronut
            freegan. Gastropub bicycle rights gluten-free ramps, put a bird on
            it air plant trust fund post-ironic kogi. Coloring book sartorial
            typewriter tumblr, neutral milk hotel neutra celiac single-origin
            coffee slow-carb schlitz keytar. Vape taiyaki activated charcoal
            dreamcatcher forage cold-pressed cupping, adaptogen banh mi irony.
            Deep v blackbird spyplane neutral milk hotel readymade four loko
            leggings vaporware slow-carb viral DIY stumptown. Everyday carry
            cardigan synth DIY, bruh tacos kale chips kombucha pour-over
            biodiesel unicorn marxism grailed. Banh mi enamel pin quinoa keytar
            aesthetic solarpunk authentic sustainable umami pabst raw denim tbh
            pop-up lumbersexual man bun.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo user
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img-main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
