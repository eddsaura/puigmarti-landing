import { Slot, component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section class="mb-8">
      <Slot name="title" />
      <Slot name="subtitle" />
    </section>
  );
});
