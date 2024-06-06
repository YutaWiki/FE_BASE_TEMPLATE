import React from 'react';
import { DatePicker } from 'antd';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { TYPE_MANAGEMENT } from '../../interface/constants/type/Type.const';

const DatePickerTemplate: React.FC<any> = ({ name, mode, control, ...restProps }) => {

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <DatePicker
                    disabled={mode === TYPE_MANAGEMENT.MODE_DETAIL}
                    value={value ? dayjs(value) : null}
                    onChange={(date, dateString) => onChange(dateString)}
                    {...restProps}
                />
            )}
        />
    );
};

export default DatePickerTemplate;
