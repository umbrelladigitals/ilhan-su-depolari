import { seedPayload } from './index'

async function init() {
  try {
    console.log('Initializing Payload CMS SQLite database...')
    await seedPayload()
    console.log('Database tables and seed data created successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error during DB init:', error)
    process.exit(1)
  }
}

init()
