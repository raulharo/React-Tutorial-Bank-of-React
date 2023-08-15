import React, { Fragment } from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, setData}) => {

  const bank_limit = 10000;
  return (
    // The fragment tag below is whats called a fake dom it is another way of adding a parent for all
    // elements in this component much like how a <div> can contain all the elements that we use in the component
    <Fragment> 
      <SliderComponent
      label="Home Value" 
      min={1000} 
      max={bank_limit} 
      defaultValue={data.homeValue}
      value={data.homeValue} 
      step={100} 
      onChange={(event, value) => setData({
        ...data,
        downPayment: value * 0.2,
        loanAmount: value * 0.8,
        homeValue: value
      })}
      unit="$"
      amount={data.homeValue} />
      <SliderComponent
      label="Down Payment" 
      min={0} 
      max={data.homeValue}
      defaultValue={data.downPayment}
      value={data.downPayment} 
      step={100} 
      onChange={(event, value) => setData({
        ...data,
        loanAmount: (data.homeValue - value),
        downPayment: value
      })}
      unit="$"
      amount={data.downPayment} />
      <SliderComponent
      label="Loan Amount" 
      min={0} 
      max={data.homeValue} 
      defaultValue={data.loanAmount}
      value={data.loanAmount} 
      step={100} 
      onChange={(event, value) => setData({
        ...data,
        downPayment: (data.homeValue - value),
        loanAmount: value
      })}
      unit="$"
      amount={data.loanAmount} />
      <SliderComponent
      label="Interest Rate" 
      min={2} 
      max={18} 
      defaultValue={data.interestRate}
      value={data.interestRate} 
      step={0.5} 
      onChange={(event, value) => setData({
        ...data,
        interestRate: value
      })}
      unit="%"
      amount={data.interestRate} />
    </Fragment>
  )
}

export default SliderSelect