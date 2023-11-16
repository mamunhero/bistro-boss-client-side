import { Parallax } from 'react-parallax';
const BgCover = ({bgImg, bgTitle, bgText}) => {
  return (
    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={bgImg}
    bgImageAlt="Our Menu"
    strength={-200}
>
<div className="hero h-[700px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{bgTitle}</h1>
      <p className="mb-5">{bgText}</p>
    </div>
  </div>
</div>
    </Parallax>
  );
};

export default BgCover;