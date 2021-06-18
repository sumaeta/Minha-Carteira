import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    
    /**
    *Layout
    *Main
    *Aside
    *CT
     */

    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;


    grid-template-areas: 'AS MH'
                         'AS CT';


    height: 100vh;
`;