export default function Ping() {
  return (
    <div className="relative size-3 flex items-center justify-center">
      <div className="absolute bg-green-500 rounded-full size-2 animate-ping"></div>
      <div className="absolute bg-green-500 rounded-full size-2 animate-pulse"></div>
    </div>
  );
}
