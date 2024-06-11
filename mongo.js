const mongoose = require('mongoose')

if(process.argv.length < 3){
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@fsoc.jgethdx.mongodb.net/noteApp?retryWrites=true&w=majority&appName=FSOC`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: 'Web dev is the goal',
//     important: true
// })

// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })


// GETTING OBJECTS FROM DB
Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})