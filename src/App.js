import './App.css';
// import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import News from './components/News/News';
import Chat from './components/Chat/Chat';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App() {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <Header/>
                <Sidebar/>
                <main className={classes.content}>
                    <Routes>
                        <Route path='/' element={<News/>}/>
                        <Route path='news' element={<News/>}/>
                        <Route path='chat' element={<Chat/>}/>
                    </Routes>
                </main>
                {/* <Content/> */}
            </div>
         </BrowserRouter>
    );
}

export default App;
