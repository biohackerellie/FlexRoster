//@ts-nocheck - ignore typescript errors

import type { MDXComponents } from "mdx/types";
import { Link } from "next-view-transitions";

import { Callout } from "@/app/help/_components/callout";
import { Icons } from "@/components/icons";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="font-cal mt-10 scroll-m-20 text-4xl" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="font-cal mt-10 scroll-m-20 border-b pb-2 text-3xl first:mt-0"
        id={slugify(children)}
        {...props}
      >
        <a className="group" href={`#${slugify(children)}`}>
          <span>{children}</span>
          <Icons.link className="invisible ml-1 inline-flex h-4 w-4 group-hover:visible" />
        </a>
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="font-cal mt-8 scroll-m-20 text-2xl"
        id={slugify(children)}
        {...props}
      >
        <a className="group" href={`#${slugify(children)}`}>
          <span>{children}</span>
        </a>
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="font-cal -mb-4 mt-6 scroll-m-20 text-2xl"
        id={slugify(children)}
        {...props}
      >
        <a className="group" href={`#${slugify(children)}`}>
          <span>{children}</span>
          <Icons.link className="invisible ml-1 inline-flex h-4 w-4 group-hover:visible" />
        </a>
      </h4>
    ),
    p: (props) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
    ),
    a: ({ children, href }) => {
      const isExternal = href?.startsWith("http");
      const Component = isExternal ? "a" : Link;
      return (
        <Component
          href={href!}
          className="underline decoration-primary decoration-2 underline-offset-4"
        >
          {children}
        </Component>
      );
    },
    ul: (props) => <ul className="mt-4 list-disc pl-8" {...props} />,
    code: (props) => (
      <code
        className="relative rounded bg-muted py-[0.3rem] font-mono text-sm font-semibold text-muted-foreground"
        {...props}
      />
    ),
    img: (props) => <img {...props} className="rounded-lg" />,
    Callout,
    Steps: ({ ...props }) => (
      <div
        className="[&>h3]:step mb-12 ml-4 border-l pl-6 [counter-reset:step]"
        {...props}
      />
    ),
    ...components,
  };
}

function slugify(input: unknown) {
  if (typeof input !== "string") {
    return "";
  }
  return input.replaceAll(" ", "-").toLowerCase().trim();
}
