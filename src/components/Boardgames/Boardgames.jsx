import { useState, useEffect } from 'react';
import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import './Boardgames.scss';
import Like from '../../util/like-button.jsx';
import { Link, useLoaderData, Await } from 'react-router-dom';
import BoardGameList from '../BoardgameList/BoardGamesList.jsx';
import Filter from '../Filter/Filter.jsx';
const Boardgames = (props) => {
    const album = useLoaderData();

    return (
        <>
            <Navigation
                isAuth={props.isAuth}
                onLogOut={props.onLogOut}
            />

            <main className="boardgames">
                <Filter />
                <React.Suspense fallback={<p>Loading package location...</p>}>
                    <Await
                        resolve={album.boards}
                        errorElement={<p>Error loading package location!</p>}
                    >
                        {(boards) => {
                            console.log(boards);
                            return (
                                <>
                                    <BoardGameList
                                        boardgames={boards.results}
                                        token={props.token}
                                        isAuth={props.isAuth}
                                    />
                                    <div className="pagination">
                                        {boards.currentPage != 1 && (
                                            <Link to={`/boardgames/?page=${1}`}>
                                                <button>{1} </button>
                                            </Link>
                                        )}

                                        {boards.hasPreviousPage &&
                                            boards.previousPage != 1 && (
                                                <Link
                                                    to={`/boardgames/?page=${boards.previousPage}`}
                                                >
                                                    <button>
                                                        {boards.previousPage}{' '}
                                                    </button>
                                                </Link>
                                            )}
                                        <Link
                                            to={`/boardgames/?page=${boards.currentPage}`}
                                        >
                                            <button>
                                                {boards.currentPage}{' '}
                                            </button>
                                        </Link>

                                        {boards.hasNextPage && (
                                            <Link
                                                to={`/boardgames/?page=${boards.nextPage}`}
                                            >
                                                <button>
                                                    {boards.nextPage}{' '}
                                                </button>
                                            </Link>
                                        )}
                                        {boards.currentPage !=
                                            boards.lastpage &&
                                            boards.nextPage !=
                                                boards.lastpage && (
                                                <Link
                                                    to={`/boardgames/?page=${boards.lastpage}`}
                                                >
                                                    <button>
                                                        {boards.lastpage}{' '}
                                                    </button>
                                                </Link>
                                            )}
                                    </div>
                                </>
                            );
                        }}
                    </Await>
                </React.Suspense>
            </main>
        </>
    );
};

export default Boardgames;
