import loaderImagePng from "@images/loader.png";
import loaderImageWebp from "@images/loader.webp";

import classNames from "classnames";
import "./loader.css";

export type LoaderSize = "big" | "small";

interface TLoaderProps {
  size?: LoaderSize;
  label?: string;
}

export const Loader = ({ size = "small", label }: TLoaderProps) => {
  return (
    <div className={classNames("loader", { [`loader--${size}`]: !!size })}>
      <picture className="loader__picture">
        <source srcSet={loaderImageWebp} type="image/webp" />
        <img
          className="loader__image"
          src={loaderImagePng}
          alt="Loader"
          width="475"
          height="465"
        />
      </picture>
      {label && <p className="loader__label">{label}</p>}
    </div>
  );
};
