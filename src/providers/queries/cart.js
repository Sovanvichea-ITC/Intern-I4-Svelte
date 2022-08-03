import {gql} from "@urql/svelte"

export const ME_QUERY = gql `
query {
        posts {
            title
            slug
            date
            excerpt
            tags
            coverImage{
                url
            }
        }
  }
  `
export const SIGN_IN_MUTATION = gql `mutation signIn ($email:string!, $password:String!){
    signIn(param: {email: $email, password: $passsword }){
        id, email, username, firstName, lastName, role 
    }
}`