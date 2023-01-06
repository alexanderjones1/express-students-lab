import { Router } from 'express'
import * as studentsCtrl from '../controllers/students.js'

const router = Router()

/* GET users listing. */
router.get('/', studentsCtrl.index)
router.get('/new', studentsCtrl.new)
router.post('/', studentsCtrl.create)

export {
  router
}
