import Image from "next/image";
import { ThreeDCardDemo } from "../components/Card3DEffect/Card";
import { AnimatedPinDemo } from "@/components/Animated3dPin/Animated3DPin";
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltip/AnimatedTooltipPreview";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes/BackgroundBoxesDemo";
import { BackgroundGradientDemo } from "@/components/BackgroundGradient/BackgroundGradientDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffect/CardHoverEffectDemo";
import { CardStackDemo } from "@/components/CardStack/CardStackDemo";
import { HeroScrollDemo } from "@/components/HeroScroll/HeroScrollDemo";
import { DirectionAwareHoverDemo } from "@/components/DirectionAwareHover/DirectionAwareHoverDemo";
import { EvervaultCardDemo } from "@/components/EvervaultCard/EvervaultCardDemo";
import { FollowingPointerDemo } from "@/components/FollowingPointer/FollowingPointerDemo";
import { FollowerPointerCard } from "@/components/FollowingPointer/following-pointer";
import { GlobeDemo } from "@/components/Globe/GlobeDemo";
import { BackgroundGradientAnimationDemo } from "@/components/BackgroundGradientAnimation/BackgroundGradientAnimationDemo";
import { HeroHighlightDemo } from "@/components/HeroHighlight/HeroHighlightDemo";
import { HoverBorderGradientDemo } from "@/components/HoverBorderGradient/HoverBorderGradientDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards/InfiniteMovingCardsDemo";
import { LampDemo } from "@/components/LampDemo/lamp";
import { MacbookScrollDemo } from "@/components/MacbookScroll/MacbookScrollDemo";
import { MovingBorderDemo } from "@/components/MovingBorder/MovingBorderDemo";
import { MultiStepLoaderDemo } from "@/components/MultiStepLoader/MultiStepLoaderDemo";
import { ParallaxScrollDemo } from "@/components/ParallaxScroll/ParallaxScrollDemo";
import { SignupFormDemo } from "@/components/SignupForm/SignupFormDemo";
import { SparklesPreview } from "@/components/SparklesPreview/SparklesPreview";
import { StickyScrollRevealDemo } from "@/components/StickyScrollReveal/StickyScrollRevealDemo";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffect/SVGMaskEffectDemo";
import { TabsDemo } from "@/components/TabsDemo/TabsDemo";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview/TextRevealCardPreview";
import { TracingBeamDemo } from "@/components/TracingBeam/TracingBeamDemo";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmooth/TypewriterEffectSmoothDemo";
import { VortexDemo } from "@/components/VortexDemo/VortexDemo";

export default function Home() {
  return (
    <div>
      <ThreeDCardDemo />
      <AnimatedPinDemo />
      <AnimatedTooltipPreview />
      <BackgroundBoxesDemo />
      <div className="flex justify-center">
        <BackgroundGradientDemo />
      </div>
      <CardHoverEffectDemo />
      <CardStackDemo />
      <HeroScrollDemo />
      <DirectionAwareHoverDemo />
      <EvervaultCardDemo />
      <FollowingPointerDemo />
      <GlobeDemo />
      <BackgroundGradientAnimationDemo />
      <HeroHighlightDemo />
      <HoverBorderGradientDemo />
      <InfiniteMovingCardsDemo />
      <LampDemo />
      <MacbookScrollDemo />
      <MovingBorderDemo />
      <MultiStepLoaderDemo />
      <ParallaxScrollDemo />
      <SignupFormDemo />
      <SparklesPreview />
      <StickyScrollRevealDemo />
      <SVGMaskEffectDemo />
      <TabsDemo />
      <TextRevealCardPreview />
      <TracingBeamDemo />
      <TypewriterEffectSmoothDemo />
      <VortexDemo />
    </div>
  );
}
