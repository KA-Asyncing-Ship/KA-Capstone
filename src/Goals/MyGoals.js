import React, { useState, Component } from "react";
import "./MyGoals.scss";
import Modal from "react-modal";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { withRouter } from "react-router-dom";
import NewGoalModal from "./modals/NewGoalModal";
import UserGoals from "./UserGoals";

function MyGoals(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalCurrentAmount, setTotalCurrentAmount] = useState(
    props.goalList.reduce((curr, val) => curr + val.currentAmount, 0)
  );
  const [totalGoalAmount, setTotalGoalAmount] = useState(
    props.goalList.reduce((curr, val) => curr + val.goalAmount, 0)
  );

  function findSavingsPercentage() {
    let percent = (totalCurrentAmount / totalGoalAmount) * 100;

    return Math.floor(percent);
  }

  return (
    <>
      <div className="progressBar">
        <h3 className="goalName"> Goals </h3>
        <Progress percent={Number(findSavingsPercentage())} />
      </div>

      <div className="goalFooter">
        <h3 className="money">
          {totalCurrentAmount} / ${totalGoalAmount}
        </h3>{" "}
        <hr />
      </div>

      {/* Maps through goals and renders them on page */}
      <div className="userGoals">
        <ul className="goalList">
          {props.goalList.map((goalItem) => (
            <UserGoals
              handleAddNewDeposit={props.handleAddNewDeposit}
              handleModalDeposit={props.handleModalDeposit}
              goalItem={goalItem}
              key={goalItem.id}
              goals={props.goalList}
              newDeposit={props.newDeposit}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyGoals;

{
  /* <div className="emptyScreen">
        <div className="img">
          <img
            className="bankIcon"
            src="https://img.icons8.com/dusk/64/000000/money-box.png"
          />
        </div>
        <h2>
          Press the button below to create a new goal,
          once you create your first goal it will appear here.
          </h2>
      </div> */
}
