import CredentialsProvider from "next-auth/providers/credentials"

export const options = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = { id: 1, name: 'jsmith', password: 'jsmith' }
                if (credentials.username === user.name && credentials.password === user.password) {
                    return user
                } else {
                    return null
                }     
            }
          })
  ]
}