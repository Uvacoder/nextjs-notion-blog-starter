import classNames from 'classnames';
import React from 'react';

export function Input({
  register,
  name,
  prefix,
  validation,
  label,
  rightHelper,
  helper,
  suffix,
  setValue,
  error,
  ...rest
}: any) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">{label}</label>

        <div>{rightHelper}</div>
      </div>
      <div className="flex my-1 rounded">
        {prefix && (
          <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
            {prefix}
          </span>
        )}
        <input
          {...rest}
          {...(name && { ...register(name, validation) })}
          type="text"
          className={classNames(
            'flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm',
            { 'rounded-l-none': prefix },
            { 'rounded-r-none': suffix }
          )}
        />
        {suffix && (
          <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
            {suffix}
          </span>
        )}
      </div>
      {helper && !error && <div className="text-xs text-gray-500">{helper}</div>}

      {error && <div className="text-sm text-red-500">{error.message}</div>}
    </div>
  );
}

export function TextArea({
  register,
  name,
  prefix,
  validation,
  label,
  rightHelper,
  helper,
  suffix,
  setValue,
  error,
  ...rest
}: any) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium">{label}</label>
        <div>{rightHelper}</div>
      </div>
      <div className="flex my-1 rounded">
        {prefix && (
          <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
            {prefix}
          </span>
        )}
        <textarea
          {...rest}
          {...(name && { ...register(name, validation) })}
          type="text"
          rows={4}
          className={classNames(
            'flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm',
            { 'rounded-l-none': prefix },
            { 'rounded-r-none': suffix }
          )}
        />
        {suffix && (
          <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
            {suffix}
          </span>
        )}
      </div>
      {helper && !error && <div className="text-xs text-gray-500 ">{helper}</div>}

      {error && <div className="text-red-500 ">{error.message}</div>}
    </div>
  );
}
