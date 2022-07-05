import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
