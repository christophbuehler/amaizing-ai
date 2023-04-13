import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { S1sevenLogo } from "~/components/s1seven";
import { ChainsIcon } from "~/components/chains";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const nav = [
    { name: "Start →", href: "/" },
    { name: "History →", href: "/history" },
    { name: "Usages →", href: "/usages" },
  ];

  return (
    <>
      <div class="h-8"></div>
      <header class="sticky w-full top-0 z-10">
        <div class="container py-4 text-stone-400 flex justify-between items-center">
          <a href="https://s1seven.com" class="inline-flex h-[26px] gap-2">
            <ChainsIcon />
            <S1sevenLogo />
          </a>
          <span class="inline-block px-2 rounded-md bg-zinc-800 text-stone-400">
            Quarterly Q1 2023
          </span>
        </div>
      </header>

      <div class="container my-32 animate-fade-in">
        <Slot />
      </div>

      <footer class="fixed bottom-0 left-0 right-0 text-center">
        <div class="inline-block rounded-xl shadow-xl bg-zinc-700 mb-8">
          <ul class="m-2 flex gap-2">
            {nav.map((item) => (
              <>
                <li>
                  <a
                    class="inline-block text-xl border-1 rounded-md px-2 py-1 bg-zinc-600 text-stone-200 active:text-stone-400 active:bg-zinc-700"
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              </>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
});
