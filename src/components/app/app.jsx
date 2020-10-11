import React from "react";
import {appPropTypes} from "./propTypes";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import AuthScreen from "../auth-screen/auth-screen";
import WinScreen from "../win-screen/win-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {

  const {errorsCount, questions} = props;
  const [genreQuestion, artistQuestion] = questions;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => (
          <WelcomeScreen
            onPlayButtonClick={() => history.push(`/game`)}
            errorsCount={errorsCount} />
        )} />

        <Route exact path="/dev-artist">
          <ArtistQuestionScreen
            question={artistQuestion}
            onAnswer={() => {}} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen
            question={genreQuestion}
            onAnswer={() => {}} />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/result">
          <WinScreen />
        </Route>
        <Route exact path="/lose">
          <GameOverScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appPropTypes;

export default App;
