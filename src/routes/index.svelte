<script>
    import { queryStore, gql, getContextClient } from '@urql/svelte';
  
    $:todos = queryStore({
      client: getContextClient(),
      query: gql`
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
      `,
    });

    $:console.log($todos)
  </script>
  
  
  {#if $todos.fetching}
  <p>Loading...</p>
  {:else if $todos.error}
  <p>Oh no... {$todos.error.message}</p>
  {:else}
  <ul>
    {#each $todos.data.posts as todo}
    <li>{todo.title}</li>
    {/each}
  </ul>
  {/if}