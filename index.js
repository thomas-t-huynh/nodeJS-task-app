const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express();
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById("5e0af771a571b3225891d2a6")
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById("5e0af45c23861c5a20eda22c")
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

// main()

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'dummyid123' }, 'asentenceforsigningthetoken', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'asentenceforsigningthetoken')
//     console.log(data)
// }

// myFunction()

// const pet = {
//     name: 'Pussy'
// }

// pet.toJSON = function () {
//     console.log(this)
//     return this
// }

// console.log(JSON.stringify(pet))