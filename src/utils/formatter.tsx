import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';

/**
 * 값을 i18n 언어로 변경함
 * @param id
 */
export const Intl: React.FC<{ id: string }> = ({ id }) => {
  const { formatMessage } = useIntl();
  const message = formatMessage({ id: id.toLocaleLowerCase() });
  return <Fragment>{message}</Fragment>;
};
