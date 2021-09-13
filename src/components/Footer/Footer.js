
import './footer.css'


function Footer() {

    return (
        <div className='footer-wrapper'>
            <div className='footer-content'>
                <a href='https://github.com/josh-willy91'
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src='images/links/gitHub.png' className='link-img'></img>
                </a>
                <a href='https://www.linkedin.com/in/joshua-williams-768b48178/'
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src='images/links/linkedIn.jpg' className='link-img'></img>
                </a>
                <a href='https://angel.co/u/josh-williams-40'
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src='images/links/angelList.png' className='link-img'></img>
                </a>
            </div>
        </div>
    )
}

export default Footer;
