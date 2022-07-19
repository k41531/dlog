import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.1/blog.tsx";

blog({
  title: "Kaisei's blog",
  description: "This is my personal blog.",
  avatar: "https://deno-avatar.deno.dev/avatar/20e51a.svg",
  avatarClass: "rounded-full",
  author: "Kaisei",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
