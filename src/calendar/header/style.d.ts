import { Theme } from '../../commons/types';
export default function (theme?: Theme): {
    header: {
        flexDirection: "row";
        justifyContent: "space-between";
        paddingLeft: number;
        paddingRight: number;
        marginTop: number;
        alignItems: "center";
    };
    headerContainer: {
        flexDirection: "row";
    };
    monthText: {
        fontSize: any;
        fontFamily: any;
        fontWeight: any;
        color: any;
        margin: number;
    };
    arrow: any;
    arrowImage: {
        width?: any;
        height?: any;
        tintColor: any;
    };
    disabledArrowImage: {
        tintColor: any;
    };
    week: {
        marginTop: number;
        flexDirection: "row";
        justifyContent: "space-around";
    };
    dayHeader: {
        marginTop: number;
        marginBottom: number;
        width: number;
        textAlign: "center";
        fontSize: any;
        fontFamily: any;
        fontWeight: any;
        color: any;
    };
    disabledDayHeader: {
        color: any;
    };
};
