import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'

const componentsFolder = './resources/frontend/components/ui/'
const importsFile = 'index.tsx'
const configFile = './components.json'
const shadcnConfig = {
  $schema: 'https://ui.shadcn.com/schema.json',
  style: 'default',
  rsc: false,
  tsx: true,
  tailwind: {
    config: 'tailwind.config.ts',
    css: 'resources/frontend/global.css',
    baseColor: 'slate',
    cssVariables: true,
    prefix: '',
  },
  aliases: {
    components: '@/components',
    utils: '@/lib/utils',
  },
}

processComponents()

function processComponents() {
  const componentFiles = getComponentFiles()

  if (!fs.existsSync(configFile)) {
    createShadcnConfig()
    initializeShadcnUI()
  }

  const importStatements = generateImportStatements(componentFiles)
  const exportStatement = generateExportStatement(componentFiles)
  const content = `${importStatements.join('\n')}\n${exportStatement}\n`

  fs.writeFileSync(path.join(componentsFolder, importsFile), content)

  console.log(`Imports updated in ${path.join(componentsFolder, importsFile)}.`)
  console.log(
    `Components exportable in index.tsx: ${componentFiles.join(', ')}`,
  )
  process.exit(0)
}

function getComponentFiles() {
  return fs
    .readdirSync(componentsFolder)
    .filter(file => file.endsWith('.tsx') && file !== importsFile)
}

function createShadcnConfig() {
  console.log(
    'Shadcn-ui config file not found, creating one... (rootdir_components.json)',
  )
  fs.writeFileSync(configFile, JSON.stringify(shadcnConfig, null, 2))
  console.log(
    'components.json created. Please make sure the aliases and tailwind extension are correct.',
  )
}

function initializeShadcnUI() {
  console.log(
    'Configuration is missing. Make sure shadcn-ui is initialized (components.json)...',
  )
  exec('npx shadcn-ui@latest init', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return
    }
    console.log(stdout)
    console.error(stderr)
  })
}

function generateImportStatements(componentFiles) {
  return componentFiles.map(file => {
    const componentName = getComponentName(file)
    return `import { ${componentName} } from './${componentName.toLowerCase()}';`
  })
}

function generateExportStatement(componentFiles) {
  const componentNames = componentFiles.map(file => getComponentName(file))
  return `export { ${componentNames.join(', ')} };`
}

function getComponentName(file) {
  return path
    .basename(file, '.tsx')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}
