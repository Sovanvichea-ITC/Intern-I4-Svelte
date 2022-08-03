<script>
  import "../app.css";
  import { createClient, setContextClient } from '@urql/svelte';

  const client = createClient({
    url: 'https://api-eu-central-1.hygraph.com/v2/cl6achb19e9a101t353ur155u/master',
  });

  setContextClient(client)

  console.log("I am in Front page");
</script>

<slot />
