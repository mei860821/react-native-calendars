import PropTypes from 'prop-types';
import XDate from 'xdate';
import React, { Component, ReactNode } from 'react';
import { ViewStyle, AccessibilityActionEvent } from 'react-native';
import { Theme } from '../../commons/types';
declare type Direction = 'left' | 'right';
export interface CalendarHeaderProps {
    theme?: Theme;
    firstDay?: number;
    displayLoadingIndicator?: boolean;
    showWeekNumbers?: boolean;
    month?: XDate;
    addMonth?: (num: number) => void;
    /** Month format in the title. Formatting values: http://arshaw.com/xdate/#Formatting */
    monthFormat?: string;
    /**  Hide day names. Default = false */
    hideDayNames?: boolean;
    /** Hide month navigation arrows. Default = false */
    hideArrows?: boolean;
    /** Replace default arrows with custom ones (direction can be 'left' or 'right') */
    renderArrow?: (direction: Direction) => ReactNode;
    /** Handler which gets executed when press arrow icon left. It receive a callback can go back month */
    onPressArrowLeft?: (method: () => void, month?: XDate) => void;
    /** Handler which gets executed when press arrow icon right. It receive a callback can go next month */
    onPressArrowRight?: (method: () => void, month?: XDate) => void;
    /** Disable left arrow. Default = false */
    disableArrowLeft?: boolean;
    /** Disable right arrow. Default = false */
    disableArrowRight?: boolean;
    /** Apply custom disable color to selected day indexes */
    disabledDaysIndexes?: number[];
    /** Replace default month and year title with custom one. the function receive a date as parameter. */
    renderHeader?: (date?: XDate) => ReactNode;
    /** Provide aria-level for calendar heading for proper accessibility when used with web (react-native-web) */
    webAriaLevel?: number;
    testID?: string;
    style?: ViewStyle;
    accessibilityElementsHidden?: boolean;
    importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants';
}
declare class CalendarHeader extends Component<CalendarHeaderProps> {
    static displayName: string;
    static propTypes: {
        theme: PropTypes.Requireable<object>;
        firstDay: PropTypes.Requireable<number>;
        displayLoadingIndicator: PropTypes.Requireable<boolean>;
        showWeekNumbers: PropTypes.Requireable<boolean>;
        month: PropTypes.Requireable<XDate>;
        addMonth: PropTypes.Requireable<(...args: any[]) => any>;
        /** Month format in the title. Formatting values: http://arshaw.com/xdate/#Formatting */
        monthFormat: PropTypes.Requireable<string>;
        /**  Hide day names. Default = false */
        hideDayNames: PropTypes.Requireable<boolean>;
        /** Hide month navigation arrows. Default = false */
        hideArrows: PropTypes.Requireable<boolean>;
        /** Replace default arrows with custom ones (direction can be 'left' or 'right') */
        renderArrow: PropTypes.Requireable<(...args: any[]) => any>;
        /** Handler which gets executed when press arrow icon left. It receive a callback can go back month */
        onPressArrowLeft: PropTypes.Requireable<(...args: any[]) => any>;
        /** Handler which gets executed when press arrow icon right. It receive a callback can go next month */
        onPressArrowRight: PropTypes.Requireable<(...args: any[]) => any>;
        /** Disable left arrow. Default = false */
        disableArrowLeft: PropTypes.Requireable<boolean>;
        /** Disable right arrow. Default = false */
        disableArrowRight: PropTypes.Requireable<boolean>;
        /** Apply custom disable color to selected day indexes */
        disabledDaysIndexes: PropTypes.Requireable<(number | null | undefined)[]>;
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        renderHeader: PropTypes.Requireable<any>;
        /** Provide aria-level for calendar heading for proper accessibility when used with web (react-native-web) */
        webAriaLevel: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        monthFormat: string;
        webAriaLevel: number;
    };
    style: any;
    constructor(props: CalendarHeaderProps);
    shouldComponentUpdate(nextProps: CalendarHeaderProps): any;
    addMonth: () => void;
    subtractMonth: () => void;
    onPressLeft: () => void;
    onPressRight: () => void;
    renderWeekDays: (this: any, weekDaysNames: any) => any;
    renderHeader: () => React.ReactNode;
    renderArrow(direction: Direction): JSX.Element;
    renderIndicator(): JSX.Element | undefined;
    renderDayNames(): JSX.Element | undefined;
    render(): JSX.Element;
    onAccessibilityAction: (event: AccessibilityActionEvent) => void;
}
export default CalendarHeader;
