import styled from 'styled-components';
import { COLORS, pxToRem } from '../../utils';


export const BoardWrapper = styled.article`
    background-color: ${COLORS.GRAY}
`;

export const BoardHeader = styled.header`
    background: ${COLORS.WHITE};
    display: flex;
    width: 100%;
    height: 50px;
`;

export const StyledDisplayList = styled.div`
    display: flex;
    align-items: center;
    padding: ${pxToRem(4)} 0;
    justify-content: space-between;

    span {
     width: ${pxToRem(100)};
    }
`;