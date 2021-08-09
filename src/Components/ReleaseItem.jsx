import { StyledPost, Small } from './Release.style'

function Post(props) {
    const {
        artist,

        status,

        title,

    } = props.data;
    return (
        <StyledPost className="post">
            {status && <Small>{status}</Small>}
            <h1>{title}</h1>
            <p>{artist}</p>
        </StyledPost>
    );
}


export default Post;