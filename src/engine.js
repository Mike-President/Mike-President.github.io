// src/engine.js

let simulationTime = 0;

function updateSimulation() {
    // Update the state of the simulation here
    console.log(`Simulation time: ${simulationTime}`);
    simulationTime++;
    // Call updateSimulation again after a delay
    requestAnimationFrame(updateSimulation);
}

// Start the simulation loop
updateSimulation();