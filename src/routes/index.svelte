<script>
import {me} from "$providers/actions/cart"



let meStore =  me.load(); 
meStore.subscribe((val)=>{
    //console.log("val", val);
})




</script>

<div>
  {JSON.stringify($meStore.data?.posts)}
</div>
 