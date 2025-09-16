import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const Spinner = keyframes`
0%, 100% {
  box-shadow: 0em -2.6em 0em 0em #6c63ff, 
    1.8em -1.8em 0 0em rgba(108,99,255,0.15), 
    2.5em 0em 0 0em rgba(108,99,255,0.15), 
    1.75em 1.75em 0 0em rgba(108,99,255,0.15), 
    0em 2.5em 0 0em rgba(108,99,255,0.15), 
    -1.8em 1.8em 0 0em rgba(108,99,255,0.15), 
    -2.6em 0em 0 0em rgba(108,99,255,0.20), 
    -1.8em -1.8em 0 0em #4834d4;
}
12.5% {
  box-shadow: 0em -2.6em 0em 0em #4834d4, 
    1.8em -1.8em 0 0em #6c63ff, 
    2.5em 0em 0 0em rgba(108,99,255,0.15), 
    1.75em 1.75em 0 0em rgba(108,99,255,0.15), 
    0em 2.5em 0 0em rgba(108,99,255,0.15), 
    -1.8em 1.8em 0 0em rgba(108,99,255,0.15), 
    -2.6em 0em 0 0em rgba(108,99,255,0.15), 
    -1.8em -1.8em 0 0em rgba(108,99,255,0.20);
}
25% {
  box-shadow: 0em -2.6em 0em 0em rgba(108,99,255,0.20), 
    1.8em -1.8em 0 0em #4834d4, 
    2.5em 0em 0 0em #6c63ff, 
    1.75em 1.75em 0 0em rgba(108,99,255,0.15), 
    0em 2.5em 0 0em rgba(108,99,255,0.15), 
    -1.8em 1.8em 0 0em rgba(108,99,255,0.15), 
    -2.6em 0em 0 0em rgba(108,99,255,0.15), 
    -1.8em -1.8em 0 0em rgba(108,99,255,0.15);
}
37.5% {
  box-shadow: 0em -2.6em 0em 0em rgba(108,99,255,0.15), 
    1.8em -1.8em 0 0em rgba(108,99,255,0.20), 
    2.5em 0em 0 0em #4834d4, 
    1.75em 1.75em 0 0em #6c63ff, 
    0em 2.5em 0 0em rgba(108,99,255,0.15), 
    -1.8em 1.8em 0 0em rgba(108,99,255,0.15), 
    -2.6em 0em 0 0em rgba(108,99,255,0.15), 
    -1.8em -1.8em 0 0em rgba(108,99,255,0.15);
}
50% {
  box-shadow: 0em -2.6em 0em 0em rgba(108,99,255,0.15), 
    1.8em -1.8em 0 0em rgba(108,99,255,0.15), 
    2.5em 0em 0 0em rgba(108,99,255,0.20), 
    1.75em 1.75em 0 0em #4834d4, 
    0em 2.5em 0 0em #6c63ff, 
    -1.8em 1.8em 0 0em rgba(108,99,255,0.15), 
    -2.6em 0em 0 0em rgba(108,99,255,0.15), 
    -1.8em -1.8em 0 0em rgba(108,99,255,0.15);
}
62.5% {
  box-shadow: 0em -2.6em 0em 0em rgba(108,99,255,0.15), 
    1.8em -1.8em 0 0em rgba(108,99,255,0.15), 
    2.5em 0em 0 0em rgba(108,99,255,0.15), 
    1.75em 1.75em 0 0em rgba(108,99,255,0.20), 
    0em 2.5em 0 0em #4834d4, 
    -1.8em 1.8em 0 0em #6c63ff, 
    -2.6em 0em 0 0em rgba(108,99,255,0.15), 
    -1.8em -1.8em 0 0em rgba(108,99,255,0.15);
}
75% {
  box-shadow: 0em -2.6em 0em 0em rgba(108,99,255,0.15), 
    1.8em -1.8em 0 0em rgba(108,99,255,0.15), 
    2.5em 0em 0 0em rgba(108,99,255,0.15), 
    1.75em 1.75em 0 0em rgba(108,99,255,0.15), 
    0em 2.5em 0 0em rgba(108,99,255,0.20), 
    -1.8em 1.8em 0 0em #6c63ff, 
    -2.6em 0em 0 0em #4834d4, 
    -1.8em -1.8em 0 0em rgba(108,99,255,0.15);
}
87.5% {
  box-shadow: 0em -2.6em 0em 0em rgba(108,99,255,0.15), 
    1.8em -1.8em 0 0em rgba(108,99,255,0.15), 
    2.5em 0em 0 0em rgba(108,99,255,0.15), 
    1.75em 1.75em 0 0em rgba(108,99,255,0.15), 
    0em 2.5em 0 0em rgba(108,99,255,0.15), 
    -1.8em 1.8em 0 0em rgba(108,99,255,0.20), 
    -2.6em 0em 0 0em #6c63ff, 
    -1.8em -1.8em 0 0em #4834d4;
}
`;

const ScaleSmooth = keyframes`
  0%, 100% { transform: scale(1);
  opacity: 1; }
  50% { transform: scale(1.12); 
  opacity: 0.8; }
`;

const Loading = styled.div`
  font-size: ${({ $fontsize }) => $fontsize}px;
  width: ${({ $size }) => $size}em;
  height: ${({ $size }) => $size}em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation:
    ${Spinner} ${({ $speedborder }) => $speedborder}s infinite ease-out,
    ${ScaleSmooth} 1.4s infinite ease-in;
  transform: translateZ(1.1);
  z-index: 100;
`;

Loading.propTypes = {
  $speedborder: PropTypes.string,
  $fontsize: PropTypes.string,
  $size: PropTypes.string,
};

Loading.defaultProps = {
  $speedborder: "0.7",
  $fontsize: "8",
  $size: "3",
};

export default Loading;

//FIXME:  <Loading size="1.1" fontsize="7" speedborder="1" />;
