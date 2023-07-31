import { component$ } from "@builder.io/qwik";
import { Container } from "~/layout/Container";
import { Instagram } from "../svg/Instagram";

export const Footer = component$(() => {
  return (
    <footer class="px-6 py-24">
      <Container>
        <h3 class="mb-4">Trobans a les xarxes socials</h3>
        <a
          href="https://instagram.com/festamajorpuigmarti"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <div class="p-1 bg-gradient-to-br from-red-700 to-purple-600 w-fit rounded-2xl">
            <div class="flex items-center w-full gap-x-4 px-6 py-4 bg-puxi-background rounded-xl transition-all hover:bg-opacity-95">
              <Instagram /> <p class="text-xl">Instagram</p>
            </div>
          </div>
        </a>
      </Container>
    </footer>
  );
});
