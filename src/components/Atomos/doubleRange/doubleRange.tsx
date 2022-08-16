import React, { useCallback, useEffect, useRef, useState } from "react";
import "./multiRangeSlider.css";

interface DoubleRangeProps{
  min?: number;
  max?: number;
  onChange?: any;
}
const MultiRangeSlider = ({ min, max, onChange }:any) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(minVal);
  
  // Convert to percentage
  const getPercent = useCallback(
    (value:any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
    );
    
    // Set width of the range to decrease from the left side
    useEffect(() => {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current);
      if (range.current) {
        range.current.setAttribute("style", `left: ${minPercent}%; width:${maxPercent - minPercent}%;`)
      }
    }, [minVal, maxVal, getPercent]);
    
    // Get min and max values when their state changes
    useEffect(() => {
      onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);
    
    return (
      <div className="container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
            console.log(event.target.value)
          }}
          className="thumb thumb--left"
          style={{ zIndex: `minVal > ${max} - 100 && "5"`}}
          />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
        />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

export const DoubleRange = (props:DoubleRangeProps)=>{
  const {min, max, onChange} = props;
  return (
    <MultiRangeSlider
    min={min}
    max={max}
    onChange={({ min, max }:any) => {
      if (onChange){
        props.onChange({min, max})
      }
      console.log('min= ',min, 'max= ',max)
    }
  }
  />
  )
}
export default DoubleRange;