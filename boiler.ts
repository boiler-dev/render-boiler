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

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/render.ts",
    sourcePath: "tsignore/render.ts",
  })

  actions.push({
    action: "write",
    path: "test/render.spec.tsx",
    sourcePath: "tsignore/render.spec.tsx",
  })

  return actions
}
