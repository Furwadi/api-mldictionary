'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HeroesSchema extends Schema {
  up () {
    this.create('heroes', (table) => {
      table.increments()
      table.string('name')
      table.string('title')
      table.longText('imageUri')
      table.timestamps()
    })
  }

  down () {
    this.drop('heroes')
  }
}

module.exports = HeroesSchema
