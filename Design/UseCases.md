# TEMPLATE
title: 
Actor: 
Senario: 


# PROJECT

## title: View Project List
Actor: Designer
Senario: The designer reviews the list of projects that are open in the project list

## title: Search Projects
Actor: Designer
Senario: The designer is having issues finding a project, they go to the project list and search the project title to find the project they are looking for.

## title: Create Project
Actor: Designer
Senario: The Designer creates a new project and is taken to a new project page to C.R.U.D the requirements, Usecases, User Stories, Domain Models, and class diagrams

## title: Read Project
Actor: Designer
Senario: the designer opens a recent project and is taken to the project page to C.R.U.D the requirements, Usecases, User Stories, Domain Models, and class diagrams

## title: Update Project
Actor: Designer
Senario: the designer opens up a recent project ot modify and is taken to the project page. They modify the name of the project in the title.


## title: Delete Project
Actor: Designer
Senario: The designer deletes the project from the projects overview, is prompted to verify the deletion and deletes the project


# REQUIREMENTS

## title: View Requirements List
Actor: Designer
Senario: the designer views the list of requirements in a list format to get an overview of the current requirements

## title: Search Requirements
Actor: Designer
Senario: The designer needs to review a specfic requirement related to billing. The designer goes to the requirement list and searches billing and pulls up all the related requirements for further review 

## title: Mark Requirement Resolved
Actor: Software Developer
Senario: the Software Developer finishes the requirement in code and tests the requirement. The requirement passes the test and they mark the requirement as resovled

## title: Create Requirements
Actor: Designer
Senario: The designer adds a new requirement within the project under the requirements section

## title: Read Requirements
Actor: Designer
Senario: the designer reviews the requirements within the requirements section of the project

## title: Update Requirements
Actor: Designer
Senario: the designer reviews the requirements within the requirements section of the project, the specific requirement that needs to be updated is modified and saved

## title: Delete Requirements
Actor: Designer
Senario: the designer reviews the requirements within the requirements section of the project, the specfic requirement is deleted from the requirements section

## Title: Categorize Requirements
Actor: Designer
Senario: the designer reviews a requirement and categorizes it as a Functional, Non-Functional, Constraint


# USECASES

## title: Create Usecase
Actor: Designer
Senario: the designer adds a new use case within the usecase section of the project

## title: Read Usecase
Actor: Designer
Senario: the designer would like to review a use case, they go to the use case section of the project and look at the current use cases

## title: Update Usecase
Actor: Designer
Senario: the Designer notices an issue with the senario of a usecase, they make the correction to the usecase and save it

## title: Delete Usecase
Actor: Designer
Senario: The desinger decides that a usecase has become irrelevant. They navigate to the usecase list and delete it from the list.

## title: Search Usecase List
Actor: Software developer
Senario: The software developer needs to find all the usecases realted to billing. They navigate to the usecase list and search the billing to bring up the related usecases for billing

## title: Add Multiple Actors to Usecase
Actor: Designer
Senario: the designer notices that a specific usecase is relevant to both and admin and a user. They add both the admin and the user to the actors of the usecase.


# User Stories

## Title: Create user stories
Actor: Designer
Senario: the designer adds a new user story within the user story section of the project. they provide a "User", a "Goal" and a "Reason" to complete the user story-- they are limited to a certain number of characters to keep the story short

## Title: Read User Stories
Actor: Designer
Senario: The designer wants to review the user stories, they navigate to the user story section of the project and view the list of user stories

## Title: Update User Stories
Actor: Designer
Senario: the designer needs to modify a user story, they navigate to the use story and edit it.

## Title: Delete User Stories
Actor: Designer
Senario: The designer has verified that a user story has become irrelevant, they delete the user story from the user story section of the project

## Title: Search User Stories
Actor: Designer
Senario: the designer is unable to find the correct user story referencing "billing" from the list. They search for "billing" in the User Story section to narrow down the list.


# Domain Models

## Title: Create Domain Model
Actor: Designer
Senario: the designer adds a new object within the Domain Model section of the project. A noun and a responsibility is added to the object

## Title: Read Domain Model
Actor: Designer
Senario: The designer wants to review the domain model, they navigate to the Domain Model section of the project and view the list of drafted objects

## Title: Update Domain Model
Actor: Designer
Senario: a correction is needed for an object in the domain model. The designer edits the object name and responsibilities list and saves the changes

## Title: Delete Domain Model
Actor: Designer
Senario: An object in the domain model is no longer applicable to the project, the object is delete from the domain model

## Title: Identify Objects
Actor: Designer
Senario: The designer identifies from the list of nouns in user stories possible objects. The objects are then selected for import into the domain model

## Title: Identify Relationships
Actor: Designer
Senario: the designer links object relationships together within the domain model

## Title: Identify Responsibilities
Actor: Designer
Senario: the designer identifies from a list of verbs on Usecases and User Stories the responsibilites for each object


# Class Diagrams

## Title: Create Class Diagram
Actor: Designer
Senario: The designer navigates to the class diagram section of the project and adds the Objects identified in the domain model. Attributes and Behaviors are also added to the class diagram.

## Title: Read Class Diagram
Actor: Software Developer
Senario: the software developer needs to review the attributes for a class. They navigate to the class diagram section and check for the class. They review the class attributes.

## Title: Update Class Diagram
Actor: Designer/Software developer
Senario: The class diagram has a mistake in attributes and behaviors. The class is selected and the attributes and behaviors are modified and saved
