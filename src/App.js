import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
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
