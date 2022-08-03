import { ME_QUERY, SIGN_IN_MUTATION } from "../queries/cart";
import { api } from "$providers/_api";

export const me = {
  load: () => {
    try {
      const store = api({ query: ME_QUERY });
      return store;
    } catch (err) {
        return err;
    }
  }
};

export const signIn = {
    load: async ({email, password}) =>{
        try{
            const res = await api({ mutations: SIGN_IN_MUTATION, variables: {email, password}})
            return res;
        }catch(err){
            return err;
        }

    }
}
