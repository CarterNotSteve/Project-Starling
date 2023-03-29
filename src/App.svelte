<script lang="ts">
    var dark = true ;
</script>

<div class="container">
    <div class="top">
        <img id="logo" alt="logo" src="./assets/logo.png"/>
        <button title="Night Mode" id="moonbtn" on:click={() => {dark=!dark}}><i class="gg-moon"></i></button>
        <button title="Log in" id="loginbutton">
            <i class="gg-profile" id="login-icon"></i>
        </button>
    </div>

    <div class:dark={dark} class:light={!dark}>
        <p>test-text</p>
    </div>
</div>