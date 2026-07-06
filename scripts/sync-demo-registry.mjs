import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const demoSrc = join(repoRoot, 'examples/demo/src')
const registry = JSON.parse(readFileSync(join(repoRoot, 'registry.json'), 'utf8'))

const targetRoots = new Map([
  ['@components/', join(demoSrc, 'components/')],
  ['@hooks/', join(demoSrc, 'hooks/')],
  ['@lib/', join(demoSrc, 'lib/')],
])

function resolveTarget(target) {
  for (const [prefix, targetRoot] of targetRoots) {
    if (target.startsWith(prefix)) {
      return join(targetRoot, target.slice(prefix.length))
    }
  }

  throw new Error(`Unsupported registry target: ${target}`)
}

let copied = 0

for (const item of registry.items ?? []) {
  for (const file of item.files ?? []) {
    const source = join(repoRoot, file.path)
    const target = resolveTarget(file.target)

    mkdirSync(dirname(target), { recursive: true })
    copyFileSync(source, target)
    copied += 1
  }
}

console.log(`Synced ${copied} registry files into examples/demo/src`)
