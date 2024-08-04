import { camelCase } from "change-case"
import fs from "fs"
import glob from "glob"
import path from "path"

// npm install glob change-case

// Function to rename files to camelCase
function renameFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, err => {
    if (err) throw err
    console.log(`Renamed: ${oldPath} -> ${newPath}`)
  })
}

// Get all .ts and .tsx files excluding the component/ui folder
glob(
  "./resources/frontend/**/*.{ts,tsx}",
  {
    ignore: [
      "./resources/frontend/components/ui/*",
      "./resources/frontend/routes/**/*.tsx",
      //   "./resources/frontend/routes/__root.tsx",
      //   "./resources/frontend/routes/_index.tsx",
      "./resources/frontend/routeTree.gen.ts",
      "./resources/frontend/vite-env.d.ts",
    ],
  },
  (err, files) => {
    if (err) throw err

    files.forEach(file => {
      const dir = path.dirname(file)
      const ext = path.extname(file)
      const base = path.basename(file, ext)
      const camelCasedBase = camelCase(base)
      const newFilePath = path.join(dir, camelCasedBase + ext)

      if (file !== newFilePath) {
        renameFile(file, newFilePath)
      }
    })
  },
)
