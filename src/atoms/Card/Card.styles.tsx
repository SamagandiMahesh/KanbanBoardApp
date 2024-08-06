import styled from 'styled-components';
import { COLORS, pxToRem } from '../../utils';

export const StyledCard = styled.section`
    padding: ${pxToRem(16)};
    background: ${COLORS.WHITE};
    box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px;
    border-radius: ${pxToRem(6)};
`;