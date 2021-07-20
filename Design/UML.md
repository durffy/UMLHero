# Projects
## attributes
- Project: List
## behaviors
+ createProject: Project
+ readProject(projectId): Project
+ updateProject: Project
+ deleteProject: Project


# name: Project
## Attributes
- id
- name
- creationDate
- lastUpdate
## Behaviors
getId
getName
setName
getCreationDate
getLastUpdate
setLastUpdate


# Requirements
## Attributes
- id
- description
- creationDate
- lastUpdate
## Behaviors
getId
getDescription
setDescription
getCreationDate
getLastUpdate


# UserStories
## Attributes
- id
- Actor
- Action
- Reason
- creationDate
- lastUpdate
## behaviors
getId
getActor
setActor
getAction
setAction
getReason
setReason


# DomainModel
## Attributes
DomainObjects
## Behavior
createDomainObject(DomainObject)
getAllDomainObjects()
getDomainObject(id)
updateDomainObject(DomainObject)
deleteDomainObject(DomainObject)

# DomainObject
## Attributes
- id
- name
- responsibility
- creationDate
- lastUpdate
## Behavior
getId
getName
setName
getResponsibility
setResponsibility
getCreationDate
getLastUpdate


# ClassDiagrams
Classes
## Behaviors
createClass(Class)
getAllClasses
getClass(id)
updateClass(Class)
deleteClass(id)