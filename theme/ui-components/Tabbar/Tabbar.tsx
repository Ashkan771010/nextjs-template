import React, { useState, useEffect, useRef, MouseEvent, Fragment } from "react";
import { useTheme } from "styled-components";

import { IProps, TTabItem } from "./interface";

import { Row, Typography } from "../../../theme/ui-components";

import { OuterWrapper, InnerWrapper, Indecator, Column } from "./style";

const Tabbar: React.FC<IProps> = props => {
  const { options, defaultActive = 0, className = "", onChange, value } = props;
  const [tabDetails, setTabDetails] = useState({
    activeTab: defaultActive,
    indicatorPosition: 0,
    indicatorWidth: `${(100 / options?.length).toFixed(1)}%`,
  });
  const tabWrapperRef = useRef<HTMLDivElement>(null);
  const tabItemsRef = useRef<any>([]);
  const theme = useTheme();

  /**
   * @param {MouseEvent<HTMLDivElement, MouseEvent>} event
   * @param {number} index
   * @param {object} item
   */
  const handleTabChange = (
    event: MouseEvent<HTMLDivElement, MouseEvent>,
    item: TTabItem,
    index: number
  ) => {
    if (tabWrapperRef?.current !== null) {
      const indicatorPosition =
        tabWrapperRef?.current.getBoundingClientRect().right -
        event?.currentTarget?.getBoundingClientRect().right;
      if (onChange instanceof Function) {
        onChange(item?.value);
      }
      setTabDetails({
        ...tabDetails,
        activeTab: index,
        indicatorPosition: indicatorPosition,
      });
    }
  };

  /**
   *
   * @param {number} index
   * @returns {a color of design system}
   */
  const detectColor = (index: number) => {
    if (tabDetails.activeTab !== index) {
      return "darkBlueBerry";
    }
    return "white";
  };

  useEffect(() => {
    if (
      defaultActive < tabItemsRef.current.length &&
      tabWrapperRef.current !== null
    ) {
      const indicatorPosition =
        tabWrapperRef?.current?.getBoundingClientRect().right -
        tabItemsRef.current[defaultActive]?.getBoundingClientRect().right;
      setTabDetails({
        activeTab: defaultActive,
        indicatorPosition: indicatorPosition,
        indicatorWidth: `${(100 / options.length).toFixed(1)}%`,
      });
    }
  }, [defaultActive, options.length]);

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Row ref={tabWrapperRef}>
          <Indecator
            style={{
              right: `${tabDetails.indicatorPosition}px`,
              width: tabDetails.indicatorWidth,
            }}
          />
          {options?.map((item: TTabItem, index: number) => {
            return (
              <Fragment key={item.key}>
                <Column
                  onClick={(
                    event: MouseEvent<HTMLDivElement, MouseEvent>
                  ) => handleTabChange(event, item, index)}
                  ref={(element: never) => tabItemsRef.current.push(element)}
                >
                  <Typography variant="BodyRegular" color={detectColor(index)}>
                    {item.text}
                  </Typography>
                </Column>
              </Fragment>
            );
          })}
        </Row>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default Tabbar;
