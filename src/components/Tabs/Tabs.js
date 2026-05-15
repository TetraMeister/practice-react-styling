import React, {useState, useEffect} from "react";
import { StyledTabs } from "./Tabs.styled";
import Tab from "./Tab";


const Tabs = (props) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const defaultChildEl = React.Children.toArray(props.children)
      .find((el) => el.props.eventKey === props.defaultActiveKey)
    
    setActive({
      id: props.id + defaultChildEl.props.eventKey,
      p: defaultChildEl.props.children
    })
  }, [])

  return (
    <>
      <StyledTabs>
        {React.Children.map(props.children, (child) => {
          const itemId = props.id + child.props.eventKey;
          console.log(itemId === active?.id)
          return (
            <Tab $isActive={itemId === active?.id} id={itemId} {...child.props} onActive={setActive} />
          )
        } )}
      </StyledTabs>
      <div>
        {active?.p}
      </div>
    </>
  )
}

export default Tabs