import { Component } from 'react';
import { DotProps } from '../dot';
import { Theme } from '../../../commons/types';
export declare enum MarkingTypes {
    DOT = "dot",
    MULTI_DOT = "multi-dot",
    PERIOD = "period",
    MULTI_PERIOD = "multi-period",
    CUSTOM = "custom"
}
declare type DOT = {
    key?: string;
    color?: string;
    selectedDotColor?: string;
};
declare type PERIOD = {
    startingDay?: boolean;
    endingDay?: boolean;
    color?: string;
};
export interface MarkingProps extends DotProps {
    type?: MarkingTypes;
    theme?: Theme;
    selected?: boolean;
    marked?: boolean;
    today?: boolean;
    disabled?: boolean;
    disableTouchEvent?: boolean;
    activeOpacity?: number;
    selectedColor?: string;
    selectedTextColor?: string;
    dotColor?: string;
    dots?: DOT;
    periods?: PERIOD;
    startingDay?: boolean;
    endingDay?: boolean;
    accessibilityLabel?: string;
}
export default class Marking extends Component<MarkingProps> {
    static displayName: string;
    static markingTypes: typeof MarkingTypes;
    style: any;
    constructor(props: MarkingProps);
    shouldComponentUpdate(nextProps: MarkingProps): any;
    getItems(items: DOT | PERIOD): JSX.Element[] | undefined;
    renderMarkingByType(): JSX.Element;
    renderMultiMarkings(containerStyle: Object, items: any): JSX.Element;
    renderPeriod(index: number, item: any): JSX.Element;
    renderDot(index?: number, item?: any): JSX.Element;
    render(): JSX.Element;
}
export {};
