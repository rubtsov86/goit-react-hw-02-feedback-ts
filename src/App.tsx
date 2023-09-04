import React from "react";

import { Feedback } from "./components/Feedback/Feedback";
import { Statistics } from "./components/Statistics/Statistics";

interface IState {
  good: number;
  neutral: number;
  bad: number;
}

class App extends React.Component<{}, IState> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    // // перший спосіб достукатись до id
    // if ("name" in e.target) {
    //   console.log(e.target.id);
    // }
    // другий спосіб достукатись до id
    // (e.target as HTMLButtonElement).id;

    this.setState((prevState) => {
      const buttonName = (e.target as HTMLButtonElement).id as keyof IState;

      return { [buttonName]: prevState[buttonName] + 1 } as Pick<
        IState,
        keyof IState
      >;
      //  ([(e.target as HTMLButtonElement).id]):
    });
  };

  // prevState[buttonName] + 1

  // : Pick<IState, "good" | "bad" | "neutral">

  // handleIncrement1 = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   this.setState((prevState): any => ({
  //     [(event.target as HTMLButtonElement).id as keyof IState]:
  //       prevState[(event.target as HTMLButtonElement).id as keyof IState] + 1,
  //   }));
  // };

  render() {
    return (
      <>
        <Feedback onClick={this.handleIncrement} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}

export default App;
