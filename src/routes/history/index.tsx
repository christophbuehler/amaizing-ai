import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const history = [
    {
      year: 1956,
      title: "Dartmouth Conference",
      description: "The birth of AI as a research field.",
    },
    {
      year: 1974,
      title: "Backpropagation Algorithm",
      description: "Paves the way for modern deep learning.",
    },
    {
      year: 1997,
      title: "Deep Blue",
      description: "Defeats chess world champion Garry Kasparov.",
    },
    {
      year: 2016,
      title: "AlphaGo by DeepMind",
      description: "Defeats Go world champion Lee Sedol.",
    },
    {
      year: 2023,
      title: "GPT4 by OpenAI",
      description:
        "Enables human-like text-based interactions and diverse applications across industries.",
    },
  ];
  const timespans = [
    {
      from: "1956",
      to: "1974",
      title: "The golden years",
    },
    {
      from: "1974",
      to: "1980",
      title: "AI Winter",
    },
    {
      from: "1987",
      to: "1993",
      title: "A new interest",
    },
  ];
  return (
    <>
      <div class="grid grid-cols-3 gap-8">
        <div class="text-center">
          <div class="inline-block  px-4 py-6 bg-zinc-900 text-stone-100 rounded-lg">
            <p class="text-xl text-center">
              "AI is the simulation of human-like thinking
              <br />
              and problem-solving in computers and machines."
            </p>
            <sm class="text-stone-400">~ GPT4 (Apr. 2023) ~</sm>
          </div>

          <div class="flex flex-col gap-16 my-16">
            {timespans.map((timespan) => (
              <>
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-4 animate-pulse">
                    <div class="rounded-full w-4 h-4 bg-blue-200"></div>
                    <div class="flex-1 h-1 bg-blue-200"></div>
                    <div class="rounded-full w-4 h-4 bg-blue-200"></div>
                  </div>
                  <div class="flex items-center justify-between gap-4">
                    <div class="text-stone-400">{timespan.from}</div>
                    <div class="text-stone-50 uppercase">{timespan.title}</div>
                    <div class="text-stone-400">{timespan.to}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div class="col-span-2 grid grid-cols-2 gap-8">
          {history.map((item) => (
            <>
              <div class="p-4 flex gap-1 flex-col">
                <span class="text-stone-400">{item.year}</span>
                <strong class="text-stone-50 text-xl">{item.title}</strong>
                <span class="text-stone-400 text-base">{item.description}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
});
