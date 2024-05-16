import { useState, useEffect } from 'react';

import Like from '../../util/like-button.jsx';
import { Link, useRevalidator } from 'react-router-dom';
import './BoardGameList.scss';

const BoardGameList = (props) => {
    const [likedGames, setLikedGames] = useState([]);
    let revalidator = useRevalidator();

    const fetchLikedGames = async () => {
        return fetch('https://witty-nightgown-tuna.cyclic.app/profile', {
            headers: {
                Authorization: 'Bearer ' + props.token,
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                console.log(resData);
                setLikedGames(resData.boardgames);
                revalidator.revalidate();
                return;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    };
    useEffect(() => {
        if (!props.isAuth) {
            return;
        }
        fetchLikedGames().then(() => {
            console.log('fetched');
            revalidator.revalidate();
        });
        console.log(props.token);
    }, []);

    const likeGame = async (id) => {
        let isLiked = false;
        likedGames.map((game) => {
            if (game.bgg_id == id) {
                isLiked = true;
            }
        });
        try {
            const res = await fetch('https://witty-nightgown-tuna.cyclic.app/like', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + props.token,
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    bgg_id: parseInt(id),
                    isLiked: isLiked,
                }),
            });

            const resData = await res.json();
            revalidator.revalidate();
            console.log(resData);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <ul className='boardgame-list'>
            {props.boardgames.map((element) => {
                return (
                    <li key={element.bgg_id}>
                        {
                            <div className="boardgame-card">
                                <Link
                                    className="boardgame-image-link"
                                    to={element.bgg_id.toString()}
                                >
                                    <img
                                        src={
                                            element.image_url[0].replace(/'/g, '') ||
                                            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png'
                                        }
                                        alt="Image"
                                    ></img>
                                </Link>
                                <h3 className="boardgame-name">
                                    {element.name}
                                </h3>
                                <div className="boardgame-bgg-data">
                                    <img
                                        style={{
                                            height: '2rem',
                                            width: '2rem',
                                        }}
                                        src="https://recommend.games/assets/bgg-color.svg"
                                    ></img>
                                    <p>
                                        {'BGG Rating '}
                                        <strong>
                                            {element.bayes_rating
                                                ? element.bayes_rating.toFixed(
                                                      2
                                                  )
                                                : 'No data'}
                                        </strong>
                                    </p>
                                    <p>
                                        {'BGG Rank '}{' '}
                                        <strong>
                                            {element.rank || 'No data'}
                                        </strong>
                                    </p>
                                    <img
                                        style={{
                                            height: '2rem',
                                            width: '2rem',
                                            transform: 'scaleX(-1)',
                                        }}
                                        src="https://recommend.games/assets/bgg-color.svg"
                                    ></img>
                                </div>

                                <div className="boardgame-description">
                                    <p>
                                        {element.description
                                            ? element.description.substring(
                                                  0,
                                                  200
                                              ) + '.....'
                                            : 'No data'}
                                    </p>
                                </div>
                                <div className="wraper">
                                    <div className="boardgame-players">
                                        <img
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            src="https://media.istockphoto.com/id/1468157003/vector/grouping-people-icon-set-isolated-vector-illustration.jpg?s=612x612&w=0&k=20&c=fIJs6PCt3Ng_-jjRm9ruME4Hwa0EVSXyWJ_4aLC59Ho="
                                        ></img>
                                        <p>
                                            {'Players: '}{' '}
                                            <strong>
                                                {element.min_players &&
                                                element.max_players
                                                    ? element.min_players +
                                                      '-' +
                                                      element.max_players
                                                    : 'No data'}{' '}
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="boardgame-time">
                                        <img
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            src="https://i.pinimg.com/564x/4c/15/a9/4c15a9b76fb269e21b445715a80a78ab.jpg"
                                        ></img>
                                        <p>
                                            {'Time: '}
                                            <strong>
                                                {element.min_time &&
                                                element.max_time
                                                    ? element.min_time +
                                                      '-' +
                                                      element.max_time
                                                    : 'No data'}
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="wraper">
                                    <div className="boardgame-age">
                                        <img
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYQMvkHgSnAL-cvmi1p3YEaNcQwHocBrsyxbUMFsnAQ&s"
                                        ></img>
                                        <p>
                                            {'Age: '}
                                            <strong>
                                                {element.min_age
                                                    ? element.min_age +
                                                      '+ years'
                                                    : 'No data'}
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="boardgame-complexity">
                                        <img
                                            style={{
                                                height: '2rem',
                                                width: '2rem',
                                            }}
                                            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/complexity-1794504-1523900.png?f=webp"
                                        ></img>
                                        <p>
                                            {'Weight: '}
                                            <strong>
                                                {element.complexity
                                                    ? element.complexity.toFixed(
                                                          2
                                                      ) + '/5'
                                                    : 'No data'}
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="add-button">
                                    <p>{'Add to list'}</p>

                                    <img
                                        style={{
                                            height: '2rem',
                                            width: '2rem',
                                        }}
                                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                                        alt=""
                                    />
                                </div>
                                <div className="like-button">
                                    {props.isAuth ? (
                                        <Like
                                            onClick={async () => {
                                                await likeGame(element.bgg_id);
                                                await fetchLikedGames();
                                            }}
                                            isLiked={likedGames.some((game) => {
                                                console.log(
                                                    game.bgg_id ==
                                                        element.bgg_id
                                                );
                                                return (
                                                    game.bgg_id ==
                                                    element.bgg_id
                                                );
                                            })}
                                        />
                                    ) : (
                                        <p>Login to like games</p>
                                    )}
                                    <p>{'Like game'}</p>
                                </div>
                            </div>
                        }
                    </li>
                );
            })}
        </ul>
    );
};

export default BoardGameList;
