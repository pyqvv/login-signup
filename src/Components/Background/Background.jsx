import './Background.css'
import image1 from '../../assets/image1.webp'
import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image3.webp'

const Background = ({heroCount}) => {

    if (heroCount===0) {
        return (
            <div>
                <img src={image1} className='background' alt=""></img>
            </div>
          )
    }
    else if (heroCount===1) {
        return (
            <div>
                <img src={image2} className='background' alt=""></img>
            </div>
          )
    }
    else if (heroCount===2) {
        return (
            <div>
                <img src={image3} className='background' alt=""></img>
            </div>
          )
    }
}

export default Background
