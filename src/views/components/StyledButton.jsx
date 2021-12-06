import styles from "styled-components";

export const Button = styles.button`
    background: none;
    border: 1px solid #fff;
    border-radius: 10px;
    padding:1rem;
    font-size:16px;
    font-weight:500;
    color:#fff;
    

    &:hover{
        background:#fff;
        border:1px solid #fff;
        transition: 0.3s all ease;
        color: #1E3A8A;
    }
`;
