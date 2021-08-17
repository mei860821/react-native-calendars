import PropTypes from 'prop-types';
import { Component } from 'react';
import { MarkingTypes } from '../marking';
import { Theme } from '../../../commons/types';
export interface BasicDayProps {
    state?: 'selected' | 'disabled' | 'today';
    /** The marking object */
    marking: any;
    /** Date marking style [simple/period/multi-dot/multi-period]. Default = 'simple' */
    markingType: MarkingTypes;
    /** Theme object */
    theme: Theme;
    /** onPress callback */
    onPress: (date: Object) => void;
    /** onLongPress callback */
    onLongPress: (date: Object) => void;
    /** The date to return from press callbacks */
    date: Object;
    /** Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates*/
    disableAllTouchEventsForDisabledDays: boolean;
    /** Test ID*/
    testID: string;
    /** Accessibility label */
    accessibilityLabel: string;
}
export default class BasicDay extends Component<BasicDayProps> {
    static displayName: string;
    static propTypes: {
        state: PropTypes.Requireable<string>;
        /** The marking object */
        marking: PropTypes.Requireable<any>;
        /** Date marking style [simple/period/multi-dot/multi-period]. Default = 'simple' */
        markingType: PropTypes.Requireable<MarkingTypes>;
        /** Theme object */
        theme: PropTypes.Requireable<object>;
        /** onPress callback */
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        /** onLongPress callback */
        onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        /** The date to return from press callbacks */
        date: PropTypes.Requireable<object>;
        /** Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates*/
        disableAllTouchEventsForDisabledDays: PropTypes.Requireable<boolean>;
    };
    style: {
        container: {
            alignSelf: "stretch";
            alignItems: "center";
        };
        base: {
            width: number;
            height: number;
            alignItems: "center";
        }; /** The marking object */
        text: any;
        alignedText: {
            marginTop: number; /** Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates*/
        };
        selected: {
            backgroundColor: any;
            borderRadius: number;
        };
        today: {
            backgroundColor: any;
            borderRadius: number;
        };
        todayText: {
            color: any;
        };
        selectedText: {
            color: any;
        };
        disabledText: {
            color: any;
        };
        dot: any;
        visibleDot: {
            opacity: number;
            backgroundColor: any;
        };
        selectedDot: {
            backgroundColor: any;
        };
        disabledDot: {
            backgroundColor: any;
        };
        todayDot: {
            backgroundColor: any;
        };
    };
    shouldComponentUpdate(nextProps: BasicDayProps): any;
    onPress: () => void;
    onLongPress: () => void;
    get marking(): any;
    shouldDisableTouchEvent(): boolean;
    isSelected(): any;
    isDisabled(): any;
    isToday(): boolean;
    isMultiDot(): boolean;
    isMultiPeriod(): boolean;
    isCustom(): boolean;
    getContainerStyle(): object[];
    getTextStyle(): any[];
    renderMarking(): JSX.Element;
    renderText(): JSX.Element;
    renderContent(): JSX.Element;
    renderContainer(): JSX.Element;
    renderPeriodsContainer(): JSX.Element;
    render(): JSX.Element;
}
