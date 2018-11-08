import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Preferences.css';

const Preferences = (props) =>(
            <div>
                <div>
                    <tr>
                        <th>Movies</th>
                        <th>Shows</th>
                        <th>Hobbies</th>
                    </tr>
                    <tr>
                        <td>
                            <ol>
                                <li>{props.movies[0]}</li>
                                <li>{props.movies[1]}</li>
                                <li>{props.movies[2]}</li>
                                <li>{props.movies[3]}</li>
                                <li>{props.movies[4]}</li>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li>{props.shows[0]}</li>
                                <li>{props.shows[1]}</li>
                                <li>{props.shows[2]}</li>
                                <li>{props.shows[3]}</li>
                                <li>{props.shows[4]}</li>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li>{props.hobbies[0]}</li>
                                <li>{props.hobbies[1]}</li>
                                <li>{props.hobbies[2]}</li>
                                <li>{props.hobbies[3]}</li>
                                <li>{props.hobbies[4]}</li>
                            </ol>
                        </td>
                    </tr>
                </div>
                <br></br>
                <div>
                    <tr>
                        <th>Books</th>
                        <th>Graphic Novels/comics/manga</th>
                        <th>Music</th>
                    </tr>
                    <tr>
                        <td>
                            <ol>
                                <li>{props.books[0]}</li>
                                <li>{props.books[1]}</li>
                                <li>{props.books[2]}</li>
                                <li>{props.books[3]}</li>
                                <li>{props.books[4]}</li>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li>{props.graphics[0]}</li>
                                <li>{props.graphics[1]}</li>
                                <li>{props.graphics[2]}</li>
                                <li>{props.graphics[3]}</li>
                                <li>{props.graphics[4]}</li>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li>{props.music[0]}</li>
                                <li>{props.music[1]}</li>
                                <li>{props.music[2]}</li>
                                <li>{props.music[3]}</li>
                                <li>{props.music[4]}</li>
                            </ol>
                        </td>
                    </tr>
                </div>
            </div>
        )

export default Preferences;