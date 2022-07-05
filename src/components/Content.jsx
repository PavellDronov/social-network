import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

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
        </main>
    );
};

export default Content;
