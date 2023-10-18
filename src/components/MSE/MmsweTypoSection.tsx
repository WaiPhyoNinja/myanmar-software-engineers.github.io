"use client";
import MsoTypo from "../Animate/MseTypo/MseTypo";
import Container from "../Common/Container/Container";
import HorizontalWrapper from "../Common/HorizontalWrapper/HorizontalWrapper";

const MmsweTypoSection = () => {
  return (
    <Container withPadding>
      <HorizontalWrapper horizontalDirection={-140} activeOpacity>
        <div className="relative -right-[140px] ">
          <MsoTypo />
        </div>
      </HorizontalWrapper>
    </Container>
  );
};

export default MmsweTypoSection;