import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="hero">
      <PrismicRichText field={slice.primary.heroTitle} />
      <PrismicRichText field={slice.primary.heroSubtitle} />
    </section>
  );
};

export default Hero;
