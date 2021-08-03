# Roadmaps
These are the roadmaps for completing the various milestones currently planned
## Milestone One: Locally running application
This includes both a front-end and a back-end which can be run on any local machine by someone with limited computer knowledge. It consists of three parts, two of which run on one machine.

1. The back-end: serves the quizzes, records and evaluates the responses of the players, and maintains the leaderboard, among other things.
1. The quiz front-end: running on the same machine as the back-end, it requests and receives the data from the back-end to display for the quiz players.
1. The player front-ends: running on a machine for each player, these light-weight front-ends query for questions from the back-end and update it with player responses.

It has been decided to use node.js and the Express.js framework for the back-end. The front-end technologies have not been decided.

The general order of the application control flow is as follows:

| Quiz front-end | Player front-end | back-end |
| -------------- | ---------------- | -------- |
| | | Send list of quizes |
| Select Quiz | | |
| Initiate Quiz | | Assign Session ID |
**Begin Setup Loop**
| **Query back-end for player list and display them as well as the session id and IP address on loop** | Connect to back-end with the back-end IP Address and send Session ID | Assign players IDs and send them to the player front-end. |
| | Send player username with ID | Associate player username with ID |
| Start Quiz |
**End Setup Loop**
**Begin Quiz Loop**
| | | Move to next (or first) question |
| **Repeatedly query quiz state** | **Repeatedly query quiz state** | Respond to quiz state queries |
Quiz state progresses as follows. The data for each state must be sent by the back-end
**Display question**
| Display question | Display waiting to answer screen | Serve Question for 5 seconds |
Accept Answers
| Display question and answers | Send answers | Receive answers from player front-ends and evaluate them. Add to player scores. This lasts 30 seconds or until all players have answered. |
| Display Answer | Display whether the player was right or wrong along with their score and ranking. | Resort leaderboard |
| Display rankings | Display the same as above | report rankings |
**End Quiz Loop** after last question
| Display Final Rankings | Display final ranking, score, and message | Report final rankings and scores |

### Lucidchart
[A similar Lucidchart can be found here](https://lucid.app/lucidchart/d06688fa-362b-4be7-9337-645d9a28b251/edit?viewport_loc=-255%2C-822%2C3689%2C2022%2C0_0&shared=true)

