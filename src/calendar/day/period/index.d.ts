import PropTypes from 'prop-types';
import { Component } from 'react';
import { Theme } from '../../../commons/types';
interface PeriodDayProps {
    state?: 'selected' | 'disabled' | 'today' | '';
    marking?: any;
    theme?: Theme;
    onPress?: (date?: Object) => void;
    onLongPress?: (date?: Object) => void;
    date?: Object;
    accessibilityLabel?: string;
    testID?: string;
}
export default class PeriodDay extends Component<PeriodDayProps> {
    static displayName: string;
    static propTypes: {
        state: PropTypes.Requireable<string>;
        marking: PropTypes.Requireable<any>;
        theme: PropTypes.Requireable<object>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        date: PropTypes.Requireable<object>;
    };
    theme: Theme;
    style: any;
    markingStyle: any;
    constructor(props: PeriodDayProps);
    onPress: () => void;
    onLongPress: () => void;
    shouldComponentUpdate(nextProps: PeriodDayProps): any;
    getDrawingStyle(marking: any): any;
    render(): JSX.Element;
}
export {};
