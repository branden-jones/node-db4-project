
const router = require('express').Router()

router.use('*', (req,res) => {
    res.json({
        api: 'up'
    })
})

router.use((err,req,res,next) => {
    res.status(500).json({
        customMessage: 'Something went wrong on our side... sorry bout that...',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router