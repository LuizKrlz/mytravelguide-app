import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export function WatchIcon(props: SvgProps) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 15C3.36 15 0 11.6475 0 7.5C0 3.36 3.36 0 7.5 0C11.6475 0 15 3.36 15 7.5C15 11.6475 11.6475 15 7.5 15ZM9.8925 10.2825C9.9825 10.335 10.08 10.365 10.185 10.365C10.3725 10.365 10.56 10.2675 10.665 10.0875C10.8225 9.825 10.74 9.48 10.47 9.315L7.8 7.725V4.26C7.8 3.945 7.545 3.6975 7.2375 3.6975C6.93 3.6975 6.675 3.945 6.675 4.26V8.0475C6.675 8.2425 6.78 8.4225 6.9525 8.5275L9.8925 10.2825Z"
        fill="currentColor"
      />
    </Svg>
  );
}
