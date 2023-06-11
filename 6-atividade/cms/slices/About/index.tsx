import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
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
    <div className="about">
      <div className="about__title">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="about__content">
        <div className="about__text">
          <PrismicRichText field={slice.primary.text} />
        </div>
        <PrismicNextImage field={slice.primary.image} />
      </div>
    </div>
  );
};

export default About;
