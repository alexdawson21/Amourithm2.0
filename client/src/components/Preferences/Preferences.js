import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Preferences.css';

const Preferences = (props) =>(
            <div className = "table">
                <div className = "table2" >
                    <tr >
                        <th>Movies</th>
                        <th>Shows</th>
                        <th>Hobbies</th>
                    </tr>
                    <tr>
                        <td>
                            <ol>
                                <li>{props.movies[0]}</li><br></br>
                                <li>{props.movies[1]}</li><br></br>
                                <li>{props.movies[2]}</li><br></br>
                                <li>{props.movies[3]}</li><br></br>
                                <li>{props.movies[4]}</li><br></br>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li>{props.shows[0]}</li><br></br>
                                <li>{props.shows[1]}</li><br></br>
                                <li>{props.shows[2]}</li><br></br>
                                <li>{props.shows[3]}</li><br></br>
                                <li>{props.shows[4]}</li><br></br>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li>{props.hobbies[0]}</li><br></br>
                                <li>{props.hobbies[1]}</li><br></br>
                                <li>{props.hobbies[2]}</li><br></br>
                                <li>{props.hobbies[3]}</li><br></br>
                                <li>{props.hobbies[4]}</li><br></br>
                            </ol>
                        </td>
                    </tr>
                </div>
                <br></br>
                <br></br>
                <div className = "table2">
                    <tr>
                        <th>Books</th>
                        <th>Graphic Novels/comics/manga</th>
                        <th>Music</th>
                    </tr>
                    <tr>
                        <td>
                            <ol>
                                <li>{props.books[0]}</li><br></br>
                                <li>{props.books[1]}</li><br></br>
                                <li>{props.books[2]}</li><br></br>
                                <li>{props.books[3]}</li><br></br>
                                <li>{props.books[4]}</li><br></br>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li>{props.graphics[0]}</li><br></br>
                                <li>{props.graphics[1]}</li><br></br>
                                <li>{props.graphics[2]}</li><br></br>
                                <li>{props.graphics[3]}</li><br></br>
                                <li>{props.graphics[4]}</li><br></br>
                            </ol>
                        </td>
                        <td>
                            <ol>
                                <li>{props.music[0]}</li><br></br>
                                <li>{props.music[1]}</li><br></br>
                                <li>{props.music[2]}</li><br></br>
                                <li>{props.music[3]}</li><br></br>
                                <li>{props.music[4]}</li><br></br>
                            </ol>
                        </td>
                    </tr>
                </div>
            </div>
        )

export default Preferences;