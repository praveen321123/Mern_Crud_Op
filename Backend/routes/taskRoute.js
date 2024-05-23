const express = require('express')
const  {
  createTask, 
  getTask, 
  getSingleTask, 
  updateTask, 
  deleteTask
}  = require("../controllers/taskController")

const router = express.Router()

router.post('/', createTask)
router.get('/', getTask)
router.get('/:id', getSingleTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
