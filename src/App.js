import './App.css';
// import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import News from './components/News/News';
import Chat from './components/Chat/Chat';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App({ mockData }) {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <Header />
                <div className='layout'>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={9}>
                            <main className={classes.content}>
                                <Routes>
                                    <Route
                                        path='/'
                                        element={<News posts={mockData.posts} />}
                                    />
                                    <Route
                                        path='news'
                                        element={<News posts={mockData.posts} />}
                                    />
                                    <Route
                                        path='chat/*'
                                        element={
                                            <Chat
                                                dialogItems={
                                                    mockData.dialogItems
                                                }
                                                messages={mockData.messages}
                                            />
                                        }
                                        exact
                                    />
                                    <Route
                                        path='profile'
                                        element={
                                            <Profile posts={mockData.posts} />
                                        }
                                    />
                                    <Route path='music' element={<Music />} />
                                    <Route
                                        path='friends'
                                        element={<Friends />}
                                    />
                                </Routes>
                            </main>
                        </Grid>
                    </Grid>
                </div>
                {/* <Content/> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
