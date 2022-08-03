<script context="module">
  export async function load({}) {
    return { props: {} };
  }
</script>

<script>
  import { URQL, setupURQLClient } from "$lib/urql/urql";
  import { getContextClient } from "@urql/svelte";
  import "../app.css";

  // Set up URQL client;
  setupURQLClient();
  URQL.client = getContextClient();
</script>

<slot />
