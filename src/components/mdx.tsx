'use client';

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";

import { 
  Heading,
  HeadingLink,
  Text,
  InlineCode,
  CodeBlock,
  TextProps,
  MediaProps,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
} from "@once-ui-system/core";

// Dynamic Newsletter Content Component - Client Component
import { useLanguage } from '@/utils/useLanguage';

function DynamicNewsletterContent() {
  const { content } = useLanguage();
  
  return (
    <CodeBlock
      marginBottom="16"
      codes={[
        {
          code: `// English content
const newsletter = {
    display: true,
    title: <>Subscribe to ${content.person.firstName}'s Newsletter</>,
    description: (
      <>
        I occasionally share thoughts on backend development, AI applications, and software engineering.
      </>
    ),
};

// Spanish content  
const newsletter = {
    display: true,
    title: <>Suscríbete al boletín de ${content.person.firstName}</>,
    description: (
      <>
        Ocasionalmente comparto ideas sobre desarrollo backend, IA aplicada y tecnología.
      </>
    ),
};`,
          language: "tsx",
          label: "src/app/resources/content.js"
        }
      ]}
    />
  );
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function createImage({ alt, src, ...props }: MediaProps & { src: string }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <Media
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      aspectRatio="16 / 9"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level: number) {
  return function HeadingComponent({ children, ...props }: any) {
    const variantMap = {
      1: "display-strong-s",
      2: "heading-strong-xl",
      3: "heading-strong-l",
      4: "heading-strong-m",
      5: "heading-strong-s",
      6: "heading-strong-xs",
    } as const;

    const variant = variantMap[level as keyof typeof variantMap];
    const asTag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <Heading
        variant={variant}
        as={asTag}
        marginTop="24"
        marginBottom="12"
        {...props}
      >
        {children}
      </Heading>
    );
  };
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }: any) {
  return (
    <InlineCode
      marginTop="8"
      marginBottom="12"
      onBackground="neutral-weak"
    >
      {children}
    </InlineCode>
  );
}

function createCodeBlock(props: any) {
  // For pre tags that contain code blocks
  if (props.children && props.children.props && props.children.props.className) {
    const { className, children } = props.children.props;
    
    // Extract language from className (format: language-xxx)
    const language = className.replace('language-', '');
    const label = language.charAt(0).toUpperCase() + language.slice(1);
    
    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codes={[
          {
            code: children,
            language,
            label
          }
        ]}
        copyButton={true}
      />
    );
  }
  
  // Fallback for other pre tags or empty code blocks
  return <pre {...props} />;
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
  DynamicNewsletterContent,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  );
}