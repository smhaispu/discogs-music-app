import { StyledPost, Small, Image } from './Release.style'
import defaultImage from '../Assets/defaultImage.jpeg'
function Post(props) {
    const {
        artist,
        year,
        title,
        thumb
    } = props.data;
    return (
        <StyledPost className="post">
            <div>
                {thumb ? <Image src={thumb} alt="No image" /> : <Image src={defaultImage} alt="No image" />}
            </div>

            <h1>{title}</h1>
            <p>{artist}</p>
            {year && <Small>{year}</Small>}
        </StyledPost>
    );
}


export default Post;