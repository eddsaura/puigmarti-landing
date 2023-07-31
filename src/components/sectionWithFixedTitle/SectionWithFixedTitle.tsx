import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import clsx from "clsx";

interface Props {
  title: string;
  titleLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fullHeight?: boolean;
  customClass?: string;
  notFixed?: boolean;
}

export const SectionWithTitle = component$(
  ({ title, fullHeight, titleLevel = "h2", customClass, notFixed }: Props) => {
    const sectionRef = useSignal<Element>();
    const show = useSignal(false);
    const fixed = useSignal(false);

    const Component = titleLevel;

    useVisibleTask$(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              show.value = true;
              window.addEventListener("scroll", onScroll);
            } else {
              window.removeEventListener("scroll", onScroll);
            }
          });
        },
        { threshold: 0.15 }
      );

      const onScroll = () => {
        let elDistanceToTop = 0;
        if (sectionRef.value && !notFixed) {
          elDistanceToTop = sectionRef.value.getBoundingClientRect().top;
          if (elDistanceToTop <= 42) {
            fixed.value = true;
          } else {
            fixed.value = false;
          }
        }
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
          "pt-[133px]": fixed.value,
        })}
        ref={sectionRef}
      >
        <Component
          class={clsx(
            "mb-4 opacity-0 transition-transform transform translate-y-2 duration-500 ease-out bg-puxi-primary-100 py-5 pt-8 w-full z-10 ",
            {
              "opacity-100 !translate-y-0": show.value,
              "fixed -top-4 bg-opacity-70 backdrop-filter backdrop-blur-md ":
                fixed.value,
            }
          )}
        >
          {title}
        </Component>
        <div
          class={clsx(
            "opacity-0 transition-all transform translate-y-6 duration-700 delay-150",
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
