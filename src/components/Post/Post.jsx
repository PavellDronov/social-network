// import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Post = ({text, groupName}) => {
    const createMarkup = () => {
        return {__html: text}
    }
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar alt='Remy Sharp' src='./static/images/1.jpg' />
                <div className='post__info'>
                    <div className='post__author'>{groupName}</div>
                    <div className='post__date'>час назад</div>
                </div>
            </div>
            <div className='post__content' dangerouslySetInnerHTML={createMarkup()}>
                {/* <Typography paragraph>
                    Где-то с месяц назад на даче ремонтировал садовую тележку и
                    старый обод от колеса приставил к дому. Тут шел шел мимо,
                    смотрю, а под него шмели залетают. Решил посмотреть, сдвинул
                    немного в сторону и обнаружил трещину в фундаменте, в
                    которой эти самые шмели обустроили себе гнездо. Трогать не
                    стал — все-таки полезные насекомые. Ну и обод на место не
                    стал возвращать, чтобы не мешал жильцам домой попадать.
                </Typography>
                <Typography paragraph>
                    Через пару часов смотрю, а уже несколько шмелей по бетону
                    ползают около обода и в гнездо (щель) не лезут. Решил
                    понаблюдать. Оказывается шмели по-прежнему залетают под обод
                    и пытаются там найти вход в свой дом, тыкаясь головами в
                    глухую бетонную стенку. То, что нужная щель в 10 сантиметрах
                    левее, их не волнует — положено под обод залезать, и
                    точка!!!
                </Typography>
                <Typography paragraph>
                    Пришлось возвращать обод на место. Сразу и дом нашелся, и
                    насекомые успокоились...
                </Typography> */}
            </div>
        </div>
    );
};

export default Post;
