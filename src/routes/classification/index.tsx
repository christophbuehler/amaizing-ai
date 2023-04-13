import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const classifications = [
    {
      title: "Machine Learning",
      description: "Defeats Go world champion Lee Sedol.",
    },
    {
      title: "Computer Vision",
      description: "Defeats Go world champion Lee Sedol.",
    },
    {
      title: "Natural Language Processing",
      description: "Defeats Go world champion Lee Sedol.",
    },
    {
      title: "Robotics",
      description: "Defeats Go world champion Lee Sedol.",
    },
  ];
  return (
    <>
      <div class="col-span-4 grid grid-cols-2 gap-8">
        {classifications.map((classification) => (
          <>
            <div class="flex flex-row items-center">
              <div class="w-16 h-16 bg-amber-300 bg-contain bg-center bg-chip"></div>
              <div class="p-4 flex gap-1 flex-col">
                <strong class="text-stone-50 text-xl">
                  {classification.title}
                </strong>
                <span class="text-stone-400 text-base">
                  {classification.description}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
});
