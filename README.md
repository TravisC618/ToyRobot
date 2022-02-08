# Toy Robot Simulator

## Background

This application is a simulator of a toy robot, roaming around a tabletop with the dimensions of 5 x 5 units. This robot is smart enough not to put itself in danger, which means any movement that would result in the robot falling from the table will not execute.

To control the robot, there are serveral commands you can play around:
1. PLACE X,Y,FACING
2. MOVE
3. LEFT
4. RIGHT
5. REPORT

For more details, please view [here](requirement.txt).

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

## Usage

Navigate to the root directory

```sh
$ npm install
```

Now you can start to play with
```sh
$ npm start
```

Also if you want to run the unit tests
```sh
$ npm run test
```

## Function Implementations
  | lib | method | params | return type | description |
  | :--------------- | :---------------: | :---------------: | :---------------: | :--------------- |
  | `ToyRobot` | `place` | `x, y, direction` | `none` | Place the robot at x and y, with a facing direction. |
  | `ToyRobot` | `move` | `none` | `none` | Move the robot one unit forward in facing direction |
  | `ToyRobot` | `left` | `none` | `none` | Make the robot rotate 90 degrees to the left |
  | `ToyRobot` | `right` | `none` | `none` | Make the robot rotate 90 degrees to the right |
  | `ToyRobot` | `report` | `none` | `none` | Announce the position and direction of the robot |
  | `validation` | `hasPlaced` | `placed` | `Boolean` | All operations are executed on the premise that the robot has been placed |
  | `validation` | `isValidPosition` | `x, y` | `Boolean` | Coordinate should be integer and within the table size |
  | `validation` | `isValidDirection` | `direction` | `Boolean` | Direction should be in the pre-defined range |
  | `validation` | `isValidPlacement` | `x, y, direction` | `Boolean` | Validate if the given position and direction are valid |
  | `validation` | `isValidMovement` | `placed, movement` | `Boolean` | Receive the value of next movement to see if it is a valid position |
  | `validation` | `isValidRobotCmd` | `command` | `Boolean` | Validate the given command is pre-defined |
  | `cliHandler` | `handleCommand` | `input, toyRobot` | `none` | Validate and Parse the command for the Toy Robot instance |