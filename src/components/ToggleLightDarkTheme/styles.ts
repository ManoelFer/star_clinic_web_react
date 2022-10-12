
import styled, { css } from "styled-components";

import { FaMoon, FaSun } from "react-icons/fa";

interface ICheckedToggle {
    checked: boolean;
}

export const Container = styled.div`

`
export const MoonIcon = styled(FaMoon)`
    color: #f1c40f;
`
export const SunIcon = styled(FaSun)`
    color: #f39c12;
`

export const Input = styled.input`
    opacity: 0;
    position: absolute;
`

export const Ball = styled.div<ICheckedToggle>`
    background-color: #fff;
    height: 22px;
    width: 22px;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;

    transition: transform 0.2s linear;

    ${({ checked }) => checked && css`
        transform: translateX(24px);
    `}

`


export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    background-color: #111;
    position: relative;
    width: 50px;
    height: 26px;
    border-radius: 50px;
`
