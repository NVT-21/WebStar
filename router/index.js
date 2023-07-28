const controllerStar=require('../controlller/controllerStar')
const listFunction=controllerStar()
const router =(app)=>{
    app.get('/',listFunction.getAllStar,function(req, res) {
        const listStar=req.listStar
        res.render('index',{listStar})

    })
    app.post('/createNew',function(req, res){
        res.status(200).send(req.body)
    })
    app.post('/api/star/createNew',listFunction.createStar)
    app.get('/api/star/getAllStar',listFunction.getAllStar)
}
module.exports = router