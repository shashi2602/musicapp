  const TimeCalc = (secs) => {
    const minutes=Math.floor(secs/60)
    const returnedMints=minutes<10?`0${minutes}`:minutes
    const seconds=Math.floor(secs%60)
    const returnedseconds=seconds<10?`0${seconds}`:seconds
    return `${returnedMints}:${returnedseconds}`
  }
   
  export default TimeCalc;