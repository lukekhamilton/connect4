import {Token} from "store/store";

export const GAME_OVER: "GAME_OVER" = "GAME_OVER";
export const NEW_GAME: "NEW_GAME" = "NEW_GAME";
export const PLACE_TOKEN: "PLACE_TOKEN" = "PLACE_TOKEN";

export interface PlaceTokenAction {
    type: "PLACE_TOKEN";
    column: number;
}
export interface NewGameAction {
    type: "NEW_GAME";
}
export interface GameOverAction {
    type: "GAME_OVER";
    winner: Token;
}

export const newGame = () => <NewGameAction> { type: NEW_GAME };
export const gameOver = (winner: Token) => <GameOverAction> {
    type: GAME_OVER,
    winner,
};
export const placeToken = (column: number) => <PlaceTokenAction> {
    type: PLACE_TOKEN,
    column,
};

export type GameAction = NewGameAction | GameOverAction | PlaceTokenAction;
