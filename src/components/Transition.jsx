
import '../styles/transition.css';
import image4 from '../assets/transition1.png';

const Transition = ()=>{
    return(
        <div className="transition-main">
            <div className='transition-card'>
                <img className='image4' src={image4} alt="" />
                <div className='container transition-container'>
                    <div className='transition-text'>
                    <p>Ready to transition in tech?</p>
                    <h1>Talk to us today</h1>
                    </div>
                    <div className='btn-sec'>
                        <button className='btn-transition'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transition;