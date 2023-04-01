<script lang="ts">
    import { Md5 } from "ts-md5";
    import { getCookie, setCookie } from "typescript-cookie";
    import { redirect } from "@sveltejs/kit";

    const posts = [
        {
            username: "Admintest",
            content: "This is some test content",
        },
        {
            username: "admintest2",
            content: "Lorem ipsum dolor sit amet",
        },
        {
            username: "Admintest",
            content: "This is some test content",
        },
        {
            username: "admintest2",
            content: "Lorem ipsum dolor sit amet",
        },
        {
            username: "Admintest",
            content: "This is some test content",
        },
        {
            username: "admintest2",
            content: "Lorem ipsum dolor sit amet",
        },
        {
            username: "Admintest",
            content: "This is some test content",
        },
        {
            username: "admintest2",
            content: "Lorem ipsum dolor sit amet",
        },
        {
            username: "Admintest",
            content: "This is some test content",
        },
        {
            username: "admintest2",
            content: "Lorem ipsum dolor sit amet",
        },
    ];
</script>

<div id="postgui">
    <div id="postbox" contenteditable />
    <button id="postbtn">
        <img
            id="sendimg"
            style="filter: invert(1);"
            alt="send"
            src="./public/assets/sned.webp"/>
    </button>
</div>

<div class="content">
    {#each posts as post}
        <div class="post">
            <h2>{post.username}</h2>
            <h4>{post.content}</h4>
        </div>
    {/each}
</div>
