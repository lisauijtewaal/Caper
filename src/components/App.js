import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { CSSTransitionGroup } from 'react-transition-group'
import store, { STATES, FRUIT, start, giveAnswer } from '../store';
import strings from '../strings';

class App extends Component {
    render() {
        return (
            <div className="app center"><div><CSSTransitionGroup
                    transitionName="page"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={600}
            >
                {
                    store.state === STATES.START_SCREEN &&
                    <div className="center start" key="start">
                        <p>{strings.START_INTRO}</p>
                        <p className="big">
                            <a href="" onClick={start}>{strings.START_BUTTON}</a>
                        </p>
                        <p className="hidden">{strings.START_INTRO}</p>
                    </div>
                }
                {
                    store.state === STATES.WAIT_SCREEN &&
                    <div className="center wait" key="wait">
                        <p>{strings.WAIT_INTRO}</p>
                        <p className="big">{store.secondsToGo}</p>
                        <p className="hidden">{strings.WAIT_INTRO}</p>
                    </div>
                }
                {
                    store.state === STATES.GAME_SCREEN &&
                    <div className="game" key="game">
                        <div className="scores">
                            <div>
                                <div>Jouw score</div>
                                <div className="bar"><div className="progress" style={{width: `${store.yourScore / 10 * 100}%`}} /></div>
                                <div>{store.yourScore} / 10</div>
                            </div>
                            <div>
                                <div>Apen</div>
                                <div className="bar"><div className="progress" style={{width: `${store.monkeyScore / 10 * 100}%`}} /></div>
                                <div>{store.monkeyScore} / 10</div>
                            </div>
                        </div>
                        <CSSTransitionGroup transitionName="questionPreview" transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                            <img key={store.question} src={FRUIT[store.question]} className="questionPreview"/>
                        </CSSTransitionGroup>
                        <p>Kan jij de {store.question} vinden?</p>
                        <CSSTransitionGroup transitionName="grid" transitionEnterTimeout={250} transitionLeaveTimeout={1100}>
                            <div className="grid" key={store.grid.join()}>
                                {store.grid.map((fruit, i) =>
                                    <img
                                        src={FRUIT[fruit]}
                                        onClick={() => giveAnswer(fruit)}
                                        style={{
                                            transitionDelay: `${i / 2 * 10}0ms`
                                        }}
                                    />
                                )}
                            </div>
                        </CSSTransitionGroup>
                    </div>
                }
                {
                    store.state === STATES.RESULT_SCREEN &&
                    <div className="center result" key="result">
                        <p>{strings.RESULT_INTRO}</p>
                        <p className="big">{strings.RESULT[store.result]}</p>
                        <p className="hidden">{strings.RESULT_INTRO}</p>
                    </div>
                }
            </CSSTransitionGroup></div></div>
        );
    }
}

export default observer(App);
