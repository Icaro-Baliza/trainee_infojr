import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__title">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="hero__subtitle">
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
