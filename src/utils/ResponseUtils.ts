import {ResponseValue} from "../types/GingReactType";
import _ from 'lodash';

const breakPoints: { xs: number, sm: number, md: number, lg: number, xl: number, xxl: number } = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
}
const styleResponse = (field: string, value: ResponseValue) => {
    if (typeof value === 'number') {
        return `${field}: ${value}px;`;
    }
    if (typeof value === 'string') {
        return `${field}: ${value};
        `;
    }
    let result: string = '';
    let minValue: string | null = null;
    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(key => {
        if (!_.get(value, key)) {
            return;
        }
        const _value = _.get(value, key);
        let cssValue = typeof _value === 'number' ? _value + 'px' : _value;
        if (!minValue) {
            minValue = `${field}: ${cssValue};`;
        }
        if (_.get(value, key)) {
            result += `
                @media screen and (min-width: ${_.get(breakPoints, key)}px) {
                  ${field}: ${cssValue};
                }
            `
        }
    });
    if (minValue) {
        return `${minValue}${result}`
    }
}

export default {
    styleResponse
}