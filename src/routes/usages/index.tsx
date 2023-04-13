import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const usageExamples = [
    `Translate the following strings, used in a web
application, into german:

- save
- The user has been successfully deleted!
- Please upgrade to a premium account to access this feature.`,
    `Find and correct all the typos in this text:

We introduce computable certificates to industrial supply chains.
Our software serves as a drop-in replacement for paper-based documents
to unlock the value of traceable material quality and sustainability data.`,
    `Write a paragraph for our website about the benefits
of tracing raw materials. Our company provides a solution
for tracking the origin of raw materials in industrial supply chains.`,
    `In Tailwind, overlay my div with a gradient that
goes from transparent to zinc-900`,
  ];
  const usagesSummary = [
    {
      title: `Automates repetitive tasks`,
      description: `Make translations, write documentation, create illustrations`,
    },
    {
      title: `Paraphrasing`,
      description: `Change writing style, shorten text, create content targeting social media platforms`,
    },
    {
      title: `Coding assistant`,
      description: `Generate example code using novel apis, create pure functions, make errors human readable`,
    },
    {
      title: `Alternative to Google`,
      description: `Less distraction, more to the point, no ads`,
    },
    {
      title: `Potential for integrations`,
      description: `Create customer service chatbots, automated incentive analysis`,
    },
  ];

  return (
    <>
      <div class="grid grid-cols-7 gap-8 grid-rows-3">
        <div class="col-span-3 row-span-full grid grid-cols-7">
          {usageExamples.map((usage, i) => (
            <>
              {i % 3 === 0 && <div></div>}
              {i % 4 === 0 && <div></div>}
              {(i + 1) % 3 === 0 && <div></div>}
              <div class="col-span-3 p-4 flex gap-2 flex-col">
                <div class="relative max-h-32 overflow-hidden rounded-lg bg-zinc-900 px-4 py-6 text-xs text-stone-100">
                  <pre>
                    <code class="inline-block overflow-hidden max-w-full text-ellipsis">
                      {usage}
                    </code>
                  </pre>
                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900"></div>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* <div class="col-span-4 flex flex-col gap-8 items-start"> */}
          {usagesSummary.map((item, i) => (
            <>
              <div class="col-span-2 p-4 flex gap-1 flex-col">
                <strong class="text-stone-50 text-xl">
                  <span class="bg-blue-200 mr-2 px-1 rounded-md inline-block animate-pulse text-zinc-950">
                    0{i + 1}
                  </span>
                  {item.title}
                </strong>
                <span class="text-stone-400 text-base">
                  <strong>Examples: </strong>
                  {item.description}
                </span>
              </div>
            </>
          ))}
        {/* </div> */}
      </div>
    </>
  );
});
