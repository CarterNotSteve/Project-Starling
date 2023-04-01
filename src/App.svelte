<script lang="ts">
    import {Md5} from 'ts-md5';
    import {getCookie,setCookie} from 'typescript-cookie';
    
    var dark = true ;
    var loginDropdown = false;
    
    // console.log(Md5.hashStr("HelloWorld"));

    const posts = [
        {
            "username": "Admintest",
            "content":  "This is some test content"
        },
        {
            "username": "admintest2",
            "content": "Lorem ipsum dolor sit amet"
        },
        {
            "username": "Admintest",
            "content":  "This is some test content"
        },
        {
            "username": "admintest2",
            "content": "Lorem ipsum dolor sit amet"
        },{
            "username": "Admintest",
            "content":  "This is some test content"
        },
        {
            "username": "admintest2",
            "content": "Lorem ipsum dolor sit amet"
        },{
            "username": "Admintest",
            "content":  "This is some test content"
        },
        {
            "username": "admintest2",
            "content": "Lorem ipsum dolor sit amet"
        },{
            "username": "Admintest",
            "content":  "This is some test content"
        },
        {
            "username": "admintest2",
            "content": "Lorem ipsum dolor sit amet"
        },
    ];

</script>

<div class="container" class:dark={dark} class:light={!dark}>
    <div class="top">
        <img id="logo" alt="logo" src="./assets/logo.png"/>
        <button title="Night Mode" id="moonbtn" on:click={() => {dark=!dark}}><i class="gg-moon"></i></button>
        <button title="Log in" id="loginbutton" on:click={() => {loginDropdown=!loginDropdown}}>
            <i class="gg-profile" id="login-icon"></i>
        </button>
    </div>

    <div class="login-dropdown" hidden={!loginDropdown}>
        <div id="menu topmenu">
            <div class="menu-button">
                <p>Login</p>
            </div> 
        </div>
        <div id="menu">
            <div class="menu-button">
                <p>Logout</p>
            </div>
        </div>
        </div>

        <div id="postgui">
            <div id="postbox" contenteditable></div>
            <button id="postbtn"><img id="sendimg" style="filter: invert(1);" alt="send" src="./public/assets/sned.webp"></button>
        </div>

        <div class="content" >
        {#each posts as post}
            <div class="post">
                <h2>{post.username}</h2>
                <h4>{post.content}</h4>
            </div>
        {/each}
    </div>
</div>