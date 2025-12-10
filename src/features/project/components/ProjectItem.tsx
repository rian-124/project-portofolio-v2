// export default function ProjectItem() {
//   return (
//     <div
//       key={project.id}
//       className="relative border-2 border-black rounded-xl group overflow-hidden"
//     >
//       {/* IMAGE */}
//       <div className="w-full h-[350px] sm:h-[180px] md:h-[200px] lg:h-[230px] relative">
//         <Image
//           src={`/image/education/education-1.jpg`}
//           alt={project.title}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* CAPTION */}
//       <div className="bg-yellow-500 rounded-b-xl p-3 absolute z-10 w-full bottom-0">
//         <div className="flex gap-2 items-center">
//           <h1 className="text-black text-lg md:text-xl">{project.title}</h1>
//           <span className="px-3 md:px-5 py-[1px] bg-black text-white rounded-full text-xs md:text-sm">
//             {project.tag}
//           </span>
//         </div>

//         {/* DESCRIPTION */}
//         <p className="md:opacity-0 md:max-h-0 group-hover:max-h-28 group-hover:opacity-100 text-xs md:text-sm transition-all duration-500">
//           {project.description}
//         </p>
//       </div>
//     </div>
//   );
// }
