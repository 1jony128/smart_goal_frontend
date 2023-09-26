import { DetailedHTMLProps, HTMLAttributes, ReactNode, RefObject } from "react";
import cls from "./Flex.module.scss";
import classNames from "classnames";

export type FlexJustify = "start" | "center" | "end" | "between" | "around";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "18" | "32";
export type FlexWrap = "wrap" | "nowrap";

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  18: cls.gap18,
  32: cls.gap32,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  max?: boolean;
  ref?: RefObject<HTMLDivElement>;
  mTop?: string;
  mBottom?: string;
  mLeft?: string;
  mRight?: string;
  pTop?: string;
  pBottom?: string;
  pLeft?: string;
  pRight?: string;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = "start",
    align = "center",
    direction = "row",
    gap,
    max,
    wrap = "nowrap",
    ref,
    mTop,
    mBottom,
    mLeft,
    mRight,
    pRight,
    pLeft,
    pTop,
    pBottom,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods = {
    [cls.max]: max,
    [cls[wrap]]: wrap,
  };

  return (
    <div
      style={{
        marginBottom: mBottom,
        marginTop: mTop,
        marginLeft: mLeft,
        marginRight: mRight,
        paddingBottom: pBottom,
        paddingTop: pTop,
        paddingLeft: pLeft,
        paddingRight: pRight,
      }}
      className={classNames(cls.Flex, mods, classes)}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  );
};
