<script>
    console.log("I'm in about");

    const isLoginned = () => false;

    if(!isLoginned()){
        console.log("you're not authorized so go to login....");
    }
</script>

<div>
    I'm layout of about
</div>

<slot/>