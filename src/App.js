import React from "react";
import shortid from "shortid";
import "./App.css";
import Landing from "./Landing/Landing";
import TopMenu from "./Menu/TopMenu";
import BottomMenu from "./Menu/BottomMenu";
import Splash from "./Landing/Splash";
import BudgetSetup from "./Budget/BudgetSetup";
import BudgetOverview from "./Budget/BudgetOverview";
import GoalModal from "./Goals/GoalModal";
import Login from "./Login/Login";
import Details from './Goals/GoalsDetail'

class App extends React.Component {
  state = {
    goals: [{
      id: '',
      goalName: '',
      goalAmount: '',
      depositFrequency: '',
      depositAmount: '',
    }],
    newGoal: [{
      id: '',
      goalName: '',
      goalAmount: '',
      depositFrequency: '',
      depositAmount: '',
    }]
  }

  handleAddNewGoal = () => {
    if (this.props.newGoal.goalName !== 0) {
      let newTaskObject = {
        id: shortid.generate(),
        goalName: this.state.newGoal.goalName,
        goalAmount: this.state.newGoal.goalAmount,
        depositFrequency: this.state.newGoal.depositFrequency,
        depositAmount: this.state.newGoal.depositAmount,
      };
      this.setState({
        goals: [...this.state.goals, newTaskObject],
        newGoal: {
          id: '',
          goalName: '',
          goalAmount: '',
          depositFrequency: '',
          depositAmount: '',
        }
      });
    }
  };

  handleChange = (event) => {
    event.preventDefault();

    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="App">
        <TopMenu />
        {/* <Login /> */}
        {/* <Splash /> */}
        {/* <Landing /> */}
        {/* <BudgetSetup /> */}
        {/* <GoalModal
          addNewGoal={this.handleAddNewGoal}
          change={this.handleChange}
          goals={this.state.goals}
          newGoal={this.state.newGoal} /> */}
        {/* <Details /> */}
        {/* <BudgetOverview /> */}
        <BottomMenu />
      </div>
    );
  }
}

export default App;
