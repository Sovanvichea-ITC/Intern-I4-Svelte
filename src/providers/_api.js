import { URQL} from "$lib/urql/urql";
import { mutationStore, queryStore } from "@urql/svelte";

export function api({ query = null, mutation = null, variables = {}}, URIs = null){
 
        try{
            let store;

            const args = {
                client : URQL.client,
                variables,
                requestPolicy: "network-only",
            }

            if(query){
                args['query'] = query;
                store = queryStore(args);

            }else{
                args['mutation'] = mutation;
                store = mutationStore(args);
            }
                return store;

        }catch(err){
            console.log("APIErr:",err);
            return reject({
                sucess: false,
                error: err
            });

        }
} 