const express = require('express')

const router = express.Router()
const { dataSource } = require('../db/data-source')
const logger = require('../utils/logger')('Skill')
const { isValidString, isNumber } = require('../utils/validUtils')

router.get('/', async (req, res, next) => {
    try {
        const data = await dataSource.getRepository('Skill').find({
          select: ['id', 'name']
        })
        res.status(200).json({
            status: "success",
            data: data
        })
      } catch (error) {
        next(error)
      }
})

module.exports = router