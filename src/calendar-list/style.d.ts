import { Theme } from '../commons/types';
export default function getStyle(theme?: Theme): {
    flatListContainer: {
        flex: number | undefined;
    };
    container: {
        backgroundColor: any;
    };
    placeholder: {
        backgroundColor: any;
        alignItems: "center";
        justifyContent: "center";
    };
    placeholderText: {
        fontSize: number;
        fontWeight: "200";
        color: any;
    };
    calendar: {
        paddingLeft: number;
        paddingRight: number;
    };
    staticHeader: {
        position: "absolute";
        left: number;
        right: number;
        top: number;
        backgroundColor: any;
        paddingLeft: number;
        paddingRight: number;
    };
};
