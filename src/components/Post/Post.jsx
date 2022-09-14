// import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import icon from '../../images/social-icon.png';

const Post = ({ text, groupName }) => {
    const createMarkup = () => {
        return { __html: text };
    };
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar alt='Pavel Dronov' src={icon} />
                <div className='post__info'>
                    <div className='post__author'>{groupName}</div>
                    <div className='post__date'>час назад</div>
                </div>
            </div>
            <div
                className='post__content'
                dangerouslySetInnerHTML={createMarkup()}
            ></div>
        </div>
    );
};

export default Post;
