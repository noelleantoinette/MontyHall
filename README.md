# MontyHall
Simulation of Monty Hall Problem, named after the host of the game show Let's make a deal.

There are three doors. We have two goats and one car, each one behind a door. The game steps are:

Player chooses a door.
Host opens another door revealing a goat behind it.
Player choose to stay or switch doors.
The question is: what is the best strategy for the player? Stay or switch?

We can prove that the probability of winning is 2/3 if the player switchs and 1/3 otherwise. Most people would think at first that the probability is the same, as remains two doors, one with the car and another with a goat.

Explanation is as follows:

We choose a door.
We have a 1/3 chance that the car is behind the door. If we switch we will loose the car.
We have a 2/3 chance that a goat is behind the door. If we switch we win (as the other goat was revealed by the host).
Conclusion: if we switch we win 2/3 of times.
