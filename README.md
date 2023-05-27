# Next.JS 13

Installation
Create a new Next.js app that enables the app directory and uses TypeScript.

```bash
 npx create-next-app@latest
```

## WHERE DO WE PUT UI COMPONENT (SERVER OR CLIENT COMPONENT)

we need to decide whether or not it's going to be a server or client.
By default all components next.js 13 are server components.
However we may want to have an interactive feature here like a sign button we cloud turn this into a client component.

### Server COMPONENT.

Server Component is a component that is fetched and rendered ON THE SERVER
When we make a server component, the component is built on the server and returns HTML for the server component
In app directory, which is a newly introduced feature in NextJS 13, server components are the default, meaning all the components and pages are rendered on the server

### CLIENT COMPONENT.

Client Component is the one that is fetched and rendered ON THE CLIENT

#### But how do we decide which should be client components?

##### "use client"

NextJS recommends using server components until you need to use client components. React hooks, for example **useState()**, **useEffect()**, **useContext()**, are only available on the client side. Furthermore, if you need to access browser-related things, like onClick **events** , window or browserAPI, you need to use the client component. Just remember, you need to add "use client" on top of the components you want to use as client components.
![image](public/components.png)
