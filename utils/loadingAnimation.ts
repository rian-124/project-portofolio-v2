import gsap from "gsap";

export const loadingAnimationPagein = () => {
  const loadingContainer1 = document.getElementById("loadingContainer-1");
  const loadingContainer2 = document.getElementById("loadingContainer-2");
  const loadingContainer3 = document.getElementById("loadingContainer-3");
  const loadingContainer4 = document.getElementById("loadingContainer-4");
  const loadingContainer5 = document.getElementById("loadingContainer-5");

  if (loadingContainer1  && loadingContainer2) {
    const tl = gsap.timeline();

    tl.set([loadingContainer1, loadingContainer2, loadingContainer3, loadingContainer4, loadingContainer5], {
      yPercent: 0,
    }).to([loadingContainer1, loadingContainer2, loadingContainer3, loadingContainer4, loadingContainer5], {
      yPercent: 100,
      stagger: {
        each: 0.1,
        from: 'end',
      }
    })

  }
};
export const loadingAnimationPageOut = (onComplete?: () => void) => {

  const container = [
    'loadingContainer-1',
    'loadingContainer-2',
    'loadingContainer-3',
    'loadingContainer-4',
    'loadingContainer-5',
  ].map((id) => document.getElementById(id))

  if (container.every(Boolean)) {
    const tl = gsap.timeline({
      onComplete,
    });

    tl.set(container, {
      yPercent: 100,
    }).to(container, {
      yPercent: 0,
      stagger: {
        each: 0.1,
        from: 'end',
      }
    })

  } else {
    if (onComplete) onComplete();
  }
};
