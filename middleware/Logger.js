const fetch = require('node-fetch')
const allowedStacks = ['backend']
const allowedLevels = ['debug', 'info', 'warn', 'error', 'fatal']
const allowedPackages = [
  'handler',
  'service',
  'repository',
  'cache',
  'controller',
  'cron_job',
  'db',
  'domain',
  'route'
]

async function Log(stack, level, pkg, message) {
  const s = String(stack).toLowerCase()
  if (!allowedStacks.includes(s)) return
  if (!allowedLevels.includes(level)) return
  if (!allowedPackages.includes(pkg)) return
  const payload = {
    stack: s,
    level,
    package: pkg,
    message
  }
  await fetch('http://20.244.56.144/evaluation-service/logs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
}

module.exports = Log