import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import clsx from "clsx";

interface Props {
  title: string;
  titleLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fullHeight?: boolean;
  customClass?: string;
}

export const SectionWithTitle = component$(
  ({ title, fullHeight, titleLevel = "h2", customClass }: Props) => {
    const sectionRef = useSignal<Element>();
    const show = useSignal(false);

    const Component = titleLevel;

    useVisibleTask$(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("isIntersecting", entry.target);
              show.value = true;
              window.addEventListener("scroll", onScroll);
            } else {
              console.log("isNotIntersecting", entry.target);
              show.value = false;
              window.removeEventListener("scroll", onScroll);
            }
          });
        },
        { threshold: 0.3 }
      );

      const onScroll = () => {
        let elDistanceToTop = 0;
        if (sectionRef.value) {
          elDistanceToTop = sectionRef.value.getBoundingClientRect().top;
        }
        console.log("elDistanceToTop", elDistanceToTop);
      };

      if (sectionRef.value) {
        observer.observe(sectionRef.value);

        return () => {
          observer.disconnect();
        };
      }
    });

    return (
      <section
        class={clsx("pt-10 mb-20", customClass, {
          "h-[70vh]": fullHeight,
        })}
        ref={sectionRef}
      >
        <Component
          class={clsx(
            "mb-4 opacity-0 transition-all transform translate-y-2 duration-300",
            {
              "opacity-100 !translate-y-0": show.value,
            }
          )}
        >
          {title}
        </Component>
        <div
          class={clsx(
            "opacity-0 transition-all transform translate-y-6 duration-300 delay-100",
            {
              "opacity-100 !translate-y-0": show.value,
            }
          )}
        >
          <Slot />
        </div>
      </section>
    );
  }
);
