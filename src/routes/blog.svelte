<script>
  import Post from "$lib/Post.svelte";
</script>

<h1 class="prose-invert">ar-blog</h1>

<div class="flex m-1 mb-7">
  <div
    class="rounded-full m-1 ml-[-4px]
   bg-slate-50 h-[64px] w-[64px]"
  />
  <div class="p-1 pl-3">
    Personal blog by <a
      href="https://github.com/a-rudolph"
      target="blank"
      class="link-secondary">Adam Rudolph</a
    ><br /> DX enthusiast
  </div>
</div>

<Post
  id="worktrees"
  title={`git worktrees`}
  date="August 20, 2022"
  teaser={`easily checkout multiple branches at once.`}
/>

<Post
  id="palette"
  title={`coder's palette`}
  date="March 12, 2022"
  teaser={`know how to access all the tools at your disposal. easy to navigate and learn the shortcuts
    you need.`}
/>

<Post
  id="lorem"
  title={`some other article`}
  date="February 4, 2022"
  teaser={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique laborum ratione
      reiciendis ipsum ducimus.`}
/>
