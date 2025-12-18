import LoadingOverlay from "~/components/shared/LoadingOverlay";
import MainContentAnimation from "~/components/providers/MainContentAnimation";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingOverlay />

      <MainContentAnimation>{children}</MainContentAnimation>
    </>
  );
}
