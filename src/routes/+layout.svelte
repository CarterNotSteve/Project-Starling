<script lang="ts">
    var dark = true ;
    var loginDropdown = false;
    export var signedin = false;

    var gotoLogin = () => { window.location.href = "/login" };

    import './app.css'
</script>

<svelte:head>

</svelte:head>

<div class="container" class:dark class:light={!dark}>
    <div class="top">
        <img id="logo" alt="logo" src="./public/assets/logo.png" />
        <button
            title="Night Mode"
            id="moonbtn"
            on:click={() => {
                dark = !dark;
            }}><i class="gg-moon" /></button>
        <button
            title="Log in"
            id="loginbutton"
            on:click={() => {
                loginDropdown = !loginDropdown;
            }}>
            <i class="gg-profile" id="login-icon" />
        </button>
    </div>

    <div class="login-dropdown" hidden={!loginDropdown && !signedin}>
        <div class="menu topmenu" on:click={gotoLogin}>
            <div class="menu-button">
                <p>Login</p>
            </div>
        </div>
        <div class="menu">
            <div class="menu-button">
                <p>Signup</p>
            </div>
        </div>
    </div>
    <slot />
</div>
