const { Burgers } = require('../models')

module.exports = (app) => {

app.get('/', (req, res) => {
    res.render('index')
})
// GET all burgers
app.get('/burgers', (req, res) => {
  Burgers.all((burgers) => 
      res.json(burgers)
    )
})
  
  // POST a burger
  app.post('/burgers', (req, res) => {
    Burgers.create((req.body.name), (e) => {
      console.log(e)
      res.sendStatus(200)
    })
  })
  // // PUT a burger
  // app.put('/todos/:id', (req, res) => {
  //   Burgers.update(req.body, { where: { id: req.params.id } })
  //     .then(_ => res.sendStatus(200))
  //     .catch(e => console.log(e))
  // })
}