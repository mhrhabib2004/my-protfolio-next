/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
    data: {
        message: string;
        stack: string;
        success: boolean;
    };
    status: number;
};

export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
};


export type TResponse<T = unknown> = {
    data?: { result: T } | any;
    error?: TError;
    meta?: TMeta;
    success: boolean;
    message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
    name: string;
    value: string | number | boolean | React.Key;
};


export interface TExtraError {
    data?: {
        message?: string;
    };
}