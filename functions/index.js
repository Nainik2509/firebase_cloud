const functions = require("firebase-functions");
const axios = require('axios')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.helloWorld = functions.https.onRequest((req, res) => {
//     res.send('Hello From firebase functions...!')
// })

// exports.api = functions.https.onRequest((req, res) => {
//     switch (req.method) {
//         case 'GET':
//             res.send('It was GET request')
//             break;
//         case 'POST':
//             const body = req.body
//             res.send(body)
//             break;
//         case 'DELETE':
//             res.send('It was DELETE request')
//             break;
//         default:
//             res.send('It was Default request')
//     }
// })

// exports.userAdded = functions.auth.user().onCreate(user => {
//     console.log(`${user.email} is created`)
//     return Promise.resolve()
// })

// exports.userDeleted = functions.auth.user().onDelete(user => {
//     console.log(`${user.email} is deleted..`)
//     return Promise.resolve()
// })

exports.fruitAdded = functions.firestore.document('/fruits/{documentId}').onCreate((snapshot, context) => {
    console.log(snapshot.data())
    return Promise.resolve()
})

// exports.fruitDeleted = functions.firestore.document('/fruits/{documentId}').onDelete((snapshot, context) => {
//     console.log(snapshot.data(), 'deleted')
//     return Promise.resolve()
// })

// exports.fruitUpdated = functions.firestore.document('/fruits/{documentId}').onUpdate((snapshot, context) => {
//     console.log(snapshot.before.data(), 'BEFORE DATA')
//     console.log(snapshot.after.data(), 'AFTER Data')
//     return Promise.resolve()
// })

// exports.scheduledFunction = functions.pubsub.schedule('* * * * *').onRun(context => {
//     console.log("I'm running every minute...")
// })