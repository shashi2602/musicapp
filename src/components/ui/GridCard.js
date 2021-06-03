function GridCard(props) {
  return (
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      <div className="w-full rounded-lg h-24 lg:h-48 bg-contain bg-no-repeat bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
       style={{backgroundImage:`url(${props.fs[0].image})`}}
      >
        </div>
      <div class="col-start-3 w-full rounded-lg h-24 lg:h-48 bg-contain bg-no-repeat bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
       style={{backgroundImage:`url(${props.fs[1].image})`}}
      >2</div>
      <div className="w-full rounded-lg h-24 lg:h-48 bg-contain bg-no-repeat bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
       style={{backgroundImage:`url(${props.fs[2].image})`}}
      >3</div>
      <div className="w-full rounded-lg h-24 lg:h-48 bg-contain bg-no-repeat bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
       style={{backgroundImage:`url(${props.fs[3].image})`}}
      >4</div>
      <div class="row-start-1 col-start-2 col-span-2 w-full rounded-lg h-24 lg:h-48  bg-no-repeat bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
       style={{backgroundImage:`url(${props.fs[4].image})`}}
      >5</div>
    </div>
  );
}

export default GridCard;
