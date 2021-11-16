const router = require('express').Router()
const homeslideCtrl = require('../controllers/homeslideCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/homeslides')
    .get(homeslideCtrl.getHomeslides)
    .post(auth, authAdmin, homeslideCtrl.createHomeslide)


router.route('/homeslides/:id')
    .delete(auth, authAdmin, homeslideCtrl.deleteHomeslide)
    .put(auth, authAdmin, homeslideCtrl.updateHomeslide)



module.exports = router