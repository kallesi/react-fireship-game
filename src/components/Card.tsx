
export type Card = {
  id: string,
  image: string,
  flipped: boolean,
};

// export function CardComponent({ id, image, flipped }: Card){

//   function renderImage(flipped:boolean) {
//     if (flipped === true) {
//       return <img src={image} alt={id} />
//     } else {
//       return <img src="/assets/fireship.png" alt="" />
//     }
//   }
//   return (
//     <div className='bg-orange-800/90 rounded-3xl m-2 p-2'>
//       {renderImage(flipped)}
//     </div>
//   )
// }


export function CardComponent({ id, image, flipped }: Card) {
  return (
    <div className={`card ${flipped ? 'flipped' : ''} aspect-square m-2`}>
      <div className="card-inner relative transition-transform duration-500 transform-style-preserve-3d">
        <div className="card-front absolute backface-hidden bg-orange-800/90 rounded-3xl flex items-center justify-center p-5">
          <img src="/assets/fireship.png" alt="" />
        </div>
        <div className="card-back absolute backface-hidden bg-orange-800/90 rounded-3xl transform rotate-y-180 flex items-center justify-center p-5">
          <img src={image} alt={id} />
        </div>
      </div>
    </div>
  );
}