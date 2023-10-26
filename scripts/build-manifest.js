import fs from 'node:fs'
import {
  join,
  resolve
} from 'node:path';


const getManifest = () => {
  const rawManifestJSON = fs.readFileSync(resolve(join('src', 'manifest.json')))
  let manifestContent = JSON.parse(rawManifestJSON)
  return manifestContent
}

const formatManifest = (manifest) => {
  // for logic custom manifest
  return manifest
}

function writeManifest(manifest) {
  fs.writeFileSync(resolve(join('dist', 'manifest.json')), JSON.stringify(manifest, null, 4))
}

const main = () => {
  let manifestTemplate = getManifest()
  let manifest = formatManifest(manifestTemplate)
  writeManifest(manifest)
}

main()
