module.exports = {
    getStudents: (req, res, next) => {
        const db = req.app.get('db');
        db.get_students().then( students => {
            res.status(200).send(students)
        }).catch(err => console.log(err))
    },
    addStudent: (req, res, next) => {
        const db = req.app.get('db');
        db.add_student([req.body.name, req.body.email]).then(students => {
            res.status(200).send(students)
        }).catch(err => console.log(err))
    },
    updateStudent: (req, res, next) => {
        const db = req.app.get('db');
        db.update_student([req.body.email, req.params.id]).then(students => {
            res.status(200).send(students)
        }).catch(err => console.log(err))
    }
}