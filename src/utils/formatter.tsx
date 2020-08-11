import React, { Fragment } from "react";
import { useIntl } from "react-intl";

/**
 * 숫자를 통화 포맷으로 변경해준다.
 * @param value 변환할 원본 데이터
 */
export function formatCurrency(value?: number) {
  if (!value || isNaN(value)) return "0";
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface IntlProps {
  id: string;
}
/**
 * 값을 i18n 언어로 변경함
 * @param id
 */
export const Intl = ({ id }: IntlProps) => {
  const { formatMessage } = useIntl();
  const message = formatMessage({ id: id.toLocaleLowerCase() });
  return <React.Fragment>{message}</React.Fragment>;
};
