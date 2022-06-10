# Social Network Api

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Tech used includes Express.js for routing, a MongoDB database, and the Mongoose ODM.

## User Story

A social media startup requests an API for a social network app that uses a NoSQL database, so that the website can handle large amounts of unstructured data.

## Acceptance Criteria

- [ ] The command can be used to invoke the application server, and the Mongoose models are synced to the MongoDB database
- [ ] The API GET routes for users and thoughts are displayed in a formatted JSON
- [ ] The API POST, PUT, and DELETE routes are successful in create, update, and delete users and thoughts in the database
- [ ] The API POST and DELETE routes are able to create and delete reactions to thoughts and add and remove friends to a user’s friend list

## API Routes and Models

### */api/users* 
GET all, GET id 'shows thoughts and friends', POST new, PUT update id, DELETE id) 
### */api/users/:userId/friends/:friendId*
POST add new friend to list, DELETE remove friend from list)
```
User: {
  username: {String, Unique, Required, Trim},
  email: {String, Unique, Required, Validation: Email},
  thoughts: {Array of id, ref: Thought Model},
  friends: {Array of id, ref: User Model},
}, virtual: friendCount
```

### */api/thoughts* 
(GET all, GET id, POST new and push to user field, PUT update id, DELETE id) 
```
Thought: {
  thoughtText: {String, Required, min: 1, max: 280},
  createdAt: {Date.now, formatted.get},
  username: {String, Required},
  reactions: {Array, reactionSchema options},
}, virtual: reactionCount
```

### */api/thoughts/:thoughtId/reactions* 
(POST create, DELETE remove)
```
Reaction (Schema Only for Thought Model): {
  reactionId: {MongooseId},
  reactionBody: {String, Required, max: 280},
  username: {String, Required},
  createdAt: {Date.now, formatted.get},
}
```
