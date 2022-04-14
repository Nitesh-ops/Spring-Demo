import React, { useState, useEffect } from "react";
import TrainService from "../services/TrainService";

function TrainComponent() {
  const [train, setTrain] = useState([]);

  useEffect(() => {
    getTrains();
  }, []);

  const getTrains = () => {
    TrainService.getTrain().then((response) => {
      setTrain(response.data);
      console.log(response.data);
    });
  };

  return (
    <div>
      <h1>Train Details</h1>
      <div className="container">
        <h1 className="text-center"> Train List</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th> Train Number</th>
              <th> From Station</th>
              <th> To Station</th>
              <th> Departure Time</th>
              <th> Arrival Time</th>
              <th> Available Tickets</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            {train.map((trains) => (
              <tr key={trains.trainNumber}> 
                <td> {trains.trainNumber}</td>
                <td> {trains.fromStation}</td>
                <td> {trains.toStation}</td>
                <td> {trains.departureDateTime}</td>
                <td> {trains.arrivalDateTime}</td>
                <td> {trains.availableTickets}</td>
                <td> {trains.fare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TrainComponent;
