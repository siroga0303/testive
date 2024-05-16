import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import Tab from '../../util/Tab.jsx';
import TabsPanel from '../../util/TabsPanel.jsx';
import './Profile.scss';
import { useLoaderData, Await , Link, useRevalidator} from 'react-router-dom';
import Like from '../../util/like-button.jsx';
import BoardGameList from '../BoardgameList/BoardGamesList.jsx'
const Profile = (props) => {
    const user = useLoaderData();
   
    return (
        <>
            <Navigation isAuth ={props.isAuth} onLogOut={props.onLogOut}/>
            <React.Suspense fallback={<p>Loading package location...</p>}>
                <Await
                    resolve={user}
                    errorElement={<p>Error loading package location!</p>}
                >
                    {(user) => {
                        console.log(user);
                        
                        return (
                            <div className="user-profile">
                                <img
                                    className="user-profile__img"
                                    src={'https://witty-nightgown-tuna.cyclic.app/' + user.image_url}
                                ></img>
                                <h1>{user.userName}</h1>
                                <h5 className="user-profile__counter">{user.boardgames.length}</h5>
                                <h5 className="user-profile__counter-description">
                                    NUMBER OF LIKED GAMES
                                </h5>
                                <TabsPanel>
                                    <Tab title="Liked games">
                                        <div className="boardgames">
                                    <BoardGameList boardgames={user.boardgames} token = {props.token} isAuth = {props.isAuth}/>
                                    </div>
                                        
                                    </Tab>
                                    <Tab title="Recomendation">
                                        <ul className="user-profile__liked"></ul>
                                    </Tab>
                                </TabsPanel>
                            </div>
                        );
                    }}
                </Await>
            </React.Suspense>
        </>
    );
};

export default Profile;
