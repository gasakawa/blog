import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    padding: 30px;
    text-align: center;
    width: 100%;
    background: var(--mediumBackground);

    h1 {
        font-size: 3em;
        color: var(--texts);
    }
    
`;


export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 500px;
        height: 500px;
    }

    div {
        p {
            color: var(--texts);
            font-size: 1.5em;

            a {
                color: var(--texts);
                font-weight: 700;
                text-decoration: none;
                transition: color 0.5s;
                &:hover {
                    color: var(--highlight);
                }
            }
        }
    }
`;
