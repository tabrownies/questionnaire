# Quiz File Format
Each quiz is described using the following filesystems for each version

## 0.1 The beta version for initial development
### Folder Format
* Folder (named after the quiz)
    * text.yml (the text of the quiz)
### YAML Format
* Format Version Number **String**
* Quiz Name **String**
* Quiz ID (optional) **String**
* Quiz Creator (optional) **String**
* Times Played **Number**
* Questions **Array**
    * Text **String**
    * Options **Array (max four in length)**
        * Text **String**
        * Correct **Boolean**

*Quiz ID and Quiz Creator are optional and for use in the online version*
*Even this version utilizes a folder so in the future all the quizzes are folder based*

## Future additions
* Images (inline)
* Multiple question types
    * True/False
    * Text
* More than four options for multiple choice
* Multiple answer



