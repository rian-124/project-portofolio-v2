export default function LoadingOverlay() {
  return (
    <>
      <div
        id="loadingContainer-1"
        className="fixed inset-0 z-[6] bg-amber-300 flex justify-center items-center border-2 -top-40 border-black"
      ></div>
      <div
        id="loadingContainer-2"
        className="fixed inset-0 z-[7] bg-red-500 flex justify-center items-center border-2 top-24 border-black"
      ></div>
      <div
        id="loadingContainer-3"
        className="fixed inset-0 z-[7] bg-green-500 flex justify-center items-center border-2 top-52 border-black"
      ></div>
      <div
        id="loadingContainer-4"
        className="fixed inset-0 z-[7] bg-blue-500 flex justify-center items-center border-2  top-80 border-black"
      ></div>
      <div
        id="loadingContainer-5"
        className="fixed inset-0 z-[7] bg-purple-500 flex justify-center items-center border-2  top-[27rem] border-black"
      ></div>
    </>
  );
}
