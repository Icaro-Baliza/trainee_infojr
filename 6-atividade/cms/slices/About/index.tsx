import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section className = "about">
      <PrismicRichText field={slice.primary.aboutTitle} />
      <PrismicRichText field={slice.primary.aboutText} />
      <PrismicNextImage field={slice.primary.aboutImage} />
    </section>
  );
};

export default About;
