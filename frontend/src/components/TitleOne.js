import {useState, useEffect} from 'react'

function TitleOne() {
    const [rolloverIndex, setRolloverIndex] = useState(0);
    const rolloverType = 0;
  
    const rolloverValues = ['Handcrafted', 'Local', 'Personal']
    const rolloverTimeoutMS = 3000;
  
    useEffect(() => {
      console.debug(`Rollover Index = ${rolloverIndex}`)
      const timeout = setTimeout(() => {
        if(rolloverIndex < rolloverValues.length - 1) {
          setRolloverIndex((rolloverIndex) => rolloverIndex + 1)
        }
        else {
          console.debug('Setting rollover index to 0')
          setRolloverIndex(0)
        }
  
      }, rolloverTimeoutMS);
    }, [rolloverIndex]);

    return(
        <div className="rolloverTitleContainer">
            <h1 className="rollover">{rolloverValues[rolloverIndex]}</h1>
            <h1 className="title">Web Design</h1>
        </div>
    )
}


export default TitleOne;