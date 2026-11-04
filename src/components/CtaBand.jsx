import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <div className="cta-band" id="academy">
      <div className="wrap">
        <div className="big-cta reveal-zoom" data-vi="zoom">
          <h2 className="reveal">Your goals are our priority. Let's build something extraordinary together.</h2>
        <Link to="/#contact" className="btn btn-white reveal-zoom">Start your project</Link>
        </div>
      </div>
    </div>
  )
}
