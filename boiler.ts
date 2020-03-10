import { join } from "path"
import { ActionBoiler } from "boiler-dev"

export const install: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "npmInstall",
    dev: true,
    source: ["undom"],
  })

  return actions
}

export const generate: ActionBoiler = async ({
  cwdPath,
  files,
}) => {
  const actions = []

  for (const file of files) {
    const { name, source } = file

    if (name === "render.ts") {
      actions.push({
        action: "write",
        path: join(cwdPath, "src", name),
        source,
      })
    }

    if (name === "render.spec.tsx") {
      actions.push({
        action: "write",
        path: join(cwdPath, "test", name),
        source,
      })
    }
  }

  return actions
}
