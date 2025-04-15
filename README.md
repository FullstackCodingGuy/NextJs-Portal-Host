# NextJs-portal

# Approaches

## Monorepo(Single Application)

- All apps live under one roof
- Each app is created under `apps\` folder
- Consistent UI Components, leveraging shared components from `packages\ui`

```
/portal (Root Application, that holds all independent apps, shared components and libraries)
/portal/apps/house-estimator (Individual Application)
/portal/apps/market-analysis (Individual Application)
```

## Shell (MFE)
- Each app is independent
- Apps are hosted remotely
- Ex: app1: http://:5001, app2: http://:5002



### References

Creating apps
```
npx create-next-app@latest apps/estimator --app
npx create-next-app@latest apps/market --app

Turbo Repo
npx create-turbo@latest

```