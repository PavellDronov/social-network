import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Post from '../Post/Post';

const useStylesContent = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Content = () => {
    const classes = useStylesContent();
    return (
        <main className={classes.content}>
            <Toolbar />
            {[0,1,2,3,4,5,6].map((item, index) => {
                return <Post key={index}/>
            })}
        
        </main>
    );
};

export default Content;
