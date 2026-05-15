import React, {useState, useEffect} from "react";
import { StyledTabs } from "./Tabs.styled";
import Tab from "./Tab";


const Tabs = (props) => {
  const [activeDescState, setActiveDescState] = useState(null)

  useEffect(() => {
    console.log(React.Children.toArray(props.children))
    const defaultChildEl = React.Children.toArray(props.children)
      .find((el) => el.props.eventKey === props.defaultActiveKey)
    
    setActiveDescState(defaultChildEl.props.children)
  }, [])

  return (
    <>
      <StyledTabs>
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {onActive: setActiveDescState})
        })}
      </StyledTabs>
      <div>
        {activeDescState}
      </div>
    </>
  )
}

export default Tabs