import { createClient } from "@urql/svelte";
import { setContextClient } from "@urql/svelte";

export class URQL {
    static client = null;
    constructor(){
        if(URQL._instance){
            return URQL._instance;
        }
        URQL._instance = this;
        this.setupClient = (URIs) => this.setup(URIs)
    }

    setup(URIs){
        const tmpClient = createClient({
            url:"https://api-eu-central-1.hygraph.com/v2/cl6achb19e9a101t353ur155u/master"
        });

        setContextClient(tmpClient);
        return tmpClient;
    }
}

export const setupURQLClient = (new URQL()).setupClient;