import { Icon, IconProps } from "@aws-amplify/ui-react";
import React from "react";

export const Check = (props: IconProps & { children?: React.ReactNode }) => {
  const { children, ...rest } = props;
  return (
    <Icon
      ariaLabel="Remove"
      viewBox={{ width: 24, height: 24 }}
      paths={[
        {
          d: "m492.545 296.714c-17.077 99.92-95.914 178.753-195.831 195.831l-129.201-129.201c-30.917-25.515-50.622-64.128-50.622-107.344 0-76.829 62.28-139.109 139.109-139.109 43.216 0 81.829 19.706 107.344 50.622z",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          fill: "#179c5f",
          stroke: "#179c5f",
        },
        {
            d: "m190.886 264.26 39.618 36.382c5.779 5.32 14.724 5.037 20.159-.567l70.679-67.671c5.749-5.528 5.923-14.674.393-20.426-5.53-5.743-14.671-5.923-20.42-.395l-61.222 58.617-29.635-27.213c-5.871-5.402-15.018-5.023-20.423.854-5.404 5.871-5.023 15.012.851 20.419zm65.114-147.369c76.829 0 139.109 62.28 139.109 139.109s-62.28 139.109-139.109 139.109-139.109-62.28-139.109-139.109 62.28-139.109 139.109-139.109z",
            fill: "#fff",
          },
      ]}
      {...rest}
    >
      {children}
    </Icon>
  );
};