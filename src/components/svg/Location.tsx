import { component$ } from "@builder.io/qwik";

export const Location = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clip-path="url(#a)">
        <path
          fill="currentColor"
          d="m12 20.9 4.95-4.95a7 7 0 1 0-9.9 0L12 20.9Zm0 2.828-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728ZM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});
