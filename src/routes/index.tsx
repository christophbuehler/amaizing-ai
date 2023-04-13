import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="flex flex-col items-center justify-center">
        <div class="w-1/3 min-w-[180px] aspect-square bg-contain bg-earth animate-pulse"></div>
        <h2 class="leading-12 md:mt-[-80px] text-6xl font-bold tracking-wide text-stone-50 text-center">
          Make use of&nbsp;
          <span class="bg-blue-200 px-1 rounded-md inline-block animate-pulse text-zinc-950">
            AI
          </span>
          <br />
          Solve real-world problems
        </h2>
      </div>
      <div class="absolute -z-50 inset-0 overflow-hidden bg-gradient-to-b from-black to-zinc-950"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
